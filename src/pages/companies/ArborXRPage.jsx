import Nav from '../../components/Nav';
import { arborxr } from './arborxr';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function ArborXRPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="arborxr" />
      <LLPageHero
        companyName={arborxr.name}
        role={arborxr.role}
        oneLiner={arborxr.oneLiner}
        headline={arborxr.heroHeadline}
        ctaLabel={arborxr.primaryLabel}
        hideName
      />
      {/* Problem block removed 2026-07-30, Jenny's call, after seeing it rendered. The component
          and its copy still exist if it comes back. Known consequence: nothing on this page now
          speaks about Jordan except the close. */}

      {/* The two Roadrunner before/afters were lifted up here on 2026-07-30 and moved BACK on
          2026-07-31, Jenny's call after seeing them rendered above the rows. They live in the
          Roadrunner walkthrough at the bottom, where they always were.
          Keeping the reason so it is not re-argued: both reviewers flagged that ~1,300 words run
          before any work is visible, against his must-have "a portfolio that makes it immediately
          obvious you're talented." That is still true and still unanswered. If it gets solved, it
          does not get solved by duplicating the case study's own images at the top. */}
      <LLSummary heading={arborxr.summaryHeading} intro={arborxr.domainGap} rows={arborxr.summaryRows} askLabel="" proofLabel="The proof" />
      <LLHowIWork howIWork={arborxr.howIWork} />
      {/* ⛔ AIProjects CUT from this page 2026-07-30, Jenny's call, and it must not come back.
          It is a shared, untailored section and its shift 04 reads "Engineers copy code, not
          interpret specs. I hand off working React, not redlines." That is the builder-of-record
          claim this entire page is positioned to avoid, at full section weight with its own h2,
          sitting three inches under the tile that says "I read code and I stay out of the way."
          Jordan is reading to decide one thing: second design engineer, or the upstream partner
          his design engineer needs. The page was answering it twice, oppositely, and the louder
          answer was the wrong one.
          Nothing was lost: row 5 carries the AI story tailored, including Jenny's own line about
          where Claude Code fails her, which is the JD must-have almost every applicant fakes.
          The section still renders on the other 26 company pages. Do not re-add it here. */}
      {/* One deep project (Roadrunner, above) plus ONE builder proof. Their JD: "We'd rather
          see one project walked through deeply than ten listed shallowly." Design Hub stays
          because it carries the video and answers "show us the raw stuff and how fast you got
          it polished." Arena and myPerks are cited in the ask/proof rows instead. */}
      <LLSelectedProjects projectIds={['roadrunner', 'designhub']} />
      <LLCloseCta
        closeText={arborxr.close}
        from="arborxr"
        primaryLabel={arborxr.primaryLabel}
        secondaryLabel={arborxr.secondaryLabel}
      />
    </div>
  );
}
