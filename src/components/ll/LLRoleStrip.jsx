// A narrow horizontal strip directly under the hero. It is NOT a second hero, and the height cap
// is the whole point: label on the left, one paragraph on the right, no CTA, no large type, no
// company statistics. Spec'd at roughly 180 to 220px on desktop.
// ⛔ If this ever grows a button or a headline, it has become a second hero and the page has the
// problem this section was created to avoid.
export default function LLRoleStrip({ label, text }) {
  if (!text) return null;

  return (
    <section style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="section-pad role-strip-inner" style={{
        maxWidth: '1000px', margin: '0 auto',
        padding: 'var(--space-48)',
        display: 'grid', gridTemplateColumns: '200px 1fr', gap: 'var(--space-48)',
        alignItems: 'start',
      }}>
        <span style={{
          fontFamily: 'var(--font-badge)', fontSize: 'var(--type-small)',
          fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
          textTransform: 'uppercase', color: 'var(--muted)', lineHeight: 'var(--leading-h5)',
        }}>
          {label}
        </span>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--type-body)',
          fontWeight: 'var(--weight-normal)', lineHeight: 'var(--leading-body)',
          color: 'var(--text)', margin: 0, maxWidth: '640px',
        }}>
          {text}
        </p>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .role-strip-inner {
            grid-template-columns: 1fr;
            gap: var(--space-18);
          }
        }
      `}</style>
    </section>
  );
}
