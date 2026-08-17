import Nav from '../../components/Nav';
import { aplaceformom } from './aplaceformom';
import LLPageHero from '../../components/ll/LLPageHero';
import LLRoleStrip from '../../components/ll/LLRoleStrip';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLSplitStatement from '../../components/ll/LLSplitStatement';
import LLCloseCta from '../../components/ll/LLCloseCta';

// ─────────────────────────────────────────────────────────────────────────────
// Fixed order, per Jenny's build spec 2026-08-16:
//   1 hero · 2 role-fit strip · 3 selected work intro · 4 Roadrunner · 5 Arena
//   6 Design Hub · 7 AI statement · 8 why provider experience · 9 CTA
//
// ⛔ There is no "Why me" section and there must not be one. It was deleted on
// purpose, and it is not to be replaced with another explanatory block. The case
// studies are the proof, which is why they sit directly under a one-line intro.
//
// All copy lives in aplaceformom.js and is Jenny's, verbatim. This file only
// decides order and hierarchy.
// ─────────────────────────────────────────────────────────────────────────────
export default function APlaceForMomPage() {
  const d = aplaceformom;

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="aplaceformom" />

      {/* 01 · Hero. `compact` trims it about 20% so the work appears sooner. */}
      <LLPageHero
        eyebrow={`${d.identity} · ${d.roleLens}`}
        companyName={d.name}
        role={d.role}
        headline={d.heroHeadline}
        body={d.heroBody}
        capabilityLine={d.capabilityLine}
        ctaLabel={d.heroPrimaryLabel}
        ctaHref={d.heroPrimaryHref}
        ctaHideAvatar
        secondaryLabel={d.secondaryLabel}
        secondaryFrom="aplaceformom"
        hideName
        compact
      />

      {/* 02 · The one customized strip. Capped in height by the component. */}
      <LLRoleStrip label={d.roleStrip.label} text={d.roleStrip.text} />

      {/* 03, 04, 05, 06 · The intro line, then Roadrunner, Arena, the hub.
          ⛔ These render through the ORIGINAL shared case-study component, on purpose. Jenny asked
          that the case study layout not change: the dark image bands, tool chips, investigation
          cards, compare strips and metrics row are the existing visual language and they stay.
          Only the text inside them was restructured, and that copy lives in data/jenny.js.
          A bespoke renderer was tried on 2026-08-16 and reverted for exactly this reason. */}
      <LLSelectedProjects
        id="selected-work"
        eyebrow={d.workIntro.eyebrow}
        heading={d.workIntro.heading}
        projectIds={d.projectIds}
      />

      {/* 07 · The only place AI is discussed. Compact by design. */}
      <LLSplitStatement
        claim={d.aiStatement.claim}
        detail={d.aiStatement.detail}
        chips={d.aiStatement.chips}
      />

      {/* 08, 09 · Why this role, then the CTA. */}
      <LLCloseCta
        heading={d.whyThisRoleHeading}
        closeText={d.whyThisRole}
        from="aplaceformom"
        primaryLabel={d.ctaPrimaryLabel}
        secondaryLabel={d.secondaryLabel}
      />
    </div>
  );
}
