import { useRef, useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import { ninety } from './ninety';
import { jenny } from '../../data/jenny';
import LLCaseStudy from '../../components/ll/LLCaseStudy';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

function NoiseOverlay({ light }) {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0, zIndex: 0,
      backgroundImage: NOISE_SVG, backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
      opacity: light ? 0.25 : 0.35, mixBlendMode: light ? 'multiply' : 'soft-light', pointerEvents: 'none',
    }} />
  );
}

function Eyebrow({ children }) {
  return (
    <span style={{
      fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase', lineHeight: 'var(--leading-h5)',
      display: 'block', marginBottom: 'var(--space-24)',
    }}>{children}</span>
  );
}

function MetricCard({ metric }) {
  return (
    <div style={{
      backgroundColor: 'var(--glass-bg)',
      border: '1px solid var(--glass-stroke)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-glass)',
      backdropFilter: 'blur(var(--glass-blur))',
      padding: 'var(--space-24)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)',
    }}>
      <div style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h2)', fontWeight: 'var(--weight-medium)',
        lineHeight: 'var(--leading-h2)', letterSpacing: 'var(--tracking-h2)', color: 'var(--text)',
      }}>{metric.value}</div>
      <div style={{
        fontSize: 'var(--type-body)', color: 'var(--muted)', lineHeight: 'var(--leading-body)',
      }}>{metric.label}</div>
    </div>
  );
}

export default function NinetyPage() {
  const [headerVisible, setHeaderVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeaderVisible(true), 80); return () => clearTimeout(t); }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="ninety" />

      {/* HERO */}
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
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-24)',
            opacity: headerVisible ? 1 : 0, filter: headerVisible ? 'blur(0px)' : 'blur(12px)',
            transition: 'opacity 0.7s ease, filter 0.7s ease',
          }}>
            <div style={{
              fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
              letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase', color: 'var(--muted)',
            }}>Jenny Lu × {ninety.name}</div>
            <h1 style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h1)', fontWeight: 'var(--weight-medium)',
              lineHeight: 'var(--leading-h1)', letterSpacing: 'var(--tracking-h1)',
              color: 'var(--text)', margin: 0, textAlign: 'center',
            }}>{jenny.name}</h1>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h4)', fontWeight: 'var(--weight-medium)',
              lineHeight: 'var(--leading-h4)', letterSpacing: 'var(--tracking-h4)',
              color: 'var(--text)', margin: 0, textAlign: 'center',
            }}>{ninety.role}</p>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--type-lead)', fontWeight: 'var(--weight-medium)',
              lineHeight: 'var(--leading-body)', color: 'var(--muted)',
              margin: 0, textAlign: 'center', maxWidth: '600px',
            }}>{ninety.oneLiner}</p>
            <div style={{ marginTop: 'var(--space-12)' }}>
              <a className="btn-hover" href="https://cal.com/jennylu98/30" target="_blank" rel="noopener noreferrer"
                style={{
                  backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-fg)',
                  fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
                  padding: '0 var(--btn-x-padding)', height: 'var(--btn-height)',
                  borderRadius: 'var(--btn-radius)',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
                }}>
                <img src="/jenny-avatar.jpg" alt="" style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }} />
                Schedule a call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <section style={{ padding: 'var(--space-96) 0 var(--space-80)' }}>
        <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)' }}>
          <Eyebrow><span style={{ color: 'var(--muted)', textAlign: 'center', display: 'block' }}>Why me</span></Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h2)', fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-h2)', letterSpacing: 'var(--tracking-h2)',
            color: 'var(--text)', margin: '0 auto var(--space-48)', maxWidth: '650px', textAlign: 'center',
          }}>{ninety.summaryHeading}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
            {ninety.summaryRows.map((row, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'var(--space-24)',
                backgroundColor: 'var(--glass-bg)',
                backdropFilter: 'blur(var(--glass-blur))',
                WebkitBackdropFilter: 'blur(var(--glass-blur))',
                border: '1px solid var(--glass-stroke)',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow-glass)',
                padding: 'var(--space-24)',
              }}>
                <div>
                  <span style={{
                    fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
                    letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase',
                    color: 'var(--accent)', display: 'block', marginBottom: 'var(--space-6)',
                  }}>Your ask</span>
                  <span style={{ fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)', color: 'var(--text)', lineHeight: 'var(--leading-body)' }}>
                    {row.ask}
                  </span>
                </div>
                <div>
                  <span style={{
                    fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
                    letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase',
                    color: 'var(--accent)', display: 'block', marginBottom: 'var(--space-6)',
                  }}>My proof</span>
                  <span style={{ fontSize: 'var(--type-body)', color: 'var(--muted)', lineHeight: 'var(--leading-body)' }}>
                    {row.proof}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I BRING */}
      <LLHowIWork howIWork={ninety.howIWork} />

      {/* AI PROJECTS */}
      <AIProjects />

      {/* SELECTED PROJECTS */}
      <section style={{ padding: 'var(--space-96) 0 var(--space-80)' }}>
        <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)' }}>
          <Eyebrow><span style={{ color: 'var(--muted)', textAlign: 'center', display: 'block' }}>Selected work</span></Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h2)', fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-h2)', letterSpacing: 'var(--tracking-h2)',
            color: 'var(--text)', margin: '0 auto var(--space-48)', maxWidth: '650px', textAlign: 'center',
          }}>Recent projects</h2>
          <div>
            {jenny.selectedProjects
              .filter(p => ['roadrunner', 'arenalabs', 'navigation', 'myperks'].includes(p.id))
              .sort((a, b) => {
                const order = ['roadrunner', 'arenalabs', 'navigation', 'myperks'];
                return order.indexOf(a.id) - order.indexOf(b.id);
              })
              .map((project, i) => <LLCaseStudy key={project.id} project={project} index={i} />)}
          </div>
        </div>
      </section>

      {/* CLOSE CTA */}
      <div style={{
        background: 'linear-gradient(0deg, rgba(139,120,255,0.35) 0%, rgba(139,120,255,0.18) 40%, rgba(139,120,255,0.06) 65%, var(--bg) 90%)',
        position: 'relative',
      }}>
        <NoiseOverlay light />
        <div className="section-pad" style={{
          maxWidth: '1000px', margin: '0 auto', padding: 'var(--space-96) var(--space-48)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-12)',
          position: 'relative', zIndex: 1,
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h3)', fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-h2)', letterSpacing: 'var(--tracking-h3)',
            color: 'var(--text)', margin: 0, textAlign: 'center', maxWidth: '600px',
          }}>{ninety.close}</p>
          <div className="resume-cta-buttons" style={{ display: 'flex', gap: 'var(--space-18)', alignItems: 'center', marginTop: 'var(--space-24)' }}>
            <a className="btn-hover" href="https://cal.com/jennylu98/30" target="_blank" rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-fg)',
                fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
                padding: '0 var(--btn-x-padding)', height: 'var(--btn-height)',
                borderRadius: 'var(--btn-radius)',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}>
              <img src="/jenny-avatar.jpg" alt="" style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }} />
              Schedule a call
            </a>
            <a className="btn-hover" href="/resume?from=ninety"
              style={{
                color: 'var(--text)', fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
                textDecoration: 'none', border: '1px solid var(--border)',
                padding: '0 var(--btn-x-padding)', height: 'var(--btn-height)',
                borderRadius: 'var(--btn-radius)',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}>
              View resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
