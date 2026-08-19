// ─────────────────────────────────────────────────────────────────────────────
// The section shell every DataDelivers narrative block sits in.
//
// It is not a new visual system. It is the SAME shell the existing job pages
// already use (LLSelectedProjects, LLHowIWork, LLSplitStatement): 1000px max
// width, var(--space-96) vertical rhythm, var(--space-48) side padding that the
// global `.section-pad` rule collapses to 20px on mobile, badge-font eyebrow,
// h2 in --type-h2. Nothing here introduces a token, a font, or a radius that the
// portfolio did not already have.
//
// `tint` switches on the accent gradient band the portfolio already alternates
// with (identical stops to LLHowIWork). `align` centers the heading block the
// way the Selected Work heading is centered; left is the default for the long
// narrative sections so the eye has one ragged edge to follow.
// ─────────────────────────────────────────────────────────────────────────────
export default function DDSection({
  id, eyebrow, heading, lead, children,
  tint = false, align = 'left', tight = false,
}) {
  const hasHead = eyebrow || heading || lead?.length;
  // A heading-only section (the intro that sets up the supporting project) must
  // not carry the 48px gap meant to separate a heading from content that is not
  // there. Without this the shared case study below it sat ~150px too low.
  const hasBody = Boolean(children);

  return (
    <section
      id={id}
      style={{
        scrollMarginTop: '80px',
        // 72 between beats inside a case study, not 96. On the other pages a 96
        // section is a whole block; here every beat is a section, so 96 top plus
        // 96 bottom put ~190px of nothing between two halves of one argument.
        // Measured 2026-08-18: this reclaimed roughly 1,400px of dead scroll.
        padding: tight ? 'var(--space-36) 0' : 'var(--space-72) 0',
        background: tint
          ? 'linear-gradient(180deg, var(--bg) 0%, rgba(139,120,255,0.06) 50%, var(--bg) 100%)'
          : 'transparent',
      }}
    >
      <div
        className="section-pad"
        style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)' }}
      >
        {hasHead && (
          <div style={{
            marginBottom: hasBody ? 'var(--space-36)' : 0,
            textAlign: align,
            maxWidth: align === 'center' ? '680px' : '760px',
            marginLeft: align === 'center' ? 'auto' : 0,
            marginRight: align === 'center' ? 'auto' : 0,
          }}>
            {eyebrow && (
              <span style={{
                fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)',
                fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
                textTransform: 'uppercase', lineHeight: 'var(--leading-h5)',
                display: 'block', marginBottom: 'var(--space-18)', color: 'var(--muted)',
              }}>
                {eyebrow}
              </span>
            )}
            {heading && (
              <h2 style={{
                fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h2)',
                fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h2)',
                letterSpacing: 'var(--tracking-h2)', color: 'var(--text)', margin: 0,
              }}>
                {heading}
              </h2>
            )}
            {lead?.length > 0 && (
              <div style={{
                display: 'flex', flexDirection: 'column', gap: 'var(--space-12)',
                marginTop: 'var(--space-24)',
              }}>
                {lead.map((p, i) => (
                  <p key={i} style={{
                    fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)',
                    color: 'var(--muted)', margin: 0,
                  }}>
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
