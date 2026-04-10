import { useRef, useState, useEffect } from 'react';
import TextReveal from './TextReveal';
import Badge from './Badge';

const aiProjects = [
  {
    id: 'design-hub',
    title: 'Design Hub',
    description: 'One designer. Full onboarding flow, daily check-in, design system, and research — all shipped from one URL. Stakeholders tap through the prototype on their phone. Engineers hover over components and copy the code. No Figma handoff. No waiting.',
    tools: ['Claude Code', 'React', 'Vite', 'Figma MCP', 'Pencil.dev'],
  },
  {
    id: 'this-portfolio',
    title: 'This Portfolio',
    description: 'Personalized portfolio pages mapped to each company\'s JD — built and deployed in under an hour. Feed in a job description or interview transcript, and it generates a tailored pitch page with matched proof points.',
    tools: ['Claude Code', 'React', 'Vite', 'Vercel'],
  },
];

export default function AIProjects() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);

  useEffect(() => {
    const makeObserver = (ref, setter) => {
      const el = ref.current;
      if (!el) return () => {};
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { setter(true); obs.disconnect(); } },
        { threshold: 0.08 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = makeObserver(headerRef, setHeaderVisible);
    const c2 = makeObserver(gridRef, setGridVisible);
    return () => { c1(); c2(); };
  }, []);

  return (
    <section style={{
      borderTop: '1px solid var(--border)',
      padding: '100px 0',
      position: 'relative',
      background: 'linear-gradient(180deg, var(--bg) 0%, rgba(139,120,255,0.06) 50%, var(--bg) 100%)',
    }}>
      <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            marginBottom: '48px',
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
            AI Projects
          </span>
          <TextReveal>
            <h2 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-h2)',
              fontWeight: 'var(--weight-black)',
              lineHeight: 'var(--leading-tight)',
              letterSpacing: 'var(--tracking-tight)',
              color: 'var(--text)',
              margin: 0,
              maxWidth: '560px',
            }}>
              Built with AI, not just designed with it
            </h2>
          </TextReveal>
        </div>

        {/* Cards — top down */}
        <div
          ref={gridRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            transition: 'opacity 0.7s ease 0.1s, filter 0.7s ease 0.1s',
            opacity: gridVisible ? 1 : 0,
            filter: gridVisible ? 'blur(0px)' : 'blur(12px)',
          }}
        >
          {aiProjects.map((d, i) => (
            <div
              key={d.id}
              style={{
                backgroundColor: 'var(--glass-bg)',
                backdropFilter: 'blur(var(--glass-blur))',
                WebkitBackdropFilter: 'blur(var(--glass-blur))',
                border: '1px solid var(--glass-stroke)',
                borderRadius: 'var(--radius)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                boxShadow: 'var(--shadow-glass)',
              }}
            >
              <span style={{
                color: 'var(--accent)', fontSize: 'var(--type-label)',
                fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-label)',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3 style={{
                color: 'var(--text)',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-subhead)',
                fontWeight: 'var(--weight-black)',
                lineHeight: 'var(--leading-snug)',
                letterSpacing: 'var(--tracking-snug)',
                margin: 0,
              }}>
                {d.title}
              </h3>

              <p style={{
                color: 'var(--muted)', fontSize: 'var(--type-body)',
                lineHeight: 'var(--leading-body)', margin: 0,
              }}>
                {d.description}
              </p>

              {/* Tool badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)' }}>
                {d.tools.map(tool => (
                  <Badge key={tool} variant="outline" size="sm">{tool}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
