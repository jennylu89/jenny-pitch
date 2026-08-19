// ─────────────────────────────────────────────────────────────────────────────
// The hard-fact strip that sits directly under the hero.
//
// ⛔ EVERY value here must already exist in src/data/jenny.js. This component
// exists to stop the page opening with three paragraphs of positioning before a
// single verifiable fact appears. If a number cannot be sourced, it does not go
// in this strip.
//
// Same glass surface and token steps as DDTiles. No new visual language.
// ─────────────────────────────────────────────────────────────────────────────
// `note` carries the shared source line. The first version stamped
// "ROADRUNNER, SHIPPED" on every card, which made one project's results read as
// three independent proofs. Say it once, underneath.
export default function DDProof({ items, note }) {
  return (
    <>
    <div
      className="dd-proof-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        gap: 'var(--space-12)',
      }}
    >
      {items.map((it, i) => (
        <div
          key={i}
          style={{
            backgroundColor: 'var(--glass-bg)',
            backdropFilter: 'blur(var(--glass-blur))',
            WebkitBackdropFilter: 'blur(var(--glass-blur))',
            border: '1px solid var(--glass-stroke)',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow-glass)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              // A non-numeric value (a tool pair, a phrase) wraps to three lines
              // at h4 and breaks the rhythm of the numeric cards next to it.
              fontSize: it.small ? 'var(--type-h5)' : 'var(--type-h4)',
              fontWeight: 'var(--weight-medium)',
              lineHeight: 1.1,
              letterSpacing: 'var(--tracking-h4)',
              color: 'var(--text)',
            }}
          >
            {it.value}
          </span>
          <span
            style={{
              fontSize: 'var(--type-small)',
              lineHeight: 'var(--leading-body)',
              color: 'var(--muted)',
            }}
          >
            {it.label}
          </span>
          {it.source && (
            <span
              style={{
                fontSize: 'var(--type-small)',
                fontFamily: 'var(--font-badge)',
                letterSpacing: 'var(--tracking-badge)',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                opacity: 0.7,
                marginTop: '2px',
              }}
            >
              {it.source}
            </span>
          )}
        </div>
      ))}
    </div>
    {note && (
      <p style={{
        fontSize: 'var(--type-small)', color: 'var(--muted)',
        margin: 'var(--space-12) 0 0', textAlign: 'center',
      }}>
        {note}
      </p>
    )}
    </>
  );
}
