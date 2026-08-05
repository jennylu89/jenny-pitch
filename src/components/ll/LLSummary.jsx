import Eyebrow from './Eyebrow';

export default function LLSummary({ heading, rows, askLabel = 'Your ask', proofLabel = 'My proof' }) {
  return (
    <section style={{ padding: 'var(--space-96) 0 var(--space-80)' }}>
      <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)' }}>
        <Eyebrow>
          <span style={{ color: 'var(--muted)', textAlign: 'center', display: 'block' }}>Why me</span>
        </Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h2)', fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-h2)', letterSpacing: 'var(--tracking-h2)',
          color: 'var(--text)', margin: '0 auto var(--space-48)', maxWidth: '650px', textAlign: 'center',
        }}>
          {heading}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
          {rows.map((row, i) => (
            <div key={i} className="summary-row" style={{
              display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'var(--space-24)',
              backgroundColor: 'var(--glass-bg)',
              backdropFilter: 'blur(var(--glass-blur))',
              WebkitBackdropFilter: 'blur(var(--glass-blur))',
              border: '1px solid var(--glass-stroke)',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow-glass)',
              padding: 'var(--space-24)',
            }}>
              <div>
                <span style={{
                  fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
                  letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase',
                  color: 'var(--accent)', display: 'block', marginBottom: 'var(--space-6)',
                }}>{askLabel}</span>
                <span style={{ fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)', color: 'var(--text)', lineHeight: 'var(--leading-body)' }}>
                  {row.ask}
                </span>
              </div>
              <div>
                <span style={{
                  fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
                  letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase',
                  color: 'var(--accent)', display: 'block', marginBottom: 'var(--space-6)',
                }}>{proofLabel}</span>
                {/* `proof` accepts a string or an array. A string renders exactly as it always has,
                    so the other 26 pages are untouched. An array renders one short line per item,
                    which is the fix for proofs that had grown into 4 and 5 sentence paragraphs with
                    the numbers buried inside them. Same words, scannable shape. */}
                {Array.isArray(row.proof) ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                    {row.proof.map((line, j) => (
                      <span key={j} style={{
                        fontSize: 'var(--type-body)',
                        color: j === 0 ? 'var(--text)' : 'var(--muted)',
                        lineHeight: 'var(--leading-body)',
                      }}>
                        {line}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span style={{ fontSize: 'var(--type-body)', color: 'var(--muted)', lineHeight: 'var(--leading-body)' }}>
                    {row.proof}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
