import { useRef, useState, useEffect } from 'react';
import TextReveal from './TextReveal';

const toolIcons = {
  'Claude Code': '/tools/claude-code.svg',
  'Pencil.dev': '/tools/pencil.svg',
  'React': '/tools/react.svg',
  'Vite': '/tools/vite.svg',
  'Figma MCP': '/tools/figma-mcp.svg',
  'Figma': '/tools/figma.svg',
};

const flowSteps = [
  { num: '01', label: 'Start in Claude', detail: 'Clarify intent, surface edge cases, draft the approach — before touching a screen' },
  { num: '02', label: 'Sketch in Pencil.dev', detail: 'Rough layouts and interactions, fast enough to throw away' },
  { num: '03', label: 'Build in Claude Code', detail: 'Production React components mapped to the design system — not static mocks' },
  { num: '04', label: 'Polish in Figma', detail: 'Systems alignment, full state coverage, production readiness' },
  { num: '05', label: 'Ship from one URL', detail: 'Stakeholders tap through it. Engineers copy code. No handoff doc.' },
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

        {/* Header — centered */}
        <div
          ref={headerRef}
          style={{
            marginBottom: '48px',
            textAlign: 'center',
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
            AI-first design process
          </span>
          <TextReveal>
            <h2 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-h2)',
              fontWeight: 'var(--weight-medium)',
              lineHeight: 'var(--leading-h2)',
              letterSpacing: 'var(--tracking-h2)',
              color: 'var(--text)',
              margin: '0 auto',
              maxWidth: '650px',
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
          {/* Main card */}
          <div style={{
            backgroundColor: 'var(--glass-bg)',
            backdropFilter: 'blur(var(--glass-blur))',
            WebkitBackdropFilter: 'blur(var(--glass-blur))',
            border: '1px solid var(--glass-stroke)',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow-glass)',
            padding: '40px',
            display: 'flex', flexDirection: 'column', gap: '32px',
          }}>

            {/* What changed */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{
                color: 'var(--text)',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-h4)',
                fontWeight: 'var(--weight-medium)',
                lineHeight: 'var(--leading-h4)',
                letterSpacing: 'var(--tracking-h4)',
                margin: 0,
              }}>
                I stopped using Figma for prototyping. Here's what I do instead.
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Claude Code', 'Pencil.dev', 'Figma MCP', 'React', 'Vite', 'Figma'].map(tool => (
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
                  Every project starts in Claude — clarifying requirements, surfacing edge cases, drafting the approach before I touch a screen. I sketch in Pencil.dev, then Claude Code generates production React components mapped to the design system. The prototype is functional code from day one.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', margin: 0 }}>
                  Figma comes in for systems and polish — not prototyping. Stakeholders tap through functional prototypes on their phone. Engineers hover over components and copy code directly. No handoff doc. No waiting.
                </p>
                <p style={{ color: 'var(--text)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', margin: 0, fontWeight: 'var(--weight-medium)' }}>
                  At Arena Labs, this workflow replaced four separate systems (Figma, Notion, Storybook, PDFs) with one URL. What used to take weeks takes days. I've shipped every project this way since.
                </p>
              </div>
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

            {/* Flow steps */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {flowSteps.map((step, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '20px', alignItems: 'flex-start',
                    padding: '20px 0',
                    borderBottom: i < flowSteps.length - 1 ? '1px solid var(--border)' : 'none',
                  }}>
                    <span style={{
                      color: 'var(--accent)', fontSize: 'var(--type-label)',
                      fontFamily: 'var(--font-badge)',
                      fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
                      flexShrink: 0, width: '24px', paddingTop: '2px',
                    }}>
                      {step.num}
                    </span>
                    <div style={{ flex: 1 }}>
                      <span style={{
                        fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
                        color: 'var(--text)', display: 'block', marginBottom: '4px',
                      }}>
                        {step.label}
                      </span>
                      <span style={{
                        fontSize: 'var(--type-small)', color: 'var(--muted)',
                        lineHeight: 'var(--leading-body)',
                      }}>
                        {step.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
