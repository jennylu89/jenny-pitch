export const jenny = {
  name: "Jenny Lu",
  title: "Freelance Product Designer",
  tagline: "Senior design thinking.\nHands on the work.\nNo management layer in between.",
  summary:
    "First UX hire at Giant Eagle. Built the practice, the system, and the product — simultaneously, no playbook. I embed with teams and own the full loop from research to code.",
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
        "First designer at Giant Eagle, sole designer at Arena Labs. Blank canvas to shipped product, no playbook.",
    },
    {
      id: "research-ship",
      number: "02",
      title: "Research → design → ship",
      description:
        "One person, no handoff gaps. I run my own studies, own the design system, and ship production code.",
    },
    {
      id: "business-first",
      number: "03",
      title: "Business-first design",
      description:
        "Every design decision tied to conversion, retention, or revenue.",
    },
    {
      id: "vibe-coding",
      number: "04",
      title: "Vibe coding",
      description:
        "I build production React with Claude Code. Design and implementation in the same hands.",
    },
    {
      id: "fintech-compliance",
      number: "05",
      title: "Fintech + compliance UX",
      description:
        "KYC flows, crypto disclosures, regulated payment products. Making compliance invisible to the user.",
    },
  ],
  selectedProjects: [
    {
      id: "myperks",
      company: "Giant Eagle",
      title: "myPerks Loyalty Redesign",
      role: "Lead UX Designer → UX Manager",
      tags: ["Consumer", "Loyalty", "Omnichannel", "Research"],
      tools: ["Figma", "Qualtrics", "UserTesting", "Google Analytics"],
      heroImage: "/myPerks-loyalty.png",
      headline:
        "The loyalty program was generous. Customers just couldn't feel it. Redesigned so 4M members could see their value without doing math.",
      outcome:
        "Same program, surfaced differently. Rewards visible at every touchpoint. Behavior followed.",
      metrics: [
        { value: "384%", label: "Spend per member" },
        { value: "212%", label: "Visit frequency" },
        { value: "53K", label: "New households" },
        { value: "30%", label: "Cost reduction" },
      ],
      caseStudy: {
        insight: "The program wasn't broken. The way it communicated value was.",
        story: [
          "Giant Eagle's myPerks loyalty program was technically generous — but customers couldn't feel it. They'd do the math wrong and assume it wasn't worth it, even when it was. The problem wasn't the reward structure. It was perceived value.",
          "Ran usability research across the 4M member base to understand where the disconnect happened. Customers weren't tracking their progress toward rewards. The milestones felt too far away. The math was invisible.",
          "Redesigned around one question: what does someone need to see — and when — to feel like they're winning? Surfaced rewards at every touchpoint. Broke large redemptions into smaller visible milestones. Made the math disappear — customers see progress, not percentages.",
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
      tools: ["Figma", "Maze", "Dovetail", "React", "Storybook"],
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
        compareScreens: [
          { src: "/RR-Before-after-dashboard.png", alt: "Roadrunner dashboard — before and after", caption: "Before & After: Dashboard" },
          { src: "/RR-Before-After-Bill-entry.png", alt: "Roadrunner bill entry — before and after", caption: "Before & After: Bill Entry" },
        ],
      },
    },
    {
      id: "megprime",
      company: "MegPrime Pay",
      title: "Crypto Rent Rewards App",
      role: "Lead Product Designer",
      tags: ["Fintech", "Crypto", "Compliance UX", "Mobile"],
      tools: ["Figma", "Claude Code", "React"],
      headline:
        "Designed rent payments with crypto rewards for mainstream users, not crypto natives.",
      outcome:
        "Hid the entire USDC layer. Users see rent payment and rewards — not token mechanics.",
      metrics: [
        { value: "2", label: "Payment paths proposed" },
      ],
      caseStudy: {
        insight: "Users don't need to know what USDC is. They need to pay rent and earn rewards.",
        story: [
          "MegPrime wanted mainstream renters earning 10% back on rent — not crypto enthusiasts. USDC, KYC, SEC disclosures, and state-by-state licensing underneath. The design challenge wasn't managing that complexity. It was making it disappear.",
          "Led with a value calculator — before signup, before any commitment. Showed exactly what you'd earn vs. your bank this month, this year, over 5 years. The USDC conversion happens in the background. Users see rent payment and a growing balance.",
        ],
        screens: [
          { src: "/megprime-screen-1.png", alt: "MegPrime reward calculator", caption: "Value calculator — shows what you'd earn vs. your bank before any signup" },
          { src: "/megprime-screen-2.png", alt: "MegPrime setup rent", caption: "Setup Rent — check how you pay rent today, set up in minutes" },
          { src: "/megprime-screen-3.png", alt: "MegPrime how it works", caption: "How It Works — educates users on rent payments with USDC rewards" },
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
      tools: ["Figma", "Google Analytics", "UserTesting", "Qualtrics"],
      headline:
        "The nav mirrored the org chart, not the customer. Two codebases, every update made twice. Redesigned around what customers actually came to do.",
      outcome:
        "Unified two codebases into one navigation system. Restructured IA around user tasks, not internal departments.",
      metrics: [
        { value: "278%", label: "Cake ordering clicks" },
        { value: "41%", label: "Grocery clicks" },
        { value: "28%", label: "Catering clicks" },
        { value: "21%", label: "Shopping history" },
      ],
      caseStudy: {
        insight: "The navigation structure mirrored the org chart. Customers couldn't find what they came for.",
        story: [
          "Giant Eagle's nav was built for Giant Eagle, not customers. The structure mirrored internal departments — not how people actually shop. Mobile and desktop had drifted into two separate codebases. Every update was made twice. Every inconsistency was doubled.",
          "I started with analytics — what were customers actually clicking on? What were they searching for? The gap was clear: top tasks like Weekly Ad, Curbside, and Cake Ordering were buried or invisible. The nav surfaced what the company wanted to promote, not what customers came to do.",
          "Ran competitor analysis and multiple rounds of usability testing. Rebuilt as a unified flyout from one codebase — restructured the information architecture around user tasks. Fixed the IA and cleared years of engineering debt in the same move.",
        ],
        screens: [
          { src: "/ge-nav-1.jpg", alt: "Giant Eagle navigation redesign" },
          { src: "/ge-nav-2.jpg", alt: "Giant Eagle navigation redesign" },
          { src: "/ge-nav-3.jpg", alt: "Giant Eagle navigation redesign" },
          { src: "/ge-nav-4.jpg", alt: "Giant Eagle navigation redesign" },
          { src: "/ge-nav-5.jpg", alt: "Giant Eagle navigation redesign" },
        ],
        screensType: 'gallery',
      },
    },
    {
      id: "curbside",
      company: "Giant Eagle",
      title: "Curbside Onboarding Redesign",
      role: "Lead UX Designer / Primary Researcher",
      tags: ["Research", "Accessibility", "Landing Page", "Consumer"],
      tools: ["UserTesting", "Google Analytics"],
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
      id: "arenalabs",
      company: "Arena Labs",
      title: "Strive — Healthcare Performance App",
      role: "UX Designer",
      tags: ["Healthcare", "Mobile", "B2B SaaS", "Design System"],
      tools: ["Claude Code", "Figma", "React", "Pencil.dev", "Whoop API", "Typeform"],
      headline:
        "Healthcare app with 97 usability issues, a slow sales cycle, and a design process that couldn't keep up. Built an AI prototyping workflow to move 10x faster.",
      outcome:
        "Identified 97 usability issues. Rebuilt the design process with AI. Redesigned the homepage from a feature library to a personalized system.",
      metrics: [
        { value: "97", label: "Usability issues identified" },
        { value: "3", label: "Time-aware homepage states" },
        { value: "10×", label: "Faster design iteration" },
      ],
      caseStudy: {
        insight: "The app had bad usability, the sales cycle was slow, and users weren't seeing value. The design process was too slow to fix any of it.",
        story: [
          "Arena Strive is a B2B2C healthcare app — sold to hospitals, used by surgeons, ER nurses, and trauma teams. The problem wasn't one thing. Usability was poor (97 issues logged). The sales cycle was slow because hospitals couldn't see ROI. Users weren't sticking because the app felt generic, not personal.",
          "The design process was the bottleneck. One designer, limited hours, and the traditional Figma → handoff pipeline couldn't keep up. I built an AI-powered prototyping workflow with Claude Code — functional React prototypes instead of static mocks. What used to take weeks took days.",
          "With the speed unlocked, I redesigned the homepage around three time-aware states — pre-shift, mid-shift, post-shift — each surfacing one recommendation based on Whoop biometric data. A surgeon at 6:47am gets focus priming. At 1:15pm with elevated heart rate, a 90-second reset. At 11:30pm, one question: how did today feel?",
          "Currently exploring the B2B2C layer: a hospital-facing dashboard that surfaces team engagement data — proving ROI to the buyer before the contract closes. On the clinician side, gamification to drive daily usage. The hypothesis: if the hospital can see their team improving, the sales cycle shortens.",
        ],
        beforeScreen: { src: "/arena-screen-before.png", alt: "Arena Strive V1 — feature library", caption: "Before — V1 feature library" },
        screens: [
          { src: "/arena-screen-1.png", alt: "Arena Strive pre-shift state", caption: "6:47am · Pre-shift · Surgeon · Hospital" },
          { src: "/arena-screen-2.png", alt: "Arena Strive mid-shift state", caption: "1:15pm · Mid-shift · 8 min break · Hospital" },
          { src: "/arena-screen-3.png", alt: "Arena Strive post-shift state", caption: "11:30pm · Post-shift · Just got home" },
        ],
        screensType: 'before-after',
      },
    },
    {
      id: "designhub",
      company: "Arena Labs / Jointley",
      title: "AI-Powered Design Hub",
      role: "Designer + Builder · Claude Code",
      tags: ["AI", "Claude Code", "React", "Design System"],
      tools: ["Claude Code", "React", "Vite", "Figma MCP", "Pencil.dev"],
      headline:
        "One designer, limited hours, four separate systems slowing everything down. Built an AI-powered design hub with Claude Code to replace all four.",
      outcome:
        "One URL replaced Figma docs, Notion wikis, Storybook, and PDF specs.",
      metrics: [
        { value: "4→1", label: "Systems consolidated" },
        { value: "97", label: "Usability issues tracked" },
        { value: "1", label: "URL for everything" },
      ],
      caseStudy: {
        insight: "The problem wasn't designing — it was the overhead around it. Four systems, limited hours, one designer.",
        story: [
          "Arena needed to move fast. But design was scattered — research in Notion, prototypes in Figma, system in Storybook, specs in PDFs already out of date. As the sole designer on limited hours, I was spending more time managing deliverables than designing.",
          "So I built one tool. React + Vite, one URL. Clickable prototype with dev mode for token inspection. Full design system across 3 token tiers. 8 research docs, 97 usability issues tracked. Stakeholders tap prototypes. Engineers inspect tokens. Research lives next to the decisions it shaped.",
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
      id: "hema",
      company: "Hema Designs",
      role: "Founder · Senior Product Designer",
      type: "Freelance",
      period: "2023–Present",
      location: "Pittsburgh, PA",
      highlights: [
        "Embedded partner for Seed and Series A founders — healthcare, SaaS, fintech, and coaching platforms",
        "Implemented AI-native workflows for rapid prototyping and technical validation",
        "Clients include Arena Labs, MegPrime Pay, Teleskope, and Product Marketing Manager Career",
      ],
      tags: ["0→1", "AI", "Multi-client", "Startup"],
    },
    {
      id: "jointley",
      company: "Jointley",
      role: "Product Design Lead",
      type: "Full-time",
      period: "2025–Present",
      location: "Remote",
      highlights: [
        "Leading product design for a design consultancy serving Series A healthtech and SaaS clients",
      ],
      tags: ["Consultancy", "Healthcare", "SaaS"],
    },
    {
      id: "roadrunner",
      company: "Roadrunner Recycling",
      role: "Sr. Product Design Manager",
      type: "Full-time",
      period: "2022–2023",
      location: "Pittsburgh, PA",
      highlights: [
        "Directed billing system overhaul — reduced manual errors, laid groundwork for process automation",
        "Ran a usability study; reduced clicks per bill from 28 to 3, entry time from ~6 min to 1 min",
        "Created comprehensive Figma design system with tokens, reusable components, and documentation",
      ],
      tags: ["B2B SaaS", "Internal Tools", "Research", "Design System"],
    },
    {
      id: "giant-eagle-design",
      company: "Giant Eagle",
      role: "Lead UX Designer → Sr. Manager, Customer Research & Experience Design",
      type: "Full-time",
      period: "2017–2022",
      location: "Pittsburgh, PA",
      highlights: [
        "Promoted to Sr. Manager leading a distributed design team across the US and India",
        "Redesigned myPerks loyalty for 4M members: 384% spend per member, 212% visit frequency, 53K new households",
        "Directed Scan Pay & Go redesign across mobile apps, websites, and in-store devices",
        "Established WCAG accessibility standards adopted org-wide",
      ],
      tags: ["Team Leadership", "Consumer", "Research", "Design System", "Omnichannel", "Accessibility"],
    },
    {
      id: "highmark",
      company: "Highmark Health",
      role: "UI Designer & Developer",
      type: "Full-time",
      period: "2016–2017",
      location: "Pittsburgh, PA",
      highlights: [
        "Designed and built UI components for member-facing insurance products serving millions of users",
        "Bridged design and front-end development for regulated healthcare applications",
      ],
      tags: ["Healthcare", "Front-end Dev", "Regulated"],
    },
    {
      id: "giant-eagle-dev",
      company: "Giant Eagle",
      role: "Front End Developer → Sr. Front End Analyst",
      type: "Full-time",
      period: "2013–2016",
      location: "Pittsburgh, PA",
      highlights: [
        "Built and maintained front-end for consumer-facing web products",
        "Transitioned from development to design, bridging both disciplines",
      ],
      tags: ["Front-end Dev", "Consumer", "Web"],
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
      title: "Founder · PMMCA",
      avatar: null, // TODO: add LinkedIn avatar
    },
  ],
};
