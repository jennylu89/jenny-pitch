import { useRef, useState, useEffect } from 'react';
import { jenny } from '../data/jenny';
import LLCaseStudy from './ll/LLCaseStudy';
import TextReveal from './TextReveal';

// Homepage order: lead with 0-1 / AI-native / find-the-real-problem work; enterprise-scale studies last.
const HOME_ORDER = ['roadrunner', 'arenalabs', 'megprime', 'designhub', 'myperks', 'navigation', 'curbside'];

// `projectIds`, `eyebrow`, `heading` and `intro` are optional and opt-in, matching
// what LLSelectedProjects already does on the company pages. Omit them and the
// homepage renders exactly as before, in HOME_ORDER. Pass `projectIds` and it
// selects AND orders, same as the company pages, from the same jenny.selectedProjects.
export default function Projects({ projects, projectIds, eyebrow, heading, intro }) {
  const displayProjects = projects
    ? projects
    : projectIds
    ? jenny.selectedProjects
        .filter(p => projectIds.includes(p.id))
        .sort((a, b) => projectIds.indexOf(a.id) - projectIds.indexOf(b.id))
    : [...jenny.selectedProjects].sort((a, b) => {
        const ia = HOME_ORDER.indexOf(a.id); const ib = HOME_ORDER.indexOf(b.id);
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
      });

  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeaderVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="projects"
      style={{ borderTop: '1px solid var(--border)', padding: '100px 0 80px' }}
    >
      <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            marginBottom: '64px',
            transition: 'opacity 0.7s ease, filter 0.7s ease',
            opacity: headerVisible ? 1 : 0,
            filter: headerVisible ? 'blur(0px)' : 'blur(12px)',
          }}
        >
          <span style={{
            color: 'var(--text)', fontSize: 'var(--type-small)',
            fontFamily: 'var(--font-badge)',
            fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
            textTransform: 'uppercase', lineHeight: 'var(--leading-h5)',
            marginBottom: '24px', display: 'block',
          }}>
            {eyebrow || 'Selected work'}
          </span>
          <TextReveal>
            <h2 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-h2)',
              fontWeight: 'var(--weight-black)',
              lineHeight: 'var(--leading-tight)',
              letterSpacing: 'var(--tracking-tight)',
              color: 'var(--text)',
              margin: '0 0 12px',
              maxWidth: '560px',
            }}>
              {heading || 'Full case studies.'}
            </h2>
          </TextReveal>
          <p style={{ color: 'var(--muted)', fontSize: 'var(--type-small)' }}>
            {intro || `${displayProjects.length} projects`}
          </p>
        </div>

        {/* Case studies */}
        <div>
          {displayProjects.map((project, i) => (
            <LLCaseStudy key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
