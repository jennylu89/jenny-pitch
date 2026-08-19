// The high-emphasis statement. This is LLCloseCta's type treatment (--type-h3,
// medium weight, centered, 600px measure) on the same accent band LLHowIWork and
// LLSplitStatement already use, with the button row removed. It is the one
// moment on the page allowed to be a single sentence in a section of its own.
//
// ⛔ Two of these per case study at most. The emphasis only works while it is rare.
export default function DDCallout({ label, statement, support }) {
  return (
    <section style={{
      padding: 'var(--space-96) 0',
      background: 'linear-gradient(180deg, var(--bg) 0%, rgba(139,120,255,0.12) 50%, var(--bg) 100%)',
    }}>
      <div className="section-pad" style={{
        maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-18)',
      }}>
        {label && (
          <span style={{
            fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)',
            fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
            textTransform: 'uppercase', color: 'var(--muted)', textAlign: 'center',
          }}>
            {label}
          </span>
        )}
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h3)',
          fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h2)',
          letterSpacing: 'var(--tracking-h3)', color: 'var(--text)',
          margin: 0, textAlign: 'center', maxWidth: '620px',
        }}>
          {statement}
        </p>
        {support && (
          <p style={{
            fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)',
            color: 'var(--muted)', margin: 0, textAlign: 'center', maxWidth: '520px',
          }}>
            {support}
          </p>
        )}
      </div>
    </section>
  );
}
