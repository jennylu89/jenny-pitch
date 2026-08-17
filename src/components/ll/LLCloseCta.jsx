import NoiseOverlay from './NoiseOverlay';
import CtaButton from './CtaButton';

// `heading` is optional and opt-in. Pass it and a small eyebrow sits above the closing line, so a
// job page can label its final customized block ("Why provider experience") instead of the closing
// sentence arriving unannounced. Omit it and every existing page renders exactly as before.
export default function LLCloseCta({ closeText, heading, from, primaryHref, primaryLabel, secondaryLabel }) {
  return (
    <div style={{
      background: 'linear-gradient(0deg, rgba(139,120,255,0.35) 0%, rgba(139,120,255,0.18) 40%, rgba(139,120,255,0.06) 65%, var(--bg) 90%)',
      position: 'relative',
    }}>
      <NoiseOverlay light />
      <div className="section-pad" style={{
        maxWidth: '1000px', margin: '0 auto', padding: 'var(--space-96) var(--space-48)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-12)',
        position: 'relative', zIndex: 1,
      }}>
        {heading && (
          <span style={{
            fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)',
            fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
            textTransform: 'uppercase', color: 'var(--muted)',
            display: 'block', marginBottom: 'var(--space-18)', textAlign: 'center',
          }}>
            {heading}
          </span>
        )}
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h3)', fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-h2)', letterSpacing: 'var(--tracking-h3)',
          color: 'var(--text)', margin: 0, textAlign: 'center', maxWidth: '600px',
        }}>
          {closeText}
        </p>
        <div className="resume-cta-buttons" style={{ display: 'flex', gap: 'var(--space-18)', alignItems: 'center', marginTop: 'var(--space-24)' }}>
          <CtaButton href={primaryHref}>{primaryLabel}</CtaButton>
          <CtaButton variant="outline" from={from}>{secondaryLabel}</CtaButton>
        </div>
      </div>
    </div>
  );
}
