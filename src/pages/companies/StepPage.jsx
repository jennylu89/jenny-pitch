import Nav from '../../components/Nav';
import { step } from './step';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

// Rebuilt 2026-07-30 to match ArborXRPage. Was LLJdSection narrative sections, ~1,165 words.
// Jenny: "This entire page is too long. I like my previous format from ArborX."
export default function StepPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="step" />
      <LLPageHero
        companyName={step.name}
        role={step.role}
        oneLiner={step.oneLiner}
        body={step.letter}
        ctaLabel={step.primaryLabel}
      />
      <LLSummary heading={step.summaryHeading} rows={step.summaryRows} />
      {/* Re-weighted 2026-08-01: the mobile-screen band moves ABOVE How-I-work so consumer
          mobile craft (Step's real hiring risk) is proven with pictures early, right after the
          rewards-led proof rows. Order leads with megprime (consumer money, 3 mobile screens),
          then myperks (rewards, hero image), then arenalabs (mobile app, 3 time-aware screens).
          All three have real assets in /public. */}
      <LLSelectedProjects projectIds={['megprime', 'myperks', 'arenalabs']} />
      <LLHowIWork howIWork={step.howIWork} />
      <AIProjects />
      <LLCloseCta
        closeText={step.close}
        from="step"
        primaryLabel={step.primaryLabel}
        secondaryLabel={step.secondaryLabel}
      />
    </div>
  );
}
