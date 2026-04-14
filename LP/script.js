// ── LANGUAGE / i18n ──────────────────────────────────────────
let currentLang = localStorage.getItem('olf-lang') || 'nl';

const i18n = {
  nl: {
    'doc.title': 'One Life Fitness | Persoonlijke coaching in Utrecht',
    'nav.link.aanpak': 'Aanpak', 'nav.link.ervaringen': 'Ervaringen',
    'nav.link.werkwijze': 'Werkwijze', 'nav.link.team': 'Over ons', 'nav.link.faq': 'FAQ',
    'nav.cta': 'Start de test',
    'hero.eyebrow': 'Utrecht · 1-op-1 coaching',
    'hero.h1.line1': 'Eindelijk fit,', 'hero.h1.line2': 'op jouw tempo.',
    'hero.text': "Geen groepslessen, geen standaard schema's. Jij krijgt een trainer die echt naar jou kijkt.",
    'hero.cta.primary': 'Doe de gratis test', 'hero.cta.secondary': 'Hoe werkt het?',
    'hero.meta.1': 'Gratis kennismaking', 'hero.meta.2': 'Geen contract', 'hero.meta.3': '1-op-1 aandacht',
    'proof.1on1': '1-op-1', 'proof.label.1': 'Sluit aan na de eerste sessie',
    'proof.label.2': 'Locaties in Utrecht', 'proof.label.3': 'Altijd persoonlijk',
    'trust.eyebrow': 'Waarom mensen beginnen',
    'trust.h2': 'Coaching die aanvoelt als steun, niet als druk.',
    'trust.p': 'Of je nu nog nooit gesport hebt, eerder gestopt bent, of gewoon meer uit jezelf wilt halen — hier begin je altijd op jouw eigen niveau.',
    'trust.f1.h3': 'Gaat door na de eerste sessie', 'trust.f1.p': 'De eerste sessie maakt direct duidelijk of het klikt. Bijna iedereen die langskomt, blijft.',
    'trust.f2.h3': 'Coaching op jouw ritme', 'trust.f2.p': 'Geen groepslessen. Geen wachten. Jij krijgt de volledige aandacht van jouw trainer.',
    'trust.f3.h3': 'Contracten of verplichtingen', 'trust.f3.p': "Je start wanneer je wilt. Stop wanneer je wilt. Geen handtekening die je vasthoudt.",
    'forwho.eyebrow': 'Is dit voor mij?', 'forwho.h2': 'Dit klinkt waarschijnlijk bekend.',
    'forwho.c1.tag': 'Beginners', 'forwho.c1.quote': '"Ik weet niet waar ik moet beginnen."',
    'forwho.c1.p': 'Je hoeft niks te weten. Jouw trainer begint exact waar jij nu staat — en legt alles uit.',
    'forwho.c2.tag': 'Herstart', 'forwho.c2.quote': '"Ik ben eerder gestopt en wil het nu echt volhouden."',
    'forwho.c2.p': 'Structuur, persoonlijke begeleiding en iemand die je bijhoudt. Dat maakt het verschil deze keer.',
    'forwho.c3.tag': 'Doorgroeiers', 'forwho.c3.quote': '"Ik sport al, maar zie geen resultaat meer."',
    'forwho.c3.p': 'Gerichter trainen, slimmer progressie opbouwen. Ook daarvoor ben je welkom.',
    'forwho.c4.tag': 'Afvallen',
    'forwho.c4.quote': '"Ik doe echt mijn best, maar het lukt gewoon niet."',
    'forwho.c4.p': 'Afvallen heeft niks te maken met harder je best doen. Het heeft alles te maken met de juiste aanpak voor jóuw lijf. Je trainer kijkt mee, past aan en zorgt dat je dit keer wél resultaat ziet.',
    'testi.eyebrow': 'Ervaringen', 'testi.h2': 'Wat vrouwen zeggen na hun eerste sessie.',
    'testi.stars.aria': '5 uit 5 sterren',
    'testi.anouk.meta': 'Utrecht · Strakker worden',
    'testi.anouk.quote': '"Voor het eerst voelde het haalbaar in plaats van zwaar. Na twee weken merkte ik al verschil."',
    'testi.anouk.badge': '4 kg afgevallen in 6 weken',
    'testi.roos.meta': 'Utrecht · Meer energie',
    'testi.roos.quote': '"Ik had al drie keer eerder geprobeerd te starten. Dit is de eerste keer dat ik het echt volhoud."',
    'testi.roos.badge': 'Al 4 maanden actief',
    'testi.floor.meta': 'Utrecht · Zelfvertrouwen',
    'testi.floor.quote': '"De gym voelde eerst als iets voor anderen. Nu kijk ik er elke week naar uit."',
    'testi.floor.badge': 'Van nul naar 3× per week',
    'process.eyebrow': 'Hoe werkt het', 'process.h2': 'Van test naar eerste sessie in drie stappen.',
    'process.s1.h3': 'Doe de korte test', 'process.s1.p': 'Vier vragen over jouw doel en wat je tegenhoudt. Duurt 60 seconden.',
    'process.s2.h3': 'Ontvang jouw persoonlijk advies', 'process.s2.p': 'Je ziet direct welke aanpak het beste bij jou past — afgestemd op jouw antwoorden.',
    'process.s3.h3': 'Plan je gratis sessie', 'process.s3.p': 'Kies een moment, kom langs, en voel zelf of het klopt. Zonder verplichting.',
    'team.h2': 'Persoonlijk. Lokaal. Zonder opgeblazen fitnesspraat.',
    'team.p': 'We werken met een klein team op meerdere locaties in Utrecht. Je start met een gratis sessie — we luisteren, geen verkooppraatje. Daarna kies jij.',
    'team.cta': 'Plan de gratis sessie',
    'team.p1.strong': '3 locaties in Utrecht', 'team.p1.span': 'Altijd dichtbij',
    'team.p2.strong': '1-op-1 sessies', 'team.p2.span': 'Altijd persoonlijk',
    'team.p3.strong': '60 minuten', 'team.p3.span': 'Volledig op jou gericht',
    'team.p4.strong': 'Gratis start', 'team.p4.span': 'Geen verplichtingen',
    'trainers.eyebrow': 'Ons team', 'trainers.h2': 'De mensen achter jouw sessie.',
    'trainer.1.name': 'Nour', 'trainer.1.role': 'Kracht & conditie',
    'trainer.2.name': 'Anna', 'trainer.2.role': 'Beginners & herstel',
    'trainer.3.name': 'Arya', 'trainer.3.role': 'Vrouwenkracht',
    'faq.eyebrow': 'Veelgestelde vragen', 'faq.h2': 'Wat mensen zich afvragen voor ze beginnen.',
    'faq.q1': '"Ik heb nog nooit gesport — is dit voor mij?"',
    'faq.a1': 'Absoluut. Sterker nog: beginners halen het meeste uit 1-op-1 coaching. Je leert alles goed, zonder slechte gewoontes aan te leren.',
    'faq.q2': '"Wat kost het?"',
    'faq.a2': 'De eerste sessie is volledig gratis, zonder verplichting. Daarna bespreken we samen wat past bij jouw doelen en situatie.',
    'faq.q3': '"Ik heb nauwelijks tijd — gaat dat wel werken?"',
    'faq.a3': 'Eén sessie per week is genoeg om resultaat te zien. We bouwen een schema dat in jouw leven past — niet andersom.',
    'faq.q4': '"Ik ben eerder gestopt — hoe is dit anders?"',
    'faq.a4': 'Omdat je nu niet alleen bent. Je hebt iemand die met je meekijkt, bijstuurt en je structuur geeft. Dat is precies het verschil.',
    'faq.q5': '"Ik heb van alles geprobeerd om af te vallen — waarom zou dit anders zijn?"',
    'faq.a5': 'Omdat we niet beginnen met een standaard plan. We beginnen met jou — jouw lichaam, jouw schema en wat eerder niet werkte. 1-op-1 coaching betekent dat je trainer ziet wat er misgaat en het direct aanpast. Dat is iets wat een app, een dieet of een groepsles nooit voor je kan doen.',
    'faq.q6': '"Zie ik echt resultaat met maar één sessie per week?"',
    'faq.a6': 'Ja — als die ene sessie slim is opgebouwd voor jouw doel. We trainen gericht, geven je handvatten voor buiten de gym en bouwen progressie die zichtbaar blijft. De meeste cliënten merken al snel dat consistent één keer per week meer doet dan ze hadden verwacht.',
    'closing.eyebrow': 'Gratis eerste stap', 'closing.h2': 'Klaar om te zien wat bij jou past?',
    'closing.p': 'Doe de test in 60 seconden. Geen verplichtingen, geen contracten.',
    'closing.cta': 'Doe de gratis test',
    'footer.note': 'Persoonlijke 1-op-1 coaching in Utrecht. Gratis kennismakingssessie, geen contract.',
    'footer.wa': 'WhatsApp ons', 'footer.privacy': 'Privacybeleid',
    'mobile.sticky': 'Doe de gratis test',
    'quiz.title': 'Jouw gratis sessie test', 'quiz.close.aria': 'Sluiten',
    'quiz.s1.kicker': 'Vraag 1 van 4', 'quiz.s1.h3': 'Wat wil je anders zien over 3 maanden?',
    'quiz.s1.a1': 'Strakker worden', 'quiz.s1.a2': 'Afvallen', 'quiz.s1.a3': 'Sterker worden', 'quiz.s1.a4': 'Meer zelfvertrouwen',
    'quiz.s2.kicker': 'Even tussendoor', 'quiz.s2.h3': 'Jij bent niet de enige die een frisse start zoekt.',
    'quiz.s2.p': 'De meeste vrouwen die bij ons komen, hebben het eerder geprobeerd. Het verschil: nu heb je iemand die écht met je meedenkt.',
    'quiz.s2.m1': 'Persoonlijk plan', 'quiz.s2.m2': 'Rustig opgebouwd', 'quiz.s2.m3': 'Geen contractdruk', 'quiz.s2.btn': 'Ga verder',
    'quiz.s3.kicker': 'Vraag 2 van 4', 'quiz.s3.h3': 'Hoe zou je jezelf nu omschrijven?',
    'quiz.s3.a1': 'Ik sport bijna nooit', 'quiz.s3.a2': 'Eerder gestopt', 'quiz.s3.a3': 'Ik sport af en toe', 'quiz.s3.a4': 'Ik sport regelmatig',
    'quiz.s4.kicker': 'Vraag 3 van 4', 'quiz.s4.h3': 'Wat houdt je het meest tegen?',
    'quiz.s4.a1': 'Te druk, geen tijd', 'quiz.s4.a2': 'Weet niet hoe beginnen', 'quiz.s4.a3': 'Eerder gestopt', 'quiz.s4.a4': 'Onzeker in de gym',
    'quiz.s5.kicker': 'Vraag 4 van 4', 'quiz.s5.h3': 'Wanneer wil je beginnen?',
    'quiz.s5.a1': 'Deze week nog', 'quiz.s5.a2': 'Binnen 2 weken', 'quiz.s5.a3': 'Ik oriënteer me nog',
    'quiz.s6.kicker': 'Laatste stap', 'quiz.s6.h3': 'Vul je gegevens in voor jouw persoonlijk resultaat.',
    'quiz.s6.labelname': 'Voornaam', 'quiz.s6.labelphone': 'Telefoonnummer',
    'quiz.input.name': 'Bijv. Sara', 'quiz.input.phone': '06 12 34 56 78',
    'quiz.s6.submit': 'Bekijk mijn resultaat',
    'quiz.s6.note': 'We bellen je eenmalig om jouw gratis sessie in te plannen. Geen spam, geen abonnementen.',
    'quiz.s7.kicker': 'Even geduld\u2026', 'quiz.s7.h3': 'We analyseren jouw antwoorden',
    'quiz.s7.note': 'Jouw persoonlijk profiel wordt opgesteld\u2026',
    'quiz.s8.kicker': 'Jouw profiel',
    'quiz.result.label': 'Jouw aanbevolen eerste stap',
    'quiz.result.p': 'Plan een gratis kennismakingssessie. In 60 minuten leer je jouw trainer kennen, bespreken we jouw doel en maken we samen een eerste plan — zonder verplichting.',
    'quiz.result.book': 'Boek je gratis sessie', 'quiz.result.later': 'Misschien later',
  },
  en: {
    'doc.title': 'One Life Fitness | Personal coaching in Utrecht',
    'nav.link.aanpak': 'Our Approach', 'nav.link.ervaringen': 'Reviews',
    'nav.link.werkwijze': 'How It Works', 'nav.link.team': 'About Us', 'nav.link.faq': 'FAQ',
    'nav.cta': 'Take the quiz',
    'hero.eyebrow': 'Utrecht · 1-on-1 coaching',
    'hero.h1.line1': 'Finally fit,', 'hero.h1.line2': 'at your own pace.',
    'hero.text': "No group classes, no cookie-cutter plans. You get a trainer who actually pays attention.",
    'hero.cta.primary': 'Take the free quiz', 'hero.cta.secondary': 'How does it work?',
    'hero.meta.1': 'Free intro session', 'hero.meta.2': 'No contract', 'hero.meta.3': '1-on-1 attention',
    'proof.1on1': '1-on-1', 'proof.label.1': 'Continue after their first session',
    'proof.label.2': 'Locations in Utrecht', 'proof.label.3': 'Always personal',
    'trust.eyebrow': 'Why people start',
    'trust.h2': 'Coaching that feels like support, not pressure.',
    'trust.p': "Whether you've never set foot in a gym, tried and quit before, or just want to push further — you always start at your own level here.",
    'trust.f1.h3': 'Stick with it after session one', 'trust.f1.p': 'That first session makes everything clear. Almost everyone who shows up, keeps coming back.',
    'trust.f2.h3': 'Coaching on your terms', 'trust.f2.p': "No group classes. No waiting around. Your trainer's full attention, every session.",
    'trust.f3.h3': 'No contracts. No commitments.', 'trust.f3.p': "Start when you're ready. Stop when you want. Nothing holding you in.",
    'forwho.eyebrow': 'Is this for me?', 'forwho.h2': "You've probably felt this before.",
    'forwho.c1.tag': 'Beginners', 'forwho.c1.quote': '"I don\'t know where to start."',
    'forwho.c1.p': "You don't need to know anything. Your trainer starts exactly where you are and walks you through it.",
    'forwho.c2.tag': 'Coming Back', 'forwho.c2.quote': '"I\'ve quit before — this time I want it to stick."',
    'forwho.c2.p': "Structure, personal guidance, and someone who keeps you accountable. That's what makes it different this time.",
    'forwho.c3.tag': 'Ready to Level Up', 'forwho.c3.quote': '"I already work out, but I\'ve hit a wall."',
    'forwho.c3.p': "Train smarter, build progress that actually shows. You're welcome here too.",
    'forwho.c4.tag': 'Losing weight',
    'forwho.c4.quote': '"I\'m genuinely putting in the effort — it just isn\'t working."',
    'forwho.c4.p': "Losing weight isn't about trying harder. It's about the right approach for your specific body. Your trainer watches, adjusts, and makes sure this time you actually see results.",
    'testi.eyebrow': 'Reviews', 'testi.h2': 'What women say after their first session.',
    'testi.stars.aria': '5 out of 5 stars',
    'testi.anouk.meta': 'Utrecht · Toning up',
    'testi.anouk.quote': '"For the first time it felt doable, not daunting. Two weeks in and I was already noticing a difference."',
    'testi.anouk.badge': '9 lbs down in 6 weeks',
    'testi.roos.meta': 'Utrecht · More energy',
    'testi.roos.quote': '"I\'d tried starting three times before. This is the first time it\'s actually stuck."',
    'testi.roos.badge': '4 months and still going',
    'testi.floor.meta': 'Utrecht · Confidence',
    'testi.floor.quote': '"The gym used to feel like it was for other people. Now I look forward to it every week."',
    'testi.floor.badge': 'Zero to 3 times a week',
    'process.eyebrow': 'How it works', 'process.h2': 'From quiz to your first session in three steps.',
    'process.s1.h3': 'Take the quick quiz', 'process.s1.p': "Four questions about your goal and what's getting in the way. Takes 60 seconds.",
    'process.s2.h3': 'Get your personal recommendation', 'process.s2.p': "You'll immediately see which approach fits you best — based on exactly what you told us.",
    'process.s3.h3': 'Book your free session', 'process.s3.p': 'Pick a time, come in, and see if it clicks in person. No commitment required.',
    'team.h2': 'Personal. Local. No fitness BS.',
    'team.p': "We're a small team spread across a few spots in Utrecht. You start with a free session — we listen, no sales pitch. Then you decide.",
    'team.cta': 'Book your free session',
    'team.p1.strong': '3 locations in Utrecht', 'team.p1.span': 'Always nearby',
    'team.p2.strong': '1-on-1 sessions', 'team.p2.span': 'Always personal',
    'team.p3.strong': '60 minutes', 'team.p3.span': 'Fully focused on you',
    'team.p4.strong': 'Free start', 'team.p4.span': 'No obligations',
    'trainers.eyebrow': 'Our team', 'trainers.h2': 'The people behind your session.',
    'trainer.1.name': 'Nour', 'trainer.1.role': 'Strength & conditioning',
    'trainer.2.name': 'Anna', 'trainer.2.role': 'Beginners & recovery',
    'trainer.3.name': 'Arya', 'trainer.3.role': "Women's training",
    'faq.eyebrow': 'Common questions', 'faq.h2': 'What people wonder before they sign up.',
    'faq.q1': '"I\'ve never really worked out — is this for me?"',
    'faq.a1': 'Absolutely. In fact, beginners get the most out of 1-on-1 coaching. You learn everything properly from day one, without picking up bad habits.',
    'faq.q2': '"What does it cost?"',
    'faq.a2': 'Your first session is completely free, no strings attached. After that, we work out together what makes sense for your goals and situation.',
    'faq.q3': '"I barely have time — can this actually work?"',
    'faq.a3': "One session a week is enough to see real results. We build a schedule that fits around your life — not the other way around.",
    'faq.q4': '"I\'ve quit before — how is this any different?"',
    'faq.a4': "Because this time you're not doing it alone. Someone's watching your progress, adjusting your plan, and keeping you on track. That's the actual difference.",
    'faq.q5': '"I\'ve tried everything to lose weight — why would this be different?"',
    'faq.a5': "Because we don't start with a standard plan. We start with you — your body, your schedule, and what hasn't worked before. 1-on-1 coaching means your trainer sees what's going wrong and adjusts it on the spot. That's something no app, diet, or group class can ever do.",
    'faq.q6': '"Can I actually see results with just one session a week?"',
    'faq.a6': "Yes — if that one session is built around your goal. We train with purpose, give you tools to use outside the gym, and build progress that holds. Most clients find that one consistent session a week does more than they expected.",
    'closing.eyebrow': 'Free first step', 'closing.h2': 'Ready to find out what works for you?',
    'closing.p': 'Take the quiz in 60 seconds. No obligations, no contracts.',
    'closing.cta': 'Take the free quiz',
    'footer.note': 'Personal 1-on-1 coaching in Utrecht. Free intro session, no contract.',
    'footer.wa': 'WhatsApp us', 'footer.privacy': 'Privacy Policy',
    'mobile.sticky': 'Take the free quiz',
    'quiz.title': 'Your free session quiz', 'quiz.close.aria': 'Close',
    'quiz.s1.kicker': 'Question 1 of 4', 'quiz.s1.h3': 'What do you want to see different in 3 months?',
    'quiz.s1.a1': 'Get more toned', 'quiz.s1.a2': 'Lose weight', 'quiz.s1.a3': 'Get stronger', 'quiz.s1.a4': 'Build confidence',
    'quiz.s2.kicker': 'Just so you know', 'quiz.s2.h3': "You're not the only one looking for a fresh start.",
    'quiz.s2.p': "Most of the women who come to us have tried before. The difference: now you have someone who's actually in your corner.",
    'quiz.s2.m1': 'Personal plan', 'quiz.s2.m2': 'Built around you', 'quiz.s2.m3': 'No contract pressure', 'quiz.s2.btn': 'Keep going',
    'quiz.s3.kicker': 'Question 2 of 4', 'quiz.s3.h3': "How would you describe where you're at?",
    'quiz.s3.a1': 'Barely exercise', 'quiz.s3.a2': 'Used to, but quit', 'quiz.s3.a3': 'Occasionally active', 'quiz.s3.a4': 'I work out regularly',
    'quiz.s4.kicker': 'Question 3 of 4', 'quiz.s4.h3': "What's your biggest obstacle?",
    'quiz.s4.a1': 'Too busy, no time', 'quiz.s4.a2': "Don't know where to start", 'quiz.s4.a3': 'I always end up quitting', 'quiz.s4.a4': 'I feel out of place at the gym',
    'quiz.s5.kicker': 'Question 4 of 4', 'quiz.s5.h3': 'When do you want to get started?',
    'quiz.s5.a1': 'This week', 'quiz.s5.a2': 'Within 2 weeks', 'quiz.s5.a3': 'Still looking around',
    'quiz.s6.kicker': 'Last step', 'quiz.s6.h3': 'Enter your details to see your personal result.',
    'quiz.s6.labelname': 'First name', 'quiz.s6.labelphone': 'Phone number',
    'quiz.input.name': 'e.g. Sara', 'quiz.input.phone': '07700 900000',
    'quiz.s6.submit': 'See my result',
    'quiz.s6.note': "We'll call you once to schedule your free session. No spam, no subscriptions.",
    'quiz.s7.kicker': 'Just a moment\u2026', 'quiz.s7.h3': 'Looking at your answers',
    'quiz.s7.note': 'Building your personal profile\u2026',
    'quiz.s8.kicker': 'Your profile',
    'quiz.result.label': 'Your recommended first step',
    'quiz.result.p': "Book a free intro session. In 60 minutes you'll meet your trainer, talk through your goal, and put together an initial plan — no commitment.",
    'quiz.result.book': 'Book your free session', 'quiz.result.later': 'Maybe later',
  },
};

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('olf-lang', lang);
  document.documentElement.lang = lang;
  document.title = i18n[lang]['doc.title'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = i18n[lang][el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = i18n[lang][el.dataset.i18nPlaceholder];
    if (val !== undefined) el.placeholder = val;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const val = i18n[lang][el.dataset.i18nAria];
    if (val !== undefined) el.setAttribute('aria-label', val);
  });

  // Sync toggle button active state
  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('is-active', opt.dataset.lang === lang);
  });

  // Re-render result if user is already on the result step
  if (currentStep === RESULT_STEP && quizState.name) buildResult();
  // Re-apply interstitial personalisation if on step 2
  if (currentStep === 2) updateInterstitialForGoal();
  // Re-apply obstacle personalisation if on step 4
  if (currentStep === 4) updateObstacleForLevel();
}

// ── UTM / CLICK-ID CAPTURE ────────────────────────────────────
// Grab attribution params from URL once; persist across SPA-style nav
const _urlParams = new URLSearchParams(window.location.search);
const utmData = {
  utm_source: _urlParams.get("utm_source") || "",
  utm_medium: _urlParams.get("utm_medium") || "",
  utm_campaign: _urlParams.get("utm_campaign") || "",
  utm_content: _urlParams.get("utm_content") || "",
  utm_term: _urlParams.get("utm_term") || "",
  gclid: _urlParams.get("gclid") || "",
  fbclid: _urlParams.get("fbclid") || "",
  ttclid: _urlParams.get("ttclid") || "",
  msclkid: _urlParams.get("msclkid") || "",
};

// ── DOM REFS ─────────────────────────────────────────────────
const quizOverlay = document.getElementById("quizOverlay");
const progressBar = document.getElementById("quizProgressBar");
const steps = Array.from(document.querySelectorAll(".quiz-step"));
const openButtons = document.querySelectorAll("[data-open-quiz]");
const closeButtons = document.querySelectorAll("[data-close-quiz]");
const nextButtons = document.querySelectorAll("[data-next-step]");
const answerButtons = document.querySelectorAll(".answer");
const leadForm = document.getElementById("leadForm");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const bookingLink = document.getElementById("bookingLink");

const bookingUrl = "https://cal.com/mouaz-tabanja-7ubxvb/gratis-1-op-1-gesprek-met-jouw-personal-trainer";

const TOTAL_STEPS = steps.length;  // 8
const TYPING_STEP = TOTAL_STEPS - 1; // 7
const RESULT_STEP = TOTAL_STEPS;     // 8
const QUIZ_QUESTION_STEPS = 5;

let currentStep = 1;

const quizState = {
  goal: "",
  level: "",
  obstacle: "",
  timeline: "",
  name: "",
  phone: "",
};

// ── RESULT PROFILES ───────────────────────────────────────────
const resultProfilesEn = {
  // ── Beginner / returning profiles ────────────────────────────
  "Ik weet niet waar ik moet beginnen": {
    title: "you need direction, not just motivation.",
    body: "Your answers show the first step is the hardest part — not keeping it up. Having someone stand next to you makes that first step a whole lot smaller. Your trainer explains everything, step by step, no judgment.",
  },
  "Ik heb geen tijd": {
    title: "you need a plan that fits around your life.",
    body: "You don't need a marathon training schedule. One session a week, when it works for you, is enough to see real results. We build the plan around you — not the other way around.",
  },
  "Ik ben eerder begonnen maar gestopt": {
    title: "you don't need willpower — you need structure.",
    body: "Quitting before says nothing about you. It says something about the approach. With a regular trainer who knows you, tracks your progress, and shows up when it gets tough — the odds of sticking with it this time are so much higher.",
  },
  "Ik voel me onzeker in een sportschool": {
    title: "the start needs to feel safe for you — and we'll make it that way.",
    body: "Feeling out of place in a gym is completely normal, and no one should make you feel judged for it. With 1-on-1 coaching there's no audience. It's just you and your trainer, in a comfortable setting, at your own pace. That's how you build real confidence.",
  },
  // ── Regular trainer profiles (already going to the gym) ──────
  "Geen resultaat meer": {
    title: "you're already doing the work — now it's the approach that needs to change.",
    body: "A plateau isn't a sign you're not doing enough. It's a signal your body needs something more specific. A trainer spots in one session exactly where the gains are hiding and adjusts immediately. No starting over — just training smarter.",
  },
  "Weet niet wat ik verkeerd doe": {
    title: "training alone means nobody sees what you can't see yourself.",
    body: "A small flaw in technique, training load, or recovery can quietly block results for months — and you'd never know. A trainer watches, identifies it exactly, and fixes it. That's the difference 1-on-1 makes.",
  },
  "Mis een echt plan": {
    title: "moving is good — but without structure you'll stay stuck at the same level.",
    body: "Random training gives random results. A program built around your body, your goal, and your pace gives you something that actually compounds over time. You build that together with your trainer — starting in the very first session.",
  },
  "Iemand die meekijkt": {
    title: "you know how to train — you need someone to train alongside you.",
    body: "Knowledge is half of it. The other half is someone who watches, corrects, and challenges you every single session. A trainer who knows you is the person who turns effort into real progress.",
  },
};

const fallbackProfileEn = {
  title: "you need a plan built around you.",
  body: "Based on your answers, personal coaching is the fastest route to the result you're after. The free intro session is exactly the place to build that plan together — no pressure.",
};

const resultProfiles = {
  // ── Beginner / returning profiles ────────────────────────────
  "Ik weet niet waar ik moet beginnen": {
    title: "je hebt richting nodig, geen extra motivatie.",
    body: "Uit jouw antwoorden blijkt dat de eerste stap het moeilijkst is — niet het volhouden. Met iemand die naast je staat, wordt die eerste stap een stuk kleiner. Jouw trainer legt alles uit, stap voor stap, zonder oordeel.",
  },
  "Ik heb geen tijd": {
    title: "je hebt een plan nodig dat in jouw leven past.",
    body: "Jij hebt geen marathonschema nodig. Eén sessie per week op een moment dat past bij jouw agenda is genoeg om zichtbaar resultaat te zien. We bouwen het plan om jou heen — niet andersom.",
  },
  "Ik ben eerder begonnen maar gestopt": {
    title: "je hebt geen wilskracht nodig — je hebt structuur nodig.",
    body: "Dat je eerder bent gestopt zegt niks over jou. Het zegt iets over de aanpak. Met een vaste trainer die jou kent, die bijhoudt hoe je progressie maakt en die er is wanneer het moeilijk wordt, is de kans enorm veel groter dat je het nu wél volhoudt.",
  },
  "Ik voel me onzeker in een sportschool": {
    title: "voor jou moet de start veilig voelen — en dat gaan we zo maken.",
    body: "Onzekerheid in een sportschool is normaal, en niemand hoort je daarvoor te oordelen. Bij 1-op-1 coaching is er geen publiek. Het is jij en jouw trainer, in een veilige setting, op jouw tempo. Zodat je langzaam maar zeker vertrouwen opbouwt.",
  },
  // ── Regular trainer profiles (already going to the gym) ──────
  "Geen resultaat meer": {
    title: "je doet het werk al — nu is de aanpak aan de beurt.",
    body: "Een plateau is geen teken dat jij niet genoeg doet. Het is een signaal dat jouw lichaam iets specifieks nodig heeft. Een trainer ziet in één sessie precies waar de winst zit en past het direct aan. Geen reset — gewoon slimmer trainen.",
  },
  "Weet niet wat ik verkeerd doe": {
    title: "alleen trainen betekent dat niemand ziet wat jij zelf niet ziet.",
    body: "Een kleine fout in techniek, belasting of herstel kan maandenlang resultaat blokkeren — zonder dat je het doorhebt. Een trainer kijkt mee, identificeert het precies en lost het op. Dat is wat 1-op-1 anders maakt.",
  },
  "Mis een echt plan": {
    title: "bewegen is goed — maar zonder structuur blijf je op hetzelfde niveau hangen.",
    body: "Willekeurig trainen geeft willekeurige resultaten. Een programma dat is opgebouwd op jóuw lichaam, jóuw doel en jóuw tempo — dat is wat écht opbouwt. Dat maak je samen met je trainer, al in de eerste sessie.",
  },
  "Iemand die meekijkt": {
    title: "je weet hoe je moet trainen — je hebt iemand nodig die het samen met je doet.",
    body: "Kennis is de helft. De andere helft is iemand die kijkt, corrigeert en je elke sessie uitdaagt. Een trainer die jou kent is degene die het verschil maakt tussen goed trainen en echt vooruitgaan.",
  },
};

const fallbackProfile = {
  title: "je hebt een plan nodig dat bij jóu past.",
  body: "Op basis van jouw antwoorden is persoonlijke begeleiding de snelste weg naar het resultaat dat jij wilt. De gratis kennismakingssessie is er om precies dat plan samen scherp te maken — zonder druk.",
};

// ── INTERSTITIAL PERSONALISATION ─────────────────────────────
// When goal = "Afvallen", swap the interstitial copy to speak
// directly to the "tried everything" weight-loss persona.
// Called from showStep(2) and setLang() so language toggling works.
function updateInterstitialForGoal() {
  if (currentStep !== 2) return;
  const isEn = currentLang === 'en';
  const h3 = document.querySelector('.quiz-step[data-step="2"] h3');
  const p = document.querySelector('.quiz-step[data-step="2"] .interstitial-shell > p');
  if (!h3 || !p) return;

  if (quizState.goal === 'Afvallen en meer energie') {
    h3.textContent = isEn
      ? "Losing weight has nothing to do with willpower."
      : "Afvallen heeft niks te maken met wilskracht.";
    p.textContent = isEn
      ? "Most of the women who come to us have tried it all — diets, apps, group classes. The effort was never the problem. The approach was. That's exactly where we start."
      : "De meeste vrouwen die bij ons komen, hebben van alles geprobeerd — diëten, apps, groepslessen. De inzet was er. De aanpak paste niet. Dat is precies waar we beginnen.";
  } else {
    // Reset to default i18n copy in case user navigates back and picks a different goal
    h3.textContent = isEn ? i18n.en['quiz.s2.h3'] : i18n.nl['quiz.s2.h3'];
    p.textContent = isEn ? i18n.en['quiz.s2.p'] : i18n.nl['quiz.s2.p'];
  }
}

// ── OBSTACLE PERSONALISATION FOR REGULAR ATHLETES ────────────
// When level = "Ik sport regelmatig maar wil meer" the default
// beginner obstacles don't resonate. Swap the entire step-4
// question + 4 answers to speak to someone already training
// but stuck at a plateau or missing expert guidance.
// Called from showStep(4) and setLang() so language toggle works.
function updateObstacleForLevel() {
  if (currentStep !== 4) return;
  const isEn = currentLang === 'en';
  const isRegular = quizState.level === 'Ik sport regelmatig maar wil meer';

  const h3 = document.querySelector('.quiz-step[data-step="4"] h3');
  const buttons = Array.from(
    document.querySelectorAll('.quiz-step[data-step="4"] .answer[data-field="obstacle"]')
  );
  if (!h3 || buttons.length < 4) return;

  if (isRegular) {
    h3.textContent = isEn
      ? "What's holding back your progress?"
      : "Wat houdt jouw vooruitgang tegen?";

    const opts = isEn
      ? [
          { value: 'Geen resultaat meer',           text: 'I train hard but see no results' },
          { value: 'Weet niet wat ik verkeerd doe',  text: "I don't know what I'm doing wrong" },
          { value: 'Mis een echt plan',               text: 'I train without a real plan' },
          { value: 'Iemand die meekijkt',             text: 'I need someone to coach me' },
        ]
      : [
          { value: 'Geen resultaat meer',           text: 'Ik train, maar zie geen resultaat' },
          { value: 'Weet niet wat ik verkeerd doe',  text: 'Ik weet niet wat ik verkeerd doe' },
          { value: 'Mis een echt plan',               text: 'Ik train zonder echt plan' },
          { value: 'Iemand die meekijkt',             text: 'Ik mis iemand die meekijkt' },
        ];

    buttons.forEach((btn, i) => {
      btn.dataset.value = opts[i].value;
      btn.textContent   = opts[i].text;
    });
  } else {
    // Reset to default question + answers
    h3.textContent = isEn ? i18n.en['quiz.s4.h3'] : i18n.nl['quiz.s4.h3'];

    const lang = isEn ? i18n.en : i18n.nl;
    const defaultOpts = [
      { value: 'Ik heb geen tijd',                       key: 'quiz.s4.a1' },
      { value: 'Ik weet niet waar ik moet beginnen',     key: 'quiz.s4.a2' },
      { value: 'Ik ben eerder begonnen maar gestopt',    key: 'quiz.s4.a3' },
      { value: 'Ik voel me onzeker in een sportschool',  key: 'quiz.s4.a4' },
    ];
    buttons.forEach((btn, i) => {
      btn.dataset.value = defaultOpts[i].value;
      btn.textContent   = lang[defaultOpts[i].key];
    });
  }
}

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

  // Personalise interstitial copy for weight-loss goal
  if (stepNumber === 2) updateInterstitialForGoal();
  // Swap obstacle options for regular athletes
  if (stepNumber === 4) updateObstacleForLevel();
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
  const isEn = currentLang === 'en';
  const profiles = isEn ? resultProfilesEn : resultProfiles;
  const fallback = isEn ? fallbackProfileEn : fallbackProfile;
  const profile = profiles[quizState.obstacle] || fallback;

  const firstName = quizState.name.trim().split(" ")[0] || (isEn ? "You" : "Je");
  const titleCapitalised = profile.title.charAt(0).toUpperCase() + profile.title.slice(1);
  resultTitle.textContent = `${firstName}, ${titleCapitalised}`;

  const readiness = isEn
    ? (quizState.timeline === "Deze week"
      ? "You said you want to start soon — now's the moment to lock in a session."
      : quizState.timeline === "Binnen 2 weken"
        ? "Good timing: booking something now means you'll actually follow through."
        : "Even if you're still exploring, a free session is the best way to feel it out without any pressure.")
    : (quizState.timeline === "Deze week"
      ? "Je gaf aan dat je snel wilt starten — dit is het moment om direct een sessie vast te leggen."
      : quizState.timeline === "Binnen 2 weken"
        ? "Je zit in een goede fase: nu een moment vastleggen zorgt dat je het ook echt doet."
        : "Zelfs als je je nog oriënteert, is een gratis sessie de beste manier om zonder druk te voelen of het bij je past.");

  // Weight-loss goal — append specific extra copy to result body
  const weightSuffix = quizState.goal === 'Afvallen en meer energie'
    ? (isEn
      ? " For weight loss specifically: no crash plans, no one-size-fits-all schedules. We build something that fits your life and actually lasts."
      : " Specifiek voor afvallen: geen crash-schema's en geen standaardlijstjes. We bouwen iets op dat bij jóuw leven past — en dat ook blijft.")
    : '';

  resultText.textContent = `${profile.body}${weightSuffix} ${readiness}`;
}

// ── EVENT LISTENERS ───────────────────────────────────────────
openButtons.forEach(btn => btn.addEventListener("click", openQuiz));
closeButtons.forEach(btn => btn.addEventListener("click", closeQuiz));
nextButtons.forEach(btn =>
  btn.addEventListener("click", () => showStep(Math.min(currentStep + 1, TOTAL_STEPS)))
);
answerButtons.forEach(btn => btn.addEventListener("click", () => handleAnswer(btn)));

leadForm.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(leadForm);
  quizState.name = String(formData.get("name") || "").trim();
  quizState.phone = String(formData.get("phone") || "").trim();

  buildResult();
  showStep(TYPING_STEP);

  setTimeout(() => showStep(RESULT_STEP), 1700);

  // ── WEBHOOK ───────────────────────────────────────────────────
  // TEST  → http://localhost:5678/webhook-test/form  (n8n test trigger)
  // PROD  → http://localhost:5678/webhook/form       (n8n production trigger)
  // Switch the constant below when going live:
  // const WEBHOOK_URL = "http://localhost:5678/webhook-test/form";
  const WEBHOOK_URL = "http://localhost:5678/webhook/form";

  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: quizState.name,
      phone: quizState.phone,
      goal: quizState.goal,
      level: quizState.level,
      obstacle: quizState.obstacle,
      timeline: quizState.timeline,
      ...utmData,
    }),
  }).catch(() => { });
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
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelectorAll(".nav-link");

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
const navLinkMap = {};
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
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const top = y;
  const bottom = rect.height - y;
  const left = x;
  const right = rect.width - x;
  const min = Math.min(top, bottom, left, right);

  if (min === top) return "from-top";
  if (min === left) return "from-left";
  if (min === right) return "from-right";
  return "from-bottom";
}

document.querySelectorAll(".answer").forEach(btn => {
  btn.addEventListener("mouseenter", function (e) {
    this.classList.remove("from-top", "from-bottom", "from-left", "from-right");
    this.classList.add(getHoverEdge(e, this));
  });
  btn.addEventListener("mouseleave", function () {
    this.classList.remove("from-top", "from-bottom", "from-left", "from-right");
  });
});

// ── LANG TOGGLE ──────────────────────────────────────────────
const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    setLang(currentLang === 'nl' ? 'en' : 'nl');
  });
}

// ── INIT ──────────────────────────────────────────────────────
showStep(1);
setLang(currentLang);
