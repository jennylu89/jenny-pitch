import { useRef, useState, useEffect } from 'react';

export default function LLCaseStudy({ project, index }) {
  const { caseStudy } = project;
  const screens = caseStudy.screens || [];
  const hasScreens = screens.length > 0;

  const screensType = caseStudy.screensType || null;
  const isApp          = screensType === 'app';
  const isDashboard    = screensType === 'dashboard';
  const isFlow         = screensType === 'flow';
  const isFull         = screensType === 'full';
  const isBeforeAfter  = screensType === 'before-after';
  const beforeScreen   = caseStudy.beforeScreen || null;

  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* ── Metrics — plain text row, no boxes ── */
  const metricsBlock = (
    <div style={{
      display: 'flex',
      gap: '0',
      borderTop: '1px solid var(--border)',
      paddingTop: '24px',
    }}>
      {project.metrics.map((m, i) => (
        <div key={i} style={{
          flex: '1 1 0',
          paddingRight: '24px',
          borderRight: i < project.metrics.length - 1 ? '1px solid var(--border)' : 'none',
          paddingLeft: i > 0 ? '24px' : '0',
        }}>
          <div style={{
            color: 'var(--text)',
            fontSize: 'var(--type-metric)',
            fontWeight: 'var(--weight-black)',
            letterSpacing: 'var(--tracking-snug)',
            lineHeight: 'var(--leading-h1)',
            marginBottom: '4px',
          }}>
            {m.value}
          </div>
          <div style={{ color: 'var(--muted)', fontSize: 'var(--type-label)', fontWeight: 'var(--weight-normal)' }}>
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );

  /* ── Info block — 2 styles only: black title, regular everything else ── */
  const story = caseStudy.story || [];
  const infoBlock = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

      {/* Meta row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{ color: 'var(--muted)', fontSize: 'var(--type-label)', fontWeight: 'var(--weight-normal)' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span style={{ color: 'var(--border)' }}>·</span>
        <span style={{ color: 'var(--muted)', fontSize: 'var(--type-label)', fontWeight: 'var(--weight-normal)' }}>
          {project.company}
        </span>
        <span style={{ color: 'var(--border)' }}>·</span>
        <span style={{ color: 'var(--muted)', fontSize: 'var(--type-label)', fontWeight: 'var(--weight-normal)' }}>
          {project.role}
        </span>
      </div>

      {/* Title — only black weight in the card */}
      <h3 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-h3)',
        fontWeight: 'var(--weight-black)',
        lineHeight: 'var(--leading-tight)',
        letterSpacing: 'var(--tracking-tight)',
        color: 'var(--text)',
        margin: 0,
      }}>
        {project.title}
      </h3>

      {/* Headline + story — all same style, regular weight */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {project.headline && (
          <p style={{
            color: 'var(--text)', fontSize: 'var(--type-body)',
            fontWeight: 'var(--weight-normal)', lineHeight: 'var(--leading-body)', margin: 0,
          }}>
            {project.headline}
          </p>
        )}
        {story.map((para, i) => (
          <p key={i} style={{
            color: 'var(--muted)', fontSize: 'var(--type-body)',
            fontWeight: 'var(--weight-normal)', lineHeight: 'var(--leading-body)', margin: 0,
          }}>
            {para}
          </p>
        ))}
      </div>

    </div>
  );

  /* ── Content row — info stacked, metrics full-width below ── */
  const contentRow = (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {infoBlock}
      {metricsBlock}
    </div>
  );

  return (
    <article style={{ marginBottom: '32px' }}>
      <div
        ref={cardRef}
        style={{
          backgroundColor: 'var(--surface)',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow-sm)',
          overflow: 'hidden',
          transition: 'opacity 0.7s ease, filter 0.7s ease',
          opacity: visible ? 1 : 0,
          filter: visible ? 'blur(0px)' : 'blur(12px)',
        }}
      >

        {/* ── Content always on top ── */}
        {contentRow}

        {/* ── App screenshots: horizontal scroll strip ── */}
        {isApp && hasScreens && (
          <div style={{
            backgroundColor: 'var(--text)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '16px',
              padding: '40px',
              minWidth: 'max-content',
            }}>
              {screens.map((screen, i) => (
                <div key={i} style={{
                  width: '240px',
                  flexShrink: 0,
                  scrollSnapAlign: 'start',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div style={{ height: '420px', overflow: 'hidden', borderRadius: '12px' }}>
                    <img src={screen.src} alt={screen.alt || project.title} loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                  </div>
                  {screen.caption && (
                    <p style={{
                      color: 'rgba(245,244,242,0.65)', fontSize: 'var(--type-small)',
                      lineHeight: 'var(--leading-h5)', padding: '8px 4px 0', margin: 0,
                    }}>
                      {screen.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Dashboard: wide web frame ── */}
        {isDashboard && (
          <div style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}>
            {hasScreens ? (
              <img src={screens[0].src} alt={screens[0].alt || project.title} loading="lazy"
                style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            ) : (
              <div style={{ height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--border)', fontSize: 'var(--type-caption)', letterSpacing: 'var(--tracking-label)' }}>
                  Dashboard screenshot
                </span>
              </div>
            )}
          </div>
        )}

        {/* ── Full width: hero image ── */}
        {isFull && (
          <div style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)', aspectRatio: '16/7', overflow: 'hidden' }}>
            {hasScreens ? (
              <img src={screens[0].src} alt={screens[0].alt || project.title} loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--border)', fontSize: 'var(--type-caption)', letterSpacing: 'var(--tracking-label)' }}>
                  Case study visuals
                </span>
              </div>
            )}
          </div>
        )}

        {/* ── Flow: numbered vertical sequence ── */}
        {isFlow && (
          <div style={{ padding: '40px', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {screens.map((screen, i) => (
                <div key={i}>
                  {screen.caption && (
                    <p style={{ color: 'var(--muted)', fontSize: 'var(--type-caption)', lineHeight: 'var(--leading-body)', margin: '0 0 8px' }}>
                      {screen.caption}
                    </p>
                  )}
                  <div style={{ border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden', backgroundColor: 'var(--bg)' }}>
                    <img src={screen.src} alt={screen.alt || ''} loading="lazy"
                      style={{ width: '100%', display: 'block' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Before → After: before screen + arrow + after screens ── */}
        {isBeforeAfter && hasScreens && beforeScreen && (
          <div style={{
            backgroundColor: 'var(--text)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0',
              padding: '40px',
              minWidth: 'max-content',
            }}>
              {/* Before screen */}
              <div style={{ width: '240px', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '420px', overflow: 'hidden', borderRadius: '12px', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                  <img src={beforeScreen.src} alt={beforeScreen.alt || 'Before'} loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                </div>
                {beforeScreen.caption && (
                  <p style={{
                    color: 'rgba(245,244,242,0.65)', fontSize: 'var(--type-small)',
                    lineHeight: 'var(--leading-h5)', padding: '8px 4px 0', margin: 0,
                  }}>
                    {beforeScreen.caption}
                  </p>
                )}
              </div>

              {/* Arrow */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: '420px', padding: '0 24px', flexShrink: 0,
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(245,244,242,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              {/* After screens */}
              {screens.map((screen, i) => (
                <div key={i} style={{
                  width: '240px', flexShrink: 0,
                  marginLeft: i > 0 ? '16px' : '0',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ height: '420px', overflow: 'hidden', borderRadius: '12px' }}>
                    <img src={screen.src} alt={screen.alt || project.title} loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                  </div>
                  {screen.caption && (
                    <p style={{
                      color: 'rgba(245,244,242,0.65)', fontSize: 'var(--type-small)',
                      lineHeight: 'var(--leading-h5)', padding: '8px 4px 0', margin: 0,
                    }}>
                      {screen.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}
