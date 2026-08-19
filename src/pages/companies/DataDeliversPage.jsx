import Nav from '../../components/Nav';
import { datadelivers } from './datadelivers';
import { jenny } from '../../data/jenny';

import LLPageHero from '../../components/ll/LLPageHero';
import LLCaseStudy from '../../components/ll/LLCaseStudy';
import LLCloseCta from '../../components/ll/LLCloseCta';

import DDSection from '../../components/dd/DDSection';
import DDProofRows from '../../components/dd/DDProofRows';
import DDTiles from '../../components/dd/DDTiles';

// ─────────────────────────────────────────────────────────────────────────────
// DATADELIVERS · /datadelivers · v3
//
// ⛔ REBUILT 2026-08-18 on the skeleton of Jenny's own /arborxr page, after she
// put the two side by side. ArborXR won on every measure that was checked:
//
//                         ArborXR        DataDelivers v2
//   page height           6,956px        8,458px
//   blocks                4              8
//   H1                    33 chars       100 chars, 3 lines
//   hero elements         4              6
//   numbers in the hero   3              0
//   real numbers on page  ~8             3, all from one project
//
// The difference was never layout. ArborXR proves, then claims. v2 claimed, then
// offered to prove. Four blocks of v2 in a row (spine, how I work, AI statement,
// 30 days) ran 3,197px with zero images and 664 words of self-description.
//
// v3 ORDER:
//   1 hero        one-line headline, a story that ends in a number, ONE button
//   2 why me      claim left, THE PROOF right. Every proof ends in a number.
//   3 how I work  four opinions, not five process steps. AI lives in one card.
//   4 the work    Roadrunner in full, then Arena's screens
//   5 30 days     the plan, and where the delivery commitment lives
//   6 close + footer
//
// ⛔ DELETED in v3, do not bring back without a reason:
//   · the proof bar (its numbers now live inside the proof stories)
//   · the four-row measures table (it claimed their metrics without receipts)
//   · the standalone AI split statement (one card says it better)
//   · the capability line in the hero (it restated the body in arrows)
//
// ⛔ This file decides ORDER AND HIERARCHY ONLY. Every string lives in
// datadelivers.js.
// ─────────────────────────────────────────────────────────────────────────────
export default function DataDeliversPage() {
  const d = datadelivers;
  const roadrunner = jenny.selectedProjects.find(p => p.id === d.supporting.projectIds[0]);
  const arena = jenny.selectedProjects.find(p => p.id === d.arena.projectIds[0]);

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="datadelivers" />

      {/* ══ 01 · HERO ══════════════════════════════════════════════════════════
          ⛔ ONE button, no capability line, no second paragraph. The body is the
          Roadrunner story and it ends on "3 clicks a bill".

          ⛔ The story goes in `oneLiner`, NOT `body`. oneLiner renders at
          --type-lead (18px); body renders at --type-body (14px), which put the
          story in fine print under a 56px headline. ArborXR uses the oneLiner
          slot, and that is most of why its hero reads better. */}
      <LLPageHero
        eyebrow={d.identity}
        companyName={d.name}
        role={d.role}
        headline={d.heroHeadline}
        oneLiner={d.heroBody[0]}
        ctaNote={d.availability}
        ctaLabel={d.heroPrimaryLabel}
        ctaHref={d.heroPrimaryHref}
        hideName
        compact
      />

      {/* ══ 02 · WHY ME ════════════════════════════════════════════════════════
          The page's argument. Three claims, three stories, every one ending in a
          number that exists in src/data/jenny.js or on the ArborXR page. */}
      <DDSection
        id="why-me"
        eyebrow={d.whyMe.eyebrow}
        heading={d.whyMe.heading}
        align="center"
      >
        <DDProofRows rows={d.whyMe.rows} />
        {/* ⛔ The honesty note is one line under the rows, not a section. */}
        <p style={{
          fontSize: 'var(--type-small)', lineHeight: 'var(--leading-body)',
          color: 'var(--muted)', margin: 'var(--space-24) auto 0',
          maxWidth: '720px', textAlign: 'center',
        }}>
          {d.whyMe.note}
        </p>
      </DDSection>

      {/* ══ 03 · HOW I WORK ════════════════════════════════════════════════════
          Four opinions. The third one is the entire answer to their AI-native gate. */}
      <DDSection
        id="how-i-work"
        eyebrow={d.howIWork.eyebrow}
        heading={d.howIWork.heading}
        align="center"
        tint
      >
        <DDTiles tiles={d.howIWork.tiles} />
      </DDSection>

      {/* ══ 04 · THE WORK ══════════════════════════════════════════════════════
          Roadrunner in full, through the shared case study with its own copy from
          src/data/jenny.js. Then Arena's screens. */}
      <DDSection
        id="work"
        eyebrow={d.supporting.eyebrow}
        heading={d.supporting.heading}
        lead={d.supporting.lead}
      >
        {roadrunner && <LLCaseStudy project={roadrunner} index={1} />}
      </DDSection>

      {/* ⛔ Arena renders through the SAME shared LLCaseStudy as Roadrunner, with
          its existing copy from src/data/jenny.js. A hand-written Arena block was
          tried here and removed: it duplicated a case study that already exists
          and would have drifted from every other page that shows Arena.
          index={1} so its meta row reads 02. */}
      <DDSection
        id="arena"
        eyebrow={d.arena.eyebrow}
        heading={d.arena.heading}
        lead={d.arena.lead}
      >
        {arena && <LLCaseStudy project={arena} index={1} />}
      </DDSection>

      {/* ══ 05 · FIRST 30 DAYS ═════════════════════════════════════════════════ */}
      <DDSection
        id="plan"
        eyebrow={d.plan.eyebrow}
        heading={d.plan.heading}
        align="center"
      >
        <DDTiles tiles={d.plan.tiles} />
      </DDSection>

      {/* ══ 06 · CLOSE ════════════════════════════════════════════════════════
          ⛔ This page ends here, on LLCloseCta, like ArborXRPage.jsx and every
          other company page. The giant left-aligned "Jenny Lu" wordmark block
          belongs to the two template pages only. It was pulled in here by
          mistake and read as a second ending under a centered CTA. */}
      <LLCloseCta
        heading={d.close.heading}
        closeText={d.close.text}
        from="datadelivers"
        primaryLabel={d.close.primaryLabel}
        secondaryLabel={d.close.secondaryLabel}
      />
    </div>
  );
}
