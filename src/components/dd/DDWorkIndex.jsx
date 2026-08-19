// The three-up index that opens Selected Work.
//
// This is the portfolio's existing card and chip, made clickable and anchored to
// the case study below it. It exists so a reader who has three minutes can see
// what the page contains before deciding how far down to go. It is an index, not
// a summary: it never repeats a sentence that appears in the case study.
export default function DDWorkIndex({ cards }) {
  return (
    <>
      <div className="dd-work-index" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-12)',
      }}>
        {cards.map(card => (
          <a
            key={card.num}
            href={card.href}
            className="btn-hover"
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow-glass)',
              padding: '24px',
              textDecoration: 'none',
              display: 'flex', flexDirection: 'column', gap: 'var(--space-12)',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-badge)', fontSize: 'var(--type-small)',
              fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
              color: '#6d5bd0',
            }}>
              {card.num}
            </span>
            <h3 style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h5)',
              fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h5)',
              letterSpacing: 'var(--tracking-h5)', color: 'var(--text)', margin: 0,
            }}>
              {card.company}
            </h3>
            <p style={{
              fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)',
              color: 'var(--muted)', margin: 0, flex: 1,
            }}>
              {card.positioning}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {card.tags.map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--font-badge)', fontSize: '10px',
                  fontWeight: 'var(--weight-medium)', letterSpacing: '0.5px',
                  textTransform: 'uppercase', color: 'var(--muted)',
                  backgroundColor: 'var(--bg)', border: '1px solid var(--border)',
                  borderRadius: '4px', padding: '3px 8px', lineHeight: 1,
                }}>
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .dd-work-index { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
