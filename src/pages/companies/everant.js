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
      proof: "Redesigned Arena Strive around 3 time-aware states that surface the right action based on biometrics. Same pattern — contextual, not menu-driven.",
    },
    {
      ask: "0→1 — nothing's built yet, need a designer who can start from scratch",
      proof: "First UX hire at Giant Eagle. Sole designer at Arena Labs. Built the practice, the system, and the product at the same time.",
    },
    {
      ask: "Design systems — tokens, components, patterns from the ground up",
      proof: "50+ component library at Roadrunner, consolidated 4 deliverable systems into 1 React-based Design Hub at Arena Labs.",
    },
    {
      ask: "CRM / B2B SaaS — Salesforce-adjacent, internal tools",
      proof: "Roadrunner's billing overhaul — enterprise internal tools where reps bounced between 4 apps per invoice. Reduced 28 clicks to 3.",
    },
    {
      ask: "AI-native workflow — using AI to accelerate design",
      proof: "Built this portfolio, a lead-gen pipeline, and a full design hub with Claude Code.",
    },
  ],

  sections: [
    {
      id: "enterprise-trust",
      tocLabel: "Enterprise-Grade Design",
      requirement: "Make the product look trustworthy, polished, and professional — a big gap right now",
      title: "Trust isn't a coat of paint — it's built into every layer",
      story: [
        "You mentioned enterprise polish is a big gap. At Giant Eagle, the loyalty program was technically generous — customers just couldn't feel it. The redesign surfaced value at every touchpoint so 4M members could feel like they were winning.",
        "At Roadrunner, the billing platform crashed 1–2 times per week. Reps didn't trust the tool. The redesign wasn't just fewer clicks — it was consistent patterns, predictable behavior, and a component library that enforced quality across every screen.",
        "For Everant, trust means enterprise buyers feel confident putting their CRM operations in AI hands. That starts with the system underneath — design language, data transparency, and polish.",
      ],
      metrics: [
        { value: "384%", label: "Spend per member lift" },
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
      title: "The 5-million-record problem isn't a notification — it's a conversation",
      story: [
        "You described an agent updating 5 million records and running into edge cases — no address, no town, just a country. The instinct is to prompt the user every time. But that's the Claude permissions problem — approving things every 2 seconds until you stop paying attention.",
        "At Arena Labs, clinicians during 12-hour shifts needed the right intervention at the right moment. Not a menu — one recommendation, contextually chosen, based on biometrics and time of day. The principle transfers: don't interrupt, surface what matters when it matters.",
        "For Everant, I'd approach it in three layers. First: a decision queue — batch the edge cases and let the user triage them in one session. Second: a confidence threshold — the agent handles high-confidence actions automatically, escalates ambiguous ones, with an audit trail. Third: a job dashboard showing progress, decisions made, and decisions pending — so the user checks in on their terms.",
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
      title: "First designer — no playbook, built the practice and the product at the same time",
      story: [
        "At Giant Eagle, I was the first UX hire at the company. No design practice, no system, no research process. I built all three while shipping the product — myPerks loyalty redesign, Scan Pay & Go across mobile, web, and in-store.",
        "At Roadrunner, I was hired to fix one billing page. Ran a usability study, the data expanded the scope to a full platform overhaul. Just me and engineering — no design team.",
        "Everant is at the same stage. Nothing's built. You need someone who can go from blank canvas to shipped product. First designer at Giant Eagle, sole designer at Arena Labs. That's the mode I work best in.",
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
      title: "The Design Hub I showed you replaced Figma, Notion, Storybook, and PDF specs with one URL",
      story: [
        "You saw the Arena Labs project in our call — the design system, token architecture, component patterns, and research docs all in one place. As the sole designer on limited hours, I couldn't afford four separate systems.",
        "So I built one. React + Vite, one URL. Clickable prototype with dev mode for token inspection. Full design system across 3 token tiers. 97 usability issues tracked. Engineers inspect tokens. Stakeholders tap prototypes. Research sits next to the design decisions it informed.",
        "For Everant, I'd build the same foundation — a design system that scales with the product, not a Figma file that's out of date the day after handoff.",
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
      title: "Roadrunner was the same problem — enterprise ops teams stuck in fragmented tools",
      story: [
        "At Roadrunner, billing reps bounced between 4 apps per invoice. 28+ clicks per bill. 75% of bills were identical to the previous month — yet every one was entered from scratch. The platform went down 1–2 times per week.",
        "I started with research — usability study, stakeholder interviews, competitor benchmarking against Bill.com and Stripe. Then mapped the full workflow and pitched leadership on a 4-workstream overhaul: automate billing from contract terms, redesign navigation, standardize patterns, and build a 50+ component library alongside engineering.",
        "Everant's approach — integrating AI into existing Salesforce and NetSuite workflows rather than asking users to migrate — is the right call. The AI layer has to feel native to the CRM, not like a bolted-on sidebar. Same users, same core jobs, fewer steps.",
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
        body: "Every design decision tied to conversion, retention, or revenue. The 384% lift at Giant Eagle started with a question about perceived value, not a redesign brief.",
      },
      {
        heading: "Vibe coding",
        body: "I build production React with Claude Code. Design and implementation in the same hands — no dev handoff.",
      },
    ],
  },

  close:
    "First designer at Giant Eagle. Sole designer at Arena Labs. I'm ready to build Everant's from scratch.",
};
