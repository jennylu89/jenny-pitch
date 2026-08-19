// Side-by-side comparison cards. Two columns on desktop, stacked on mobile.
//
// The card is the portfolio's existing card: --surface, --radius, --shadow-glass,
// 1px --border. The label is the existing badge chip. The only thing added is a
// small "↓" rule between stacked lines when a column is a chain rather than a
// list, drawn with a border and a caret so it survives at any type size.
//
// `tone: 'accent'` tints one column with --accent-subtle so the reader can see
// which side is the answer without reading either. Used for the right-hand
// column of every comparison on the page.
export default function DDCompare({ columns, note }) {
  return (
    <>
      <div className="dd-compare" style={{
        display: 'grid', gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
        gap: 'var(--space-12)', alignItems: 'stretch',
      }}>
        {columns.map((col, ci) => {
          const accent = col.tone === 'accent';
          return (
            <div key={ci} style={{
              backgroundColor: accent ? 'var(--accent-subtle)' : 'var(--surface)',
              border: `1px solid ${accent ? 'var(--accent-medium)' : 'var(--border)'}`,
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow-glass)',
              padding: '28px',
              display: 'flex', flexDirection: 'column', gap: 'var(--space-18)',
            }}>
              <span style={{
                fontFamily: 'var(--font-badge)', fontSize: 'var(--type-small)',
                fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
                textTransform: 'uppercase',
                color: accent ? '#5a48b8' : 'var(--muted)',
              }}>
                {col.label}
              </span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: col.chain ? '6px' : '10px' }}>
                {col.lines.map((line, li) => (
                  <div key={li}>
                    <div style={{
                      fontSize: 'var(--type-body)',
                      fontWeight: col.chain ? 'var(--weight-medium)' : 'var(--weight-normal)',
                      lineHeight: 'var(--leading-body)', color: 'var(--text)',
                    }}>
                      {line}
                    </div>
                    {col.chain && li < col.lines.length - 1 && (
                      <div aria-hidden="true" style={{
                        color: accent ? 'var(--accent)' : 'var(--muted)',
                        opacity: 0.7, fontSize: '12px', lineHeight: 1, padding: '4px 0 2px',
                      }}>
                        ↓
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {col.question && (
                <p style={{
                  /* ⛔ Not `marginTop: auto`. Pinning both questions to the bottom
                     aligned them with each other and opened a four-line hole in
                     the middle of the shorter card. */
                  marginTop: 'var(--space-6)', paddingTop: 'var(--space-12)',
                  borderTop: `1px solid ${accent ? 'var(--accent-medium)' : 'var(--border)'}`,
                  fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
                  lineHeight: 'var(--leading-body)', color: 'var(--text)', margin: 0,
                }}>
                  {col.question}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {note && (
        <p style={{
          fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)',
          color: 'var(--muted)', margin: 'var(--space-24) 0 0', maxWidth: '680px',
        }}>
          {note}
        </p>
      )}

      <style>{`
        @media (max-width: 760px) {
          .dd-compare { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
