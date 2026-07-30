import Nav from '../../components/Nav';
import { step } from './step';
import { jenny } from '../../data/jenny';
import LLPageHero from '../../components/ll/LLPageHero';
import LLJdSection from '../../components/ll/LLJdSection';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';
import Eyebrow from '../../components/ll/Eyebrow';

export default function StepPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="step" />
      <LLPageHero companyName={step.name} role={step.role} oneLiner={step.oneLiner} />

      {/* The opening: addressed to Greg Hill, Head of Design. No ask/proof table or
          "how I work" tiles below, copy.md doesn't include that content for Step. */}
      <section style={{ padding: 'var(--space-96) 0 var(--space-48)' }}>
        <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)' }}>
          <Eyebrow>
            <span style={{ color: 'var(--muted)', textAlign: 'center', display: 'block' }}>The opening</span>
          </Eyebrow>
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 'var(--space-18)',
            maxWidth: '640px', margin: '0 auto',
          }}>
            {step.opening.map((p, i) => (
              <p key={i} style={{
                fontSize: 'var(--type-body)',
                lineHeight: 'var(--leading-body)',
                color: 'var(--muted)',
                margin: 0,
              }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* JD-mapped sections (copy.md Sections 1-5) */}
      {step.sections.map((section, i) => (
        <LLJdSection key={section.id} section={section} index={i} />
      ))}

      {/* copy.md Section 6. Sits directly after Section 5 on purpose: Section 5
          raises "can you do this," this answers "do you want this," and the two
          only work as a pair when they are adjacent. */}
      <LLJdSection section={step.whyStep} index={step.sections.length} />

      <AIProjects />
      <LLSelectedProjects projectIds={['myperks', 'megprime', 'designhub']} />

      <LLCloseCta
        closeText={step.close}
        from="step"
        primaryHref={`mailto:${jenny.contact.email}`}
        primaryLabel={`Email me: ${jenny.contact.email}`}
        secondaryLabel="Resume and full portfolio"
      />
    </div>
  );
}
