// Rebuilt 2026-07-30 on the COMMITTED (live) version, not the older working-tree draft.
// The working copy on disk had drifted from what is deployed, and an editing session ran against
// the wrong base before that was caught. Two things only the live version had are kept here: the
// Insights ROI observation (row 4) and the rescope row (row 5). They are the only lines on the
// page that prove she noticed something about THEM rather than about herself.
//
// Ask labels are no longer verbatim JD quotes. Jenny could not parse "License to surface
// structural rethinks unsolicited" at a glance, which means neither can anyone he forwards this
// to. The requirement is still his, said plainly.
export const arborxr = {
  name: "ArborXR",
  role: "Principal Product Designer",

  // No heroHeadline. Jenny compared the two heroes side by side on 2026-07-30 and chose the role
  // back in the h1, with the original paragraph under it. The known tradeoff, from the Why We Buy
  // read: the largest type on the page is then a job title he already knows. She has seen that
  // argument and picked this anyway. The hook still opens the paragraph.

  // His problem, before any of her proof. This counts his document instead of claiming anything
  // about his company. He can verify every word of it in ten seconds, and it asserts nothing
  // about ArborXR's headcount, roadmap or who currently catches what.
  problem: {
    eyebrow: "I counted",
    heading: "Your JD asks for the same thing five ways.",
    // Noun phrases, not commands. The first version was five bare imperatives aimed at the reader
    // ("Spot what isn't working." "Do the messy research.") which reads as a stranger telling a
    // co-founder how to do his job, and its "you" meant Jenny while every other "you" on the page
    // means Jordan. This version also restores two things that had been dropped from his asks:
    // "push to fix them" (#1) and "information architecture" (#4).
    body: [
      "Spotting what isn't working and pushing to fix it, without being asked. Structural rethinks, surfaced unsolicited. Open problem space research, before the right question is clear. Information architecture where complexity eats the product if nobody designs against it. All of it without a team around the person doing it.",
      "Craft and AI tooling each come up once or twice. The noticing comes up five times. I read that as the actual job.",
    ],
  },

  // Jenny's pick, restored from the deployed version. One word changed against her wording, and
  // only because it is a fact: the ~6 minutes to 1 minute metric is bill ENTRY time, not send
  // time (jenny.js, "Minutes per bill entry"). Sending and entering are different claims.
  oneLiner:
    "Nobody asked me to look at the rest of the billing system. I looked anyway, found 28 clicks across four apps to enter one bill, and 75% of those bills identical to last month. Roadrunner scoped me one page. It shipped as a platform, at 3 clicks.",

  summaryHeading: "What the job takes. What I've done.",
  summaryRows: [
    {
      ask: "Do the research when the question isn't clear yet",
      proof:
        "The part that won the argument wasn't the click count. 74.6% of people were in the platform every day and only 32.2% said they knew it well, and 75% of bills were identical to last month. That's a system problem. I took it to leadership, wrote the PRDs, and got 4 projects instead of 1 page. Six minutes to enter a bill became one.",
    },
    {
      ask: "Make data-dense screens work for technical users",
      proof:
        "Arena Strive gets used by surgeons, ER nurses and trauma teams mid-shift. I logged 97 usability issues on it. The headset would be new to me. The dense screen is not.",
    },
    {
      ask: "Put the design system in the code",
      proof:
        "At Roadrunner I built a 50+ component library with the engineers, in their codebase. Every page after it took a third of the time to build. Michael Quintero, a software engineer at Roadrunner, wrote: “Jenny pioneered a design system library that gave our web pages a unified look and feel. She is a force multiplier…”",
    },
    {
      // The ROI observation. "Maybe that's on purpose" is the whole point: his reply has to be
      // able to start "we did that on purpose because." Sourced from their public Insights page
      // and their ROI blog post, NOT from inside the app. Do not add a line implying she saw it
      // in the product until Jenny confirms her trial org includes Insights.
      ask: "Come in already having looked at the product",
      proof:
        "Insights knows the replay rate and the frame rate, and not what the headset cost. Maybe that's on purpose. I can't tell from outside whether it's a deliberate line or just where the data stopped.",
    },
    {
      // Last thing he reads before the CTA. The flaw named, the mechanism that contains it, and
      // the control handed back. The old version ended on "I've been a design manager twice",
      // which raised his objection 2 instead of answering it. It now ends on IC by choice
      // (profile.md: "IC by choice, left management deliberately to get back to the work").
      ask: "Push a structural rethink nobody asked for",
      proof:
        "At Roadrunner that turned a one-page fix into 4 projects, and someone above me had to sign off on it. So I do it early, in writing, with the research attached. The call stays yours. I've been the first or only designer twice, and that's the job I keep going back to.",
    },
  ],

  howIWork: {
    eyebrow: "How I work",
    heading: "Judgment first, then screens",
    // Subheading removed 2026-07-30, Jenny's call. It had become the field where four unrelated
    // jobs got stapled together: the B2B claim, Pittsburgh, onsite travel, and the rescope flaw.
    // Two things went with it and are now on the page NOWHERE: the onsite travel line (contract
    // R19, a real JD requirement) and the named flaw (jd-decode section 5). Both need a home if
    // they are coming back. Do not quietly re-stuff them here.
    subheading: "",
    columns: 1,
    tiles: [
      {
        icon: "fa-light fa-magnifying-glass",
        heading: "I ran one of Giant Eagle's first unmoderated studies",
        body: "Unmoderated, results the same day. The team had polished that Curbside landing page for months and knew it too well to see what a first-timer would ask. Research stayed my job at Giant Eagle: 4M loyalty members on myPerks, then Sr. Manager of Customer Research and Experience Design.",
      },
      // CUT 2026-07-30, Jenny's call: a tile headed "AI tools, with a real opinion" that stated no
      // opinion. It also carried an invented "20%" statistic. Contract R9 wants a real "here is
      // where Claude Code fails me" sentence and she doesn't have one yet. A faked opinion on the
      // one requirement everyone fakes is worse than an empty slot. Her sentence drops in here.
      // Nobody writes it for her.
      {
        icon: "fa-light fa-cubes",
        heading: "Nobody has to wait on me to start",
        body: "At Arena the research lived in Notion, the design system in Figma, the components in Storybook, the specs in PDFs. A finding that should have shaped onboarding sat 2 tools away. I put all of it behind one link, so a PM or an engineer opens it and builds without booking time with me.",
      },
      {
        icon: "fa-light fa-chart-line",
        heading: "Giant Eagle's rewards were generous and invisible",
        body: "Members were doing the math wrong and deciding it wasn't worth it. I put the reward in front of people everywhere they shopped, and broke big redemptions into smaller ones they could see. Spend per member went up 384%.",
      },
    ],
  },

  // Bookends the h1. "Everything" not "it": the old version's pronoun had no antecedent for a
  // thousand words. Asks for nothing, so the button carries the ask.
  close: "You shouldn't have to be the one who catches everything.",

  // "Schedule a call" named the mechanism. "See what I'd notice" named an outcome the page never
  // delivers, since the link books 30 minutes on cal.com and shows nothing. This is what the
  // button actually does, said plainly.
  primaryLabel: "Book 30 minutes",
  secondaryLabel: "View resume",
};
