# n8n Workflow: Node-Level Architecture

The importable workflow JSON is intentionally not published (it is the commercial
core of the system, deployed for clients as a paid product). This document describes
the design at node level.

One workflow, two entry points, one brain.

## Entry points

**Trigger A: landing page form (outbound first contact)**
Webhook node receives the Vercel form submission (name, phone, goal). The lead is
written to Supabase with status `new`, and the agent sends a personalised first
WhatsApp message within seconds of the form submit.

**Trigger B: inbound WhatsApp reply**
WAHA fires a webhook into the same workflow for every incoming message. Both paths
converge on the same conversation engine, so outbound and inbound logic can never
drift apart.

## The hard parts

**Identity resolution.** Form submissions identify a lead by phone number; WAHA
events identify the same person by WhatsApp `@lid`. The workflow calls WAHA's
`check-exists` API on first contact to resolve phone → `@lid`, so the memory key
is consistent across both entry points. Without this, every reply would start a
new conversation.

**Debounce.** People send three short messages instead of one. A Wait node merges
rapid-fire messages into a single agent turn so the lead gets one coherent reply,
not three conflicting ones.

**Per-lead memory.** Before each agent call, the workflow loads the full
conversation history for this lead from Supabase (PostgreSQL, RLS enabled) and
appends the new turn afterwards. Memory never expires: a lead returning after
weeks continues where the conversation left off.

## The agent

A Claude (Anthropic API) call with a system prompt engineered to:
- match the trainer's real tone and sales style
- speak Dutch by default, switch to English when the lead does, never mix
- qualify the lead, handle the common objections, and drive toward one goal:
  booking a free consultation (Cal.com)
- return structured output so the workflow can route deterministically
  (reply / book / escalate / stop)

## Follow-up cadence

A scheduled branch checks for stalled conversations and re-engages at
4h → 24h → 72h after the last lead message. Three strikes, then the workflow
stops contact and marks the lead accordingly. No lead is ever messaged forever.

## Lead lifecycle

`new → contacted → engaged → booked` (or `stopped` after the third unanswered
follow-up). Every transition is written to Supabase, which makes the 32%
lead-to-booking figure measurable instead of estimated.

## Infrastructure

See `../docker-compose.example.yml`: n8n and WAHA self-hosted with Docker on a
small VPS (~€15/month), landing page on Vercel, database on Supabase, booking
on Cal.com.
