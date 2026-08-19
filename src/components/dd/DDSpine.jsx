// ─────────────────────────────────────────────────────────────────────────────
// The spine: their stated measure on the left, my evidence on the right.
//
// This is the page's table of contents AND its argument. It exists because the
// job description names four performance metrics, and all four are handoff
// metrics, not visual-design metrics. Every row links down to the section that
// answers it, so a reader who only reads this block still leaves knowing where
// the proof is.
//
// ⛔ Do not turn this into a marketing grid. One measure, one piece of evidence,
// one link. If a row has no real evidence behind it, delete the row.
// ─────────────────────────────────────────────────────────────────────────────
// ⛔ HONESTY SPLIT, added 2026-08-18 after an outside review.
// The first version listed all four of the employer's metrics as if she had
// equal proof for each. She does not. Two rows have receipts (a component count,
// an engineer's quote); two are how she works, with no number behind them.
// Presenting them identically invited an audit the table could not pass, so the
// rows now sit under honest group labels. ⛔ Do not merge the groups back.
export default function DDSpine({ rows }) {
  return (
    <div
      style={{
        border: '1px solid var(--glass-stroke)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        backgroundColor: 'var(--glass-bg)',
        backdropFilter: 'blur(var(--glass-blur))',
        WebkitBackdropFilter: 'blur(var(--glass-blur))',
        boxShadow: 'var(--shadow-glass)',
      }}
    >
      {rows.map((r, i) => (
        <div key={`g${i}`} style={{ display: 'contents' }}>
        {r.groupLabel && (
          <div style={{
            padding: '13px 24px',
            borderTop: i === 0 ? 'none' : '1px solid var(--glass-stroke)',
            background: 'rgba(0,0,0,0.02)',
            fontFamily: 'var(--font-badge)',
            fontSize: 'var(--type-small)',
            letterSpacing: 'var(--tracking-badge)',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}>
            {r.groupLabel}
          </div>
        )}
        <a
          href={r.href}
          className="dd-spine-row"
          style={{
            display: 'grid',
            gridTemplateColumns: '44px 1fr 1.15fr',
            alignItems: 'start',
            gap: 0,
            padding: '22px 24px',
            borderTop: (i === 0 || r.groupLabel) ? 'none' : '1px solid var(--glass-stroke)',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-badge)',
              fontSize: 'var(--type-small)',
              letterSpacing: 'var(--tracking-badge)',
              color: 'var(--muted)',
              paddingTop: '3px',
            }}
          >
            {String(i + 1).padStart(2, '0')}
          </span>

          <span style={{ paddingRight: '24px' }}>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-h5)',
                fontWeight: 'var(--weight-medium)',
                lineHeight: 'var(--leading-h5)',
                letterSpacing: 'var(--tracking-h5)',
                color: 'var(--text)',
              }}
            >
              {r.measure}
            </span>
            {r.measureNote && (
              <span
                style={{
                  display: 'block',
                  fontSize: 'var(--type-small)',
                  lineHeight: 'var(--leading-body)',
                  color: 'var(--muted)',
                  marginTop: '4px',
                }}
              >
                {r.measureNote}
              </span>
            )}
          </span>

          <span>
            <span
              style={{
                display: 'block',
                fontSize: 'var(--type-body)',
                lineHeight: 'var(--leading-body)',
                color: 'var(--text)',
              }}
            >
              {r.evidence}
            </span>
            {/* A real receipt beats a claim. Rows that have a quotable source
                carry it here; rows that do not stay a plain statement rather
                than borrow one. */}
            {r.quote && (
              <span style={{
                display: 'block',
                marginTop: '10px',
                paddingLeft: '12px',
                borderLeft: '2px solid var(--glass-stroke)',
                fontSize: 'var(--type-small)',
                lineHeight: 'var(--leading-body)',
                color: 'var(--muted)',
              }}>
                {r.quote}
                {r.quoteBy && (
                  <span style={{ display: 'block', marginTop: '4px', opacity: 0.8 }}>
                    {r.quoteBy}
                  </span>
                )}
              </span>
            )}
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-badge)',
                fontSize: 'var(--type-small)',
                letterSpacing: 'var(--tracking-badge)',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginTop: '8px',
              }}
            >
              {r.linkLabel} ↓
            </span>
          </span>
        </a>
        </div>
      ))}
    </div>
  );
}
