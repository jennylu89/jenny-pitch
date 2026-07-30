export const step = {
  name: "Step",
  role: "Hand me one area. Stop checking it.",

  oneLiner:
    "Jenny Lu. Product designer, 10+ years, twice the first or only designer in the building. Written for Step's Lead Product Designer, Growth.",

  opening: [
    "Greg, you were Step's first designer. Around employee ten, by your own case study.",
    "You built the first app, the first design system, and hired the designer after you. Seven years later, 7 million people use Step.",
    "This post reads like you wrote it, not a recruiter. Six things the role does, then nine things you hope the person brings. I'm applying for number six on that second list.",
  ],

  // JD-mapped sections. Stat lines from copy.md's bulleted lists are kept as their
  // own short paragraphs, in original order, rather than converted into the
  // value/label metric-card format elsewhere on the site, so no wording changes.
  sections: [
    {
      id: "billing-overhaul",
      tocLabel: "Billing Overhaul, Roadrunner",
      title: "They asked me to fix one billing page. I came back with a four-part overhaul, and leadership said yes.",
      story: [
        "Roadrunner Recycling handed me a one-page brief. Improve the billing screen.",
        "I ran the research before I drew anything. Platform-wide usability study. Stakeholder interviews. A process map across every department that touched a bill.",
        "Here's what was actually happening. One bill took 28 clicks across 4 separate apps. 75% of bills were identical to last month's and got retyped from scratch anyway. 74.6% of people used the platform every day. Only 32.2% said they knew it well.",
        "So I stopped designing the page. I wrote the case for four workstreams, took it to leadership with the data, and got the green light for the bigger scope.",
        "28 clicks per bill became 3.",
        "Six minutes per bill became one.",
        "50+ component library, built with engineering. Every page after that took a third of the time.",
        "Your post asks for someone who thinks about \"what we should build,\" not just \"how it should look.\" That's 28 clicks to 3.",
      ],
      testimonial: {
        quote: "Jenny pioneered a design system library that gave our web pages a unified look and feel. She is a force multiplier and could be an asset to any organization.",
        name: "Michael Quintero",
        title: "Software Engineer · Roadrunner Recycling",
      },
    },
    {
      id: "leadership-research",
      tocLabel: "Leadership & Research",
      title: "You asked for someone who directs other designers. I've been the one other teams started routing to.",
      story: [
        "Your post asks for delegating work and giving direction to other designers.",
        "Giant Eagle had no user research when I arrived. Not a small team. None.",
        "I introduced user testing. I hired the researchers. I made the business case and won the budget for Qualtrics at a company that had never funded a research platform before, and I changed how the team got used: design stopped being a pixel service and started getting pulled in upstream.",
        "Other departments started coming to my team for research when they were scoping new ventures. Nobody assigned that. They came because the answers were good.",
        "That's what I was promoted on: Sr. Manager, Customer Research and Experience Design, leading 5+ designers across the US and India, setting the WCAG standards the org adopted. At Roadrunner I was Sr. Product Design Manager and wrote the PRDs.",
        "Most teams hiring a designer want a doer, so the manager history usually stays off my front page. You asked for both.",
      ],
    },
    {
      id: "rewards-design",
      tocLabel: "Rewards Design",
      title: "I've designed a rewards program twice. The first one had 4 million members.",
      story: [
        "myPerks at Giant Eagle was generous and nobody could feel it. Members did the math wrong, decided it wasn't worth it, and stopped paying attention. The rewards were real. The feeling of winning wasn't.",
        "I redesigned around one question: what does a person need to see, and when, to feel like they're winning?",
        "Rewards surfaced at every touchpoint, in the app, in store, and on the web. Big redemptions broken into small visible milestones. The math deleted. Members see progress, not percentages.",
        "384% spend per member",
        "212% visit frequency",
        "53,000 new households",
        "30% lower cost to run",
        "What I'd do differently: I'd have A/B tested the milestone thresholds instead of setting them from research alone. Real usage data would have told us faster which milestone actually moved someone.",
        "Then I did it again in fintech. MegPrime Pay pays renters rewards on their rent. Underneath it there's USDC, KYC, SEC disclosures, and state-by-state licensing. I hid all of it. The first screen a renter sees is a calculator showing what they'd earn versus their bank this month, this year, and over five years, before they sign up for anything.",
        "Signup, onboarding, rewards, and gamification are the scope in your post. I've built the rewards half twice, once at 4 million members and once with a compliance stack under it.",
      ],
    },
    {
      id: "ai-native-building",
      tocLabel: "Building With AI",
      title: "I use Claude Code to build the thing, not to mock it.",
      story: [
        "At Arena Labs the design process was the bottleneck. One designer, limited hours, and a Figma-to-handoff pipeline that couldn't keep up with 97 logged usability issues.",
        "I replaced the pipeline with working React prototypes built in Claude Code. Iteration got about 10x faster. Work that took weeks took days. With that speed I rebuilt the home screen into three time-aware states, each surfacing one recommendation from Whoop biometric data.",
        "Then I built a design hub that put the research, the system, the prototype, and the specs in one URL. A screen went from 4 hours to 20 minutes. Four separate systems became one.",
        "I ship my own React with Claude Code. Engineers get a build they can run, not a redline to interpret.",
      ],
    },
    {
      id: "what-id-cost-you",
      tocLabel: "What I'd Cost You",
      title: "Here's what I'd cost you.",
      // copy.md uses **bold** to lead each paragraph (e.g. "**I will question the brief.**").
      // LLJdSection renders story entries as plain text, so the markdown asterisks are
      // stripped here; the words themselves are unchanged. Flagged in the build report.
      story: [
        "I will question the brief. That's the same trait that produced the Roadrunner number, and it has a price. If you hand me \"redesign signup,\" there's a real chance I come back in two weeks saying signup isn't where the drop is. The first six weeks with me are noisier than with a designer who takes the ticket and returns the screens.",
        "I have not run growth as a discipline. My numbers are real and they're mid-size: 15.27% conversion on a Curbside landing page after one of Giant Eagle's first UserTesting studies, 278% more cake-ordering clicks after an IA rebuild, the myPerks numbers above. I've never run an experiment backlog on a consumer app with your traffic. Your post asks for growth initiatives led at scale, and mine were led at Giant Eagle scale, not at 7 million users with MrBeast pointed at the front door.",
        "Most of what I've shipped to production is web and systems. The mobile work I've led is MegPrime Pay, Arena Strive, and Scan Pay and Go at Giant Eagle across mobile apps, web, and in-store devices. Native iOS and Android at your level of polish is the curve I'd be climbing fastest in month one. I'd rather say that now than in week three.",
        "My portfolio reads systemized. Design systems, regulated fintech, B2B workflows, healthcare. You asked for range between systemized UI and expressive, brand-forward moments. The closest evidence I have is myPerks, where the entire job was making a reward feel like a win, and the numbers say it worked.",
        "That's the whole list. The rest of your post, I've done.",
      ],
    },
  ],

  // copy.md Section 6. Deliberately NOT in the sections array: the page renders
  // AIProjects and LLSelectedProjects after the JD sections, and both are generic
  // across every company page. Putting this inside the array buried the one
  // Step-specific closing beat under boilerplate. It renders last instead, so the
  // final voice before the ask is hers.
  whyStep: {
    id: "why-step",
    tocLabel: "Why Step",
    title: "Why Step.",
    story: [
      "I have a teenager at home. Step is going to be where a lot of kids that age form their first idea of how money works. I've spent years making billing, rewards, and payments make sense to adults, and I'd rather spend the next stretch doing it for them.",
    ],
  },

  close:
    "I'm in Pittsburgh, I work remote, and I'm glad to come out to San Mateo for offsites. Name a Step surface, signup, onboarding, or the rewards loop, and I'll show you what I'd do with it before you spend an interview slot on me.",
};
