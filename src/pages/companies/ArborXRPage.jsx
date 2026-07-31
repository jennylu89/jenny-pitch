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
      />
      {/* Problem block removed 2026-07-30, Jenny's call, after seeing it rendered. The component
          and its copy still exist if it comes back. Known consequence: nothing on this page now
          speaks about Jordan except the close. */}

      {/* ⭐ ADDED 2026-07-30 on Jenny's "do all". Both reviewers, independently, flagged that ~1,500
          words of argument run before any work is visible, against his second must-have: "A
          portfolio that makes it immediately obvious you're talented... Taste, craft, product
          thinking that speaks for itself."
          This is the ONE structural addition to a structure Jenny locked twice, and it is here
          rather than anywhere else because it is the hero's own story: the hero says 28 clicks
          became 3, and this is that, shown. Bill entry, not the dashboard, for the same reason.
          Caption is verbatim from jenny.js roadrunner compareScreens. Do not add a second image. */}
      <section style={{ padding: 'var(--space-48) 0 0' }}>
        <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)' }}>
          <div className="arborxr-compare" style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 'var(--space-18)',
          }}>
            {[
              { src: '/RR-Before-After-Bill-entry.png', caption: 'Before & After: Bill Entry',
                alt: 'Roadrunner bill entry, before and after: 28 clicks across four apps becomes 3 clicks in one platform' },
              { src: '/RR-Before-after-dashboard.png', caption: 'Before & After: Dashboard',
                alt: 'Roadrunner dashboard, before and after the platform overhaul' },
            ].map((img) => (
              <figure key={img.src} style={{ margin: 0 }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: '100%', height: 'auto', display: 'block',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--glass-stroke)',
                    boxShadow: 'var(--shadow-glass)',
                  }}
                />
                <figcaption style={{
                  fontSize: 'var(--type-small)', color: 'var(--muted)',
                  lineHeight: 'var(--leading-body)', margin: 'var(--space-12) 0 0', textAlign: 'center',
                }}>
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <LLSummary heading={arborxr.summaryHeading} rows={arborxr.summaryRows} />
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
      {/* hideCompare: both Roadrunner before/after images now render above the ask rows. Without
          this the exact same two images appeared twice on one page, ~900px apart. Caught in the
          DOM, not in the code. Opt-in prop, so the other 26 company pages are untouched. */}
      <LLSelectedProjects projectIds={['roadrunner', 'designhub']} hideCompare />
      <LLCloseCta
        closeText={arborxr.close}
        from="arborxr"
        primaryLabel={arborxr.primaryLabel}
        secondaryLabel={arborxr.secondaryLabel}
      />
    </div>
  );
}
