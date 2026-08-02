// Re-weighted 2026-08-01 after a hiring-manager critique (via ChatGPT). The prior version led
// with strategy/research (Roadrunner first) and under-proved consumer MOBILE CRAFT, which is
// Step's actual hiring risk. Fix: consumer money + rewards + mobile lead; strategy is the
// multiplier below. Craft is answered with pictures too (StepPage surfaces the MegPrime + Arena
// mobile screens high, via LLSelectedProjects moved above How-I-work).
//
// Locked rules that survive every rewrite:
//   - No `heroHeadline`. The role title is the h1 (Jenny 2026-07-30).
//   - `oneLiner` empty: the hook is letter[0], one paragraph, not a centered lead.
//   - ArborXR ask/proof shape. The gap clauses (native-app craft, growth-as-discipline) live
//     INSIDE proof rows, never re-stacked into their own section. Three reviewers flagged that.
//   - Voice: plain, blunt, fact-backed, NO em-dashes.
//
// [CONFIRM with Jenny before sending] — new/loosened facts flagged in the 2026-08-01 pass:
//   1. Row 2 shared marketing/DS library: exact scope.
//   2. Row 4 raise-the-craft line: review criteria / direction / reusable patterns wording.
//   3. Row 1 attribution: "I owned the value story, not every lever behind those numbers."
//   4. Close: reworked Beast-reach line (below) vs the prior "Pick the area you check most."

export const step = {
  name: "Step",
  role: "Lead Product Designer, Growth",

  oneLiner: "",

  // Para 1 keeps the teenager open and now lands on a product insight. Para 2 keeps her real
  // track record but no longer diagnoses Step as greenfield (the JD names other designers + an
  // existing design system). Para 3 reframes to the Beast-reach challenge instead of telling
  // Greg his product is untuned.
  letter: [
    "Greg, I have a teenager at home. Step is where a lot of kids that age will form their first idea of how money works. A first money app teaches a young person what money is for, and whether managing it feels like something they can do or something to be scared of. I've spent years making billing, rewards and payments make sense to adults. I'd rather spend the next stretch doing it for them.",
    "I've been the first or only designer in a building twice. Both times I built the design practice and shipped the product at once, because there was nobody to hand either one to. I've also led designers and worked inside a system I didn't own, so I can move either way.",
    "The hard part I see is turning Beast and MrBeast reach into a signup, onboarding and rewards experience young people understand, trust, and keep using. That's the work I've done for adults, and the numbers are attached below.",
  ],

  summaryHeading: "What the job takes. What I've done.",
  summaryRows: [
    {
      // ROW 1 — LEAD. Consumer money, mobile, rewards. Closest to Step. Native-app craft
      // boundary rides as the last clause (ArborXR's "the headset would be new to me" move).
      ask: "Own the rewards loop end to end",
      proof: [
        "myPerks, 4 million members. I ran the research across them and redesigned how the program showed its worth.",
        "Customers were doing the math and deciding rewards weren't worth chasing. So I surfaced them at every touchpoint, broke big redemptions into small visible milestones, and made the math disappear. People saw progress, not percentages.",
        "The results that followed: spend per member up 384%, visits up 212%, 53,000 new households, and it ran 30% cheaper. I owned the value story, not every lever behind those numbers.",
        "My deepest shipped work is responsive consumer and mobile fintech, not owning a native banking app end to end. That native ownership is my growth edge. The consumer money, the rewards, the complex flows and the close work with engineers come with me.",
        "Then MegPrime Pay, a consumer money app on mobile, where USDC, KYC and state-by-state licensing all sit under a screen that just shows a renter what they'd earn.",
      ],
    },
    {
      // ROW 2 — NEW. Shared Marketing + Design System library. Answers the JD's range,
      // Marketing collaboration, and design-system asks. Brand-forward gap becomes a strength.
      ask: "Move between systemized UI and brand-forward",
      proof: [
        "At Giant Eagle, Product Design and Marketing were building related customer experiences on separate systems.",
        "I built a shared component and brand library so both teams worked off one foundation, while product UI and campaign needs each kept the room they needed.",
        "So I've shipped both ends: the tight, systemized product screen, and the brand-forward moment a campaign lives on. I move between them.",
        "That range is what a design system and marketing collaboration both call for.",
      ],
    },
    {
      // ROW 3 — the strategy multiplier, now third (was first). "PRD" reworded so it doesn't
      // read as PM. Growth-as-discipline gap rides as the last clause.
      ask: "Decide what to build, not just how it looks",
      proof: [
        "One billing page in. Four projects out. 28 clicks became 3.",
        "Roadrunner scoped me one screen. The research said 28 clicks across four apps to enter a single bill, and 75% of bills identical to last month, retyped from scratch anyway.",
        "74.6% used the platform daily. Only 32.2% said they knew it well. That's a system problem, not a page problem, so I took it to leadership, turned the research into a four-part product direction, and partnered with Product to define the requirements.",
        "I haven't run growth as a live-experiment discipline, and nothing I've shipped had MrBeast pointed at the front door. The number above came from deciding what got built.",
      ],
    },
    {
      // ROW 4 — direction that raises craft, not just headcount. Inscho quote verbatim.
      ask: "Direct designers and raise the craft bar",
      proof: [
        "Giant Eagle had no user research until I built it. I introduced testing, hired the researchers, and won the first Qualtrics budget the company ever funded.",
        "I was promoted to Sr. Manager, leading 5+ designers across the US and India.",
        "I raise craft by making it repeatable. I set the review criteria, gave designers direction on interaction and visual hierarchy, and built reusable patterns so a fix survived past a single critique.",
        "Jeffrey Inscho, a Senior PM there: “Jenny deeply understands how research and design influence product strategy.”",
      ],
    },
  ],

  howIWork: {
    eyebrow: "How I work",
    heading: "Judgment first, then screens",
    subheading: "",
    columns: 1,
    tiles: [
      {
        icon: "fa-light fa-code",
        heading: "I shorten the distance between design and production",
        body: "At Arena the Figma-to-handoff pipeline was too slow for the work in front of it. I replaced it with working React prototypes in Claude Code. Rebuilding a standard product screen from approved components went from about four hours in Figma to about twenty minutes in the prototype, roughly 10x on that task. I also ran an audit that surfaced 97 usability issues across the core flows, then shipped the fixes as a build engineers could run.",
      },
      {
        icon: "fa-light fa-magnifying-glass",
        heading: "AI widens the options, the judgment stays mine",
        body: "AI lets me put more ideas, at higher fidelity, in front of a real test before I commit. The decisions stay mine. On Giant Eagle's Curbside onboarding, one of the company's first unmoderated studies, I had same-day results, answered every gap a first-timer hit, and shipped 15.27% more signups.",
      },
      {
        icon: "fa-light fa-comments",
        heading: "The team doesn't wait on me to unblock them",
        body: "I make the design call, show the reasoning, and Product, engineering and marketing keep moving. When someone pushes back, they argue with the logic, not with my taste. It's how you take the bottleneck off one person's desk.",
      },
    ],
  },

  // Reworked 2026-08-01 to carry the re-weight (retention as the real Step problem). Prior line
  // "Pick the area you check most. That's the one I want." kept in git if Jenny prefers it.
  close: "Beast reach gets them to sign up once. Keeping them is the job I want.",

  primaryLabel: "Book 30 minutes",
  secondaryLabel: "View resume",
};
