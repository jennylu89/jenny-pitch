export default function LLHowIWork({ howIWork }) {
  if (!howIWork) return null;
  const tiles = howIWork.tiles?.filter(t => t.heading) || [];

  return (
    <section style={{
      padding: 'var(--space-96) 0',
      borderTop: '1px solid var(--border)',
      background: 'linear-gradient(180deg, var(--bg) 0%, rgba(139,120,255,0.06) 50%, var(--bg) 100%)',
    }}>
      <div className="section-pad" style={{
        maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)',
      }}>
        <span style={{
          fontSize: 'var(--type-small)',
          fontFamily: 'var(--font-badge)',
          fontWeight: 'var(--weight-medium)',
          letterSpacing: 'var(--tracking-badge)',
          textTransform: 'uppercase',
          lineHeight: 'var(--leading-h5)',
          display: 'block',
          marginBottom: 'var(--space-24)',
          color: 'var(--muted)',
          textAlign: 'center',
        }}>
          {howIWork.eyebrow || 'How I work'}
        </span>
        <h2 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-h2)',
          fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-h2)',
          letterSpacing: 'var(--tracking-h2)',
          color: 'var(--text)',
          margin: '0 0 var(--space-48)',
          textAlign: 'center',
        }}>
          {howIWork.heading}
        </h2>
        {howIWork.subheading && <p style={{
          fontSize: 'var(--type-body)',
          color: 'var(--muted)',
          lineHeight: 'var(--leading-body)',
          margin: '0 0 var(--space-48)',
          maxWidth: '520px',
        }}>
          {howIWork.subheading}
        </p>}
        <div className="talkiatry-how-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'var(--space-12)',
        }}>
          {tiles.map((tile, i) => (
            <div key={i} style={{
              backgroundColor: 'var(--glass-bg)',
              backdropFilter: 'blur(var(--glass-blur))',
              WebkitBackdropFilter: 'blur(var(--glass-blur))',
              border: '1px solid var(--glass-stroke)',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow-glass)',
              padding: '32px',
              display: 'flex', flexDirection: 'column', gap: 'var(--space-12)',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-h5)',
                fontWeight: 'var(--weight-medium)',
                lineHeight: 'var(--leading-h5)',
                letterSpacing: 'var(--tracking-h5)',
                color: 'var(--text)',
                margin: 0,
              }}>
                {tile.heading}
              </h3>
              <p style={{
                fontSize: 'var(--type-body)',
                color: 'var(--muted)',
                lineHeight: 'var(--leading-body)',
                margin: 0,
              }}>
                {tile.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
