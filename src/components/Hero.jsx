import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const stats = [
  { value: '384%', label: 'Spend per member lift', source: 'Giant Eagle · myPerks loyalty redesign' },
  { value: '10x', label: 'Faster design iteration', source: 'Arena Labs · Claude Code workflow' },
  { value: '50+', label: 'Component design system', source: 'Roadrunner + Arena Labs' },
];

// Logo files live in public/logos/. `ratio` is each file's own width/height, so the
// row can size every mark to one shared height without distorting any of them.
// They render as CSS masks rather than <img>: the file supplies the shape and
// --muted supplies the colour, so a white PNG, a black PNG and a two-colour SVG all
// come out as the same grey, on light or dark.
// `scale` is the optical correction. Matching pixel heights does not match visual
// weight: a heavy black wordmark at 20px shouts, and a light stacked lockup at 20px
// disappears. Each mark is nudged until they all read at the same strength.
// Order is deliberate. Row one is where Jenny worked, row two is who she worked with.
const LOGO_HEIGHT = 20;
const workedAt = [
  { name: 'Giant Eagle',    file: 'giant-eagle.svg',     ratio: 2.88, scale: 1.10 }, // thin script, needs size
  { name: 'GetGo',          file: 'getgo.svg',           ratio: 2.27, scale: 1.00 },
  { name: 'Market District',file: 'market-district.png', ratio: 2.00, scale: 1.60 }, // stacked lockup, tiny type, needs the most
  { name: 'Roadrunner',     file: 'roadrunner.svg',      ratio: 4.50, scale: 1.00 },
  { name: 'Arena Labs',     file: 'arena-labs.png',      ratio: 3.75, scale: 1.00 },
  { name: 'MegPrime',       file: 'megprime.png',        ratio: 5.88, scale: 0.80 }, // very heavy, was dominating
  { name: 'Highmark Health',file: 'highmark-health.svg', ratio: 3.39, scale: 1.15 },
  // PPG is the second knockout mark, same as ReposiTrak, so it renders raw too.
  { name: 'PPG',            file: 'ppg.svg',             ratio: 1.27, scale: 1.55, raw: true },
];

const workedWith = [
  { name: 'Jointley',       file: 'jointley.svg',        ratio: 4.53, scale: 0.80 }, // heavy, was dominating
  { name: 'Teleskope',      file: 'teleskope.svg',       ratio: 4.94, scale: 0.95 },
  { name: 'Meatingplace',   file: 'meatingplace.png',    ratio: 4.00, scale: 0.82 }, // heavy black wordmark
  // ReposiTrak is the one exception. Its wordmark is knocked out of a filled block, so a
  // CSS mask flattens it into a solid grey slab. `raw` renders it as an <img> with the grey
  // baked into the file instead. Tradeoff: it does not follow --muted, so it will not
  // re-colour if the token changes.
  { name: 'ReposiTrak',     file: 'repositrak.svg',      ratio: 2.97, scale: 1.30, raw: true },
  { name: 'Connors Group',  file: 'connors-group.png',   ratio: 3.34, scale: 1.40 }, // very light thin caps
];

// `eyebrow`, `headline`, `body`, `ctaLabel` and `ctaHref` are optional and opt-in.
// Omit them all and the homepage renders exactly as before. A job variant under
// /for/<slug> passes them in from src/data/home/<slug>.js.
export default function Hero({ eyebrow, headline, body, ctaLabel, ctaHref } = {}) {
  const heroCtaHref = ctaHref || 'https://cal.com/jennylu98/30';
  const heroCtaExternal = /^https?:/.test(heroCtaHref);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  // GSAP spotlight that follows mouse
  useEffect(() => {
    const el = sectionRef.current;
    const spotlight = spotlightRef.current;
    if (!el || !spotlight) return;

    const xTo = gsap.quickTo(spotlight, 'left', { duration: 0.6, ease: 'power2.out' });
    const yTo = gsap.quickTo(spotlight, 'top', { duration: 0.6, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      xTo(e.clientX - rect.left);
      yTo(e.clientY - rect.top);
      spotlight.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = '0';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, rgba(139,120,255,0.35) 0%, rgba(139,120,255,0.18) 40%, rgba(139,120,255,0.06) 65%, var(--bg) 90%)',
        paddingTop: 'calc(56px + 80px)',
        paddingBottom: '80px',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* GSAP spotlight, follows mouse */}
      <div ref={spotlightRef} style={{
        position: 'absolute', zIndex: 0, pointerEvents: 'none',
        width: '900px', height: '900px',
        marginLeft: '-450px', marginTop: '-450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,120,255,0.2) 0%, rgba(139,120,255,0.08) 30%, transparent 65%)',
        filter: 'blur(20px)',
        opacity: 0,
        transition: 'opacity 0.4s ease',
        willChange: 'left, top',
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
          <div style={{
            fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
            letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase', color: 'var(--text)',
            backgroundColor: 'var(--glass-bg)', backdropFilter: 'blur(var(--glass-blur))',
            WebkitBackdropFilter: 'blur(var(--glass-blur))',
            border: '1px solid var(--glass-stroke)', borderRadius: '100px',
            padding: '6px 16px', boxShadow: 'var(--shadow-glass)',
          }}>
            {eyebrow || 'Founding Product Designer'}
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
            {headline || 'I help founders find the real problem before they build the wrong thing.'}
          </h1>

          {/* Subtitle */}
          <p style={{
            color: 'var(--muted)', fontSize: 'var(--type-lead)',
            lineHeight: 'var(--leading-body)', margin: 0, maxWidth: '480px',
          }}>
            {body || 'I run the research, then I ship the production React myself. No handoff. At Roadrunner the brief was one billing page. I found 28 clicks across 4 apps per bill, and we got it down to 3.'}
          </p>

          {/* CTA */}
          <a
            className="btn-hover"
            href={heroCtaHref}
            target={heroCtaExternal ? '_blank' : undefined}
            rel={heroCtaExternal ? 'noopener noreferrer' : undefined}
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
            {ctaLabel || 'Schedule a call'}
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

        {/* Company logos, in two labelled groups. Employers and clients are a different
            claim, and one unlabelled row read as "I worked at all of these". */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px',
          maxWidth: '700px', margin: '0 auto', paddingBottom: '60px',
          transition: 'opacity 0.7s ease 0.35s',
          opacity: visible ? 1 : 0,
        }}>
          {/* One label, not two. Splitting employers from clients made the reader decode
              a relationship that does not matter in a four second scan, and it put
              Jointley, Jenny's own studio, directly above its own clients. */}
          <span style={{
            fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)',
            fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
            textTransform: 'uppercase', color: 'var(--muted)', opacity: 0.75,
          }}>
            Selected experience
          </span>
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            flexWrap: 'wrap', columnGap: '28px', rowGap: '16px',
          }}>
            {[...workedAt, ...workedWith].map(({ name, file, ratio, scale, raw }) => raw ? (
              <img
                key={name}
                src={`/logos/${file}`}
                alt={name}
                title={name}
                style={{
                  display: 'block',
                  height: `${Math.round(LOGO_HEIGHT * scale)}px`,
                  width: `${Math.round(LOGO_HEIGHT * scale * ratio)}px`,
                }}
              />
            ) : (
              <span
                key={name}
                role="img"
                aria-label={name}
                title={name}
                style={{
                  display: 'block',
                  height: `${Math.round(LOGO_HEIGHT * scale)}px`,
                  width: `${Math.round(LOGO_HEIGHT * scale * ratio)}px`,
                  backgroundColor: 'var(--muted)',
                  WebkitMaskImage: `url(/logos/${file})`,
                  maskImage: `url(/logos/${file})`,
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                }}
              />
            ))}
          </div>
        </div>

        {/* Scroll chevron */}
        <div style={{
          position: 'absolute', bottom: '24px', left: '50%',
          transform: 'translateX(-50%)',
          transition: 'opacity 0.7s ease 0.5s',
          opacity: visible ? 1 : 0,
        }}>
          <svg className="scroll-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

      </div>
    </section>
  );
}
