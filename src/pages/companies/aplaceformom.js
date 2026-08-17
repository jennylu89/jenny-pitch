// ─────────────────────────────────────────────────────────────────────────────
// A PLACE FOR MOM · Lead Product Designer, Provider Experience
// Karim is the hiring manager. JD verbatim: applications/a-place-for-mom/jd.md
// ─────────────────────────────────────────────────────────────────────────────
// ⭐ FINAL CONTENT PASS, spec'd by Jenny 2026-08-16. Every string below is HER
// copy, used verbatim. This page had been over-iterated because too much was left
// to interpretation at build time, so the content here IS the spec.
//
// ⛔ Do not rewrite this copy. Do not generate alternatives.
// ⛔ Do not add a "Why me" section. The giant one was deleted on purpose and must
//    not come back in any form. The projects are the proof.
// ⛔ Do not invent outcomes or metrics. Everything numeric here already existed.
// ⛔ No AI in the hero. AI appears exactly once, in section 07.
//
// PAGE ORDER, fixed:
//   1 hero · 2 role-fit strip · 3 selected work intro · 4 Roadrunner · 5 Arena
//   6 Design Hub · 7 AI statement · 8 why provider experience · 9 CTA
//
// REUSABLE FOR THE NEXT JOB PAGE. Only these change:
//   roleLens · roleStrip.text · whyThisRole · which projects appear and their order
// Everything else is the fixed identity and should be copied as-is.

export const aplaceformom = {
  name: "A Place for Mom",
  role: "Lead Product Designer, Provider Experience",

  // ── 01. HERO ───────────────────────────────────────────────────────────────
  // Fixed identity + customizable lens. Keep them separate so the next job page
  // swaps one string.
  identity: "Jenny Lu · Senior Product Designer",
  roleLens: "B2B + Operational Workflows",

  heroHeadline: "I find the real product problem behind the screen request.",
  heroBody: [
    "I trace how work actually happens across people, tools, and constraints, then use research, interaction design, and functional prototypes to help the team decide what to build.",
  ],
  capabilityLine: "Research → Product direction → Interaction design → Functional prototype",
  heroPrimaryLabel: "View selected work",
  heroPrimaryHref: "#selected-work",
  secondaryLabel: "View resume",

  // ── 02. APFM ROLE-FIT STRIP ────────────────────────────────────────────────
  // ⛔ Narrow strip, not a second hero. No CTA, no large type, no APFM stats,
  // and no claim to already know their product solution.
  roleStrip: {
    label: "Why this role",
    text: "Provider Experience sits where I do my best work: external users, internal operations, and business goals all meet in the same product. It is the kind of work where understanding the workflow matters as much as designing the interface.",
  },

  // ── 03. SELECTED WORK INTRO ────────────────────────────────────────────────
  // One line. ⛔ No explanatory paragraph underneath.
  workIntro: {
    eyebrow: "Selected work",
    heading: "The work changed once I understood the workflow.",
  },

  // ── 04–06. THE CASE STUDIES ────────────────────────────────────────────────
  // ⛔ The case study LAYOUT does not change. These render through the original
  // shared component, and their copy lives in data/jenny.js on each project as
  // `headline` (the deck), `beats` (the story), `metrics`, and `features`.
  // A bespoke renderer was built here on 2026-08-16 and reverted the same day:
  // it dropped the dark image bands, tool chips, investigation cards and the
  // before/after compare strip, which are the existing visual language.
  projectIds: ['roadrunner', 'arenalabs', 'designhub'],


  // ── 07. AI / PROTOTYPING STATEMENT ─────────────────────────────────────────
  aiStatement: {
    claim: "AI makes more directions cheap. Judgment is still the job.",
    detail: "I use ChatGPT and Codex to reason through a problem, Claude Code to build working prototypes, and React and Figma to pressure-test the experience. I still decide what evidence matters, what should be built, which tradeoffs are worth making, and when a direction is wrong.",
    chips: ["ChatGPT", "Codex", "Claude Code", "React", "Figma", "MCP"],
  },

  // ── 08–09. WHY THIS ROLE, THEN THE CTA ─────────────────────────────────────
  // ⚠️ Jenny's spec message was cut off mid-sentence at the end of section 07, so
  // sections 08 and 09 carry the copy she approved in the previous pass, unchanged.
  whyThisRoleHeading: "Why provider experience",
  whyThisRole:
    "I like products where many signals and competing workflows all land on one person at once. The work I care about is making the next action feel obvious anyway.",

  ctaPrimaryLabel: "Book 30 minutes",
};
