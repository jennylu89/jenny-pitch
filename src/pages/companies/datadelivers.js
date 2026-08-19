// ─────────────────────────────────────────────────────────────────────────────
// DATADELIVERS · Fractional Product Designer, 20 hrs/week
// ─────────────────────────────────────────────────────────────────────────────
// REBUILT 2026-08-18, second version. Jenny killed v1.
//
// WHY v1 FAILED: it was 23 blocks and 12,078px of scroll, built as a narrative
// case study. A fractional 20 hour hire is a capability purchase, not a story
// purchase. The reader is deciding whether this person can produce, fast, in
// their stack, and hand off clean. v1 made them scroll twelve screens to find out.
//
// WHAT v2 IS BUILT ON: the job description names four performance metrics, and
// every one of them is a handoff metric.
//   1 design delivery on time against sprint schedules
//   2 implementation fidelity, shipped features match spec without rework
//   3 component library coverage, fewer one-off patterns flagged in QA
//   4 engineering and PM satisfaction with handoff quality
// Those four ARE the page. Section 03 is the spine, and everything under it is
// evidence for one of the four.
//
// It also says out loud: "If AI-native workflows aren't how you work, this isn't
// the project for you." That is the one thing they gate on, so it is answered
// in section 04, above both case studies.
//
// ⛔ EVIDENCE RULES, enforced while writing this file:
//   · No invented metrics. Every number here already exists in src/data/jenny.js.
//     28+ → 3 clicks, ~6 → ~1 min, 50+ components, 74.6% / 32.2% are Roadrunner's,
//     measured. Nothing else numeric goes on this page.
//   · Arena's recovery work is IN DEVELOPMENT. Never write it as an adoption win.
//   · Every screenshot is a real capture from the Strive prototype. No mockups
//     were made for this page.
//
// ⛔ MEATINGPLACE stays removed, Jenny's call 2026-08-18.
// ⛔ No em-dashes anywhere in this file. Jenny's standing rule.
// ─────────────────────────────────────────────────────────────────────────────

export const datadelivers = {
  name: "DataDelivers",
  role: "Fractional Product Designer",

  // ── 01. HERO ───────────────────────────────────────────────────────────────
  // The availability line is new in v2 and it is deliberate. The role is
  // fractional at 20 hours. v1 never said she was available on those terms, so
  // the reader's biggest unknown survived the whole page.
  identity: "Jenny Lu · Fractional Product Designer",
  heroHeadline: "I find the decision in the data.",
  heroBody: [
    "Roadrunner asked me to fix one billing page. I found the real problem around it: entering one bill took 28 clicks across four apps, even though 75% repeated last month's data. I redesigned the workflow and cut entry to 3 clicks.",
  ],
  // ⛔ No capability line. It restated the body in arrows and added a fourth
  // type size to a hero that already had three.
  availability: "Available for fractional product work, up to 20 hours a week.",
  heroPrimaryLabel: "Book 30 minutes",
  heroPrimaryHref: "#work",
  // ⛔ ONE button in the hero. ArborXR ships one and it is the stronger page.

  // ── 02. WHY ME · claim, then THE PROOF ─────────────────────────────────────
  // ⛔ This replaces the proof bar AND the four-row measures table. Both are gone.
  //
  // Why: the table listed the employer's four metrics and answered three of them
  // with another sentence about how she works. An outside review called it out
  // as "claiming the employer's exact metrics without receipts," and it was right.
  // A story that ends in a number does the same job and survives an audit.
  //
  // ⛔ CONTENT CONTRACT for this block: left column is one claim. Right column is
  // something that HAPPENED, ending in a number. If a row cannot end in a number,
  // it moves to How I Work. Do not add a fifth row to be thorough.
  //
  // Every figure below already appears on Jenny's live ArborXR page in her own
  // words. Nothing here is new, invented, or estimated.
  whyMe: {
    eyebrow: "Why me",
    heading: "I find what matters, simplify complex systems, and make good judgment reusable.",
    rows: [
      {
        claim: "I find the real work, not just the requested screen.",
        label: "Roadrunner · Billing",
        proof: [
          "At Roadrunner, billing crossed work management, payments, contracts, and hauler data. 74.6% of operators used the platform daily, but only 32.2% felt they knew it well.",
          "I mapped billing across the company as one workflow. We pre-filled repeated data from contract terms and past cycles, cutting entry time from about 6 minutes to 1 and reducing manual errors by 40%.",
          "Operators kept what they needed to verify. The system stopped asking them to rebuild information it already knew.",
        ],
      },
      {
        claim: "I turn dense data into a clear next decision.",
        label: "Arena Labs · Strive",
        proof: [
          "I evaluated a healthcare performance app used by surgeons, ER nurses, and trauma teams during live shifts. I logged 97 usability failures across the experience.",
          "Fixing 97 issues one by one would not have fixed the product. The home screen behaved like a feature library, but clinicians needed to know what mattered now. I reorganized the experience around four questions: What am I trying to do? How am I doing? What should I do now? What should I learn next?",
          "That is the shift from reporting to action. The hard part is not showing the data. It is helping someone decide what to do next.",
        ],
      },
      {
        claim: "I hand engineering a system, not a pile of screens.",
        label: "Roadrunner · Design system",
        proof: [
          "I built Roadrunner's 50+ component library with the engineers who used it to ship the platform.",
          "I put the research, decisions, tokens, components, and working prototypes in one React hub. The reasoning stayed beside the work, so teams could reuse decisions instead of reopening them.",
        ],
        quote:
          "Jenny pioneered a design system library that gave our web pages a unified look and feel. She is a force multiplier.",
        quoteBy: "Michael Quintero, Software Engineer, Roadrunner Recycling",
      },
    ],
    // ⛔ The honesty note is ONE line and it stays one line. The earlier version
    // spent a whole section defending two missing numbers, and the copy review
    // called that talking herself out of the job. Name the gap, make the first
    // sprint the test, move on.
    note:
      "What I can prove now: a 50+ component library and an engineer's account of the handoff. What I would measure with your team: cycle time and rework, starting in the first sprint.",
  },

  // ── 03. HOW I WORK · four opinions, not five process steps ─────────────────
  // ⛔ The old version was Understand, Explore, Align, Prototype, Ship. Any
  // designer alive could have written it, and it said nothing a hiring manager
  // could act on. These four are Jenny's own, already live on the ArborXR page.
  // ⛔ The separate AI split-statement section is DELETED. "AI drafts. I decide."
  // answers their AI-native gate in four words and does not need 481px of its own.
  howIWork: {
    eyebrow: "How I work",
    heading: "How I work with your team",
    tiles: [
      {
        icon: "fa-light fa-user",
        heading: "I have managed teams. I still do the work.",
        body: "I led design teams at Giant Eagle and Roadrunner. Since 2023, I have worked hands-on with Arena Labs, MegPrime Pay, and Seed to Series A founders. I can align a team when one exists and keep moving when it does not. At 20 hours a week, I stay close enough to own the work from problem to shipped scope.",
      },
      {
        icon: "fa-light fa-code",
        heading: "I prototype to decide.",
        body: "I started in front-end development and later built Roadrunner's 50+ component library with engineering. I prototype far enough to settle hard questions before production, not to replace engineering. I work in the codebase, test the behavior, and hand off decisions with the implementation context intact.",
      },
      {
        icon: "fa-light fa-wand-magic-sparkles",
        heading: "AI drafts. I decide.",
        body: "AI can produce a working first draft in minutes, then keep generating past the point where the product gets worse. I use it to make ideas concrete and testable early. Deciding what to build, what to question, and when to stop is still my job.",
      },
      {
        icon: "fa-light fa-chart-line",
        heading: "I measure the behavior, not the deliverable.",
        body: "Giant Eagle's myPerks did not need richer rewards. Members needed to see the value already available. Making that value clear, without changing the rewards program, contributed to a 384% increase in spend per member and a 212% increase in visits. The screen was the intervention. Changed behavior was the outcome.",
      },
    ],
  },

  // ── 04b. ARENA ─────────────────────────────────────────────────────────────
  // ⛔ REVERTED 2026-08-18. A bespoke three-screen block was built here. That was
  // wrong: src/data/jenny.js already carries the full `arenalabs` case study,
  // the same one the ArborXR page renders, with the four-question model, the 97
  // usability issues, the before screen, the three time-aware screens, and the
  // design-decision cards. It also carries the "still in development" boundary.
  //
  // ⛔ Render it through the SHARED LLCaseStudy like Roadrunner. Do not hand-write
  // an Arena block on this page again. If Arena's story needs to change, change it
  // in src/data/jenny.js so every page that shows it stays in sync.
  arena: {
    eyebrow: "02 · Arena Labs / Strive",
    heading: "The hard part was turning health data into the next action",
    lead: [
      "The product already had coaching, wearable data, daily practices, and content. It did not have a clear order. The work was deciding what a clinician needed now, not drawing a better chart.",
    ],
    projectIds: ["arenalabs"],
  },

  // ── 06. SHIPPED INSIDE AN EXISTING SYSTEM ──────────────────────────────────
  // The measured project. Renders through the shared case-study component with
  // its existing copy, so src/data/jenny.js is untouched and no other page moves.
  supporting: {
    eyebrow: "01 · Roadrunner Recycling",
    heading: "One billing screen hid a four-app workflow",
    lead: [
      "Roadrunner asked for a better billing screen. Field research showed that the real problem stretched across four apps, five teams, and 28 clicks. I narrowed the intervention to the workflow operators repeated every month, then shipped it without redesigning the whole platform.",
    ],
    projectIds: ["roadrunner"],
  },

  // ── 07. FIRST 30 DAYS ──────────────────────────────────────────────────────
  // v1 ended on "why this maps," which is a claim. v2 ends on a plan, which is
  // cheaper for them to evaluate and shows the product was actually understood.
  plan: {
    eyebrow: "The first 30 days",
    heading: "What I would deliver in the first 30 days",
    tiles: [
      {
        icon: "fa-light fa-magnifying-glass",
        heading: "Week 1 · Learn the product and its evidence",
        body: "Walk through the product with the team that built it. Review the data model, research, constraints, and open decisions. My job is to absorb what the team already knows before adding a new point of view.",
      },
      {
        icon: "fa-light fa-diagram-project",
        heading: "Week 2 · Map insight to activation",
        body: "Trace the path from seeing an insight to choosing who needs it and acting on it. Mark where the path breaks. Use that map to choose the first scope.",
      },
      {
        icon: "fa-light fa-layer-group",
        heading: "Week 3 · Audit what the team can reuse",
        body: "Inventory existing patterns, find one-off solutions, and identify the net-new components the roadmap needs. This reveals what can ship quickly and what needs system work first.",
      },
      {
        icon: "fa-light fa-code",
        heading: "Week 4 · Ship one scope end to end",
        body: "Take one feature from concept to working prototype to an engineer-ready scope in one sprint. You can judge my decisions, pace, and handoff on live work, not a portfolio story."
      },
    ],
  },

  // ── 08. CONTACT ────────────────────────────────────────────────────────────
  close: {
    heading: "Available for fractional product work · up to 20 hours a week",
    text: "Give me one product area. In the first week, I will show you the decisions it needs next.",
    primaryLabel: "Book 30 minutes",
    secondaryLabel: "View resume",
  },
};
