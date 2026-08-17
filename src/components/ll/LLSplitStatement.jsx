// The compact AI statement. Split layout: the claim on the left, the detail on the right, chips
// underneath. It runs AFTER the case studies so the proof lands first.
// ⛔ This is the ONLY place AI is discussed on a job page. Keep it compact. If it grows into a
// manifesto it starts competing with the product-design positioning, which is the exact failure
// this section replaced.
export default function LLSplitStatement({ claim, detail, chips }) {
  if (!claim) return null;

  return (
    <section style={{
      padding: 'var(--space-96) 0',
      background: 'linear-gradient(180deg, var(--bg) 0%, rgba(139,120,255,0.06) 50%, var(--bg) 100%)',
    }}>
      <div className="section-pad split-statement" style={{
        maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-48)',
        alignItems: 'start',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h2)',
          fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h2)',
          letterSpacing: 'var(--tracking-h2)', color: 'var(--text)', margin: 0,
        }}>
          {claim}
        </h2>
        <p style={{
          fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)',
          color: 'var(--muted)', margin: 0,
        }}>
          {detail}
        </p>
      </div>

      {chips?.length > 0 && (
        <div className="section-pad" style={{
          maxWidth: '1000px', margin: '0 auto', padding: 'var(--space-48) var(--space-48) 0',
          display: 'flex', flexWrap: 'wrap', gap: '8px',
        }}>
          {chips.map(c => (
            <span key={c} style={{
              fontFamily: 'var(--font-badge)', fontSize: 'var(--type-small)',
              letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase',
              color: 'var(--muted)', border: '1px solid var(--border)',
              borderRadius: '100px', padding: '5px 14px',
            }}>
              {c}
            </span>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 760px) {
          .split-statement { grid-template-columns: 1fr !important; gap: var(--space-24) !important; }
        }
      `}</style>
    </section>
  );
}
