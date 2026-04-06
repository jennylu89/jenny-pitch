export const jenny = {
  name: "Jenny Lu",
  title: "Product Design Partner",
  tagline: "Senior design thinking.\nHands on the work.\nNo management layer in between.",
  summary:
    "First UX hire at Giant Eagle. Built the practice, the system, and the product — simultaneously, no playbook. I embed with teams, own the full design loop from research to code, and connect every decision to business outcomes.",
  contact: {
    email: "jennylu98@gmail.com",
    linkedin: "linkedin.com/in/jennylu89",
    portfolio: "jennylu.me",
  },
  differentiators: [
    {
      id: "zero-to-one",
      number: "01",
      title: "0→1 experience",
      description:
        "First designer at multiple companies. Built the practice, the system, and the product simultaneously — blank canvas to shipped, no playbook.",
    },
    {
      id: "research-ship",
      number: "02",
      title: "Research → design → ship",
      description:
        "Research, design, and ship — one person, no handoff gaps. Runs her own studies, owns the design system, ships production code.",
    },
    {
      id: "business-first",
      number: "03",
      title: "Business-first design",
      description:
        "Every design decision tied to conversion, retention, or revenue. Outcomes first, always.",
    },
    {
      id: "vibe-coding",
      number: "04",
      title: "Vibe coding",
      description:
        "Builds production React with Claude Code. Design and implementation in the same hands — no dev handoff.",
    },
    {
      id: "fintech-compliance",
      number: "05",
      title: "Fintech + compliance UX",
      description:
        "KYC flows, crypto disclosures, regulated payment products. Complex compliance that can't kill conversion.",
    },
  ],
  selectedProjects: [
    {
      id: "myperks",
      company: "Giant Eagle",
      title: "myPerks Loyalty Redesign",
      role: "Lead UX Designer → UX Manager",
      tags: ["Consumer", "Loyalty", "Omnichannel", "Research"],
      headline:
        "Redesigned a loyalty program so 4M customers could feel the value without doing math.",
      outcome:
        "Eliminated mental math. Surfaced rewards at every touchpoint. Behavior followed.",
      metrics: [
        { value: "384%", label: "Spend per member" },
        { value: "212%", label: "Visit frequency" },
        { value: "53K", label: "New households" },
        { value: "30%", label: "Cost reduction" },
      ],
      caseStudy: {
        insight: "Not a new program. A better argument for the one they already had.",
        story: [
          "Giant Eagle's loyalty program was technically generous. Customers just couldn't feel it. They'd do the math wrong and assume it wasn't worth it — even when it was.",
          "Redesigned around one question: what does someone need to see — and when — to feel like they're winning? Same program, surfaced differently. Rewards visible at every touchpoint. Smaller milestones before the big redemptions.",
        ],
        screens: [],
      },
    },
    {
      id: "roadrunner",
      company: "Roadrunner Recycling",
      title: "Billing Platform Overhaul",
      role: "Sr. Product Design Manager",
      tags: ["B2B SaaS", "Internal Tools", "Design System", "Operations"],
      headline:
        "Tasked to improve one billing page. Audited the full workflow. Pitched leadership on a platform overhaul — and got the green light.",
      outcome:
        "1 billing page → 4-workstream platform overhaul.",
      metrics: [
        { value: "28→3", label: "Clicks per bill" },
        { value: "~6→1", label: "Minutes per bill entry" },
        { value: "50+", label: "Reusable components" },
        { value: "3×", label: "Faster to build every page after" },
      ],
      caseStudy: {
        insight: "74.6% used the platform daily — only 32.2% knew it well.",
        story: [
          "I started with research, not design. Platform-wide usability study. Stakeholder interviews. Competitor benchmarking against Bill.com and Stripe. End-to-end process mapping across every department that touched billing.",
          "What I found went beyond one page. A single bill required jumping between four applications and 28+ clicks of manual re-entry. 75% of those bills were identical to the previous month — yet every one was entered from scratch. The platform went down 1–2 times per week, and the people who relied on it most understood it least. This wasn't a billing page problem. It was a system problem.",
          "I mapped the full workflow and brought it to leadership. Four workstreams: automate billing by pre-populating from contract terms and previous cycles, redesign navigation around user workflows, standardize patterns with plain-language UI, and build a 50+ component library alongside engineering.",
        ],
        screens: [
          { src: "/roadrunner-flow1.png", alt: "Roadrunner billing flow — before", caption: "Before — 28 clicks across 4 fragmented tools per invoice" },
          { src: "/roadrunner-flow2.png", alt: "Roadrunner billing flow — after", caption: "After — unified billing in 3 clicks, one platform" },
        ],
        screensType: 'flow',
      },
    },
    {
      id: "megprime",
      company: "MegPrime Pay",
      title: "Crypto Rent Rewards App",
      role: "Lead Product Designer",
      tags: ["Fintech", "Crypto", "Compliance UX", "Mobile"],
      headline:
        "Designed rent payments with crypto rewards for mainstream users, not crypto natives.",
      outcome:
        "Hid the entire USDC layer. Users see rent payment and rewards — not token mechanics.",
      metrics: [
        { value: "SEC ✓", label: "Non-Action Letter" },
        { value: "20→5", label: "KYC screens" },
        { value: "48", label: "States available" },
        { value: "10%", label: "Rewards on rent" },
      ],
      caseStudy: {
        insight: "Users don't need to know what USDC is. They need to pay rent and earn rewards.",
        story: [
          "MegPrime wanted mainstream renters earning 10% back on rent — not crypto enthusiasts. USDC, KYC, SEC disclosures, and state-by-state licensing underneath. The design challenge wasn't managing that complexity. It was making it disappear.",
          "Led with a value calculator — before signup, before KYC, before any commitment. Showed exactly what you'd earn vs. your bank this month, this year, over 5 years. The USDC conversion happens in the background. Users see rent payment and a growing balance.",
          "KYC is where fintech products bleed users. Worked with legal to find every screen we could cut. 20+ screens down to 5. Zip code first — not just UX, but a legal gate that removes ineligible users before you collect a single data point.",
        ],
        screens: [
          { src: "/megprime-screen-1.png", alt: "MegPrime reward calculator", caption: "Value calculator — shows what you'd earn vs. your bank before any signup" },
          { src: "/megprime-screen-2.png", alt: "MegPrime rent details", caption: "Rent Details — live earnings preview at every step" },
          { src: "/megprime-screen-3.png", alt: "MegPrime setup rent", caption: "Setup Rent — two clear paths, no banking jargon" },
        ],
        screensType: 'app',
      },
    },
    {
      id: "navigation",
      company: "Giant Eagle",
      title: "Navigation + Homepage Redesign",
      role: "Sr. Manager, Customer Research & Experience Design",
      tags: ["Consumer Web", "Navigation", "Research", "Analytics"],
      headline:
        "Unified two codebases into one. Redesigned nav around what customers actually came to do.",
      outcome:
        "Qual + quant research → competitor analysis → multiple usability rounds → shipped.",
      metrics: [
        { value: "278%", label: "Cake ordering clicks" },
        { value: "41%", label: "Grocery clicks" },
        { value: "28%", label: "Catering clicks" },
        { value: "21%", label: "Shopping history" },
      ],
      caseStudy: {
        insight: "One redesign. Fixed the IA and cleared the engineering debt.",
        story: [
          "Giant Eagle's nav was built for Giant Eagle, not customers. The structure mirrored the org chart. Mobile and desktop had drifted apart — two codebases, every update made twice.",
          "Analytics showed the gap between what the nav offered and what customers came for. Top tasks — Weekly Ad, Curbside, Cake Ordering — were buried or invisible. Rebuilt as a unified flyout from one codebase — fixed the IA and paid off years of engineering debt in the same move.",
        ],
        screens: [],
      },
    },
    {
      id: "curbside",
      company: "Giant Eagle",
      title: "Curbside Onboarding Redesign",
      role: "Lead UX Designer / Primary Researcher",
      tags: ["Research", "Accessibility", "Landing Page", "Consumer"],
      headline:
        "One of Giant Eagle's first UserTesting studies. Found what the team was too close to see.",
      outcome:
        "Same-day unmoderated study. Customers had fundamental questions the page never answered.",
      metrics: [
        { value: "15.27%", label: "Conversion increase" },
        { value: "49.7%", label: "Total events (up from 36.5%)" },
        { value: "39.2%", label: "Unique events (up from 23.9%)" },
      ],
      caseStudy: {
        insight: "When you know a product too well, you stop seeing what a first-time visitor is wondering.",
        story: [
          "The Curbside landing page had been iterated on for months by a team that understood it perfectly. That was the problem.",
          "Ran one of Giant Eagle's first unmoderated UserTesting studies. Same-day results. Customers had questions the page never answered: What is Curbside? Do I pay online or at pickup? Can I use coupons? Where do I go? Redesigned to answer every gap. Second study confirmed. Shipped.",
        ],
        screens: [],
      },
    },
    {
      id: "leadgen",
      company: "Side Project",
      title: "Freelance Designer Job Finder",
      role: "Builder (solo)",
      tags: ["Vibe Coding", "AI", "Automation", "Lead Gen"],
      headline:
        "Built a tool to find startups that need a designer before they know they need one.",
      outcome:
        "Scraped 4 sources, scored 405 leads, drafted personalized outreach — in one command.",
      metrics: [
        { value: "4", label: "Sources (YC, Reddit, HN, LinkedIn)" },
        { value: "405", label: "Leads generated" },
        { value: "7.8", label: "Avg lead score" },
        { value: "1 cmd", label: "Full pipeline" },
      ],
      caseStudy: {
        insight: "The tool doesn't find jobs. It finds the moment.",
        story: [
          "By the time a job posting exists, the decision is made. Job boards find you at the wrong moment — after, when you're one of 200 applicants.",
          "Built a pipeline that scrapes YC, Reddit, and HN for buying signals — 'need designer,' 'roast my site,' 'just launched.' Scores each lead. Drafts outreach based on what they actually said. One command.",
        ],
        screens: [],
      },
    },
    {
      id: "arenalabs",
      company: "Arena Labs",
      title: "Strive — Healthcare Performance App",
      role: "UX Designer",
      tags: ["Healthcare", "Mobile", "B2B SaaS", "Design System"],
      headline:
        "Redesigning the Arena Strive homepage from a feature library to a personalized performance system.",
      outcome:
        "The app knows where you are, what you're doing, and what you need next.",
      metrics: [
        { value: "3", label: "Time-aware homepage states" },
        { value: "WHOOP", label: "Biometric integration" },
        { value: "Beta", label: "Internal launch Mar 2026" },
        { value: "$30/mo", label: "New SaaS model (was $1K/person)" },
      ],
      caseStudy: {
        insight: "Customization means the user has to decide. Personalization means they don't.",
        story: [
          "Arena Labs was moving from a $1,000/person coaching program to a $30/month SaaS. Same clinicians — surgeons, ER nurses, trauma teams. Completely different relationship with the app. The V1 was a feature library. For someone 4 hours into a surgical shift, that's the wrong ask.",
          "Redesigned around three time-aware states: pre-shift, mid-shift, post-shift. One recommendation per state, chosen based on biometrics. Not a menu. The app reads where you are and tells you what to do next.",
        ],
        screens: [
          { src: "/arena-screen-1.png", alt: "Arena Strive pre-shift state", caption: "6:47am · Pre-shift — Box Breathing recommended based on HRV before first case" },
          { src: "/arena-screen-2.png", alt: "Arena Strive mid-shift state", caption: "1:15pm · Mid-shift — HR elevated at 94bpm, 8-min Physiologic Sigh surfaced automatically" },
          { src: "/arena-screen-3.png", alt: "Arena Strive post-shift state", caption: "11:30pm · Post-shift — Daily Reflection at the exact moment a clinician would answer it" },
        ],
        screensType: 'app',
      },
    },
    {
      id: "designhub",
      company: "Arena Labs / Jointley",
      title: "Strive Design Hub",
      role: "Designer + Builder",
      tags: ["Vibe Coding", "React", "Design System", "AI"],
      headline:
        "Built the tool that replaced Figma docs, Notion wikis, Storybook, and PDF specs with one URL.",
      outcome:
        "Stakeholders tap prototypes. Engineers inspect tokens. Research lives next to the decisions it shaped.",
      metrics: [
        { value: "~15K", label: "Lines of React" },
        { value: "97", label: "Usability issues tracked" },
        { value: "4", label: "Deliverable systems replaced" },
        { value: "1", label: "URL for everything" },
      ],
      caseStudy: {
        insight: "When everything lives together, the conversation changes from 'where is that?' to 'what do we build next?'",
        story: [
          "Design consultants waste hours on deliverables nobody reads. Research in Notion. Prototypes in Figma. System in Storybook. Specs in a PDF already out of date. I was billing limited hours as the sole designer on Arena Labs — I couldn't afford four systems.",
          "So I built one. React + Vite + TypeScript, one URL. Clickable prototype with Dev mode (token inspector, Tailwind mapping, copy-paste code). Full design system across 3 token tiers. 8 research docs, 97 usability issues tracked with localStorage. ~15K lines. Three Git remotes.",
        ],
        screens: [],
        placeholders: [
          "Design Hub — prototype view with Dev mode token inspector panel",
          "Design System — 3-tier token architecture + component library with Tailwind mapping",
          "Research tracker — 97 usability issues with editable design responses, localStorage persistence",
        ],
      },
    },
  ],
  experience: [
    {
      id: "giant-eagle",
      company: "Giant Eagle",
      role: "UX Designer → Sr. Manager, Customer Research & Experience Design",
      type: "Full-time",
      period: "2013–2022",
      location: "Pittsburgh, PA",
      highlights: [
        "Promoted to Sr. Manager leading a distributed design team across the USA and India — mentored designers across visual design, product design, design systems, and accessibility",
        "Redesigned myPerks loyalty for 4M members: 384% spend per member, 212% visit frequency, 53K new households, 30% cost reduction",
        "Directed Scan Pay & Go redesign across mobile apps, websites, and in-store devices — increasing adoption across all touchpoints",
        "Delivered mixed-method research to senior leadership on pricing, sustainability, branding, and in-store experience, shaping product and business strategy",
        "Established WCAG accessibility standards adopted org-wide",
      ],
      tags: ["Team Leadership", "Consumer", "Research", "Design System", "Omnichannel", "Accessibility"],
    },
    {
      id: "highmark",
      company: "Highmark Health",
      role: "UX/UI Designer & Developer",
      type: "Full-time",
      period: "2016–2017",
      location: "Pittsburgh, PA",
      highlights: [
        "Bridged design and front-end development for regulated healthcare applications",
        "Designed and built UI components for member-facing products serving millions of users",
      ],
      tags: ["Healthcare", "Front-end Dev", "Regulated"],
    },
    {
      id: "roadrunner",
      company: "Roadrunner Recycling",
      role: "Sr. Product Design Manager",
      type: "Full-time",
      period: "2022–2023",
      location: "Pittsburgh, PA",
      highlights: [
        "Directed billing system overhaul — 40% reduction in manual errors, laid groundwork for process automation",
        "Ran a 142-person usability study; reduced clicks per bill from 28 to 3, entry time from 6 min to 1 min",
        "Created comprehensive Figma design system with tokens, reusable components, and documentation",
      ],
      tags: ["B2B SaaS", "Internal Tools", "Research", "Design System"],
    },
    {
      id: "megprime",
      company: "MegPrime Pay",
      role: "Product Designer",
      type: "Full-time",
      period: "2026–Present",
      location: "Remote",
      highlights: [
        "Designed end-to-end UX for a fintech platform — simplifying multi-path payment flows and crypto complexity into a clean experience",
        "Applied gamification through reward reveals and progress-based states to drive motivation and retention",
      ],
      tags: ["Fintech", "Crypto", "Compliance UX", "Mobile"],
    },
    {
      id: "arenalabs",
      company: "Arena Lab",
      role: "Product Designer",
      type: "Full-time",
      period: "2026–Present",
      location: "Remote",
      highlights: [
        "Led end-to-end design for a Series A healthtech — user research, validation, UX design, prototyping, and product launching",
        "Built complete design system, onboarding flow, and daily check-in experience using AI-assisted tools",
        "Delivered interactive prototype, component hub, and single-URL design hub as single source of truth",
      ],
      tags: ["Healthcare", "Design Systems", "AI", "React"],
    },
    {
      id: "teleskope",
      company: "Teleskope",
      role: "Designer",
      type: "Contract",
      period: "2026–Present",
      location: "Remote",
      highlights: [
        "Implemented new visual branding elements and intuitive navigation structures for a cybersecurity platform",
      ],
      tags: ["Cybersecurity", "Branding", "Navigation"],
    },
    {
      id: "pmcareer",
      company: "Product Marketing Manager Career",
      role: "Founding Designer",
      type: "Contract",
      period: "2026–Present",
      location: "Remote",
      highlights: [
        "Led funnel mapping, landing page creation, and conversion optimization",
        "Translated a coaching program's value proposition into a high-performing, user-centered sales funnel",
      ],
      tags: ["EdTech", "Conversion", "Landing Pages"],
    },
  ],

  skills: {
    design: ["Product Strategy", "UX Research", "Interaction Design", "Design Systems", "Prototyping", "Usability Testing", "Information Architecture", "Service Design"],
    tools: ["Figma", "Claude Code", "React", "Tailwind CSS", "Vite", "UserTesting", "Maze"],
    domains: ["Healthcare UX", "Fintech / Compliance", "Consumer / Loyalty", "B2B SaaS", "Internal Tools", "AI-assisted design"],
  },

  education: [
    {
      school: "Art Institute of Pittsburgh",
      degree: "B.S. Interactive Arts",
      period: "Pittsburgh, PA",
    },
  ],

  leadership: [
    {
      role: "CEO & Co-owner",
      company: "Frosty Cone",
      period: "2023–Present",
      location: "Pittsburgh, PA",
      description: "Co-own and operate an ice cream business — managing operations, hiring, vendor relationships, brand identity, and marketing strategy.",
    },
  ],

  testimonials: [
    {
      id: "jeffrey",
      quote:
        "Jenny deeply understands how research and design influence product strategy and flow into achieving measurable objectives. Strong UX leadership.",
      name: "Jeffrey Inscho",
      title: "Senior Product Manager · Giant Eagle",
      avatar: null, // TODO: add LinkedIn avatar
    },
    {
      id: "michael",
      quote:
        "Jenny pioneered a design system library that gave our web pages a unified look and feel. She is a force multiplier and could be an asset to any organization.",
      name: "Michael Quintero",
      title: "Software Engineer · Roadrunner Recycling",
      avatar: null, // TODO: add LinkedIn avatar
    },
    {
      id: "jaythan",
      quote:
        "Jenny doesn't just make things look good. She builds systems — evidence-backed personas, clearly documented UX decisions, and coded components.",
      name: "Jaythan Elam",
      title: "Founder",
      avatar: null, // TODO: add LinkedIn avatar
    },
    {
      id: "harvey",
      quote:
        "Hiring Jenny was my best decision of 2025. Building a digital presence is one thing, building one that CONVERTS is a whole different game.",
      name: "Harvey Lee",
      title: "", // TODO: add title from LinkedIn
      avatar: null, // TODO: add LinkedIn avatar
    },
  ],
};
