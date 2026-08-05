// ⭐ CONVERTED TO 3-PILLAR STRATEGY-OBJECT STRUCTURE 2026-08-05, Jenny's call, overriding the 7/30
// 5-row lock on purpose. GPT verdict (pasted by Jenny) + our new format: organize around ONE thesis,
// not a row per JD area. Thesis: "Jenny sees the system behind the screen." Strategy object at
// applications/arborxr/strategy.md. 5-row snapshot at applications/arborxr/arborxr.js.bak-5row-20260805.
//
// ⛔ HONESTY LINES, still binding, do not soften or "improve":
//   1. Components are NOT an npm package and NOT a Claude skill (both Arena repos private, unpackaged,
//      verified 2026-07-31). He uses those exact words in his JD. Do not borrow them.
//   2. No XR/VR/AR domain claim. She has none. The gap is named ONCE, without apology (domainGap).
//   3. No Series A -> B/C GROWTH claim. Series A/Seed STAGE is fine.
//   4. The design engineer owns the build. Her coding is CREDIBILITY, never the pitch. She never
//      pitches replacing him.
//
// myPerks CUT from the argument 2026-08-05: loud numbers (384%, 4M) but consumer-loyalty, the least
// relevant evidence to complex enterprise ownership. Dropping impressive-but-off-thesis evidence is
// the strategy-object discipline. It survives only as one clause in a tile.
export const arborxr = {
  name: "ArborXR",
  role: "Principal Product Designer",

  // Locked 2026-07-30, Jenny's pick after both reviewers named the old h1 the top conversion risk.
  // The five sections below now read as evidence for this ONE claim.
  heroHeadline: "I find the problem behind the ask.",

  // Hero paragraph. Answers his most-repeated ask ("you spot things that aren't working and push to
  // fix them without being asked" + "surface structural rethinks unsolicited"). Facts from jenny.js.
  oneLiner:
    "Roadrunner asked me to fix one billing page. I mapped the workflow instead: 28 clicks across four apps to enter one bill, and 75% of the bills identical to last month. Nobody asked for the rest. It shipped at 3 clicks a bill.",

  // "Why this candidate for THIS problem." Replaces the old "Five of the things you'd have me own"
  // heading, which announced a requirements-matching exercise (the thing the new format kills).
  summaryHeading: "Your product is complex and getting more so. You need one person who can walk in, find what matters, make it simple, and leave the judgment behind so it holds after I move on. Three things I do:",

  // The domain gap, named once, no apology. Renders as the intro paragraph under the heading.
  domainGap: "I'm new to XR. I'm not new to walking into a technical field where the real work is invisible from a desk. Freight billing. Clinician recovery mid-shift. I learn the work from the people doing it, then turn it into product structure.",

  // THREE PILLARS (was five JD-keyed rows). Each ask is a claim in her voice, not a JD quote.
  // proof is an array: line 1 renders full-strength, the rest muted. The left "ask" label is hidden
  // on this page (ArborXRPage passes askLabel="") because these are claims, not his asks.
  //   Pillar 1: Roadrunner workflow + GE research-from-zero
  //   Pillar 2: GE IA (the "picture of the company" line stays verbatim)
  //   Pillar 3: Arena 97-issue audit + written bar (verbatim) + Claude Code result
  summaryRows: [
    {
      ask: "I uncover the real workflow, not the screen you asked for",
      proof: [
        "Give me one screen to fix, and I map the whole job before I touch it.",
        "Roadrunner handed me one billing page. I ran a platform-wide study and mapped the process across every department: 28 clicks across four apps to enter one bill, 75% of them duplicates of last month. We rebuilt the whole thing, down to 3 clicks.",
        "At Giant Eagle there was no research at all. I built the function from zero, introduced testing, hired the researchers, and won the Qualtrics budget at a company that had never funded one.",
        "One of the first studies was the Curbside page the team had polished for months. Same day, first-timers couldn't tell if you paid online or at pickup. We answered it on the page and conversion went up 15.27%.",
      ],
    },
    {
      ask: "I make complex systems make sense",
      proof: [
        "Most navigation is a picture of the company that built it.",
        "Giant Eagle's nav was sorted by department, two codebases behind it. People came for the weekly ad and cake orders, and both were buried.",
        "I rebuilt it as one flyout from one codebase, sorted by what people came to do.",
        "Cake-ordering clicks went up 278%, grocery 41%, shopping history 21%. One system to maintain instead of two.",
      ],
    },
    {
      ask: "I make good judgment reusable, so it holds when I'm not in the room",
      proof: [
        "A bar nobody writes down is just my taste. Written down, it holds when someone else owns the build.",
        "I found 97 usability issues in an app already sold to hospitals and used by surgeons, ER nurses and trauma teams mid-shift. Nobody had audited it. I wrote every one down.",
        "Then I rebuilt the home screen from a feature dump into 3 time-aware states, one recommendation each: pre-shift, mid-shift, post-shift.",
        "I rebuilt Arena's process around Claude Code and functional React, put 7 layers of that thinking at one URL, and retired 4 systems.",
      ],
    },
  ],

  howIWork: {
    eyebrow: "How I work",
    heading: "Four things the case studies don't tell you",
    subheading: "",
    tiles: [
      {
        icon: "fa-light fa-user",
        heading: "I managed twice. Now the work.",
        body: "I ran design teams at Giant Eagle and Roadrunner. Since 2023 I've been the only designer at Arena Labs and MegPrime Pay, for Seed and Series A founders. Nobody to hand the work to. That's the part I wanted.",
      },
      {
        // Confident partnership, replacing the old "I read code and I stay out of the way" (weak,
        // deferential). She owns the bar and the framing; the design engineer owns production.
        // Force-multiplier quote is verbatim (Michael Quintero, SWE, Roadrunner), the one third-party proof.
        icon: "fa-light fa-code",
        heading: "I prototype to decide",
        body: "At Roadrunner I built the 50+ component library with engineering, and an engineer there called me a force multiplier. I prototype to settle hard questions early, not to own production. The build stays with your design engineer. I set the bar and the framing above it.",
      },
      {
        icon: "fa-light fa-wand-magic-sparkles",
        heading: "AI drafts. I decide.",
        body: "Claude Code hands you 80% in minutes, then keeps going past where the work gets worse. I ship my own React with it, so ideas reach real users, not just a mock. Knowing when to stop is still my job.",
      },
      {
        icon: "fa-light fa-list-check",
        heading: "I make the bar observable",
        body: "Routine calls shouldn't wait on a designer. So I make the bar something you can see: a written audit, the principles, the components. When the judgment is on the page, the team keeps moving without me in the room.",
      },
    ],
  },

  // Locked 2026-07-31, Jenny's direct call. GPT flagged it generic 2026-08-05; left as-is per the
  // lock unless Jenny reopens it. Her voice, her warmth, makes the match HER assessment.
  close: "If it's a match, I'd love to chat.",

  primaryLabel: "Book 30 minutes",
  secondaryLabel: "View resume",
};
