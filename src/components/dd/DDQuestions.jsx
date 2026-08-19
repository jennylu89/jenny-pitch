// The questions a chart does not answer, set as a list of questions rather than
// a paragraph about questions. Same 2-up grid, border and muted treatment the
// rest of the page uses. No card, because these sit directly under a comparison
// that is already two cards and a third box would flatten the hierarchy.
export default function DDQuestions({ label, items }) {
  return (
    <div style={{ marginTop: 'var(--space-36)' }}>
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
      <div className="dd-questions" style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 'var(--space-36)',
      }}>
        {items.map(q => (
          <p key={q} style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h5)',
            fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h5)',
            letterSpacing: 'var(--tracking-h5)', color: 'var(--text)',
            margin: 0, padding: 'var(--space-12) 0',
            borderTop: '1px solid var(--border)',
          }}>
            {q}
          </p>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .dd-questions { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
