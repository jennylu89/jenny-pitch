export const arborxr = {
  name: "ArborXR",
  role: "Principal Product Designer",

  // The JD asks for someone who notices without being asked, five separate times. So this page
  // proves noticing rather than answering the requirement list row by row.
  oneLiner:
    "Nobody asked me to look at the rest of the billing system. I looked anyway, found 28 clicks across four apps to send one bill, and 75% of those bills identical to last month. Roadrunner scoped me one page. It shipped as a platform, at 3 clicks.",

  summaryHeading: "What the job takes. What I've done.",
  summaryRows: [
    {
      ask: "The brief is never the whole problem",
      proof:
        "The part that won the argument wasn't the click count. It was that 74.6% of people were in the platform every day and only 32.2% said they knew it well, and 75% of bills were identical to last month. That is not a page problem. I took it to leadership, wrote the PRDs, and got four workstreams instead of one page. Six minutes to send a bill became one.",
    },
    {
      ask: "There's no one to hand it to",
      // TODO: Series A to B/C experience is a "strong signal," not a must-have, so
      // silence is fine. Add a line only if it is true.
      proof:
        "10+ years in product design, and twice the first or only designer in the building. Both times I built the research practice and the design system while shipping the product. There was no process to lean on and no one to hand off to.",
    },
    {
      ask: "I have not designed for VR or AR",
      proof:
        "What I have designed is operational software for people who are not at a desk. Arena Strive gets used by surgeons, ER nurses and trauma teams mid-shift. I logged 97 usability issues against my own work on it before anyone had to point them out. The device would be new to me. The dense screen is not.",
    },
    {
      ask: "Someone who ships her own code might not let go of it",
      proof:
        "I have been a design manager twice. I write PRDs, argue for scope, and hold the quality bar on work I did not personally build. The 50+ components at Roadrunner shipped because engineering built them with me. I can read the code and prototype my own. I do not need to be the one who commits it.",
    },
    {
      ask: "The system has to live where engineering works",
      proof:
        "At Roadrunner I built a 50+ component library with the engineers, in their codebase, not as a Figma file handed over a wall. Every page after it took a third of the time to build. One of their engineers called me a force multiplier.",
    },
    {
      ask: "Design that shows up as a spec makes more work, not less",
      proof:
        "I ship production React with Claude Code. The AI Design Hub is mine end to end: research, system, strategy and prototypes in one place. A screen that used to take 4 hours takes 20 minutes.",
    },
    {
      ask: "A tool list is not an opinion",
      // TODO: add the real answer to "where does Claude Code actually fail you". Knowing where
      // your own tools fall short is the same trait this page is built on, aimed inward.
      proof:
        "Claude Code, Figma MCP, React and Vite are my daily tools, not a demo I ran once. I know where they stop being useful, which is most of what having an opinion means.",
    },
    {
      ask: "A research function only works if people come to it",
      // TODO: confirm whether Genway, Marvin or any AI-moderated research tool has been used.
      // If not, one honest sentence saying so beats silence.
      proof:
        "Giant Eagle had no research function when I got there. I introduced user testing, hired the team, and made the business case that got the company to buy Qualtrics. Then other departments started coming to us before they explored a new venture. That is the version of customer intelligence I know how to build: internal demand, not a report nobody reads. Onsite travel works for me. Going to watch the real work is how I run research anyway.",
    },
    {
      // The ROI observation, moved out of the close where it had no room to be answerable.
      // "Maybe that's on purpose" is the whole point: Jordan's reply has to be able to start
      // "we did that on purpose because." Sourced from their public Insights page and their ROI
      // blog post, NOT from inside the app. Do not add a line implying she saw it in the product
      // until Jenny confirms her trial org includes Insights.
      ask: "Somebody has to notice the thing the roadmap didn't catch",
      proof:
        "Insights knows the replay rate and the frame rate, and not what the headset cost. Maybe that's on purpose. I can't tell from outside whether it's a deliberate line or just where the data stopped.",
    },
    {
      // Last thing he reads before the CTA. Same trait as row 1 seen from his side, and naming
      // the cost is what makes row 1 believable.
      ask: "I might rescope what you hand me",
      proof:
        "It's the same trait, and it costs something. At Roadrunner it turned a one-page fix into four workstreams, and someone above me had to sign off on that. So I do it early and in writing, with the research attached, and the call stays yours. I've been a design manager twice, so I know what it costs when scope moves on you quietly.",
    },
  ],

  howIWork: {
    eyebrow: "How I work",
    heading: "Judgment first, then screens",
    subheading: "",
    tiles: [
      {
        icon: "fa-light fa-magnifying-glass",
        heading: "I research before I open Figma",
        body: "At Roadrunner that meant a platform-wide usability study and a process map across every department that touched billing. It is how one page turned into the right project.",
      },
      {
        icon: "fa-light fa-robot",
        heading: "AI tools, with a real opinion",
        // TODO: the real "where Claude Code falls short" sentence goes here. Same as the row above.
        body: "Claude Code and Figma MCP are how I work every day. I ship production React with them. The speed is not the interesting part. Knowing which 20% to go back and do by hand is.",
      },
      {
        icon: "fa-light fa-cubes",
        heading: "I build scaffolding, not a queue in front of me",
        body: "The AI Design Hub put 7 thinking layers in one URL, so a PM or an engineer pulls the right primitive instead of guessing or waiting on me. A screen went from 4 hours to 20 minutes. The point is that it still works when I am not in the room.",
      },
      {
        icon: "fa-light fa-chart-line",
        heading: "I ask why before how",
        body: "Giant Eagle's loyalty program was not broken. The way it told 4M members what it was worth was. We rebuilt that, and spend per member went up 384%.",
      },
    ],
  },

  // 11 words. Her best closes run 9 to 12; the median across her 31 pages is 21. This closes the
  // loop the hero opens ("nobody asked me to look, I looked anyway") and it only works because
  // the rescope row sits directly above it ending on "the call stays yours." If that row moves,
  // this reads as arrogant and should be swapped.
  close: "Scope me one page. I'll come back with the real problem.",
};
