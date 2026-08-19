// ─────────────────────────────────────────────────────────────────────────────
// DATA PRODUCTS · B2B SaaS, analytics, enterprise · /for/datadelivers
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
  name: 'DataDelivers',

  heroEyebrow: 'Senior Product Designer · Data-rich workflows',
  heroHeadline: 'I find what matters in complex products.',
  heroBody:
    'I help teams turn complex data and workflows into products people can understand and act on.',

  valueCardsEyebrow: 'How I work',
  valueCardsHeading: 'From the hard question to the shipped feature, in your repo.',
  valueCards: [
    {
      icon: 'fa-light fa-wand-magic-sparkles',
      title: 'Prototype to align',
      description:
        'I prototype just enough to answer the hard question and align the team before building.',
    },
    {
      icon: 'fa-light fa-scale-balanced',
      title: 'Design for the decision',
      description:
        'The product should be shaped by the decision someone needs to make, not how the data happens to be stored.',
    },
    {
      icon: 'fa-light fa-code',
      title: 'Design with engineering',
      description:
        'I work through constraints, components, and implementation details so ideas become shipped products.',
    },
    {
      icon: 'fa-light fa-layer-group',
      title: 'Make complexity reusable',
      description:
        'Reusable patterns help teams solve the same problem once instead of rebuilding it repeatedly.',
    },
  ],

  projectIds: ['roadrunner', 'designhub', 'arenalabs', 'myperks'],

  // ── Qualification ──────────────────────────────────────────────────────────
  // Ask and proof rows, per PERSONALIZATION.md. Every line below is verbatim from
  // src/pages/companies/datadelivers.js. Nothing new was written for this.
  // The AI row leads because the JD gates on it: "If AI-native workflows aren't how
  // you work, this isn't the project for you."
  qualification: {
    heading: "What you need. What I've done.",
    rows: [
      {
        ask: 'AI-native workflows, Figma plus Claude Code, as how you already work.',
        proof: [
          'Claude Code can produce a working first draft in minutes, and keep generating past the point where the product gets worse. I use AI to make ideas concrete and testable early. Knowing what to build, what to question, and when to stop is still my job. This page was built that way.',
        ],
      },
      {
        ask: 'I find the real work, not just the requested screen.',
        proof: [
          'At Roadrunner, billing crossed work management, payments, contracts, and hauler data. 74.6% used it every day. Only 32.2% said they knew it well.',
          'I mapped how it all connected and treated billing as one workflow across the whole company. We pre-filled the repeated parts from contract terms and past cycles, cutting bill entry from about six minutes to one and manual errors by 40%.',
          'Operators kept what they needed to verify. The system stopped asking them to rebuild information it already knew.',
        ],
      },
      {
        ask: 'I hand engineering a system, not a pile of screens.',
        proof: [
          "I built Roadrunner's library of more than 50 components with engineering. The rest of the platform used the same system.",
          'Then I put the research, decisions, tokens, components, and working prototypes in one React hub, so the thinking sat next to the thing being built and the good calls were easy to repeat.',
        ],
      },
    ],
  },

  // Testimonials, selected and ordered from the one list in jenny.js.
  // Harvey stays. This buyer is a data and marketing technology company, so conversion praise reads as relevant.
  testimonialIds: ['jaythan', 'jeffrey', 'michael', 'mark', 'harvey'],

  ctaLabel: 'Book 30 minutes',
};
