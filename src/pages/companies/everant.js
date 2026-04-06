export const everant = {
  name: "Everant AI",
  role: "Product Designer (Contract)",

  oneLiner: "10 years across healthcare, fintech, and B2B SaaS. I build from scratch — research, design, systems, and code.",

  summaryHeading: "What you need. What I've done.",
  summaryRows: [
    {
      ask: "Enterprise-grade design — trustworthy, polished, professional",
      proof: "Redesigned Giant Eagle's loyalty for 4M members and Roadrunner's billing platform for enterprise ops teams.",
    },
    {
      ask: "AI agent UX — long-running jobs, decision points, context surfacing",
      proof: "Redesigned Arena Strive around 3 time-aware states that surface the right action based on biometrics.",
    },
    {
      ask: "0→1 — nothing's built yet",
      proof: "First UX hire at Giant Eagle. Sole designer at Arena Labs. Built the practice, the system, and the product at the same time.",
    },
    {
      ask: "Design systems from the ground up",
      proof: "50+ component library at Roadrunner. Consolidated 4 systems into 1 React-based Design Hub at Arena Labs.",
    },
    {
      ask: "CRM / B2B SaaS — Salesforce-adjacent",
      proof: "Roadrunner billing overhaul — 4 apps, 28 clicks per invoice, reduced to 3.",
    },
    {
      ask: "AI-native workflow",
      proof: "Built this portfolio, a lead-gen pipeline, and a full design hub with Claude Code.",
    },
  ],

  sections: [
    {
      id: "enterprise-trust",
      tocLabel: "Enterprise-Grade Design",
      requirement: "Make the product look trustworthy and professional",
      title: "Trust isn't a coat of paint",
      story: [
        "You mentioned enterprise polish is a big gap. At Giant Eagle, the loyalty program was generous — customers just couldn't feel it. The redesign surfaced value at every touchpoint so 4M members could feel like they were winning.",
        "At Roadrunner, the platform crashed 1–2 times per week. The redesign wasn't fewer clicks — it was consistent patterns, predictable behavior, and a component library that enforced quality across every screen.",
      ],
      metrics: [
        { value: "384%", label: "Spend per member lift" },
        { value: "4M", label: "Members impacted" },
      ],
      testimonial: {
        quote: "Jenny pioneered a design system library that gave our web pages a unified look and feel. She is a force multiplier.",
        name: "Michael Quintero",
        title: "Software Engineer · Roadrunner Recycling",
      },
    },
    {
      id: "agent-ux",
      tocLabel: "AI Agent UX",
      requirement: "Design how users interact with AI agents",
      title: "The 5-million-record problem isn't a notification",
      story: [
        "You described an agent updating 5 million records hitting edge cases — no address, no town, just a country. Prompting the user every time is the Claude permissions problem — approving things every 2 seconds until you stop paying attention.",
        "I'd approach it in three layers. A decision queue to batch edge cases. A confidence threshold so the agent handles what it can and escalates what it can't. A job dashboard so the user checks in on their terms, not the agent's schedule.",
      ],
      metrics: [
        { value: "3", label: "Proposed UX layers" },
      ],
    },
    {
      id: "zero-to-one",
      tocLabel: "0→1 Builder",
      requirement: "Nothing's built yet",
      title: "First designer — no playbook",
      story: [
        "First UX hire at Giant Eagle. No design practice, no system, no research process. Built all three while shipping myPerks and Scan Pay & Go across mobile, web, and in-store.",
        "At Roadrunner, hired to fix one billing page. Ran a usability study, data expanded the scope to a full overhaul. Just me and engineering.",
      ],
      metrics: [
        { value: "2×", label: "First designer at company" },
      ],
      testimonial: {
        quote: "Jenny deeply understands how research and design influence product strategy and flow into achieving measurable objectives.",
        name: "Jeffrey Inscho",
        title: "Senior Product Manager · Giant Eagle",
      },
    },
    {
      id: "design-systems",
      tocLabel: "Design Systems",
      requirement: "Build the design language and component library",
      title: "The Design Hub I showed you — one URL replaced four systems",
      story: [
        "You saw the Arena Labs project in our call. As the sole designer on limited hours, I couldn't afford four separate systems. So I built one — React + Vite, clickable prototype, token inspector, 97 usability issues tracked.",
      ],
      metrics: [
        { value: "4→1", label: "Systems consolidated" },
        { value: "97", label: "Usability issues tracked" },
      ],
    },
    {
      id: "crm-b2b",
      tocLabel: "CRM & B2B SaaS",
      requirement: "Integrate AI into existing CRM tools, not replace them",
      title: "Enterprise ops teams stuck in fragmented tools",
      story: [
        "At Roadrunner, billing reps bounced between 4 apps per invoice. 28+ clicks per bill. 75% of bills identical to last month — entered from scratch every time.",
        "Everant's approach — integrating into existing Salesforce and NetSuite workflows — is the right call. The AI layer has to feel native to the CRM, not bolted on. Same users, same jobs, fewer steps.",
      ],
      metrics: [
        { value: "28→3", label: "Clicks per bill" },
        { value: "~6→1", label: "Minutes per bill" },
      ],
      testimonial: {
        quote: "Jenny doesn't just make things look good. She builds systems — evidence-backed personas, clearly documented UX decisions, and coded components.",
        name: "Jaythan Elam",
        title: "Founder",
      },
    },
  ],

  howIWork: {
    eyebrow: "What I bring",
    heading: "Beyond the case studies",
    subheading: "",
    tiles: [
      {
        heading: "0→1 experience",
        body: "First designer at Giant Eagle, sole designer at Arena Labs. Built the practice, the system, and the product at the same time.",
      },
      {
        heading: "Research → design → ship",
        body: "One person, no handoff gaps. I run my own studies, own the design system, and ship production code.",
      },
      {
        heading: "Business-first design",
        body: "Every design decision tied to conversion, retention, or revenue.",
      },
      {
        heading: "Vibe coding",
        body: "I build production React with Claude Code. Design and implementation in the same hands.",
      },
    ],
  },

  close:
    "First designer at Giant Eagle. Sole designer at Arena Labs. I'm ready to build Everant's from scratch.",
};
