import { useEffect, useState, useRef, useCallback } from 'react';

const stats = [
  { value: '384%', label: 'Spend per member lift', source: 'Giant Eagle · myPerks loyalty redesign' },
  { value: '142', label: 'Person usability study', source: 'Roadrunner · Billing platform overhaul' },
  { value: '50+', label: 'Component design system', source: 'Roadrunner + Arena Labs' },
];

const companies = ['Giant Eagle', 'Roadrunner', 'Arena Labs', 'MegPrime'];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouse({ x, y });
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      style={{
        background: 'var(--bg)',
        paddingTop: 'calc(56px + 80px)',
        paddingBottom: '80px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Animated blobs — mouse reactive */}
      <div className="hero-blob" style={{
        position: 'absolute', zIndex: 0, pointerEvents: 'none',
        width: '600px', height: '600px', top: '-100px', left: '-50px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,120,255,0.5) 0%, rgba(139,120,255,0) 70%)',
        filter: 'blur(40px)',
        transform: `translate(${mouse.x * 50}px, ${mouse.y * 40}px)`,
        transition: 'transform 0.15s ease-out',
      }} />
      <div className="hero-blob" style={{
        position: 'absolute', zIndex: 0, pointerEvents: 'none',
        width: '500px', height: '500px', top: '0px', right: '-100px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,180,255,0.4) 0%, rgba(200,180,255,0) 70%)',
        filter: 'blur(40px)',
        transform: `translate(${mouse.x * -35}px, ${mouse.y * 25}px)`,
        transition: 'transform 0.15s ease-out',
      }} />
      <div className="hero-blob" style={{
        position: 'absolute', zIndex: 0, pointerEvents: 'none',
        width: '400px', height: '400px', bottom: '50px', left: '35%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,80,255,0.35) 0%, rgba(100,80,255,0) 70%)',
        filter: 'blur(40px)',
        transform: `translate(${mouse.x * 20}px, ${mouse.y * -30}px)`,
        transition: 'transform 0.15s ease-out',
      }} />
      {/* Noise overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        opacity: 0.25,
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
      }} />

      <div className="hero-container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>

        {/* Top block */}
        <div style={{
          maxWidth: '680px',
          margin: '0 auto 56px',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', gap: '20px',
          transition: 'opacity 0.7s ease, filter 0.7s ease',
          opacity: visible ? 1 : 0,
          filter: visible ? 'blur(0px)' : 'blur(12px)',
        }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)' }}>
            <span style={{
              color: 'var(--text)', fontSize: 'var(--type-small)',
              fontFamily: 'var(--font-badge)',
              fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
              textTransform: 'uppercase', lineHeight: 'var(--leading-h5)',
            }}>
              Freelance Product Designer
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-h1)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-h1)',
            letterSpacing: 'var(--tracking-h1)',
            color: 'var(--text)',
            margin: 0,
          }}>
            Research to design to code. One person, no handoff.
          </h1>

          {/* Subtitle */}
          <p style={{
            color: 'var(--muted)', fontSize: 'var(--type-lead)',
            lineHeight: 'var(--leading-body)', margin: 0, maxWidth: '480px',
          }}>
            I embed with early-stage teams, run my own studies, own the design system, and ship production React.
          </p>

          {/* CTA */}
          <a
            className="btn-hover"
            href="https://cal.com/jennylu98/30"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-fg)',
              fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
              padding: '0 var(--btn-x-padding)', height: 'var(--btn-height)',
              borderRadius: 'var(--btn-radius)',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginTop: '4px',
            }}
          >
            <img src="/jenny-avatar.jpg" alt="" style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }} />
            Schedule a call
          </a>
        </div>

        {/* Stats row */}
        <div className="hero-stats-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-18)',
          marginBottom: '48px',
          transition: 'opacity 0.7s ease 0.2s, filter 0.7s ease 0.2s',
          opacity: visible ? 1 : 0,
          filter: visible ? 'blur(0px)' : 'blur(12px)',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              backgroundColor: 'var(--surface)',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow-widget)',
              padding: 'var(--space-24)',
              display: 'flex', flexDirection: 'column', gap: '4px',
            }}>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-h2)',
                fontWeight: 'var(--weight-medium)',
                lineHeight: 'var(--leading-h2)',
                letterSpacing: 'var(--tracking-h2)',
                color: 'var(--text)',
              }}>
                {s.value}
              </div>
              <div style={{
                fontSize: 'var(--type-body)',
                color: 'var(--text)',
                fontWeight: 'var(--weight-medium)',
                lineHeight: 'var(--leading-body)',
              }}>
                {s.label}
              </div>
              <div style={{
                fontSize: 'var(--type-small)',
                color: 'var(--muted)',
                lineHeight: 'var(--leading-body)',
              }}>
                {s.source}
              </div>
            </div>
          ))}
        </div>

        {/* Company logos */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: 'var(--space-36)',
          transition: 'opacity 0.7s ease 0.35s',
          opacity: visible ? 1 : 0,
        }}>
          {companies.map((name) => (
            <span key={name} style={{
              fontSize: 'var(--type-body)',
              fontWeight: 'var(--weight-medium)',
              color: 'var(--muted)',
              letterSpacing: 'var(--tracking-h5)',
            }}>
              {name}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
