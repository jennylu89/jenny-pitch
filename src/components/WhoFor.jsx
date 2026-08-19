import { useRef, useState, useEffect } from 'react';

export default function WhoFor() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ borderTop: '1px solid var(--border)', padding: '72px 0' }}>
      <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }}>
        <div
          ref={ref}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            transition: 'opacity 0.7s ease, filter 0.7s ease',
            opacity: visible ? 1 : 0,
            filter: visible ? 'blur(0px)' : 'blur(12px)',
          }}
        >
          <span style={{
            color: 'var(--text)', fontSize: 'var(--type-small)',
            fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
            letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase',
            display: 'block',
          }}>
            Who I work best with
          </span>

          {/* Solid surface card, matching the hero stat cards rather than the glass grid
              in Differentiators directly below, so the two sections stay distinguishable. */}
          <div style={{
            backgroundColor: 'var(--surface)',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow-widget)',
            padding: 'var(--space-36)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-24)',
          }}>
            <p style={{
              color: 'var(--text)',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-lead)',
              lineHeight: 'var(--leading-body)',
              margin: 0,
              maxWidth: '720px',
            }}>
              The founders I do my best work with have a strong vision but are still searching for product-market fit. They test their assumptions, talk to customers, and treat design as part of product strategy, not decoration.
            </p>

            <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />

            {/* The second paragraph was always a fit and a not-fit in one block. Splitting
                it lets a reader self-select in one glance. Both sentences are verbatim. */}
            <div className="whofor-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-36)',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{
                  color: 'var(--text)', fontSize: 'var(--type-small)',
                  fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
                  letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase',
                }}>
                  Good fit
                </span>
                <p style={{
                  color: 'var(--text)', fontSize: 'var(--type-body)',
                  lineHeight: 'var(--leading-body)', margin: 0,
                }}>
                  For founders who'd rather hire one designer who ships code than a designer plus a front-end dev plus the lag between them.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{
                  color: 'var(--muted)', fontSize: 'var(--type-small)',
                  fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
                  letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase',
                }}>
                  Not a fit
                </span>
                <p style={{
                  color: 'var(--muted)', fontSize: 'var(--type-body)',
                  lineHeight: 'var(--leading-body)', margin: 0,
                }}>
                  Not for teams that want a pure visual designer to hand off and walk away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
