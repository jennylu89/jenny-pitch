// ─────────────────────────────────────────────────────────────────────────────
// DEFAULT · general product roles and fractional work · / and /for/default
// ─────────────────────────────────────────────────────────────────────────────
// This is the baseline. `/` loads this file, and every other variant is a copy
// of it with the copy and the project order changed.
//
// ⛔ heroHeadline is fixed. It is the same string in all four configs and it does
//    not change per application. Do not rewrite it here.
// ⛔ Copy below is Jenny's, supplied verbatim 2026-08-19. Do not regenerate it.
// ⛔ No em-dashes. Jenny's standing rule.
// ─────────────────────────────────────────────────────────────────────────────

export default {
  // Display name, used for the "Back to X" link on the resume page.
  name: 'Jenny Lu',

  heroEyebrow: 'Product Designer',
  heroHeadline: 'I find what matters in complex products.',
  heroBody:
    'I help teams turn complex workflows, data, and ideas into products people can understand and act on.',

  valueCardsEyebrow: 'How I work',
  valueCardsHeading: 'One person, from the first question to the shipped screen.',
  valueCards: [
    {
      icon: 'fa-light fa-magnifying-glass',
      title: 'I find the real problem first',
      description:
        'Roadrunner asked me to fix one billing page. I found a broken workflow across four applications, then redesigned the experience around the real problem.',
    },
    {
      icon: 'fa-light fa-wand-magic-sparkles',
      title: 'I prototype to align',
      description:
        'I prototype just enough to answer the hard question and align the team before building.',
    },
    {
      icon: 'fa-light fa-code',
      title: 'I stay through shipping',
      description:
        'I work closely with engineers through implementation, QA, and the details that turn ideas into products.',
    },
    {
      icon: 'fa-light fa-swatchbook',
      title: 'I make decisions reusable',
      description:
        'Design systems capture product decisions so teams can move faster after the project ends.',
    },
  ],

  // Ordering omitted on purpose, so HOME_ORDER in Projects.jsx stays exactly as
  // it is today. Add projectIds here only if the default order should change.

  // Testimonials, selected and ordered from the one list in jenny.js.
  // Harvey is a client praising funnel and conversion work. Off message on a page selling product design.
  testimonialIds: ['jaythan', 'jeffrey', 'michael', 'mark', 'ron'],

  ctaLabel: 'Book 30 minutes',
};
