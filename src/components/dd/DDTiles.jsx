// The proof-point tile grid.
//
// ⚠️ This is LLHowIWork's tile, on purpose and by copy: same --glass-bg surface,
// same --glass-stroke border, same gradient icon chip, same type steps. It is
// duplicated rather than reused because LLHowIWork owns its own eyebrow, heading
// and left-aligned subheading, and this section needs a centered intro above a
// centered heading. Editing LLHowIWork would have changed a component that 30+
// company pages render.
//
// ⛔ If LLHowIWork's tile visuals ever change, change them here too, or delete
// this and give LLHowIWork an alignment prop. Do not let the two drift silently.
export default function DDTiles({ tiles, columns = 2 }) {
  return (
    <div className="talkiatry-how-grid" style={{
      display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`,
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
          {tile.icon && (
            <div style={{
              background: 'linear-gradient(180deg, #a89fef 0%, #cfc9f5 65%, #eae8fb 100%)',
              borderRadius: 'var(--radius)',
              padding: '5px', width: '48px', height: '48px', flexShrink: 0,
            }}>
              <div style={{
                backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)',
                background: 'rgba(255,255,255,0.75)',
                border: '1px solid var(--glass-stroke)',
                borderRadius: '8px', boxShadow: 'var(--shadow-glass)',
                width: '100%', height: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#6b55e8',
              }}>
                <i className={tile.icon} style={{ fontSize: '18px' }} />
              </div>
            </div>
          )}
          <h3 style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h5)',
            fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h5)',
            letterSpacing: 'var(--tracking-h5)', color: 'var(--text)', margin: 0,
          }}>
            {tile.heading}
          </h3>
          <p style={{
            fontSize: 'var(--type-body)', color: 'var(--muted)',
            lineHeight: 'var(--leading-body)', margin: 0,
          }}>
            {tile.body}
          </p>
        </div>
      ))}
    </div>
  );
}
