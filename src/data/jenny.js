export const jenny = {
  name: "Jenny Lu",
  title: "Founding Product Designer",
  tagline: "Senior design thinking.\nHands on the work.\nNo management layer in between.",
  summary:
    "I do my best work before the product is figured out. Twice the first designer in the building, where I built the research practice, the design system, and the production UI at once. I ship my own React with Claude Code, so the thing I design is the thing that ships. Research to code, one person, no handoff.",
  contact: {
    email: "jennylu98@gmail.com",
    linkedin: "linkedin.com/in/jennylu89",
    portfolio: "jennylu.me",
  },
  differentiators: [
    {
      id: "working-code",
      number: "01",
      title: "Working code, not redlines",
      description:
        "I ship my own React with Claude Code. Engineers get a production build they can ship, not a spec to rebuild.",
    },
    {
      id: "research-to-ship",
      number: "02",
      title: "One hire covers research to ship",
      description:
        "Customer interviews → design → production React. One person. No handoffs. I've twice been the first or only designer in the building, so nothing gets lost between roles.",
    },
    {
      id: "ai-speed",
      number: "03",
      title: "I ship at AI speed",
      description:
        "At Arena I built a Claude Code workflow and cut iteration time 10x. Design Hub went from 4 hours a screen to 20 minutes.",
    },
    {
      id: "moves-the-number",
      number: "04",
      title: "Design that moves the number",
      description:
        "myPerks: 384% spend per member across 4M members. Roadrunner: 28 clicks per bill down to 3.",
    },
    {
      id: "regulated-safe",
      number: "05",
      title: "I make regulated products feel safe",
      description:
        "For MegPrime I hid the crypto, KYC, and SEC steps behind a flow renters understood. Same for Highmark's insurance UI.",
    },
  ],
  selectedProjects: [
    {
      id: "myperks",
      company: "Giant Eagle",
      title: "myPerks Loyalty Redesign",
      role: "Lead UX Designer → UX Manager",
      tags: ["Consumer", "Loyalty", "Omnichannel", "Research"],
      tools: ["Figma", "Qualtrics", "UserTesting", "Google Analytics", "Miro"],
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
          "Giant Eagle's myPerks loyalty program was technically generous, but customers couldn't feel it. They'd do the math wrong and assume it wasn't worth it, even when it was. The problem wasn't the reward structure. It was perceived value.",
          "Ran usability research across the 4M member base to understand where the disconnect happened. Customers weren't tracking their progress toward rewards. The milestones felt too far away. The math was invisible.",
          "Redesigned around one question: what does someone need to see, and when, to feel like they're winning? Surfaced rewards at every touchpoint. Broke large redemptions into smaller visible milestones. Made the math disappear: customers see progress, not percentages.",
          "What I'd do differently: I'd A/B test the milestone thresholds earlier. We picked breakpoints based on research, but real usage data would have told us faster which milestones actually motivated behavior change.",
        ],
        featuresLabel: 'KEY INSIGHTS',
        features: [
          { icon: 'fa-light fa-eye-slash', label: 'Perceived Value', detail: 'The program was generous: customers just couldn\'t feel it' },
          { icon: 'fa-light fa-stairs', label: 'Milestone Design', detail: 'Big redemptions felt too far away. Smaller milestones changed behavior.' },
          { icon: 'fa-light fa-calculator', label: 'Invisible Math', detail: 'Customers see progress, not percentages. Made the math disappear.' },
          { icon: 'fa-light fa-arrows-repeat', label: 'Omnichannel', detail: 'Surfaced value at every touchpoint: app, in-store, web' },
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
      // Tightened 2026-08-16. The senior moment here is bringing leadership evidence that changed
      // the problem definition, so that beat gets its own paragraph. Research process is compressed
      // to the finding, not the method list. Do not re-expand it.
      headline:
        "I was asked to improve one billing screen. Research showed billing was actually one workflow fragmented across four applications.",
      outcome:
        "1 billing page → 4-workstream platform overhaul.",
      // Three metrics, per Jenny's spec 2026-08-16. The old fourth, "3× faster to build every page
      // after", was dropped: it was never measured.
      metrics: [
        { value: "28+ → 3", label: "Clicks per bill" },
        { value: "~6 → ~1 min", label: "Per bill entry" },
        { value: "50+", label: "Reusable components" },
      ],
      caseStudy: {
        insight: "74.6% used the platform daily, only 32.2% knew it well.",
        // The senior-design moment here is NOT "I redesigned billing." It is that she changed the
        // team's understanding of which problem needed solving. THE PRODUCT DECISION beat carries
        // that, so keep it. ⛔ Do not drown this in process documentation.
        // Jenny's spec copy, 2026-08-16, used verbatim. ⛔ Do not rewrite.
        // The last beat is the closing callout from the spec: the design move was changing the
        // unit of the problem, not making a nicer screen. It stays last.
        beats: [
          { label: "The request", text: "Improve one billing screen." },
          { label: "What I found", text: "A single bill crossed four applications and 28+ clicks. 75% of bills were identical to the previous month, yet operators repeatedly re-entered and verified the same information." },
          { label: "The decision", text: "I reframed the work from a page redesign to one billing workflow. I brought leadership two scoped options with the evidence behind each. They chose the broader overhaul." },
          { label: "What changed", text: "One workflow instead of four tools. Repeat information pre-filled. Previous and current bill visible together, on shared status and interaction patterns." },
          { label: "The design move", text: "It was not making a better billing screen. It was changing the unit of the problem from a page to a workflow." },
        ],
        screens: [
          { src: "/roadrunner-flow1.png", alt: "Roadrunner billing flow, before", caption: "Before, 28 clicks across 4 fragmented tools per invoice" },
          { src: "/roadrunner-flow2.png", alt: "Roadrunner billing flow, after", caption: "After: unified billing in 3 clicks, one platform" },
        ],
        screensType: 'flow',
        featuresLabel: 'WHAT I INVESTIGATED',
        features: [
          { icon: 'fa-light fa-clipboard-check', label: 'Usability Study', detail: '74.6% used the platform daily, only 32.2% knew it well' },
          { icon: 'fa-light fa-route', label: 'Workflow Mapping', detail: '4 apps, 28 clicks, 75% redundant re-entry, the friction was systemic' },
          { icon: 'fa-light fa-scale-balanced', label: 'Competitor Benchmarking', detail: 'Bill.com and Stripe: what good looks like in billing UX' },
          { icon: 'fa-light fa-code-branch', label: 'Stakeholder Alignment', detail: 'Two options with data. Leadership chose the full overhaul.' },
        ],
        compareScreens: [
          { src: "/RR-Before-after-dashboard.png", alt: "Roadrunner dashboard, before and after", caption: "Before & After: Dashboard" },
          { src: "/RR-Before-After-Bill-entry.png", alt: "Roadrunner bill entry, before and after", caption: "Before & After: Bill Entry" },
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
        "Hid the entire USDC layer. Users see rent payment and rewards, not token mechanics.",
      metrics: [
        { value: "2", label: "Payment paths proposed" },
      ],
      caseStudy: {
        insight: "Users don't need to know what USDC is. They need to pay rent and earn rewards.",
        story: [
          "MegPrime wanted mainstream renters earning 10% back on rent, not crypto enthusiasts. USDC, KYC, SEC disclosures, and state-by-state licensing underneath. The design challenge wasn't managing that complexity. It was making it disappear.",
          "Led with a value calculator, before signup, before any commitment. Showed exactly what you'd earn vs. your bank this month, this year, over 5 years. The USDC conversion happens in the background. Users see rent payment and a growing balance.",
        ],
        screens: [
          { src: "/megprime-screen-1.png", alt: "MegPrime reward calculator", caption: "Value calculator, shows what you'd earn vs. your bank before any signup" },
          { src: "/megprime-screen-2.png", alt: "MegPrime setup rent", caption: "Setup Rent, check how you pay rent today, set up in minutes" },
          { src: "/megprime-screen-3.png", alt: "MegPrime how it works", caption: "How It Works, educates users on rent payments with USDC rewards" },
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
          "Giant Eagle's nav was built for Giant Eagle, not customers. The structure mirrored internal departments, not how people actually shop. Mobile and desktop had drifted into two separate codebases. Every update was made twice. Every inconsistency was doubled.",
          "I started with analytics: what were customers actually clicking on? What were they searching for? The gap was clear: top tasks like Weekly Ad, Curbside, and Cake Ordering were buried or invisible. The nav surfaced what the company wanted to promote, not what customers came to do.",
          "Ran competitor analysis and multiple rounds of usability testing. Rebuilt as a unified flyout from one codebase, restructured the information architecture around user tasks. Fixed the IA and cleared years of engineering debt in the same move.",
        ],
        screens: [
          { src: "/ge-nav-1.jpg", alt: "Giant Eagle navigation redesign" },
          { src: "/ge-nav-2.jpg", alt: "Giant Eagle navigation redesign" },
          { src: "/ge-nav-3.jpg", alt: "Giant Eagle navigation redesign" },
          { src: "/ge-nav-4.jpg", alt: "Giant Eagle navigation redesign" },
          { src: "/ge-nav-5.jpg", alt: "Giant Eagle navigation redesign" },
        ],
        screensType: 'gallery',
        featuresLabel: 'WHAT I FOUND',
        features: [
          { icon: 'fa-light fa-chart-mixed', label: 'Analytics Gap', detail: 'Top tasks (Weekly Ad, Curbside, Cake Ordering) were buried or invisible' },
          { icon: 'fa-light fa-sitemap', label: 'IA Mismatch', detail: 'Nav mirrored the org chart, not how customers actually shop' },
          { icon: 'fa-light fa-code-compare', label: 'Two Codebases', detail: 'Mobile and desktop drifted apart, every update made twice' },
          { icon: 'fa-light fa-users-viewfinder', label: 'Usability Testing', detail: 'Multiple rounds confirmed: customers couldn\'t find what they came for' },
          { icon: 'fa-light fa-swatchbook', label: 'Multi-Brand Design', detail: 'Giant Eagle + GetGo, two brands, different users, one unified system' },
        ],
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
      title: "Strive, Healthcare Performance App",
      role: "UX Designer",
      tags: ["Healthcare", "Mobile", "B2B SaaS", "Design System"],
      tools: ["Claude Code", "Figma", "React", "Pencil.dev", "Whoop API", "Typeform"],
      // Rewritten 2026-08-16 to the ambiguity → insight → product decision → prototype → outcome
      // pattern Jenny set. The old version opened on "redesigned the homepage," which reads as a
      // screen assignment. This one leads with the complexity and the judgment call, because Arena
      // is her strongest proof of working across many users, workflows, and data at once.
      // ⛔ The direction is NOT adopted by the client. Never write this as an adoption win.
      headline:
        "I was asked to improve engagement and the home experience. The audit logged 97 usability issues, but the deeper problem was structural: coaching, wearable data, daily practices, and content had no organizing model.",
      outcome:
        "Found the organizing model the product was missing, then built it as working software so the team could decide before engineering committed.",
      // ⛔ 97 is supporting evidence and must not lead. The four-question model is the story, so it
      // sits first. ⛔ The "4 hrs → 20 min" metric was removed from Arena per Jenny's spec: the
      // hiring story here is the product model, not speed.
      metrics: [
        { value: "4", label: "Questions the product answers in order" },
        { value: "3", label: "Time-aware home states" },
        { value: "97", label: "Usability issues logged" },
      ],
      caseStudy: {
        insight: "The 97 usability issues were real. Fixing them one at a time still would not have made a product.",
        // ⛔ The 97 usability issues are SUPPORTING EVIDENCE, not the story. The story is that the
        // product had no organizing model for what someone should do next.
        // ⛔ Not adopted by the client. Never write this as an adoption win.
        // Jenny's spec copy, 2026-08-16, used verbatim. ⛔ Do not rewrite.
        // The four questions are the centerpiece and are written out in full inside the beat so
        // they read as the product model, not as a footnote.
        beats: [
          { label: "The request", text: "Improve the home experience and engagement." },
          { label: "What I found", text: "The home screen behaved like a feature library. Mid-shift clinicians did not need more things to browse. They needed the product to help them understand what mattered now." },
          { label: "The product model", text: "I reorganized the experience around four questions. What am I trying to achieve. How am I doing. What should I do today. What should I learn next." },
          { label: "Make it real", text: "I built the model as functional React prototypes with Claude Code so the team could evaluate the behavior as a working experience before engineering committed." },
          { label: "What changed", text: "The team could compare competing product concepts against something real instead of debating static mocks. The direction is still in development, so I treat this as decision evidence, not an adoption win." },
          { label: "In retrospect", text: "I would test the four-question model with clinicians as a standalone concept before building the interface." },
        ],
        beforeScreen: { src: "/arena-screen-before.png", alt: "Arena Strive V1, feature library", caption: "Before, V1 feature library" },
        screens: [
          { src: "/arena-screen-1.png", alt: "Arena Strive pre-shift state", caption: "6:47am · Pre-shift · Surgeon · Hospital" },
          { src: "/arena-screen-2.png", alt: "Arena Strive mid-shift state", caption: "1:15pm · Mid-shift · 8 min break · Hospital" },
          { src: "/arena-screen-3.png", alt: "Arena Strive post-shift state", caption: "11:30pm · Post-shift · Just got home" },
        ],
        screensType: 'before-after',
        featuresLabel: 'DESIGN DECISIONS',
        features: [
          // Retuned with the story rewrite. 'B2B2C Strategy' was cut with the sales-cycle thread,
          // and 'AI Prototyping' no longer carries the unmeasured 10x claim.
          { icon: 'fa-light fa-diagram-project', label: 'Behavioral Model', detail: 'Four questions in order: what am I after, how am I doing, what today, what next.' },
          { icon: 'fa-light fa-clock', label: 'Time-Aware States', detail: 'When does a clinician actually need this? Pre-shift, mid-shift, post-shift.' },
          { icon: 'fa-light fa-heart-pulse', label: 'Biometric Integration', detail: 'Recommendations tied to Whoop data, not generic advice.' },
          { icon: 'fa-light fa-bolt', label: 'Prototype as Argument', detail: 'Working React, so competing concepts get tested instead of debated.' },
        ],
      },
    },
    {
      id: "designhub",
      company: "Arena Labs / Jointley",
      // Retitled 2026-08-16. The old name, "AI-Powered Design Hub", made this read like a
      // prompt-engineering project. It is a product-development problem: the reasoning between
      // artifacts kept disappearing. Claude Code, React, and MCP stay visible as implementation,
      // never as the headline.
      title: "From research to working prototype, without losing the decisions in between",
      role: "Designer + Builder",
      tags: ["Product Development", "Design System", "Prototyping", "React"],
      tools: ["Claude Code", "React", "Vite", "Figma MCP", "Pencil.dev"],
      video: "/ai-hub-video.mp4",
      // ⭐ THIS PROJECT HAS A DIFFERENT JOB FROM THE OTHER TWO. Jenny's rule, 2026-08-16:
      //   Roadrunner  = "I changed the scope from a screen problem to a workflow problem."
      //   Arena       = "I created a product model when many features lacked structure."
      //   Design Hub  = "I connected the reasoning between research, design, prototype, and
      //                  implementation."
      // This is design operations and technical fluency, NOT another product strategy case study.
      // ⛔ Do not let this copy drift back into "I find the real problem", "I connect decisions",
      // "I prototype", or "I work across systems". Roadrunner and Arena already prove all four,
      // and repeating them here is what made this section feel redundant.
      headline:
        "Product decisions were getting fragmented across tools. Research lived in Notion, design in Figma, components in Storybook, and specs in PDFs.",
      outcome:
        "Built a connected workflow where evidence, decisions, components, and functional prototypes stay linked from problem framing through implementation.",
      // ⛔ "4 hrs → 20 min" is gone and stays gone. This project is not positioned around speed.
      // The value is better decisions, not faster output.
      metrics: [
        { value: "4 → 1", label: "Design artifacts connected into one workflow" },
        { value: "Research → Decision → Prototype", label: "A traceable product reasoning loop" },
        { value: "Functional React", label: "A working experience, not only a static mockup" },
      ],
      caseStudy: {
        insight: "The problem was never a shortage of artifacts. It was that the reasoning connecting them disappeared.",
        // ⛔ This is NOT a story about building an AI tool, and the title must never say so.
        // It is a product-development problem: the reasoning between artifacts kept disappearing.
        // Runs third and lighter on job pages so it supports Roadrunner and Arena, not competes.
        // Unlabeled beats, so the intro reads as continuous prose rather than a methodology slide.
        // ⛔ The old four-part "What's inside" list was deleted on purpose: it read as a process
        // diagram and repeated the portfolio's own narrative. Do not replace it with another
        // four-card section.
        // ⛔ "In retrospect" was also deleted. It made this read as a tooling experiment.
        beats: [
          { label: "", text: "The problem wasn't missing artifacts. It was losing the reasoning that connected them." },
          { label: "", text: "I built a connected workflow where evidence, decisions, components, and functional prototypes stayed linked from problem framing through implementation." },
        ],
        // Three outcome cards. ⛔ Exactly three. Do not add a fourth.
        // Seven tiles became four, then four became these three on 2026-08-16, because the
        // four-card version still read as a methodology slide rather than a result.
        featuresLabel: 'WHAT CHANGED',
        features: [
          { icon: 'fa-light fa-magnifying-glass-chart', label: 'Evidence → Decision', detail: 'Research findings stay connected to the product decisions they create.' },
          { icon: 'fa-light fa-palette', label: 'Design → Prototype', detail: 'Components and tokens stay connected to a working experience, not only static screens.' },
          { icon: 'fa-light fa-hand-pointer', label: 'Prototype → Alignment', detail: 'Teams discuss product behavior instead of debating a picture.' },
        ],
        // Lands after the cards and the metrics, which is why it uses `closing` rather than a beat.
        closing: {
          label: 'The impact',
          text: 'The value was not creating another design tool. It was keeping product reasoning attached to the artifacts teams use to build.',
        },
        screens: [],
      },
    },
  ],
  experience: [
    {
      id: "hema",
      company: "Hema Designs",
      role: "Founding Product Designer",
      type: "Freelance",
      period: "2023–Present",
      location: "Pittsburgh, PA",
      highlights: [
        "Embed with early-stage teams as a founding or sole designer across healthtech and fintech, owning discovery, product direction, interaction design, systems, and functional prototypes",
        "Arena Labs: audited 97 usability issues and redesigned the home experience around three biometric and time-aware states",
        "Built a Claude Code and React workflow that reduced screen iteration from approximately four hours to 20 minutes",
        "MegPrime Pay: simplified crypto, KYC, and SEC complexity into a calculator-first rent-payment experience for mainstream renters",
      ],
      tags: ["0→1", "AI", "Healthtech", "Fintech"],
    },
    {
      id: "jointley",
      company: "Jointley",
      role: "Product Design Lead",
      type: "Full-time",
      period: "2025–Present",
      location: "Remote",
      highlights: [
        "Lead product and digital design across multiple client engagements, from positioning and information architecture through shipped Webflow websites and product experiences",
        "Partner with the founder on Jointley's offers, positioning, and sales narrative",
        "Own product flows, requirements, interaction design, and design-system decisions for JDOS, its multi-tenant operating platform",
      ],
      tags: ["Consultancy", "Webflow", "Design System", "SaaS"],
    },
    {
      id: "roadrunner",
      company: "Roadrunner Recycling",
      role: "Senior Product Design Manager",
      type: "Full-time",
      period: "2022–2023",
      location: "Pittsburgh, PA",
      highlights: [
        "Asked to redesign one bill-entry page; an end-to-end audit exposed 28 clicks across four applications and 75% repeated data entry",
        "Shipped a redesigned bill-entry experience, operational dashboard, and more than 50 reusable components",
        "Reduced the core billing workflow from 28 clicks to 3, from approximately six minutes to one, and manual errors by 40%",
        "Partnered with engineering to accelerate delivery of subsequent pages through a shared component system",
        "Mapped dependencies across work management, payments, contracts, and hauler data, helping leadership see billing as a company-wide operational system rather than an isolated page",
      ],
      tags: ["B2B SaaS", "Internal Tools", "Research", "Design System"],
    },
    {
      id: "giant-eagle-design",
      company: "Giant Eagle",
      role: "Lead UX Designer → UX Manager → Senior Manager, Customer Research & Experience Design",
      type: "Full-time",
      period: "2017–2022",
      location: "Pittsburgh, PA",
      highlights: [
        // Content synced from Jenny's Staff Product Designer resume doc, 2026-08-01.
        "Joined as Giant Eagle's first dedicated UX designer and built the company's UX and customer-research capability from the ground up",
        "Introduced formal research and usability testing, built the team, and secured leadership investment in Qualtrics",
        "Led mixed-method research that directly influenced PM roadmaps and broader business decisions",
        "Managed outside research agencies and a distributed experience-design team across the United States and India",
        "Created a shared design library across marketing and UX, improving consistency across web, mobile, and in-store experiences",
        "Delivered measurable results across loyalty, navigation, and onboarding, including a 384% increase in spend per member, a 278% increase in cake-ordering clicks, and a 15.27% increase in Curbside conversion",
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
        "Built reusable Adobe CMS components, contributed to the Digital Patterns Library, and introduced responsive prototyping for complex healthcare experiences",
      ],
      tags: ["Healthcare", "Front-end Dev", "Regulated"],
    },
    {
      id: "giant-eagle-dev",
      company: "Giant Eagle",
      role: "Front-End Developer → Senior Front-End Analyst",
      type: "Full-time",
      period: "2013–2016",
      location: "Pittsburgh, PA",
      highlights: [
        "Built customer-facing web experiences and reusable front-end patterns before transitioning into UX and product design",
      ],
      tags: ["Front-end Dev", "Consumer", "Web"],
    },
  ],

  skills: {
    design: ["Product Strategy", "Product Discovery", "UX Research", "Mixed-Method Research", "Roadmap Influence", "Complex Workflow Design", "Information Architecture", "Interaction Design", "Design Systems", "AI-Native Prototyping", "PRDs & Requirements", "Accessibility & WCAG"],
    tools: ["Figma", "Claude Code", "React", "Webflow"],
    domains: ["Healthtech", "Fintech / KYC", "B2B SaaS", "Consumer", "Complex Workflows", "AI-native products"],
  },

  education: [
    {
      school: "Art Institute of Pittsburgh",
      degree: "Interactive Media",
      period: "Pittsburgh, PA",
    },
    {
      school: "On Deck",
      degree: "Design Leadership",
      period: "",
    },
    {
      school: "Nielsen Norman Group",
      degree: "UX Management",
      period: "",
    },
  ],

  // Leadership section intentionally empty. ResumePage.jsx guards on `jenny.leadership &&`
  // so nothing renders and no orphan heading is left behind.
  leadership: [],

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
        "Jenny doesn't just make things look good. She builds systems, evidence-backed personas, clearly documented UX decisions, and coded components.",
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
