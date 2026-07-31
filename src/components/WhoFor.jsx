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
            maxWidth: '760px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
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
          <p style={{
            color: 'var(--text)',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-lead)',
            lineHeight: 'var(--leading-body)',
            margin: 0,
          }}>
            The founders I do my best work with have a strong vision but are still searching for product-market fit. They test their assumptions, talk to customers, and treat design as part of product strategy, not decoration.
          </p>
          <p style={{
            color: 'var(--muted)',
            fontSize: 'var(--type-body)',
            lineHeight: 'var(--leading-body)',
            margin: 0,
          }}>
            For founders who'd rather hire one designer who ships code than a designer plus a front-end dev plus the lag between them. Not for teams that want a pure visual designer to hand off and walk away.
          </p>
        </div>
      </div>
    </section>
  );
}
