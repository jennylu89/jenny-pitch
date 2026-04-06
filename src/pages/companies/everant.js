export const everant = {
  name: "Everant AI",
  role: "Product Designer (Contract)",

  // Hero one-liner
  oneLiner: "10 years shipping products from research through code — specializing in 0→1 builds, design systems, and enterprise internal tools.",

  // Summary section — mapped to what surfaced in the conversation
  summaryHeading: "Everything you described in our conversation maps to something I've already shipped.",
  summaryRows: [
    {
      ask: "Enterprise-grade design — trustworthy, polished, professional",
      proof: "Redesigned Giant Eagle's loyalty for 4M members and Roadrunner's billing platform for enterprise ops teams. Trust isn't just UI — it's language, data, and consistency across every surface.",
    },
    {
      ask: "AI agent UX — long-running jobs, decision points, context surfacing",
      proof: "Redesigned Arena Strive around 3 time-aware states that surface the right action at the right moment based on biometrics. Same pattern — contextual, personalized, no menu-diving.",
    },
    {
      ask: "0→1 — nothing's built yet, need a designer who can start from scratch",
      proof: "First UX hire at Giant Eagle. Sole designer at Arena Labs. Built the practice, the system, and the product simultaneously. Blank canvas is where I work best.",
    },
    {
      ask: "Design systems — tokens, components, patterns from the ground up",
      proof: "50+ component library at Roadrunner, consolidated 4 deliverable systems into 1 React-based Design Hub at Arena Labs.",
    },
    {
      ask: "CRM / B2B SaaS — Salesforce-adjacent, internal tools",
      proof: "Roadrunner's billing overhaul was exactly this — enterprise internal tools where reps bounced between 4 apps per invoice. Reduced 28 clicks to 3.",
    },
    {
      ask: "AI-native workflow — using AI to accelerate design and development",
      proof: "Built this portfolio, a 405-lead gen pipeline, and a full design hub with Claude Code. Research synthesis, prototyping, and shipping — all AI-accelerated.",
    },
  ],

  sections: [
    {
      id: "enterprise-trust",
      tocLabel: "Enterprise-Grade Design",
      requirement: "Make the product look trustworthy, polished, and professional — a big gap right now",
      title: "Trust isn't a coat of paint. It's built into every layer.",
      story: [
        "You mentioned enterprise polish is a big gap. I've been here before. At Giant Eagle, the loyalty program was technically generous — customers just couldn't feel it. They'd do the math wrong and assume it wasn't worth it. The redesign wasn't about making it prettier. It was about surfacing value at every touchpoint so 4M members could feel like they were winning.",
        "At Roadrunner, the billing platform crashed 3–7 times a week. Reps didn't trust the tool. The redesign wasn't just fewer clicks — it was building a system that felt reliable. Consistent patterns, predictable behavior, a component library that enforced quality across every screen.",
        "For Everant, trust means enterprise buyers look at your product and feel confident putting their CRM operations in AI hands. That's design language, data transparency, and polish — but it starts with the system underneath.",
      ],
      metrics: [
        { value: "384%", label: "Spend per member (Giant Eagle)" },
        { value: "4M", label: "Members impacted" },
      ],
      testimonial: {
        quote: "Jenny pioneered a design system library that gave our web pages a unified look and feel. She is a force multiplier and could be an asset to any organization.",
        name: "Michael Quintero",
        title: "Software Engineer · Roadrunner Recycling",
      },
    },
    {
      id: "agent-ux",
      tocLabel: "AI Agent UX",
      requirement: "Design how users interact with AI agents — long-running jobs, decision points, context, notifications",
      title: "The 5-million-record problem isn't a notification. It's a conversation.",
      story: [
        "You described an agent updating 5 million records and running into edge cases — no address, no town, just a country. The instinct is to prompt the user every time. But that's the Claude permissions problem — approving things every 2 seconds until you stop paying attention.",
        "At Arena Labs, I solved a version of this: clinicians during 12-hour shifts needed the right intervention at the right moment. Not a menu — one recommendation, contextually chosen, based on biometrics and time of day. The principle transfers: don't interrupt, surface what matters when it matters.",
        "For Everant specifically, I'd approach the agent UX in three layers. First: a decision queue — batch the edge cases the agent can't resolve and let the user triage them in one session, not one-by-one as they arise. Second: a confidence threshold — the agent handles high-confidence actions automatically and only escalates ambiguous ones, with a clear audit trail of what it decided and why. Third: a job dashboard that shows progress, decisions made, and decisions pending — so the user can check in on their terms, not on the agent's schedule.",
      ],
      metrics: [
        { value: "3", label: "Proposed UX layers" },
        { value: "28→3", label: "Clicks per task (Roadrunner)" },
      ],
    },
    {
      id: "zero-to-one",
      tocLabel: "0→1 Builder",
      requirement: "Early stage — nothing's built yet, need a designer who can build from scratch",
      title: "First designer. No playbook. Built the practice and the product at the same time.",
      story: [
        "At Giant Eagle, I was the first UX hire at the company. There was no design practice, no system, no research process. I built all three while shipping the product. The myPerks loyalty redesign, the Scan Pay & Go experience across mobile, web, and in-store devices — all while establishing the team's first design system and WCAG standards.",
        "At Roadrunner, I was hired to fix one billing page. Before I touched a screen, I ran a 142-person usability study. The data expanded the scope to a full platform overhaul. Just me and engineering — no design team, no playbook.",
        "Everant is at the same stage. Nothing's built. You need someone who can go from blank canvas to shipped product — research, design, system, and code. First designer at Giant Eagle, sole designer at Arena Labs. That's the mode I work best in.",
      ],
      metrics: [
        { value: "2×", label: "First designer at company" },
        { value: "142", label: "Person usability study (solo)" },
      ],
      testimonial: {
        quote: "Jenny deeply understands how research and design influence product strategy and flow into achieving measurable objectives. Strong UX leadership.",
        name: "Jeffrey Inscho",
        title: "Senior Product Manager · Giant Eagle",
      },
    },
    {
      id: "design-systems",
      tocLabel: "Design Systems",
      requirement: "Build the design language, token system, and component library from the ground up",
      title: "The Design Hub I showed you replaced Figma, Notion, Storybook, and PDF specs with one URL.",
      story: [
        "You saw the Arena Labs project in our call — the design system, the token architecture, the component patterns, the research docs all in one place. That wasn't a nice-to-have. As the sole designer on limited hours, I couldn't afford four separate systems.",
        "So I built one. React + Vite, one URL. Clickable prototype with a dev mode token inspector. Full design system across 3 token tiers. 8 research docs, 97 usability issues tracked with localStorage. Engineers inspect tokens. Stakeholders tap prototypes. Research lives next to the decisions it shaped.",
        "For Everant, I'd build the same foundation — a design system that scales with the product, not a Figma file that gets out of date the day after handoff.",
      ],
      metrics: [
        { value: "4→1", label: "Systems consolidated" },
        { value: "97", label: "Usability issues tracked" },
      ],
    },
    {
      id: "crm-b2b",
      tocLabel: "CRM & B2B SaaS",
      requirement: "Salesforce-adjacent product — integrate AI into existing CRM tools, not replace them",
      title: "Roadrunner was the same problem: enterprise ops teams stuck in fragmented tools.",
      story: [
        "At Roadrunner, billing reps bounced between 4 apps per invoice. 28+ clicks per bill. 75% of bills were identical to the previous month — yet every one was entered from scratch. The platform went down 1–2 times per week. That's not a UI problem — that's a workflow architecture problem.",
        "I started with research — usability study, stakeholder interviews, competitor benchmarking against Bill.com and Stripe. Then mapped the full workflow and pitched leadership on a 4-workstream overhaul: automate billing from contract terms, redesign navigation, standardize patterns, and build a 50+ component library alongside engineering.",
        "Everant's approach — integrating AI into existing Salesforce and NetSuite workflows rather than asking users to migrate — is the right call. That means designing within someone else's UI paradigm. The AI layer has to feel native to the CRM, not like a bolted-on sidebar. At Roadrunner, I did exactly this: same users, same core jobs, but fewer steps and a system that worked with their muscle memory instead of against it.",
      ],
      metrics: [
        { value: "40%", label: "Fewer manual errors" },
        { value: "6→1min", label: "Per invoice entry" },
      ],
      testimonial: {
        quote: "Jenny doesn't just make things look good. She builds systems — evidence-backed personas, clearly documented UX decisions, and coded components.",
        name: "Jaythan Elam",
        title: "Founder",
      },
    },
  ],

  howIWork: {
    heading: "Research first. Then I build.",
    subheading: "Every decision traces back to a user need, a constraint, or a metric worth moving. No Figma until I know the problem.",
    tiles: [
      {
        heading: "Start with evidence",
        body: "Usability studies, stakeholder interviews, data analysis. The 142-person study at Roadrunner happened before I touched a single screen.",
      },
      {
        heading: "Design the system, not the screen",
        body: "Tokens, components, patterns — built to scale. Every project leaves behind a system that outlasts the engagement.",
      },
      {
        heading: "Ship in code",
        body: "I prototype in React with Claude Code. The prototype is the product. No handoff gap between what I design and what gets built.",
      },
      {
        heading: "Enterprise trust by default",
        body: "Consistent patterns, transparent data, professional polish. Trust is earned through reliability, not decoration.",
      },
    ],
  },

  close:
    "First designer at Giant Eagle. Sole designer at Arena Labs. Research through code. Design systems that scale. I'm ready to build Everant's from scratch.",
};
