export const gatherai = {
  name: "Gather AI",
  role: "UX Designer",

  oneLiner:
    "A forklift operator reading inventory on a tablet mid-shift is the same design problem as an ER nurse mid-shift. High stakes, no time, no room for confusion. That is my work. And Gather AI is in Pittsburgh, my city.",

  summaryHeading: "What you need. What I've done.",
  summaryRows: [
    {
      ask: "Design tablet UX for people on their feet who can't afford confusion",
      proof: "Arena Strive: I designed for ER nurses and surgeons working on their feet mid-shift. 3 time-aware states so they glance and move.",
    },
    {
      ask: "User research with documented field observation",
      proof: "Ran an unmoderated field study on Giant Eagle Curbside, watching real shoppers finish the task. The redesign lifted conversion 15.27%.",
    },
    {
      ask: "Prototype in Figma using AI tools like Claude",
      proof: "That is my daily workflow. I prototype in Figma and ship the React myself with Claude Code, the same flow you already use.",
    },
    {
      ask: "Own UX for the operator app end to end",
      proof: "Twice the first and only designer. I own research, design, and shipped screens with no team to hand off to.",
    },
    {
      ask: "Design the Sage AI inventory dashboard",
      proof: "At Arena I designed screens that surface AI-driven recommendations from dense biometric data, one glance at a time.",
    },
    {
      ask: "0 to 1 startup background",
      proof: "Both my design roles were 0 to 1: first designer, built the practice and the product together.",
    },
  ],

  sections: [
    {
      id: "frontline",
      tocLabel: "Frontline UX",
      requirement: "Design for warehouse floor workers who can't afford a confusing screen",
      title: "I have designed for people who can't stop to figure out a screen",
      story: [
        "At Arena Labs, I designed for ER nurses and surgeons mid-shift. Nobody has time to browse a feature library during a 12-hour shift. I rebuilt the homepage around 3 time-aware states, pre-shift, mid-shift, post-shift, each surfacing one thing to glance at and act on.",
        "I worked through 97 logged usability issues to get there. I have never worked in a warehouse, but I know how to build a screen someone reads in one glance and trusts, because that is what I have built for other high-stakes, no-time jobs.",
      ],
      metrics: [
        { value: "3", label: "Time-aware states" },
        { value: "97", label: "Usability issues" },
      ],
    },
    {
      id: "field-research",
      tocLabel: "Field Research",
      requirement: "Run your own research with real field observation, travel to sites",
      title: "I go watch the real work before I design",
      story: [
        "At Giant Eagle, I ran an unmoderated field study on the Curbside landing page, watching real shoppers try to complete the task instead of guessing what confused them. The redesign lifted conversion 15.27%.",
        "At Roadrunner, I ran platform-wide usability studies, stakeholder interviews, and end-to-end process mapping across every department that touched billing before I touched a single screen.",
      ],
      metrics: [
        { value: "+15.27%", label: "Curbside conversion" },
        { value: "28→3", label: "Clicks per bill at Roadrunner" },
      ],
      testimonial: {
        quote: "Jenny deeply understands how research and design influence product strategy and flow into achieving measurable objectives.",
        name: "Jeffrey Inscho",
        title: "Senior Product Manager · Giant Eagle",
      },
    },
    {
      id: "ships",
      tocLabel: "Prototypes & Ships",
      requirement: "Prototype fast in Figma and Claude, ship an operator app v2 quickly",
      title: "I prototype in Figma and ship the React myself",
      story: [
        "I work in Claude Code every day, the same workflow you already use. At Arena Labs it cut my design iteration time 10x over the old Figma-to-handoff pipeline.",
        "That speed built the AI Design Hub, screen work that used to take 4 hours dropped to 20 minutes, with the same tools I'd bring to an operator app v2.",
      ],
      metrics: [
        { value: "10×", label: "Faster iteration" },
        { value: "4hr→20min", label: "Per screen" },
      ],
    },
  ],

  howIWork: {
    eyebrow: "What I bring",
    heading: "What sets me apart",
    subheading: "",
    tiles: [
      {
        icon: "fa-light fa-rocket",
        heading: "0→1 experience",
        body: "First designer at Giant Eagle, sole designer at Arena Labs. Built the practice, the system, and the product at the same time.",
      },
      {
        icon: "fa-light fa-arrows-spin",
        heading: "Research → design → ship, no handoff",
        body: "One person, no handoff gaps. I run my own studies, own the design system, and ship production code.",
      },
      {
        icon: "fa-light fa-bolt",
        heading: "High-stakes, glance-and-go interfaces",
        body: "Designed for ER nurses and surgeons mid-shift: one glance, one decision, then back to the real work.",
      },
      {
        icon: "fa-light fa-robot",
        heading: "Ships React with Claude Code",
        body: "I build production React with Claude Code. Design and implementation in the same hands.",
      },
    ],
  },

  close:
    "High stakes, no time, no room for confusion. That is the screen I know how to build. And Gather AI is doing it in Pittsburgh, my city. I would love to help.",
};
