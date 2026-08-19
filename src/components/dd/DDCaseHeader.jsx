// The header that opens a case study. Same anatomy as the meta row inside the
// shared LLCaseStudy card (index · company · role, then the title, then chips),
// lifted to page level because on this page a case study is a run of sections
// rather than one card. Type steps, chip styling and muted colours are the
// portfolio's, unchanged.
export default function DDCaseHeader({ index, company, role, title, deck, supporting, tags }) {
  return (
    <div style={{ maxWidth: '760px' }}>
      {/* Meta row, identical treatment to LLCaseStudy's */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap',
        marginBottom: 'var(--space-18)',
      }}>
        <span style={{
          color: 'var(--muted)', fontSize: 'var(--type-label)',
          fontFamily: 'var(--font-badge)', letterSpacing: 'var(--tracking-badge)',
        }}>
          {index}
        </span>
        <span style={{ color: 'var(--border)' }}>·</span>
        <span style={{ color: 'var(--muted)', fontSize: 'var(--type-label)' }}>{company}</span>
        <span style={{ color: 'var(--border)' }}>·</span>
        <span style={{ color: 'var(--muted)', fontSize: 'var(--type-label)' }}>{role}</span>
      </div>

      <h2 style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h2)',
        fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h2)',
        letterSpacing: 'var(--tracking-h2)', color: 'var(--text)', margin: 0,
      }}>
        {title}
      </h2>

      {deck && (
        <p style={{
          fontSize: 'var(--type-lead)', fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-body)', color: 'var(--text)',
          margin: 'var(--space-18) 0 0',
        }}>
          {deck}
        </p>
      )}

      {supporting && (
        <p style={{
          fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)',
          color: 'var(--muted)', margin: 'var(--space-12) 0 0',
        }}>
          {supporting}
        </p>
      )}

      {tags?.length > 0 && (
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'var(--space-24)',
        }}>
          {tags.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--font-badge)', fontSize: 'var(--type-small)',
              letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase',
              color: 'var(--muted)', border: '1px solid var(--border)',
              borderRadius: '100px', padding: '5px 14px',
            }}>
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
