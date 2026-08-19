import { useRef, useState, useEffect } from 'react';
import { jenny } from '../../data/jenny';
import ScrollStrip from './ScrollStrip';

// One block per thing the company asked for. Replaces the old three-section arrangement where
// LLSummary stated an outcome, LLHowIWork retold the same story, and LLSelectedProjects showed
// the screens for it, so the reader met the Roadrunner billing story three times before the CTA.
//
// Four slots, in order:
//   1 What they want  — their ask, their nouns, off the JD
//   2 My point        — one line, first person, no number, must not fit anyone else's page
//   3 The work        — one project: before, after, the number, one real screen
//   4 The vouch       — a real quote, or the slot stays empty. Never invented, never stretched.
//
// Two sizes. `full` carries media, metrics and a quote. `short` is ask + point + lines only.
// Three full and two short per page is deliberate: there are four project stories with usable
// screens and four testimonials in jenny.js, of which two fit any given role. Five full blocks
// would put the same project on screen three times, and would put the page back over the word
// count that got Step rebuilt.
//
// Every number and quote comes out of jenny.js by id. Nothing is typed into the page data, so a
// metric can never drift from the source.

// Fail-safe fade. The plain IntersectionObserver version used elsewhere on the site left blocks
// permanently at opacity 0 in testing on 2026-07-31: fast or jumped scrolling can coalesce
// observations, and a block that never reveals is a block the hiring manager never reads. Three
// belts here, in order of preference:
//   1 an immediate rect check on mount, so anything already on screen reveals with no observer
//   2 the observer, for the normal scroll-into-view case
//   3 a passive scroll and resize listener that re-checks the rect, so a missed observation is
//     corrected on the very next scroll event instead of never
// A timer was considered and rejected: any timeout long enough to preserve the reveal is also
// long enough to leave a block blank, and any timeout short enough to be safe kills the reveal.
function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const inView = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight + 120 && r.bottom > -120;
    };
    const reveal = () => {
      if (done) return;
      done = true;
      setVisible(true);
      obs.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    const onScroll = () => { if (inView()) reveal(); };
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) reveal(); }, { threshold: 0, rootMargin: '120px' });
    obs.observe(el);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    if (inView()) reveal();
    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return [ref, visible];
}

/* ── The media strip. `media` names which artifact of the project to show, because one project
      can prove two different asks with two different pictures. Roadrunner's before/after
      dashboards answer "did the research", its flow diagrams answer something else. ── */
function Media({ project, media }) {
  const cs = project.caseStudy || {};

  if (media === 'video' && project.video) {
    return (
      <div style={{ borderBottom: '1px solid var(--border)' }}>
        <video src={project.video} autoPlay muted loop playsInline
          style={{ width: '100%', display: 'block' }} />
      </div>
    );
  }

  if (media === 'compare' && (cs.compareScreens || []).length > 0) {
    return (
      <ScrollStrip bg="var(--text)">
        <div style={{ display: 'flex', gap: '16px', padding: '32px', minWidth: 'max-content' }}>
          {cs.compareScreens.map((s, i) => (
            <div key={i} style={{ width: '620px', flexShrink: 0 }}>
              <div style={{ overflow: 'hidden', borderRadius: '12px', height: '400px' }}>
                <img src={s.src} alt={s.alt || ''} loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              {s.caption && (
                <p style={{
                  color: 'rgba(245,244,242,0.65)', fontSize: 'var(--type-small)',
                  lineHeight: 'var(--leading-h5)', padding: '8px 4px 0', margin: 0, textAlign: 'center',
                }}>{s.caption}</p>
              )}
            </div>
          ))}
        </div>
      </ScrollStrip>
    );
  }

  // Phone screens, with the before shot first when the project has one.
  if (media === 'app' && (cs.screens || []).length > 0) {
    const shots = cs.beforeScreen ? [cs.beforeScreen, ...cs.screens] : cs.screens;
    return (
      <ScrollStrip>
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
          gap: '16px', padding: '32px', minWidth: 'max-content',
        }}>
          {shots.map((s, i) => (
            <div key={i} style={{ width: '210px', flexShrink: 0, scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '400px', overflow: 'hidden', borderRadius: '12px' }}>
                <img src={s.src} alt={s.alt || project.title} loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
              {s.caption && (
                <p style={{
                  color: 'rgba(245,244,242,0.65)', fontSize: 'var(--type-small)',
                  lineHeight: 'var(--leading-h5)', padding: '8px 4px 0', margin: 0, textAlign: 'center',
                }}>{s.caption}</p>
              )}
            </div>
          ))}
        </div>
      </ScrollStrip>
    );
  }

  // Wide diagrams stack vertically on a light background. Same treatment LLCaseStudy gives
  // screensType 'flow'.
  if (media === 'flow' && (cs.screens || []).length > 0) {
    return (
      <div style={{ padding: '8px 32px 24px', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cs.screens.map((s, i) => (
            <div key={i}>
              {s.caption && (
                <p style={{ color: 'var(--muted)', fontSize: 'var(--type-caption)', lineHeight: 'var(--leading-body)', margin: '0 0 8px', textAlign: 'center' }}>
                  {s.caption}
                </p>
              )}
              <div style={{ border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden', backgroundColor: 'var(--bg)' }}>
                <img src={s.src} alt={s.alt || ''} loading="lazy" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (media === 'hero' && project.heroImage) {
    return (
      <ScrollStrip bg="var(--text)">
        <div style={{ padding: '32px' }}>
          <img src={project.heroImage} alt={project.title} loading="lazy"
            style={{ minWidth: '1200px', maxWidth: '2000px', width: '200%', display: 'block', borderRadius: '8px' }} />
        </div>
      </ScrollStrip>
    );
  }

  return null;
}

export default function LLProofBlock({
  index,
  size = 'full',
  ask,
  point,
  lines = [],
  projectId,
  media,
  metricIdx,
  testimonialId,
}) {
  const [ref, visible] = useFadeIn();
  const project = projectId ? jenny.selectedProjects.find(p => p.id === projectId) : null;
  const testimonial = testimonialId ? jenny.testimonials.find(t => t.id === testimonialId) : null;
  const metrics = project && metricIdx ? metricIdx.map(i => project.metrics[i]).filter(Boolean) : [];

  const num = String(index + 1).padStart(2, '0');

  const askLabel = (
    <span style={{
      fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase',
      color: 'var(--accent)', display: 'block', marginBottom: 'var(--space-6)',
    }}>
      {num} · What you want
    </span>
  );

  /* ── Short: ask on the left, point and lines on the right. Same two-column read as the old
        summary rows, so the page still has a scannable stretch after the three big blocks. ── */
  if (size === 'short') {
    return (
      <div ref={ref} className="summary-row" style={{
        display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'var(--space-24)',
        backgroundColor: 'var(--glass-bg)',
        backdropFilter: 'blur(var(--glass-blur))',
        WebkitBackdropFilter: 'blur(var(--glass-blur))',
        border: '1px solid var(--glass-stroke)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow-glass)',
        padding: 'var(--space-24)',
        marginBottom: 'var(--space-12)',
        transition: 'opacity 0.7s ease, filter 0.7s ease',
        opacity: visible ? 1 : 0,
        filter: visible ? 'blur(0px)' : 'blur(12px)',
      }}>
        <div>
          {askLabel}
          <span style={{ fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)', color: 'var(--text)', lineHeight: 'var(--leading-body)' }}>
            {ask}
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <span style={{ fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)', color: 'var(--text)', lineHeight: 'var(--leading-body)' }}>
            {point}
          </span>
          {lines.map((l, i) => (
            <span key={i} style={{ fontSize: 'var(--type-body)', color: 'var(--muted)', lineHeight: 'var(--leading-body)' }}>
              {l}
            </span>
          ))}
        </div>
      </div>
    );
  }

  /* ── Full: ask, point, lines, then the work, then the vouch. ── */
  return (
    <article ref={ref} style={{
      backgroundColor: 'var(--surface)',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      marginBottom: 'var(--space-24)',
      transition: 'opacity 0.7s ease, filter 0.7s ease',
      opacity: visible ? 1 : 0,
      filter: visible ? 'blur(0px)' : 'blur(12px)',
    }}>
      <div style={{ padding: '32px 32px 24px' }}>
        {askLabel}
        <h3 style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h3)', fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-h2)', letterSpacing: 'var(--tracking-h3)',
          color: 'var(--text)', margin: '0 0 var(--space-18)',
        }}>
          {ask}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <p style={{ fontSize: 'var(--type-lead)', fontWeight: 'var(--weight-medium)', color: 'var(--text)', lineHeight: 'var(--leading-body)', margin: 0 }}>
            {point}
          </p>
          {lines.map((l, i) => (
            <p key={i} style={{ fontSize: 'var(--type-body)', color: 'var(--muted)', lineHeight: 'var(--leading-body)', margin: 0 }}>
              {l}
            </p>
          ))}
        </div>
      </div>

      {project && <Media project={project} media={media} />}

      {(metrics.length > 0 || project) && (
        <div style={{ padding: '24px 32px 32px' }}>
          {/* Where the picture came from. Without this the screens read as decoration. */}
          {project && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: metrics.length > 0 ? 'var(--space-18)' : 0 }}>
              <span style={{ color: 'var(--muted)', fontSize: 'var(--type-label)' }}>{project.company}</span>
              <span style={{ color: 'var(--border)' }}>·</span>
              <span style={{ color: 'var(--muted)', fontSize: 'var(--type-label)' }}>{project.role}</span>
            </div>
          )}
          {metrics.length > 0 && (
            <div className="case-study-metrics" style={{ display: 'flex', gap: '0', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
              {metrics.map((m, i) => (
                <div key={i} style={{
                  flex: '1 1 0',
                  paddingRight: '24px',
                  borderRight: i < metrics.length - 1 ? '1px solid var(--border)' : 'none',
                  paddingLeft: i > 0 ? '24px' : '0',
                }}>
                  <div style={{
                    color: 'var(--text)', fontSize: 'var(--type-metric)', fontWeight: 'var(--weight-black)',
                    letterSpacing: 'var(--tracking-snug)', lineHeight: 'var(--leading-h1)', marginBottom: '4px',
                  }}>
                    {m.value}
                  </div>
                  <div style={{ color: 'var(--muted)', fontSize: 'var(--type-label)' }}>{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {testimonial && (
        <div style={{
          borderTop: '1px solid var(--border)',
          backgroundColor: 'var(--bg)',
          padding: '24px 32px',
        }}>
          <p style={{
            fontSize: 'var(--type-body)', color: 'var(--text)', lineHeight: 'var(--leading-body)',
            margin: '0 0 var(--space-6)', fontStyle: 'italic',
          }}>
            “{testimonial.quote}”
          </p>
          <p style={{ fontSize: 'var(--type-small)', color: 'var(--muted)', margin: 0 }}>
            {testimonial.name}, {testimonial.title}
          </p>
        </div>
      )}
    </article>
  );
}
