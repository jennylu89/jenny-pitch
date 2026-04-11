import { useRef, useState, useEffect } from 'react';
import TextReveal from './TextReveal';

const toolIcons = {
  'Claude Code': '/tools/claude-code.svg',
  'Pencil.dev': '/tools/pencil.svg',
  'React': '/tools/react.svg',
  'Vite': '/tools/vite.svg',
  'Figma MCP': '/tools/figma-mcp.svg',
};

const flowSteps = [
  { label: 'Research', detail: 'Surveys, interviews, usability data' },
  { label: 'Sketch', detail: 'Rough layouts in Pencil.dev' },
  { label: 'Build', detail: 'Claude Code generates React components' },
  { label: 'Prototype', detail: 'Functional screens, not static mocks' },
  { label: 'Ship', detail: 'One URL — stakeholders tap, engineers copy code' },
];

export default function AIProjects() {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

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
    const c2 = makeObserver(contentRef, setContentVisible);
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
              My design process starts in an LLM
            </h2>
          </TextReveal>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          style={{
            display: 'flex', flexDirection: 'column', gap: '32px',
            transition: 'opacity 0.7s ease 0.1s, filter 0.7s ease 0.1s',
            opacity: contentVisible ? 1 : 0,
            filter: contentVisible ? 'blur(0px)' : 'blur(12px)',
          }}
        >
          {/* Design Hub card */}
          <div style={{
            backgroundColor: 'var(--glass-bg)',
            backdropFilter: 'blur(var(--glass-blur))',
            WebkitBackdropFilter: 'blur(var(--glass-blur))',
            border: '1px solid var(--glass-stroke)',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow-glass)',
            padding: '40px',
            display: 'flex', flexDirection: 'column', gap: '24px',
          }}>
            <span style={{
              color: 'var(--accent)', fontSize: 'var(--type-label)',
              fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-label)',
            }}>
              HOW I WORK
            </span>

            <h3 style={{
              color: 'var(--text)',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-h4)',
              fontWeight: 'var(--weight-medium)',
              lineHeight: 'var(--leading-h4)',
              letterSpacing: 'var(--tracking-h4)',
              margin: 0,
            }}>
              LLM → code → ship. No traditional handoff pipeline.
            </h3>

            {/* Tools */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['Claude Code', 'Pencil.dev', 'React', 'Vite', 'Figma MCP'].map(tool => (
                <span key={tool} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '4px',
                  fontSize: '10px',
                  fontFamily: 'var(--font-badge)',
                  fontWeight: 'var(--weight-medium)',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  padding: '3px 8px',
                  lineHeight: 1,
                }}>
                  {toolIcons[tool] && (
                    <img src={toolIcons[tool]} alt="" style={{ width: '12px', height: '12px', opacity: 0.7 }} />
                  )}
                  {tool}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '640px' }}>
              <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', margin: 0 }}>
                Every project starts in Claude — clarifying intent, surfacing edge cases, drafting the approach. I sketch rough layouts in Pencil.dev, then Claude Code generates production React components mapped to the design system.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', margin: 0 }}>
                Figma comes in for systems and polish — not for prototyping. The prototype is functional code from day one. Stakeholders tap through it on their phone. Engineers hover over components and copy code directly.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', margin: 0 }}>
                This isn't a side experiment — it's how I work on every project now. What used to take weeks takes days.
              </p>
            </div>

            {/* Video */}
            <div style={{
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
            }}>
              <video
                src="/ai-hub-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', display: 'block' }}
              />
            </div>

            {/* Flow */}
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '0',
              borderTop: '1px solid var(--border)', paddingTop: '24px',
              overflowX: 'auto',
            }}>
              {flowSteps.map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', flex: '1 1 0', minWidth: '120px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px',
                    }}>
                      <div style={{
                        width: '8px', height: '8px', borderRadius: '50%',
                        backgroundColor: 'var(--accent)',
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
                        color: 'var(--text)',
                      }}>
                        {step.label}
                      </span>
                    </div>
                    <p style={{
                      fontSize: 'var(--type-small)', color: 'var(--muted)',
                      lineHeight: 'var(--leading-body)', margin: 0, paddingLeft: '16px',
                    }}>
                      {step.detail}
                    </p>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div style={{
                      width: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, paddingTop: '4px', color: 'var(--border)',
                    }}>
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
