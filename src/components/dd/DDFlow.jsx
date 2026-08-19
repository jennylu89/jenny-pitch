// A step flow. Horizontal progression on desktop, vertical stack on mobile, with
// the connector caret rotating rather than disappearing so the sequence still
// reads as a sequence on a phone.
//
// Cards are the portfolio's glass tile from LLHowIWork (--glass-bg, --glass-stroke,
// --radius, --shadow-glass) so this sits inside the existing visual language
// instead of introducing a diagram style of its own. Step numbers use the badge
// font and the same #6d5bd0 accent text the case-study beat labels use.
//
// Sizes: 'card' for the full stages, 'chain' for a compact one-line-per-step run.
export default function DDFlow({ steps, size = 'card', label }) {
  const chain = size === 'chain';

  return (
    <div>
      {label && (
        <span style={{
          fontFamily: 'var(--font-badge)', fontSize: 'var(--type-small)',
          fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
          textTransform: 'uppercase', color: 'var(--muted)',
          display: 'block', marginBottom: 'var(--space-18)',
        }}>
          {label}
        </span>
      )}

      <div className="dd-flow" style={{
        display: 'flex', alignItems: 'stretch', gap: chain ? '4px' : '8px',
      }}>
        {steps.map((step, i) => (
          <div key={i} className="dd-flow-item" style={{ display: 'contents' }}>
            <div style={{
              flex: '1 1 0', minWidth: 0,
              backgroundColor: 'var(--glass-bg)',
              backdropFilter: 'blur(var(--glass-blur))',
              WebkitBackdropFilter: 'blur(var(--glass-blur))',
              border: '1px solid var(--glass-stroke)',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow-glass)',
              padding: chain ? '16px' : '22px',
              display: 'flex', flexDirection: 'column', gap: chain ? '4px' : 'var(--space-12)',
            }}>
              {step.num && (
                <span style={{
                  fontFamily: 'var(--font-badge)', fontSize: 'var(--type-small)',
                  fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
                  color: '#6d5bd0',
                }}>
                  {step.num}
                </span>
              )}
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: chain ? 'var(--type-body)' : 'var(--type-h5)',
                fontWeight: 'var(--weight-medium)',
                lineHeight: chain ? 'var(--leading-body)' : 'var(--leading-h5)',
                letterSpacing: chain ? 0 : 'var(--tracking-h5)',
                color: 'var(--text)',
              }}>
                {step.title}
              </div>
              {step.question && (
                <p style={{
                  fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)',
                  color: 'var(--muted)', margin: 0,
                }}>
                  {step.question}
                </p>
              )}
              {step.items?.length > 0 && (
                <ul style={{
                  listStyle: 'none', margin: 0, padding: 0,
                  display: 'flex', flexDirection: 'column', gap: '4px',
                }}>
                  {step.items.map(it => (
                    <li key={it} style={{
                      fontFamily: 'var(--font-badge)', fontSize: 'var(--type-small)',
                      letterSpacing: '0.4px', color: 'var(--muted)',
                    }}>
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {i < steps.length - 1 && (
              <div aria-hidden="true" className="dd-flow-arrow" style={{
                flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)', opacity: 0.65,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .dd-flow { flex-direction: column !important; }
          .dd-flow > .dd-flow-item > div:first-child { flex: 1 1 auto !important; }
          .dd-flow-arrow { transform: rotate(90deg); padding: 2px 0; }
        }
      `}</style>
    </div>
  );
}
