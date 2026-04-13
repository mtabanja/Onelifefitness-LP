// ── UTM / CLICK-ID CAPTURE ────────────────────────────────────
// Grab attribution params from URL once; persist across SPA-style nav
const _urlParams = new URLSearchParams(window.location.search);
const utmData = {
  utm_source:   _urlParams.get("utm_source")   || "",
  utm_medium:   _urlParams.get("utm_medium")   || "",
  utm_campaign: _urlParams.get("utm_campaign") || "",
  utm_content:  _urlParams.get("utm_content")  || "",
  utm_term:     _urlParams.get("utm_term")     || "",
  gclid:        _urlParams.get("gclid")        || "",
  fbclid:       _urlParams.get("fbclid")       || "",
  ttclid:       _urlParams.get("ttclid")       || "",
  msclkid:      _urlParams.get("msclkid")      || "",
};

// ── DOM REFS ─────────────────────────────────────────────────
const quizOverlay  = document.getElementById("quizOverlay");
const progressBar  = document.getElementById("quizProgressBar");
const steps        = Array.from(document.querySelectorAll(".quiz-step"));
const openButtons  = document.querySelectorAll("[data-open-quiz]");
const closeButtons = document.querySelectorAll("[data-close-quiz]");
const nextButtons  = document.querySelectorAll("[data-next-step]");
const answerButtons = document.querySelectorAll(".answer");
const leadForm     = document.getElementById("leadForm");
const resultTitle  = document.getElementById("resultTitle");
const resultText   = document.getElementById("resultText");
const bookingLink  = document.getElementById("bookingLink");

const bookingUrl = "https://cal.com/mouaz-tabanja-7ubxvb/gratis-1-op-1-gesprek-met-jouw-personal-trainer";

const TOTAL_STEPS        = steps.length;  // 8
const TYPING_STEP        = TOTAL_STEPS - 1; // 7
const RESULT_STEP        = TOTAL_STEPS;     // 8
const QUIZ_QUESTION_STEPS = 5;

let currentStep = 1;

const quizState = {
  goal:     "",
  level:    "",
  obstacle: "",
  timeline: "",
  name:     "",
  phone:    "",
};

// ── RESULT PROFILES ───────────────────────────────────────────
// Mapped on 'obstacle' — the highest-intent signal
const resultProfiles = {
  "Ik weet niet waar ik moet beginnen": {
    title: "je hebt richting nodig, geen extra motivatie.",
    body:  "Uit jouw antwoorden blijkt dat de eerste stap het moeilijkst is — niet het volhouden. Met iemand die naast je staat, wordt die eerste stap een stuk kleiner. Jouw trainer legt alles uit, stap voor stap, zonder oordeel.",
  },
  "Ik heb geen tijd": {
    title: "je hebt een plan nodig dat in jouw leven past.",
    body:  "Jij hebt geen marathonschema nodig. Eén sessie per week op een moment dat past bij jouw agenda is genoeg om zichtbaar resultaat te zien. We bouwen het plan om jou heen — niet andersom.",
  },
  "Ik ben eerder begonnen maar gestopt": {
    title: "je hebt geen wilskracht nodig — je hebt structuur nodig.",
    body:  "Dat je eerder bent gestopt zegt niks over jou. Het zegt iets over de aanpak. Met een vaste trainer die jou kent, die bijhoudt hoe je progressie maakt en die er is wanneer het moeilijk wordt, is de kans enorm veel groter dat je het nu wél volhoudt.",
  },
  "Ik voel me onzeker in een sportschool": {
    title: "voor jou moet de start veilig voelen — en dat gaan we zo maken.",
    body:  "Onzekerheid in een sportschool is normaal, en niemand hoort je daarvoor te oordelen. Bij 1-op-1 coaching is er geen publiek. Het is jij en jouw trainer, in een veilige setting, op jouw tempo. Zodat je langzaam maar zeker vertrouwen opbouwt.",
  },
};

const fallbackProfile = {
  title: "je hebt een plan nodig dat bij jóu past.",
  body:  "Op basis van jouw antwoorden is persoonlijke begeleiding de snelste weg naar het resultaat dat jij wilt. De gratis kennismakingssessie is er om precies dat plan samen scherp te maken — zonder druk.",
};

// ── QUIZ OPEN / CLOSE ─────────────────────────────────────────
function openQuiz() {
  quizOverlay.classList.add("is-open");
  quizOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("quiz-open");
  // Reset to step 1 if reopened after a previous session
  if (currentStep === RESULT_STEP) {
    resetQuiz();
  }
}

function closeQuiz() {
  quizOverlay.classList.remove("is-open");
  quizOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("quiz-open");
}

function resetQuiz() {
  Object.keys(quizState).forEach(k => { quizState[k] = ""; });
  document.querySelectorAll(".answer.is-selected").forEach(a => a.classList.remove("is-selected"));
  leadForm.reset();
  showStep(1);
}

// ── QUIZ NAVIGATION ───────────────────────────────────────────
function showStep(stepNumber) {
  currentStep = stepNumber;

  steps.forEach(step => {
    const active = Number(step.dataset.step) === stepNumber;
    step.classList.toggle("is-active", active);
  });

  // Progress bar counts steps 1–5 (the actual questions)
  const progressStep = Math.min(stepNumber, QUIZ_QUESTION_STEPS);
  progressBar.style.width = `${(progressStep / QUIZ_QUESTION_STEPS) * 100}%`;
}

function handleAnswer(button) {
  const { field, value } = button.dataset;
  quizState[field] = value;

  document
    .querySelectorAll(`.answer[data-field="${field}"]`)
    .forEach(a => a.classList.remove("is-selected"));

  button.classList.add("is-selected");

  window.setTimeout(() => {
    showStep(Math.min(currentStep + 1, TOTAL_STEPS));
  }, 240);
}

function buildResult() {
  const profile   = resultProfiles[quizState.obstacle] || fallbackProfile;
  const firstName = quizState.name.trim().split(" ")[0] || "Je";

  const titleCapitalised = profile.title.charAt(0).toUpperCase() + profile.title.slice(1);
  resultTitle.textContent = `${firstName}, ${titleCapitalised}`;

  const readiness =
    quizState.timeline === "Deze week"
      ? "Je gaf aan dat je snel wilt starten — dit is het moment om direct een sessie vast te leggen."
      : quizState.timeline === "Binnen 2 weken"
        ? "Je zit in een goede fase: nu een moment vastleggen zorgt dat je het ook echt doet."
        : "Zelfs als je je nog oriënteert, is een gratis sessie de beste manier om zonder druk te voelen of het bij je past.";

  resultText.textContent = `${profile.body} ${readiness}`;
}

// ── EVENT LISTENERS ───────────────────────────────────────────
openButtons.forEach(btn  => btn.addEventListener("click", openQuiz));
closeButtons.forEach(btn => btn.addEventListener("click", closeQuiz));
nextButtons.forEach(btn  =>
  btn.addEventListener("click", () => showStep(Math.min(currentStep + 1, TOTAL_STEPS)))
);
answerButtons.forEach(btn => btn.addEventListener("click", () => handleAnswer(btn)));

leadForm.addEventListener("submit", event => {
  event.preventDefault();

  const formData  = new FormData(leadForm);
  quizState.name  = String(formData.get("name")  || "").trim();
  quizState.phone = String(formData.get("phone") || "").trim();

  buildResult();
  showStep(TYPING_STEP);

  setTimeout(() => showStep(RESULT_STEP), 1700);

  // Webhook to n8n — silent fail (n8n handles errors)
  fetch("http://localhost:5678/webhook-test/form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name:     quizState.name,
      phone:    quizState.phone,
      goal:     quizState.goal,
      level:    quizState.level,
      obstacle: quizState.obstacle,
      timeline: quizState.timeline,
      ...utmData,
    }),
  }).catch(() => {});
});

bookingLink.addEventListener("click", event => {
  event.preventDefault();
  window.open(bookingUrl, "_blank", "noopener,noreferrer");
});

// ── KEYBOARD ESCAPE ───────────────────────────────────────────
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && quizOverlay.classList.contains("is-open")) {
    closeQuiz();
  }
});

// ── NAV TOGGLE (mobile hamburger) ────────────────────────────
const siteHeader = document.getElementById("siteHeader");
const navToggle  = document.getElementById("navToggle");
const navLinks   = document.querySelectorAll(".nav-link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const open = siteHeader.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    siteHeader.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", e => {
  if (!siteHeader.contains(e.target) && siteHeader.classList.contains("nav-open")) {
    siteHeader.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

// ── ACTIVE NAV SECTION HIGHLIGHT ─────────────────────────────
const sectionIds = ["aanpak", "ervaringen", "werkwijze", "team", "faq"];
const navLinkMap  = {};
sectionIds.forEach(id => {
  const el = document.getElementById(id);
  const link = document.querySelector(`.nav-link[href="#${id}"]`);
  if (el && link) navLinkMap[id] = { el, link };
});

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const id = entry.target.id;
      if (navLinkMap[id]) {
        navLinkMap[id].link.classList.toggle("is-active", entry.isIntersecting);
      }
    });
  },
  { threshold: 0.25 }
);

Object.values(navLinkMap).forEach(({ el }) => sectionObserver.observe(el));

// ── SCROLL REVEAL ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ── DIRECTION-AWARE HOVER ON ANSWER BUTTONS ───────────────────
function getHoverEdge(event, element) {
  const rect   = element.getBoundingClientRect();
  const x      = event.clientX - rect.left;
  const y      = event.clientY - rect.top;
  const top    = y;
  const bottom = rect.height - y;
  const left   = x;
  const right  = rect.width - x;
  const min    = Math.min(top, bottom, left, right);

  if (min === top)    return "from-top";
  if (min === left)   return "from-left";
  if (min === right)  return "from-right";
  return "from-bottom";
}

document.querySelectorAll(".answer").forEach(btn => {
  btn.addEventListener("mouseenter", function(e) {
    this.classList.remove("from-top", "from-bottom", "from-left", "from-right");
    this.classList.add(getHoverEdge(e, this));
  });
  btn.addEventListener("mouseleave", function() {
    this.classList.remove("from-top", "from-bottom", "from-left", "from-right");
  });
});

// ── INIT ──────────────────────────────────────────────────────
showStep(1);
