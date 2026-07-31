// SCRATCHED AND REWRITTEN 2026-07-30 from the verbatim JD at `applications/arborxr/jd.md`.
// Jenny: "Use this JD and update my port page based on this. Scratch whatever we did already."
// Nothing was patched. Every field below was written fresh from two sources only: the verbatim JD
// (the asks) and `src/data/jenny.js` (the facts). If a fact is not in jenny.js it is not on this page.
//
// STRUCTURE IS LOCKED and stays locked. Jenny, after seeing the five sections merged into one
// repeating block: "I like my previous structure. The top are more qualitative and experience.
// bottom is projects. no change." Ask/proof rows on top, How I work, then case studies. Do not
// collapse, reorder, or add sections to these again.
//
// ⛔ THE REFRAME THAT DECIDES THIS PAGE: his design engineer already owns portal design end to end,
// the design system, and most high fidelity work built in code. He is NOT hiring a builder.
// "You build" is his filter, not the job. Any row arguing she ships React is applying for a seat
// that is already taken, so the building shows up as credibility and never as the pitch.
//
// ⛔ HONESTY LINES, do not soften and do not "improve":
//   1. Her components are NOT an npm package and NOT a Claude skill. Both Arena repos are
//      `private: true` with no publish config, verified 2026-07-31. He uses those exact two words
//      in his JD. Borrowing them is the one thing on this page that would cost her the room.
//      An earlier draft rebutted him out loud ("a repo people build in, not a package they
//      install"). That was cut: state what exists, do not argue with his sentence.
//   2. No XR, VR, or AR domain claim. She has none.
//   3. No Series A to B/C GROWTH claim, which jenny.js cannot back. Series A STAGE is fine and is
//      claimed in tile 1: jenny.js Hema says "Seed and Series A founders."
//   4. Nothing on this page may argue she cannot do the job. A dead version contained "The headset
//      would be new to me." That line does not come back.
//
// REVIEWED 2026-07-30 by two lenses, both run against this copy:
//   · Katelyn Bourgoin / Why We Buy: kept row 2's opener as the best line on the page, tightened
//     the hero, cut row 2's setup line, thinned row 3's number pile.
//   · Joseph Louis Tan / Career Creators Six Lenses: caught the number-integrity bugs, the missing
//     third-party proof, and that row 4 was an activity count with no consequence.
//   Where they disagreed (row 2's aphorism: Katelyn keep, Joseph cut) Katelyn won, because she is
//   the lens Jenny asked for and the line is doing hook duty.
//
// THREE THINGS BOTH REVIEWERS RAISED THAT WERE JENNY'S CALL. She answered all three on 2026-07-30:
//   · h1. APPLIED. See `heroHeadline` below. She was shown the exact line and chose it.
//   · Visual proof. APPLIED. One Roadrunner before/after now sits above the rows, added in
//     ArborXRPage.jsx. It is the only structural addition to a structure she locked twice.
//   · CTA. NOT APPLIED, and not re-asked. Katelyn wants "Put me on a call with your design
//     engineer." Jenny picked "Book 30 minutes" because it is what the button actually does.
//
// ⛔ TWO CONTRACT LINES CLOSED AS "SHIP AS IS", Jenny's call 2026-07-31. Both were graded MISS by
// the fresh-eyes review. Neither is an oversight now, so do not "fix" either one unprompted.
//
//   R10, no work visible until roughly 2,700px down, against his second must-have that talent be
//   "immediately obvious". Two fixes were offered and both declined: putting one of the three
//   UNUSED Roadrunner screens (public/roadrunner-screen-1..3.png, referenced nowhere in src/,
//   verified 2026-07-31) under the hero, and dropping LLPageHero's minHeight below 100vh. She
//   chose to send tonight rather than iterate again. The assets are still there if this reopens.
//
//   R17, the AI-moderated research gap. He names Genway and Marvin twice (jd.md:52, :61). Jenny
//   has not used them and chose silence over adding a line. It is a "strong signal", not a
//   must-have, so silence is survivable. Logged because the review's real finding was not the
//   silence itself, it was that this was the ONE cut on the page carrying no recorded reason.
//
// ⚠️ ONE OPEN FACT, AND IT IS NOT LOCAL TO THIS PAGE: the years number. jenny.js contains no
// "20+ years" string and ResumePage.jsx states no year count at all, so this page says only what
// the source backs: design since 2016, front end from 2013. But `jenny-offer-site/index.html:503`,
// `jenny-offer-site/about.html:119` and `pitch-pages/_jenny/profile.md:8` all say 20 or 20+ years,
// and `applications/arborxr/page-contract.md:21` (R5) asserts 20+ as well. If Jordan searches her,
// he sees both numbers. Jenny has to settle which is right; then the losing files get corrected,
// not this one.
export const arborxr = {
  name: "ArborXR",
  role: "Principal Product Designer",

  // ⭐ h1 CHANGED 2026-07-30, Jenny's call, after both reviewers named the old h1 the biggest
  // conversion risk on the page. Passing `heroHeadline` moves the role into the badge pill
  // automatically (LLPageHero line 42), so he still sees his own req title on arrival, but the
  // largest type on the page is now a claim instead of a job title he already knows.
  // This overturns her 2026-07-30 side-by-side pick. She saw this exact line and chose it, so it
  // is not a silent reversal. The five rows below now read as evidence for ONE claim.
  // The close no longer bookends this line. It used to carry it, and the promotion is why. See
  // the note on `close` below for what the close does instead now.
  heroHeadline: "I find the problem behind the ask.",

  // Hero paragraph under the h1. Answers the ask that repeats most in his JD: "You spot things that
  // aren't working and push to fix them without being asked" + "license to surface structural
  // rethinks unsolicited." Tightened from 62 words to 42. "Four-workstream platform" was cut as the
  // only phrase written from inside Jenny's org rather than from his chair.
  // Facts: jenny.js roadrunner headline, story para 2, metric "28→3".
  oneLiner:
    "Roadrunner asked me to fix one billing page. I mapped the workflow instead: 28 clicks across four apps to enter one bill, and 75% of the bills identical to last month. Nobody asked for the rest. It shipped at 3 clicks a bill.",

  // "Five of the things you'd have me own" not "your JD asks for five things." His JD lists eight
  // ownership areas and eight must-haves. Claiming five invites him to count the three she skipped.
  summaryHeading: "Five of the things you'd have me own. Here's where I've done each.",

  // Asks are keyed to "What You'll Own", the section that describes the actual job, not to his
  // beliefs section. Each ask is plain English, never a verbatim JD quote: Jenny could not parse
  // "License to surface structural rethinks unsolicited" at a glance, so neither can whoever he
  // forwards this to.
  //
  // Line 1 of each proof is the claim in her voice, no number, and must not fit any other
  // designer's page. LLSummary renders line 1 at full strength and the rest muted.
  //
  // ONE project per row, and no row repeats the hero:
  //   1 Curbside + the GE research practice   2 Giant Eagle navigation
  //   3 myPerks                                4 Arena Strive
  //   5 Design Hub
  summaryRows: [
    { // JD: "You'll build and run our continuous customer research program... every PM has customers
      // on speed dial they can pull into a call the same day."
      // The travel requirement lives HERE, on Jenny's call 2026-07-30 ("yes, and tie it to
      // research"). It is a real JD requirement ("On sites are a real requirement of this role, not
      // a nice to have") and the page had been silent on it. Two short lines, no overselling.
      // ⭐ RECUT 2026-07-30, Jenny: "then u need to say I build a research team from 0 - 1."
      // She is right, and it was the biggest thing the page was under-selling. Three of his eight
      // ownership bullets are research, and he is asking a DESIGNER to build the function, which
      // means ArborXR has no research team today. Building one from nothing is the single closest
      // match between his JD and her history, and it was sitting in line 2 as a supporting detail.
      // It is now the claim. Sourced verbatim: jenny.js:352 "Built the user research practice from
      // zero: introduced testing, hired the researchers, and won the Qualtrics budget at a company
      // that had never funded one." The title is jenny.js:161 and :345.
      // The old line 1 ("The team that has stared at a page for months is the last one who can see
      // it") was cut: the copy gate flagged it as a maxim that would fit any designer's page, in
      // the highest-contrast ink on the row. Its idea survives inside line 3, where it belongs.
      // "Build and run", not just "run". Both words are his (jd.md:35, "You'll build and run our
      // continuous customer research program"), and "build" is the half she actually owns.
      ask: "Build and run the research program, so PMs can reach a customer today",
      proof: [
        "I build the research function from zero. Giant Eagle had none when I got there.",
        "I introduced testing, hired the researchers, and won the Qualtrics budget at a company that had never funded one. They made me Sr. Manager, Customer Research & Experience Design.",
        "One of the first studies was the Curbside page the team had polished for months. They knew it too well to see it. Same-day results: first-timers didn't know whether you paid online or at pickup.",
        "We answered their questions on the page. Conversion up 15.27%. Total events went from 36.5% to 49.7%.",
        "That only worked because we watched real first-timers. I'll fly to your customers for the same reason.",
      ],
    },
    { // JD: "Information architecture on complex surfaces... The places where complexity will eat us
      // if no one's actively designing against it."
      // Line 1 is the best line on the page, per the Why We Buy read: elegant articulation, and it
      // doubles as the "point of view on what great enterprise design looks like" he lists as a
      // strong signal. Do not cut it.
      // The two-codebases setup line was folded into the payoff so the row is four lines, not five.
      ask: "Sort the IA before complexity takes over",
      proof: [
        "Most navigation is a picture of the company that built it.",
        "Giant Eagle's nav was sorted by department. People came for the weekly ad and cake orders, and both were buried.",
        "I rebuilt it as one flyout from one codebase, sorted by what people came to do.",
        "Clicks went up: grocery 41%, shopping history 21%, cake ordering 278%. One system to maintain instead of two.",
      ],
    },
    { // JD: "Design serves the business. The best designers think like business owners first" +
      // the strong signal "outcome focused."
      // Two number fixes here, both real: "30% cheaper to run" was cut because jenny.js says only
      // "30% Cost reduction" with no object, and assigning it to operating cost is an over-claim.
      // "4M members did the math wrong" became "across 4M members, people did" because the source
      // does not say all four million made the error.
      ask: "Design for the business result, not the screen",
      proof: [
        "The best thing I ever did for a loyalty program was change nothing about the rewards.",
        "Giant Eagle's myPerks paid out plenty. Across 4M members, people did the math wrong and assumed it wasn't worth it.",
        "I put the reward in front of them in the app and in the store, and cut big redemptions into milestones they could watch fill.",
        "Same program. Spend per member up 384%, visits up 212%, 53K new households.",
      ],
    },
    { // JD: "The experience quality bar across what gets built. Most production happens in code with
      // our design engineer. You set the bar, defend it, evolve it" + "help the whole team care."
      // Recut 2026-07-30. The old line 1 ("I don't have to be the one building it to know it isn't
      // good yet") was two negatives in one breath and buried the 97 count in line 2. The 97 now
      // opens the row, and the design-engineer point moved to line 4 where it lands as the
      // consequence instead of a defence.
      ask: "Set the bar and defend it, while the design engineer builds",
      proof: [
        // Names the actual users, which answers his must-have "data dense, complex interfaces for
        // technical users or power users." The page had said only "sold to hospitals" (the buyer)
        // while jenny.js:243 had the users sitting unused. Contract R6, raised by the copy gate.
        "I found 97 usability issues in an app already sold to hospitals and used by surgeons, ER nurses and trauma teams mid-shift.",
        "Nobody had audited it. I wrote every one of them down.",
        "Then I rebuilt the home screen from a feature library into 3 time-aware states, one recommendation each: pre-shift, mid-shift, post-shift.",
        "A bar nobody writes down is just my taste. Written down, it holds when someone else owns the build.",
      ],
    },
    { // JD: "Design components get packaged as skills and npm modules so any PM or engineer can
      // build with the right primitives... gatekeeper to catalyst."
      // Line 4 is JENNY'S OWN OPINION, chosen by her 2026-07-30 from three candidates. It answers
      // the must-have nobody else will answer honestly ("You have opinions about what these tools
      // are good for and where they fall short") and it doubles as his "the first 80% is
      // commoditized, the last 20% is everything" belief. Do not rewrite it for her.
      // "without a designer in the room", not "without you in the room". LLSummary prints the label
      // "Your ask" directly above this string, so "you" flipped referent mid-row and the ask read as
      // "build without Jordan in the room", which nobody asked for. Every other ask is written from
      // his chair. Caught by the copy gate 2026-07-30.
      ask: "Let PMs and engineers build without a designer in the room",
      proof: [
        "If a PM has to wait on me, I built the wrong thing.",
        "At Arena the research lived in Notion and the design system lived in Figma. A persona insight that should have shaped onboarding was two tools away.",
        "I rebuilt the process around Claude Code, functional React instead of static mocks, and iteration went 10x faster. Then I put 7 layers of that thinking at one URL and retired 4 systems.",
        "Where it falls short: Claude Code hands you the 80% in minutes, then keeps going past the point where the work gets worse. Knowing when to stop is still my job.",
      ],
    },
  ],

  howIWork: {
    eyebrow: "How I work",
    heading: "Two questions my case studies don't answer",
    // Subheading stays empty. It had become the field where four unrelated jobs got stapled
    // together. Do not re-stuff it.
    subheading: "",
    columns: 1,
    tiles: [
      // Answers the JD's "This isn't a role for someone who needs heavy process, layers of review,
      // or a team around them" and the strong signal "sole or lead designer." She has run design
      // teams twice and he is emphatic this is an IC role, so the page names it rather than hoping
      // he misses it.
      {
        icon: "fa-light fa-user",
        heading: "I managed twice. Now I want the work.",
        // The Seed/Series A fact is stated as its own sentence, not joined to the two client names.
        // jenny.js:310 says she is an embedded partner for Seed and Series A founders; jenny.js:312
        // separately lists Arena Labs and MegPrime Pay as clients. It never says those two are at
        // that stage. Joining them was an inference she would have to defend on a call.
        body: "Sr. Manager at Giant Eagle, with designers across the US and India. Then Sr. Product Design Manager at Roadrunner. Since 2023 I've been the only designer on the work at Arena Labs and MegPrime Pay. My clients are Seed and Series A founders. Nobody to hand it to, and that's the part I wanted.",
      },
      // Answers "You bring the upstream problem framing and the experience bar" and the must-have
      // "a design system that lives in code, not just Figma."
      // ⛔ The ratio here matters. An earlier draft spent three sentences building a case that she
      // is a builder and one sentence disclaiming it, which reads as auditioning for his design
      // engineer's job. Credentials are compressed; the disclaimer is the last word.
      // The quote is verbatim from jenny.js testimonials (Michael Quintero, Software Engineer,
      // Roadrunner Recycling) and is the only third-party proof on the page. It is an engineer
      // vouching for her design system, which is the exact risk this hire carries.
      {
        icon: "fa-light fa-code",
        heading: "I started as the front-end developer",
        // ⭐ YEARS RESOLVED 2026-07-30, Jenny's call: "Design since 2016, front end before."
        // jenny.js contains no "20+ years" string, so the page states what the source backs.
        // 2016 Highmark UI Designer is the design start; 2013 Giant Eagle front end is before it.
        // "Four of those years in B2B SaaS" = Roadrunner 2022 + Hema 2023 + Jointley 2025 to now.
        // This clears his first must-have (10+ years, 2+ in B2B SaaS) with room, from source only.
        body: "I wrote front end at Giant Eagle from 2013, then member-facing UI at Highmark. Designing product since 2016, four of those years in B2B SaaS and internal tools. At Roadrunner I built the 50+ component library alongside engineering, and every page after it took a third of the time. An engineer on that team wrote that I was a force multiplier. Your design engineer owns the build here. I read code and I stay out of the way.",
      },
    ],
  },

  // ⭐ REWRITTEN 2026-07-31, Jenny's pick, after she rejected 24 candidates across 9 angles.
  // Read the diagnosis before writing a 25th, because the 24 all failed the same way.
  //
  // WHY THEY FAILED (Why We Buy read): every one was written for a reader still deciding whether
  // Jenny is good. By the close he decided that 1,300 words ago. The only question left in front
  // of the button is what the 30 minutes is for, and not one of the 24 answered it. That is an
  // awareness-stage mismatch: product-aware copy sitting in the one most-aware slot on the page.
  //
  // WHY THE CLOSE EVEN HAS A JOB NOW: the old comment here said it "bookends the h1." It did,
  // until the h1 absorbed that exact sentence ("You want it caught before you ask" is now
  // "I find the problem behind the ask"). After that the close was running on a stale brief,
  // bookending nothing. Its job today is the one the button gave up: "Book 30 minutes" names a
  // mechanism, not an outcome, which was Jenny's deliberate call, so the outcome has to live here.
  //
  // WHY THIS LINE: it is Jenny's own register. Her instinct, and it was right, was that all 24
  // were straining and hers was not. Her draft was "Think it's a match? Let's talk," which had two
  // problems: the question hands him the verdict at the exact moment she wants to hold it, and
  // "let's talk" is the generic CTA the corpus names as the anti-pattern, on top of being the
  // closing line of every portfolio page on the internet. This keeps her word and her warmth,
  // makes the match HER assessment, then invites the pushback his own JD says he wants
  // ("knowing when to push back", jd.md:26). 10 words. Asks for nothing. No question mark.
  // 2026-07-31, Jenny's direct instruction, replacing "Sounds like a match. I'd like to hear where
  // I'm wrong." Two things were raised once and she chose this anyway, so do not revert it:
  // "I'd love" is on the Copy Canon kill list, and "if" hands the verdict back to him where the
  // previous line held it. She wanted the warmer register. Her page, her voice, her call.
  close: "If it's a match, I'd love to chat.",

  primaryLabel: "Book 30 minutes",
  secondaryLabel: "View resume",
};
