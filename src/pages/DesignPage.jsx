import { useState } from 'react';
import Nav from '../components/Nav';
import Badge from '../components/Badge';
import NoiseOverlay from '../components/ll/NoiseOverlay';
import Eyebrow from '../components/ll/Eyebrow';
import MetricCard from '../components/ll/MetricCard';
import CtaButton from '../components/ll/CtaButton';
import LLPageHero from '../components/ll/LLPageHero';
import LLSummary from '../components/ll/LLSummary';
import LLHowIWork from '../components/ll/LLHowIWork';
import LLCloseCta from '../components/ll/LLCloseCta';
import LLSelectedProjects from '../components/ll/LLSelectedProjects';
import AIProjects from '../components/AIProjects';

const sections = [
  { id: 'tokens-colors', label: 'Colors', group: 'Tokens' },
  { id: 'tokens-typography', label: 'Typography', group: 'Tokens' },
  { id: 'tokens-spacing', label: 'Spacing', group: 'Tokens' },
  { id: 'primitives-badge', label: 'Badge', group: 'Primitives' },
  { id: 'primitives-eyebrow', label: 'Eyebrow', group: 'Primitives' },
  { id: 'primitives-metric', label: 'MetricCard', group: 'Primitives' },
  { id: 'primitives-cta', label: 'CtaButton', group: 'Primitives' },
  { id: 'primitives-noise', label: 'NoiseOverlay', group: 'Primitives' },
  { id: 'primitives-gradient-icon', label: 'Gradient Icon Box', group: 'Primitives' },
  { id: 'sections-hero', label: 'LLPageHero', group: 'Sections' },
  { id: 'sections-summary', label: 'LLSummary', group: 'Sections' },
  { id: 'sections-howiwork', label: 'LLHowIWork', group: 'Sections' },
  { id: 'sections-projects', label: 'LLSelectedProjects', group: 'Sections' },
  { id: 'sections-close', label: 'LLCloseCta', group: 'Sections' },
  { id: 'sections-ai', label: 'AIProjects', group: 'Sections' },
];

const colors = [
  { token: '--bg', value: '#F5F4F1', label: 'Background' },
  { token: '--surface', value: '#FFFFFF', label: 'Surface' },
  { token: '--text', value: '#272727', label: 'Text' },
  { token: '--muted', value: 'rgba(39,39,39,0.5)', label: 'Muted' },
  { token: '--border', value: 'rgba(39,39,39,0.1)', label: 'Border' },
  { token: '--accent', value: '#8B78FF', label: 'Accent' },
  { token: '--accent-fg', value: '#FFFFFF', label: 'Accent FG' },
  { token: '--accent-subtle', value: '#EAE8FF', label: 'Accent Subtle' },
  { token: '--dark-bg', value: '#272727', label: 'Dark BG' },
  { token: '--dark-text', value: '#FFFFFF', label: 'Dark Text' },
  { token: '--glass-bg', value: 'rgba(255,255,255,0.7)', label: 'Glass BG' },
];

const typography = [
  { token: '--type-h1', size: 'clamp(36px, 4.5vw, 56px)', label: 'H1', sample: 'Hero headline' },
  { token: '--type-h2', size: 'clamp(28px, 3.5vw, 44px)', label: 'H2', sample: 'Section heading' },
  { token: '--type-h3', size: 'clamp(24px, 2.8vw, 35px)', label: 'H3', sample: 'Card title' },
  { token: '--type-h4', size: 'clamp(20px, 2.2vw, 28px)', label: 'H4', sample: 'Subheading' },
  { token: '--type-h5', size: '22px', label: 'H5', sample: 'Tile heading' },
  { token: '--type-lead', size: '18px', label: 'Lead', sample: 'Intro text' },
  { token: '--type-body', size: '14px', label: 'Body', sample: 'Body copy' },
  { token: '--type-small', size: '12px', label: 'Small', sample: 'Captions & labels' },
];

function SectionWrapper({ id, title, children }) {
  return (
    <div id={id} style={{ marginBottom: '80px', scrollMarginTop: '80px' }}>
      <h3 style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h4)', fontWeight: 'var(--weight-medium)',
        color: 'var(--text)', margin: '0 0 24px',
        paddingBottom: '12px', borderBottom: '1px solid var(--border)',
      }}>{title}</h3>
      {children}
    </div>
  );
}

function CodeBlock({ children }) {
  return (
    <pre style={{
      backgroundColor: 'var(--dark-bg)', color: 'var(--dark-text)',
      padding: '16px', borderRadius: '8px', fontSize: '12px',
      fontFamily: 'var(--font-badge)', overflow: 'auto', margin: '16px 0 0',
    }}>{children}</pre>
  );
}

export default function DesignPage() {
  const [activeSection, setActiveSection] = useState('');

  const groups = [...new Set(sections.map(s => s.group))];

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav />
      <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', paddingTop: '80px' }}>

        {/* Left Nav */}
        <nav style={{
          width: '220px', flexShrink: 0, position: 'sticky', top: '80px',
          height: 'calc(100vh - 80px)', overflowY: 'auto',
          padding: '24px 16px', borderRight: '1px solid var(--border)',
        }}>
          {groups.map(group => (
            <div key={group} style={{ marginBottom: '24px' }}>
              <span style={{
                fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)',
                fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
                textTransform: 'uppercase', color: 'var(--muted)',
                display: 'block', marginBottom: '8px',
              }}>{group}</span>
              {sections.filter(s => s.group === group).map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setActiveSection(s.id)}
                  style={{
                    display: 'block', padding: '4px 8px', borderRadius: '4px',
                    fontSize: 'var(--type-body)', color: 'var(--text)',
                    textDecoration: 'none', marginBottom: '2px',
                    backgroundColor: activeSection === s.id ? 'var(--accent-subtle)' : 'transparent',
                  }}
                >{s.label}</a>
              ))}
            </div>
          ))}
        </nav>

        {/* Content */}
        <main style={{ flex: 1, padding: '24px 48px' }}>
          <h1 style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h1)', fontWeight: 'var(--weight-medium)',
            color: 'var(--text)', margin: '0 0 8px',
          }}>Design System</h1>
          <p style={{ color: 'var(--muted)', fontSize: 'var(--type-lead)', margin: '0 0 48px' }}>
            Components and tokens used across jenny-port.
          </p>

          {/* ── TOKENS ── */}

          <SectionWrapper id="tokens-colors" title="Colors">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {colors.map(c => (
                <div key={c.token} style={{
                  backgroundColor: 'var(--surface)', borderRadius: '8px',
                  border: '1px solid var(--border)', overflow: 'hidden',
                }}>
                  <div style={{
                    height: '48px',
                    backgroundColor: c.value,
                    borderBottom: '1px solid var(--border)',
                  }} />
                  <div style={{ padding: '8px 12px' }}>
                    <div style={{ fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)', color: 'var(--text)' }}>{c.label}</div>
                    <div style={{ fontSize: 'var(--type-small)', color: 'var(--muted)', fontFamily: 'var(--font-badge)' }}>{c.token}</div>
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper id="tokens-typography" title="Typography">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {typography.map(t => (
                <div key={t.token} style={{
                  display: 'flex', alignItems: 'baseline', gap: '24px',
                  paddingBottom: '16px', borderBottom: '1px solid var(--border)',
                }}>
                  <span style={{ width: '60px', flexShrink: 0, fontSize: 'var(--type-small)', color: 'var(--muted)', fontFamily: 'var(--font-badge)' }}>{t.label}</span>
                  <span style={{ fontSize: `var(${t.token})`, fontWeight: 'var(--weight-medium)', color: 'var(--text)', flex: 1 }}>{t.sample}</span>
                  <span style={{ fontSize: 'var(--type-small)', color: 'var(--muted)', fontFamily: 'var(--font-badge)', flexShrink: 0 }}>{t.size}</span>
                </div>
              ))}
            </div>
            <CodeBlock>{`font-family: var(--font-sans)  // BDO Grotesk
font-family: var(--font-badge) // Google Sans Code
weights: 400 (normal), 500 (medium), 600 (semibold)`}</CodeBlock>
          </SectionWrapper>

          <SectionWrapper id="tokens-spacing" title="Spacing">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-end' }}>
              {[3, 6, 12, 18, 24, 36, 48, 72, 96, 144].map(s => (
                <div key={s} style={{ textAlign: 'center' }}>
                  <div style={{ width: `${Math.min(s, 48)}px`, height: `${s}px`, backgroundColor: 'var(--accent-subtle)', borderRadius: '4px', border: '1px solid var(--accent)' }} />
                  <span style={{ fontSize: '10px', fontFamily: 'var(--font-badge)', color: 'var(--muted)', marginTop: '4px', display: 'block' }}>{s}px</span>
                </div>
              ))}
            </div>
          </SectionWrapper>

          {/* ── PRIMITIVES ── */}

          <SectionWrapper id="primitives-badge" title="Badge">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              <Badge variant="outline" size="sm">Outline SM</Badge>
              <Badge variant="filled" size="md">Filled MD</Badge>
              <Badge variant="subtle" size="md">Subtle</Badge>
              <Badge variant="solid" size="md">Solid</Badge>
              <Badge variant="glass" size="md">Glass</Badge>
              <Badge variant="outline" size="sm" dot>With Dot</Badge>
            </div>
            <CodeBlock>{`<Badge variant="outline" size="sm">Text</Badge>
// variants: outline | filled | subtle | solid | glass
// sizes: sm | md | lg
// props: dot, icon`}</CodeBlock>
          </SectionWrapper>

          <SectionWrapper id="primitives-eyebrow" title="Eyebrow">
            <Eyebrow><span style={{ color: 'var(--muted)' }}>Section label</span></Eyebrow>
            <CodeBlock>{`<Eyebrow>
  <span style={{ color: 'var(--muted)' }}>Section label</span>
</Eyebrow>`}</CodeBlock>
          </SectionWrapper>

          <SectionWrapper id="primitives-metric" title="MetricCard">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', maxWidth: '480px' }}>
              <MetricCard metric={{ value: '384%', label: 'Spend lift' }} />
              <MetricCard metric={{ value: '28→3', label: 'Clicks' }} />
              <MetricCard metric={{ value: '50+', label: 'Components' }} />
            </div>
            <CodeBlock>{`<MetricCard metric={{ value: '384%', label: 'Spend lift' }} />
<MetricCard metric={m} dark={true} /> // dark variant`}</CodeBlock>
          </SectionWrapper>

          <SectionWrapper id="primitives-cta" title="CtaButton">
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <CtaButton />
              <CtaButton variant="outline" from="design" />
            </div>
            <CodeBlock>{`<CtaButton />  // primary: avatar + Schedule a call → cal.com
<CtaButton variant="outline" from="ninety" />  // outline: View resume`}</CodeBlock>
          </SectionWrapper>

          <SectionWrapper id="primitives-noise" title="NoiseOverlay">
            <div style={{ position: 'relative', height: '120px', borderRadius: '8px', overflow: 'hidden', display: 'flex', gap: '12px' }}>
              <div style={{ flex: 1, backgroundColor: 'var(--accent)', position: 'relative', borderRadius: '8px' }}>
                <NoiseOverlay light />
                <span style={{ position: 'relative', zIndex: 1, padding: '16px', display: 'block', color: 'white', fontSize: 'var(--type-small)' }}>light</span>
              </div>
              <div style={{ flex: 1, backgroundColor: 'var(--dark-bg)', position: 'relative', borderRadius: '8px' }}>
                <NoiseOverlay />
                <span style={{ position: 'relative', zIndex: 1, padding: '16px', display: 'block', color: 'white', fontSize: 'var(--type-small)' }}>dark</span>
              </div>
            </div>
            <CodeBlock>{`<NoiseOverlay light />  // for light sections
<NoiseOverlay />       // for dark sections`}</CodeBlock>
          </SectionWrapper>

          <SectionWrapper id="primitives-gradient-icon" title="Gradient Icon Box">
            <div style={{ display: 'flex', gap: '16px' }}>
              {['fa-solid fa-wand-magic-sparkles', 'fa-solid fa-arrows-spin', 'fa-solid fa-universal-access', 'fa-solid fa-people-group'].map(icon => (
                <div key={icon} style={{
                  background: 'linear-gradient(180deg, #a89fef 0%, #cfc9f5 65%, #eae8fb 100%)',
                  borderRadius: 'var(--radius)', padding: '5px', width: '48px', height: '48px', flexShrink: 0,
                }}>
                  <div style={{
                    backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)',
                    background: 'rgba(255,255,255,0.75)', border: '1px solid var(--glass-stroke)',
                    borderRadius: '8px', boxShadow: 'var(--shadow-glass)',
                    width: '100%', height: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b55e8',
                  }}>
                    <i className={icon} style={{ fontSize: '18px' }} />
                  </div>
                </div>
              ))}
            </div>
            <CodeBlock>{`// Gradient outer: #a89fef → #cfc9f5 → #eae8fb
// Glass inner: rgba(255,255,255,0.75) + blur(3px)
// Icon: #6b55e8, font-awesome solid
// Sizes: 72px (ProcessSection), 48px (tiles)`}</CodeBlock>
          </SectionWrapper>

          {/* ── SECTIONS ── */}

          <SectionWrapper id="sections-hero" title="LLPageHero">
            <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', margin: '0 0 16px' }}>
              Glass pill badge → H1 role → subtitle → Schedule a call CTA. Used on all company pages.
            </p>
            <CodeBlock>{`<LLPageHero
  companyName="Ninety"
  role="AI-first product designer"
  oneLiner="10+ years shipping across B2B SaaS..."
/>`}</CodeBlock>
          </SectionWrapper>

          <SectionWrapper id="sections-summary" title="LLSummary">
            <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', margin: '0 0 16px' }}>
              "Why me" grid — ask/proof rows in glass cards. Consistent labels: "Your ask" / "My proof".
            </p>
            <CodeBlock>{`<LLSummary
  heading="What you need. What I've done."
  rows={[
    { ask: "End-to-end design", proof: "Research through shipped product..." },
  ]}
/>`}</CodeBlock>
          </SectionWrapper>

          <SectionWrapper id="sections-howiwork" title="LLHowIWork">
            <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', margin: '0 0 16px' }}>
              "What sets me apart" — 2-column glass card grid with gradient icon boxes. Subtle purple gradient bg.
            </p>
            <CodeBlock>{`<LLHowIWork howIWork={{
  eyebrow: "What I bring",
  heading: "What sets me apart",
  tiles: [
    { icon: "fa-solid fa-wand-magic-sparkles", heading: "...", body: "..." },
  ],
}} />`}</CodeBlock>
          </SectionWrapper>

          <SectionWrapper id="sections-projects" title="LLSelectedProjects">
            <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', margin: '0 0 16px' }}>
              Renders filtered + sorted case study cards from jenny.js. Pass project IDs in display order.
            </p>
            <CodeBlock>{`<LLSelectedProjects projectIds={['roadrunner', 'arenalabs', 'navigation', 'myperks']} />`}</CodeBlock>
          </SectionWrapper>

          <SectionWrapper id="sections-close" title="LLCloseCta">
            <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', margin: '0 0 16px' }}>
              Bottom CTA with gradient bg + noise. Schedule a call + View resume buttons.
            </p>
            <CodeBlock>{`<LLCloseCta closeText="I'd love to talk about owning a pod at Ninety." from="ninety" />`}</CodeBlock>
          </SectionWrapper>

          <SectionWrapper id="sections-ai" title="AIProjects">
            <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', margin: '0 0 16px' }}>
              AI-first design process section. Self-contained — no props needed. Includes video, workflow steps, tool badges.
            </p>
            <CodeBlock>{`<AIProjects />`}</CodeBlock>
          </SectionWrapper>

          {/* Page composition example */}
          <div style={{ marginTop: '48px', padding: '32px', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h4)', fontWeight: 'var(--weight-medium)', color: 'var(--text)', margin: '0 0 16px' }}>
              Page Composition
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', margin: '0 0 16px' }}>
              A new company page is ~15 lines:
            </p>
            <CodeBlock>{`import Nav from '../../components/Nav';
import { company } from './company';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function CompanyPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="company" />
      <LLPageHero companyName={company.name} role={company.role} oneLiner={company.oneLiner} />
      <LLSummary heading={company.summaryHeading} rows={company.summaryRows} />
      <LLHowIWork howIWork={company.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['roadrunner', 'arenalabs']} />
      <LLCloseCta closeText={company.close} from="company" />
    </div>
  );
}`}</CodeBlock>
          </div>

        </main>
      </div>
    </div>
  );
}
