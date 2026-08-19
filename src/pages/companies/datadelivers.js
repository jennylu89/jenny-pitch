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
  identity: "Jenny Lu · Senior Product Designer",
  heroHeadline: "I find the decision in the data.",
  heroBody: [
    "Roadrunner asked me to fix one billing page. I mapped the workflow instead: 28 clicks across four apps to enter one bill, and 75% of bills identical to last month. Nobody asked for the rest. It shipped at 3 clicks a bill.",
  ],
  // ⛔ No capability line. It restated the body in arrows and added a fourth
  // type size to a hero that already had three.
  availability: "Available for fractional work, 20 hours a week.",
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
        proof: [
          "At Roadrunner, billing crossed work management, payments, contracts, and hauler data. 74.6% used it every day. Only 32.2% said they knew it well.",
          "I mapped how it all connected and treated billing as one workflow across the whole company. We pre-filled the repeated parts from contract terms and past cycles, cutting bill entry from about six minutes to one and manual errors by 40%.",
          "Operators kept what they needed to verify. The system stopped asking them to rebuild information it already knew.",
        ],
      },
      {
        claim: "I turn a screen full of data into one thing to do next.",
        proof: [
          "I went through an app hospitals had already bought, one that surgeons, ER nurses, and trauma teams were using mid-shift. I found 97 places where it broke down for them.",
          "Fixing 97 issues one by one still would not make a clear product. The home screen was a list of features. Clinicians needed to know what mattered now. I put the product in one clear order.",
          "That matches your move from reporting to insight and activation. The key question is what the user should do next.",
        ],
      },
      {
        claim: "I hand engineering a system, not a pile of screens.",
        proof: [
          "I built Roadrunner's library of more than 50 components with engineering. The rest of the platform used the same system.",
          "Then I put the research, decisions, tokens, components, and working prototypes in one React hub, so the thinking sat next to the thing being built and the good calls were easy to repeat.",
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
      "I can prove component coverage and that engineering valued my work. I have not been scored on sprint timing or rework. Judge both on the first sprint.",
  },

  // ── 03. HOW I WORK · four opinions, not five process steps ─────────────────
  // ⛔ The old version was Understand, Explore, Align, Prototype, Ship. Any
  // designer alive could have written it, and it said nothing a hiring manager
  // could act on. These four are Jenny's own, already live on the ArborXR page.
  // ⛔ The separate AI split-statement section is DELETED. "AI drafts. I decide."
  // answers their AI-native gate in four words and does not need 481px of its own.
  howIWork: {
    eyebrow: "How I work",
    heading: "Four things the case studies do not tell you",
    tiles: [
      {
        icon: "fa-light fa-user",
        heading: "I managed twice. Now I want the work.",
        body: "I ran design teams at Giant Eagle and Roadrunner. Since 2023 I have worked directly on the product as the designer at Arena Labs and MegPrime Pay, partnering with Seed and Series A founders. I know what a team gives you. I also know how to move without one. Twenty hours a week with my hands on the work is exactly the shape I want.",
      },
      {
        icon: "fa-light fa-code",
        heading: "I prototype to decide.",
        body: "I started in front-end development and later built Roadrunner's 50+ component library alongside engineering. I prototype far enough to settle the hard questions before production, not to replace engineering. That is also why I can work in your repo instead of throwing files over a wall.",
      },
      {
        icon: "fa-light fa-wand-magic-sparkles",
        heading: "AI drafts. I decide.",
        body: "Claude Code can produce a working first draft in minutes, and keep generating past the point where the product gets worse. I use AI to make ideas concrete and testable early. Knowing what to build, what to question, and when to stop is still my job. This page was built that way.",
      },
      {
        icon: "fa-light fa-chart-line",
        heading: "I measure the behavior, not the deliverable.",
        body: "At Giant Eagle, myPerks did not need better rewards. Members needed to understand the value already there. I made that value easier to see, and the rewards program itself did not change. That work helped raise spend per member by 384% and visits by 212%. A shipped screen is not the outcome. Changed behavior is.",
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
    heading: "The design problem was what to do next",
    lead: [
      "This is the closest case to your product. Coaching, wearable data, daily practices, and content did not add up to one experience. I found the order that told each user what to do next. The key was the order, not a better chart.",
    ],
    projectIds: ["arenalabs"],
  },

  // ── 06. SHIPPED INSIDE AN EXISTING SYSTEM ──────────────────────────────────
  // The measured project. Renders through the shared case-study component with
  // its existing copy, so src/data/jenny.js is untouched and no other page moves.
  supporting: {
    eyebrow: "01 · Roadrunner Recycling",
    heading: "Billing, from 28 clicks to 3",
    lead: [
      "You have a working prototype and years of client context. This case shows how I step into a live system, learn the work, and improve the part that matters.",
    ],
    projectIds: ["roadrunner"],
  },

  // ── 07. FIRST 30 DAYS ──────────────────────────────────────────────────────
  // v1 ended on "why this maps," which is a claim. v2 ends on a plan, which is
  // cheaper for them to evaluate and shows the product was actually understood.
  plan: {
    eyebrow: "If you brought me on",
    heading: "What I would do in the first 30 days",
    tiles: [
      {
        icon: "fa-light fa-magnifying-glass",
        heading: "Week 1 · Learn the prototype and the data",
        body: "Go through the prototype with the team that built it. Learn the data model and client history from the data team. My job is to build on what they know.",
      },
      {
        icon: "fa-light fa-diagram-project",
        heading: "Week 2 · Map insight to activation",
        body: "Trace the path from seeing an insight to choosing an audience to taking action. Mark where it breaks. Use that map to set scope.",
      },
      {
        icon: "fa-light fa-layer-group",
        heading: "Week 3 · Audit the component library",
        body: "List what exists, find patterns used only once, and mark the new components the roadmap needs. You named coverage as a measure, so I would check it early.",
      },
      {
        icon: "fa-light fa-code",
        heading: "Week 4 · Ship one scope end to end",
        body: "Take one feature from idea to working prototype to a clear handoff, all in one sprint. Then you can judge my delivery, rework, and handoff on real work.",
      },
    ],
  },

  // ── 08. CONTACT ────────────────────────────────────────────────────────────
  close: {
    heading: "Available for fractional work, 20 hours a week",
    text: "Point me at one product area. In the first week, I will show you what I learned and where I would start.",
    primaryLabel: "Book 30 minutes",
    secondaryLabel: "View resume",
  },
};
