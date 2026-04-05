import { useRef, useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import { talkiatry } from './talkiatry';
import { jenny } from '../../data/jenny';

/* ── Noise overlay SVG (shared) ── */
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

function NoiseOverlay({ light }) {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0, zIndex: 0,
      backgroundImage: NOISE_SVG,
      backgroundRepeat: 'repeat',
      backgroundSize: '200px 200px',
      opacity: light ? 0.25 : 0.35,
      mixBlendMode: light ? 'multiply' : 'soft-light',
      pointerEvents: 'none',
    }} />
  );
}

function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Eyebrow({ children }) {
  return (
    <span style={{
      fontSize: 'var(--type-small)',
      fontFamily: 'var(--font-badge)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-badge)',
      textTransform: 'uppercase',
      lineHeight: 'var(--leading-h5)',
      display: 'block',
      marginBottom: 'var(--space-24)',
    }}>
      {children}
    </span>
  );
}

function MetricCard({ metric, dark }) {
  return (
    <div style={{
      backgroundColor: dark ? 'rgba(255,255,255,0.08)' : 'var(--glass-bg)',
      border: `1px solid ${dark ? 'var(--dark-border)' : 'var(--glass-stroke)'}`,
      borderRadius: 'var(--radius-card)',
      boxShadow: dark ? 'none' : 'var(--shadow-glass)',
      backdropFilter: dark ? 'none' : 'blur(var(--glass-blur))',
      padding: 'var(--space-24)',
      display: 'flex', flexDirection: 'column', gap: 'var(--space-6)',
    }}>
      <div style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-h2)',
        fontWeight: 'var(--weight-medium)',
        lineHeight: 'var(--leading-h2)',
        letterSpacing: 'var(--tracking-h2)',
        color: dark ? 'var(--dark-text)' : 'var(--text)',
      }}>
        {metric.value}
      </div>
      <div style={{
        fontSize: 'var(--type-body)',
        color: dark ? 'var(--dark-text-muted)' : 'var(--muted)',
        lineHeight: 'var(--leading-body)',
      }}>
        {metric.label}
      </div>
    </div>
  );
}

function CaseStudySection({ section, index }) {
  const [ref, visible] = useFadeIn(0.1);
  const dark = index % 2 === 1;

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: dark ? 'var(--dark-bg)' : 'var(--bg)',
        padding: 'var(--space-96) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {dark && <NoiseOverlay />}
      <div className="section-pad talkiatry-section" style={{
        maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)',
        position: 'relative', zIndex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>
        {/* Eyebrow */}
        <Eyebrow>
          <span style={{ color: dark ? 'var(--dark-text-muted)' : 'var(--muted)' }}>
            {String(index + 1).padStart(2, '0')} · {section.tocLabel}
          </span>
        </Eyebrow>

        {/* Requirement */}
        <p style={{
          fontSize: 'var(--type-body)',
          color: dark ? 'var(--dark-text-muted)' : 'var(--muted)',
          lineHeight: 'var(--leading-body)',
          margin: '0 0 var(--space-18)',
          maxWidth: '600px',
        }}>
          {section.requirement}
        </p>

        {/* Title */}
        <h2 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-h2)',
          fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-h2)',
          letterSpacing: 'var(--tracking-h2)',
          color: dark ? 'var(--dark-text)' : 'var(--text)',
          margin: '0 0 var(--space-36)',
          maxWidth: '680px',
        }}>
          {section.title}
        </h2>

        {/* Story */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 'var(--space-18)',
          marginBottom: 'var(--space-48)',
          maxWidth: '640px',
        }}>
          {section.story.map((p, i) => (
            <p key={i} style={{
              fontSize: 'var(--type-body)',
              lineHeight: 'var(--leading-body)',
              color: dark ? 'var(--dark-text-muted)' : 'var(--muted)',
              margin: 0,
            }}>
              {p}
            </p>
          ))}
        </div>

        {/* Metrics */}
        {section.metrics && (
          <div className="talkiatry-metrics-grid" style={{
            display: 'grid', gridTemplateColumns: `repeat(${section.metrics.length}, 1fr)`,
            gap: 'var(--space-12)',
            marginBottom: section.testimonial ? 'var(--space-48)' : 0,
            maxWidth: '480px',
          }}>
            {section.metrics.map((m, i) => (
              <MetricCard key={i} metric={m} dark={dark} />
            ))}
          </div>
        )}

        {/* Testimonial */}
        {section.testimonial && (
          <div style={{
            borderLeft: `3px solid ${dark ? 'var(--accent-strong)' : 'var(--accent)'}`,
            paddingLeft: 'var(--space-24)',
            maxWidth: '540px',
          }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-lead)',
              fontWeight: 'var(--weight-medium)',
              lineHeight: 'var(--leading-body)',
              color: dark ? 'var(--dark-text)' : 'var(--text)',
              margin: '0 0 var(--space-12)',
              fontStyle: 'italic',
            }}>
              "{section.testimonial.quote}"
            </p>
            <div style={{
              fontSize: 'var(--type-body)',
              fontWeight: 'var(--weight-medium)',
              color: dark ? 'var(--dark-text)' : 'var(--text)',
            }}>
              {section.testimonial.name}
            </div>
            <div style={{
              fontSize: 'var(--type-small)',
              color: dark ? 'var(--dark-text-muted)' : 'var(--muted)',
              marginTop: '2px',
            }}>
              {section.testimonial.title}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default function TalkiatryPageV2() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav />

      {/* ═══ HERO ═══ */}
      <div style={{
        background: 'linear-gradient(180deg, rgba(139,120,255,0.35) 0%, rgba(139,120,255,0.18) 40%, rgba(139,120,255,0.06) 65%, var(--bg) 90%)',
        position: 'relative',
      }}>
        <NoiseOverlay light />
        <div className="resume-hero-inner" style={{
          maxWidth: '1000px', margin: '0 auto',
          padding: 'var(--space-144) var(--space-48) var(--space-96)',
          position: 'relative', zIndex: 1,
        }}>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: 'var(--space-36)',
            opacity: headerVisible ? 1 : 0,
            filter: headerVisible ? 'blur(0px)' : 'blur(12px)',
            transition: 'opacity 0.7s ease, filter 0.7s ease',
          }}>
            {/* Eyebrow */}
            <div style={{
              fontSize: 'var(--type-small)',
              fontFamily: 'var(--font-badge)',
              fontWeight: 'var(--weight-medium)',
              letterSpacing: 'var(--tracking-badge)',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}>
              Application — {talkiatry.role}
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-h1)',
              fontWeight: 'var(--weight-medium)',
              lineHeight: 'var(--leading-h1)',
              letterSpacing: 'var(--tracking-h1)',
              color: 'var(--text)',
              margin: 0,
              textAlign: 'center',
            }}>
              {jenny.name}
            </h1>

            {/* Summary — mirrors JD language back */}
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-lead)',
              fontWeight: 'var(--weight-medium)',
              lineHeight: 'var(--leading-body)',
              color: 'var(--text)',
              margin: 0,
              textAlign: 'center',
              maxWidth: '600px',
            }}>
              {talkiatry.summary}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap', justifyContent: 'center' }}>
              {talkiatry.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: 'var(--type-small)',
                  fontFamily: 'var(--font-badge)',
                  fontWeight: 'var(--weight-medium)',
                  letterSpacing: 'var(--tracking-badge)',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  backgroundColor: 'rgba(255,255,255,0.4)',
                  borderRadius: 'var(--radius-widget)',
                  padding: 'var(--space-3) var(--space-12)',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 'var(--space-18)', alignItems: 'center' }}>
              <a
                href="/resume"
                style={{
                  backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-fg)',
                  fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
                  padding: '0 var(--btn-x-padding)', height: 'var(--btn-height)',
                  borderRadius: 'var(--btn-radius)',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
                }}
              >
                View resume →
              </a>
              <a
                href={`mailto:${jenny.contact.email}`}
                style={{
                  color: 'var(--text)',
                  fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
                  textDecoration: 'none',
                  border: '1px solid var(--border)',
                  padding: '0 var(--btn-x-padding)', height: 'var(--btn-height)',
                  borderRadius: 'var(--btn-radius)',
                  display: 'inline-flex', alignItems: 'center',
                }}
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ TOC ═══ */}
      <section style={{ padding: 'var(--space-80) 0' }}>
        <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)' }}>
          <Eyebrow>
            <span style={{ color: 'var(--muted)' }}>What's inside</span>
          </Eyebrow>
          <div className="talkiatry-toc-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 'var(--space-12)',
          }}>
            {talkiatry.sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  backgroundColor: 'var(--glass-bg)',
                  border: '1px solid var(--glass-stroke)',
                  borderRadius: 'var(--radius-card)',
                  boxShadow: 'var(--shadow-glass)',
                  backdropFilter: 'blur(var(--glass-blur))',
                  padding: 'var(--space-24)',
                  textDecoration: 'none',
                  display: 'flex', flexDirection: 'column', gap: 'var(--space-12)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-widget)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-glass)'; }}
              >
                <span style={{
                  fontSize: 'var(--type-small)',
                  fontFamily: 'var(--font-badge)',
                  fontWeight: 'var(--weight-medium)',
                  letterSpacing: 'var(--tracking-badge)',
                  color: 'var(--accent)',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{
                  fontSize: 'var(--type-body)',
                  fontWeight: 'var(--weight-medium)',
                  color: 'var(--text)',
                  lineHeight: 'var(--leading-body)',
                }}>
                  {s.tocLabel}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDY SECTIONS ═══ */}
      {talkiatry.sections.map((section, i) => (
        <div key={section.id} id={section.id}>
          <CaseStudySection section={section} index={i} />
        </div>
      ))}

      {/* ═══ HOW I WORK ═══ */}
      <section style={{
        backgroundColor: 'var(--dark-bg)',
        padding: 'var(--space-96) 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <NoiseOverlay />
        <div className="section-pad" style={{
          maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)',
          position: 'relative', zIndex: 1,
        }}>
          <Eyebrow>
            <span style={{ color: 'var(--dark-text-muted)' }}>How I work</span>
          </Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-h2)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-h2)',
            letterSpacing: 'var(--tracking-h2)',
            color: 'var(--dark-text)',
            margin: '0 0 var(--space-18)',
          }}>
            {talkiatry.howIWork.heading}
          </h2>
          <p style={{
            fontSize: 'var(--type-body)',
            color: 'var(--dark-text-muted)',
            lineHeight: 'var(--leading-body)',
            margin: '0 0 var(--space-48)',
            maxWidth: '520px',
          }}>
            {talkiatry.howIWork.subheading}
          </p>
          <div className="talkiatry-how-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--space-12)',
          }}>
            {talkiatry.howIWork.tiles.filter(t => t.heading).map((tile, i) => (
              <div key={i} style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid var(--dark-border)',
                borderRadius: 'var(--radius-card)',
                padding: 'var(--space-24)',
                display: 'flex', flexDirection: 'column', gap: 'var(--space-12)',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--type-h5)',
                  fontWeight: 'var(--weight-medium)',
                  lineHeight: 'var(--leading-h5)',
                  letterSpacing: 'var(--tracking-h5)',
                  color: 'var(--dark-text)',
                  margin: 0,
                }}>
                  {tile.heading}
                </h3>
                <p style={{
                  fontSize: 'var(--type-body)',
                  color: 'var(--dark-text-muted)',
                  lineHeight: 'var(--leading-body)',
                  margin: 0,
                }}>
                  {tile.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLOSE CTA ═══ */}
      <div style={{
        background: 'linear-gradient(0deg, rgba(139,120,255,0.35) 0%, rgba(139,120,255,0.18) 40%, rgba(139,120,255,0.06) 65%, var(--bg) 90%)',
        position: 'relative',
      }}>
        <NoiseOverlay light />
        <div className="section-pad" style={{
          maxWidth: '1000px', margin: '0 auto',
          padding: 'var(--space-80) var(--space-48)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: 'var(--space-12)',
          position: 'relative', zIndex: 1,
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-h3)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-h2)',
            letterSpacing: 'var(--tracking-h3)',
            color: 'var(--text)',
            margin: 0, textAlign: 'center',
            maxWidth: '600px',
          }}>
            {talkiatry.close}
          </p>
          <div className="resume-cta-buttons" style={{ display: 'flex', gap: 'var(--space-18)', alignItems: 'center', marginTop: 'var(--space-24)' }}>
            <a
              href="https://cal.com/jennylu98/30"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-fg)',
                fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
                padding: '0 var(--btn-x-padding)', height: 'var(--btn-height)',
                borderRadius: 'var(--btn-radius)',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}
            >
              Book a call →
            </a>
            <a
              href="/"
              style={{
                color: 'var(--text)',
                fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                padding: '0 var(--btn-x-padding)', height: 'var(--btn-height)',
                borderRadius: 'var(--btn-radius)',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}
            >
              View projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
