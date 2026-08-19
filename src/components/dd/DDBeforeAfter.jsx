// FROM → TO. A two-row statement, not a chart.
//
// Deliberately quieter than DDCompare: no card, no fill, just a label column and
// a sentence, separated by the portfolio's 1px --border. It runs at the end of a
// case study where the reader has already seen the evidence, so the job is to
// state the shift once and stop. A card here would compete with the callout
// above it.
export default function DDBeforeAfter({ rows, closing }) {
  return (
    <div>
      <div style={{ borderTop: '1px solid var(--border)' }}>
        {rows.map((row, i) => (
          <div key={i} className="dd-ba-row" style={{
            display: 'grid', gridTemplateColumns: '120px 1fr',
            gap: 'var(--space-24)', alignItems: 'baseline',
            padding: 'var(--space-24) 0',
            borderBottom: '1px solid var(--border)',
          }}>
            <span style={{
              fontFamily: 'var(--font-badge)', fontSize: 'var(--type-small)',
              fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
              textTransform: 'uppercase',
              color: i === rows.length - 1 ? '#6d5bd0' : 'var(--muted)',
            }}>
              {row.label}
            </span>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h4)',
              fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h4)',
              letterSpacing: 'var(--tracking-h4)',
              color: i === rows.length - 1 ? 'var(--text)' : 'var(--muted)',
              margin: 0,
            }}>
              {row.text}
            </p>
          </div>
        ))}
      </div>

      {closing && (
        <p style={{
          fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)',
          color: 'var(--muted)', margin: 'var(--space-24) 0 0', maxWidth: '680px',
        }}>
          {closing}
        </p>
      )}

      <style>{`
        @media (max-width: 640px) {
          .dd-ba-row { grid-template-columns: 1fr !important; gap: var(--space-6) !important; }
        }
      `}</style>
    </div>
  );
}
