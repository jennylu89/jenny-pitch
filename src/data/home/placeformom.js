// ─────────────────────────────────────────────────────────────────────────────
// HIGH STAKES · healthcare, regulated, difficult decisions · /for/placeformom
// ─────────────────────────────────────────────────────────────────────────────
// Copy of default.js with the supporting line, the four cards and the project
// order changed. Nothing else differs.
//
// ⛔ heroHeadline is fixed. Do not rewrite it here.
// ⛔ Copy below is Jenny's, supplied verbatim 2026-08-19. Do not regenerate it.
// ⛔ No em-dashes.
// ─────────────────────────────────────────────────────────────────────────────

export default {
  // Display name, used for the "Back to X" link on the resume page.
  name: 'A Place for Mom',

  heroEyebrow: 'Senior Product Designer · High-stakes decisions',
  heroHeadline: 'I find what matters in complex products.',
  heroBody:
    'I design products that help people make confident decisions when information is complex and every choice matters.',

  valueCardsEyebrow: 'How I work',
  valueCardsHeading: 'Complex on the inside, obvious to the person using it.',
  valueCards: [
    {
      icon: 'fa-light fa-eye-slash',
      title: 'Reduce cognitive load',
      description:
        'When information is overwhelming, the product should help people understand what matters next.',
    },
    {
      icon: 'fa-light fa-magnifying-glass',
      title: 'Find the real problem first',
      description:
        'The requested screen is usually a symptom. I go find what is actually wrong before anyone draws it.',
    },
    {
      icon: 'fa-light fa-code',
      title: 'Bridge design and engineering',
      description:
        'I work through constraints, components, and implementation details so ideas become shipped products.',
    },
    {
      icon: 'fa-light fa-compass',
      title: 'Design for action',
      description:
        'Good products help people understand what to do next, not just what they are seeing.',
    },
  ],

  projectIds: ['roadrunner', 'arenalabs', 'megprime', 'myperks'],

  // ── Qualification ──────────────────────────────────────────────────────────
  // ⚠️ The /aplaceformom love-letter page carries a note saying the "Why me" block was
  // deleted on purpose and must not return. Jenny overruled that for THIS variant on
  // 2026-08-19. If that note still holds for you, delete this whole key and the section
  // disappears, nothing else breaks.
  // Every line below is verbatim from src/pages/companies/arborxr.js and datadelivers.js.
  qualification: {
    heading: "What you need. What I've done.",
    rows: [
      {
        ask: 'I make complex systems easier to run without taking away control.',
        proof: [
          'At Roadrunner, billing crossed work management, payments, contracts, and hauler data. 74.6% used it every day. Only 32.2% said they knew it well.',
          'I mapped how it all connected and treated billing as one workflow across the whole company. We pre-filled the repeated parts from contract terms and past cycles, cutting bill entry from about six minutes to one and manual errors by 40%.',
          'Operators kept what they needed to verify. The system stopped asking them to rebuild information it already knew.',
        ],
      },
      {
        ask: 'I find the real work, not just the requested screen.',
        proof: [
          'Giant Eagle had never run user research. I started it: ran the first tests, hired the researchers, and won the budget at a company that had never funded one.',
          "One of our first studies examined a curbside page the team had polished for months. First-time customers couldn't tell whether they paid online or at pickup.",
          'We answered those questions on the page. Conversion increased 15.27%.',
        ],
      },
      {
        ask: 'AI that creates leverage without replacing judgment.',
        proof: [
          'Claude Code can produce a working first draft in minutes, and keep generating past the point where the product gets worse. I use AI to make ideas concrete and testable early. Knowing what to build, what to question, and when to stop is still my job.',
        ],
      },
    ],
  },

  // Testimonials, selected and ordered from the one list in jenny.js.
  // Same reason as default. Conversion praise works against a high-stakes page.
  testimonialIds: ['jaythan', 'jeffrey', 'michael', 'mark'],

  ctaLabel: 'Book 30 minutes',
};
