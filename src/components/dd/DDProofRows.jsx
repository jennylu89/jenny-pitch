// ─────────────────────────────────────────────────────────────────────────────
// Claim on the left, THE PROOF on the right.
//
// ⛔ This is the ArborXR pattern, copied on purpose 2026-08-18 after Jenny
// compared the two pages side by side. The rule that makes it work is not the
// layout, it is the content contract:
//
//   LEFT  = one short claim, no hedging, no numbers.
//   RIGHT = a story that ENDS IN A NUMBER. Not a restatement of the claim, not
//           another sentence about how she works. A thing that happened.
//
// The first DataDelivers spine had this same skeleton and read thin because the
// right column answered with method instead of story. If a row has no number,
// it does not belong here. Put it in How I Work instead.
// ─────────────────────────────────────────────────────────────────────────────
export default function DDProofRows({ rows, proofLabel = 'The proof' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
      {rows.map((r, i) => (
        <div
          key={i}
          className="dd-proof-row"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            gap: 'var(--space-36)',
            backgroundColor: 'var(--glass-bg)',
            backdropFilter: 'blur(var(--glass-blur))',
            WebkitBackdropFilter: 'blur(var(--glass-blur))',
            border: '1px solid var(--glass-stroke)',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow-glass)',
            padding: '32px',
          }}
        >
          <p style={{
            fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)',
            color: 'var(--text)', margin: 0,
          }}>
            {r.claim}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
            <span style={{
              fontFamily: 'var(--font-badge)', fontSize: 'var(--type-small)',
              letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase',
              color: '#6b55e8',
            }}>
              {proofLabel}
            </span>
            {r.proof.map((para, j) => (
              <p key={j} style={{
                fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)',
                color: j === 0 ? 'var(--text)' : 'var(--muted)', margin: 0,
              }}>
                {para}
              </p>
            ))}
            {r.quote && (
              <p style={{
                margin: 0, paddingLeft: '12px',
                borderLeft: '2px solid var(--glass-stroke)',
                fontSize: 'var(--type-small)', lineHeight: 'var(--leading-body)',
                color: 'var(--muted)',
              }}>
                {r.quote}
                <span style={{ display: 'block', marginTop: '4px', opacity: 0.8 }}>{r.quoteBy}</span>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
