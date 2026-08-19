// ⭐ REBUILT 2026-08-05 from Jenny's pasted GPT-hybrid copy + the section-by-section spec she pasted.
// Candidate thesis (WHY ME): "I find what matters, simplify complex systems, and make good judgment
// reusable." Hero keeps "problem behind the ask" (spec: "problem" > "system", do not abstract it).
// The company's product challenge lives in the CLOSE, not WHY ME. XR-gap line dropped on purpose
// (spec: WHY ME is one sentence, no explanatory paragraph, do not foreground a weakness the JD
// doesn't require). All em-dashes from the pasted copy stripped per Jenny's hard rule.
//
// ⛔ HONESTY LINES, still binding: (1) components are NOT an npm package or Claude skill; (2) no
// XR/VR/AR domain claim; (3) no Series A -> B/C growth claim; (4) the design engineer owns the build,
// her coding is credibility not the pitch, she never pitches replacing him.
//
// ⚠️ OPEN (needs Jenny's screens): the spec's visual requirement is that the Roadrunner case study
// VISIBLY prove data-dense interface design (a dashboard/tables/statuses at readable scale). That is
// the case-study images in jenny.js (roadrunner-flow/screen PNGs), which cannot be judged from here.
export const arborxr = {
  name: "ArborXR",
  role: "Principal Product Designer",

  heroHeadline: "I find the problem behind the ask.",

  oneLiner:
    "Roadrunner asked me to fix one billing page. I mapped the workflow instead: 28 clicks across four apps to enter one bill, and 75% of the bills identical to last month. Nobody asked for the rest. It shipped at 3 clicks a bill.",

  // WHY ME = the candidate thesis, one sentence, no explanatory paragraph. It previews the 3 pillars:
  // find what matters, simplify complexity, make judgment reusable.
  summaryHeading: "I find what matters, simplify complex systems, and make good judgment reusable.",

  summaryRows: [
    {
      ask: "I find the real work, not just the requested screen.",
      proof: [
        "Giant Eagle had never run user research. I started it: ran the first tests, hired the researchers, and won the budget at a company that had never funded one.",
        "One of our first studies examined a curbside page the team had polished for months. First-time customers couldn't tell whether they paid online or at pickup.",
        "We answered those questions on the page. Conversion increased 15.27%.",
      ],
    },
    {
      ask: "I make complex systems easier to run without taking away control.",
      proof: [
        "At Roadrunner, billing crossed work management, payments, contracts, and hauler data. 74.6% used it every day. Only 32.2% said they knew it well.",
        "I mapped how it all connected and treated billing as one workflow across the whole company. We pre-filled the repeated parts from contract terms and past cycles, cutting bill entry from about six minutes to one and manual errors by 40%.",
        "Operators kept what they needed to verify. The system stopped asking them to rebuild information it already knew.",
      ],
    },
    {
      ask: "I make the quality bar usable by the whole team.",
      proof: [
        "I went through an app hospitals had already bought, one that surgeons, ER nurses, and trauma teams were using mid-shift. I found 97 places where it broke down for them.",
        "The biggest one was structural: the home screen showed a pile of features when clinicians just needed to know what to do next. I reframed it around three time-aware states, pre-shift, mid-shift, and post-shift, with one recommendation in each.",
        "Then I put the research, decisions, tokens, components, and working prototypes in one React hub. AI got the first drafts done faster. And because the thinking was right there on the screen, the good calls were easy to repeat.",
      ],
    },
  ],

  howIWork: {
    eyebrow: "How I work",
    heading: "Four things the case studies don't tell you",
    subheading: "",
    columns: 2,
    tiles: [
      {
        icon: "fa-light fa-user",
        heading: "I managed twice. Now I want the work.",
        body: "I ran design teams at Giant Eagle and Roadrunner. Since 2023, I've worked directly on the product as the designer at Arena Labs and MegPrime Pay, partnering with Seed and Series A founders. I know what a team gives you. I also know how to move without one. I wanted my hands back on the work.",
      },
      {
        icon: "fa-light fa-code",
        heading: "I prototype to decide.",
        body: "I started in front-end development and later built Roadrunner's 50+ component library alongside engineering. I prototype far enough to settle the hard questions before production, not to replace engineering. Then I partner with design engineering to carry the direction into a coherent product.",
      },
      {
        icon: "fa-light fa-wand-magic-sparkles",
        heading: "AI drafts. I decide.",
        body: "Claude Code can produce a working first draft in minutes, and continue generating past the point where the product gets worse. I use AI to make ideas concrete and testable early. Knowing what to build, what to question, and when to stop is still my job.",
      },
      {
        icon: "fa-light fa-chart-line",
        heading: "I measure the behavior, not the deliverable.",
        body: "At Giant Eagle, myPerks did not need better rewards. Members needed to understand the value already there. I made that value easier to see, and the rewards program itself did not change. That work helped raise spend per member by 384% and visits by 212%. A shipped screen is not the outcome. Changed behavior is.",
      },
    ],
  },

  close: "Keeping ArborXR simple as you add new devices, in-headset, and an AI layer. That's the job I want.",

  primaryLabel: "Book 30 minutes",
  secondaryLabel: "View resume",
};
