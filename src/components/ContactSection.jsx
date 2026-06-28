import { useRef, useState, useEffect } from 'react';
import { jenny } from '../data/jenny';

export default function ContactSection() {
  const headlineRef = useRef(null);
  const [headlineVisible, setHeadlineVisible] = useState(false);

  const ctaRef = useRef(null);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const makeObserver = (ref, setter) => {
      const el = ref.current;
      if (!el) return () => {};
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { setter(true); obs.disconnect(); } },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };

    const cleanups = [
      makeObserver(headlineRef, setHeadlineVisible),
      makeObserver(ctaRef, setCtaVisible),
    ];

    return () => cleanups.forEach(c => c());
  }, []);

  return (
    <section style={{
      padding: '100px 0 0',
      overflow: 'hidden',
      position: 'relative',
      background: 'linear-gradient(180deg, var(--bg) 25%, rgba(139,120,255,0.04) 55%, rgba(139,120,255,0.13) 100%)',
    }}>

      {/* Noise overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        opacity: 0.18,
        mixBlendMode: 'overlay',
        pointerEvents: 'none',
      }} />

      {/* Headline block: sits at top on light-to-mid bg */}
      <div
        ref={headlineRef}
        className="section-pad"
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 48px',
          textAlign: 'center',
          marginBottom: '56px',
          position: 'relative',
          zIndex: 2,
          transition: 'opacity 0.7s ease, filter 0.7s ease',
          opacity: headlineVisible ? 1 : 0,
          filter: headlineVisible ? 'blur(0px)' : 'blur(12px)',
        }}
      >
        {/* Availability badge, glass style */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'var(--glass-bg)',
          backdropFilter: 'blur(var(--glass-blur))',
          WebkitBackdropFilter: 'blur(var(--glass-blur))',
          border: '1px solid var(--glass-stroke)',
          borderRadius: '100px',
          padding: '6px 16px',
          boxShadow: 'var(--shadow-glass)',
          marginBottom: '24px',
        }}>
          <span style={{
            width: '7px', height: '7px',
            borderRadius: '50%',
            backgroundColor: '#22c55e',
            flexShrink: 0,
            display: 'inline-block',
          }} />
          <span style={{ color: 'var(--text)', fontSize: 'var(--type-small)', fontWeight: 'var(--weight-medium)' }}>
            Available for Q2 2026 · 1–2 clients
          </span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-h1)',
          fontWeight: 'var(--weight-black)',
          lineHeight: 'var(--leading-tight)',
          letterSpacing: 'var(--tracking-tight)',
          color: 'var(--text)',
          margin: '0 0 20px',
        }}>
          One conversation.<br />Thirty minutes.
        </h2>

        <p style={{
          color: 'var(--muted)',
          fontSize: 'var(--type-body)',
          lineHeight: 'var(--leading-body)',
          maxWidth: '400px',
          margin: '0 auto 0',
        }}>
          If the work resonates, let's find out if there's a fit. No prep needed.
        </p>
      </div>

      {/* ── Single primary CTA, with demoted text links ── */}
      <div
        ref={ctaRef}
        className="section-pad"
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 48px',
          marginBottom: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          position: 'relative',
          zIndex: 2,
          transition: 'opacity 0.7s ease',
          opacity: ctaVisible ? 1 : 0,
        }}
      >
        {/* Primary */}
        <a
          className="btn-hover"
          href="https://cal.com/jennylu98/30"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: 'var(--btn-primary-bg)',
            color: 'var(--btn-primary-fg)',
            fontSize: 'var(--type-body)',
            fontWeight: 'var(--weight-medium)',
            padding: '0 var(--btn-x-padding)',
            height: 'var(--btn-height)',
            borderRadius: 'var(--btn-radius)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <img src="/jenny-avatar.jpg" alt="" style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }} />
          Schedule a call
        </a>

        {/* Demoted text links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a
            href={`https://${jenny.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--muted)',
              fontSize: 'var(--type-small)',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}
          >
            LinkedIn
          </a>
          <a
            href="/resume"
            style={{
              color: 'var(--muted)',
              fontSize: 'var(--type-small)',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}
          >
            Resume
          </a>
        </div>
      </div>


    </section>
  );
}
