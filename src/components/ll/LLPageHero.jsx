import { useState, useEffect } from 'react';
import NoiseOverlay from './NoiseOverlay';
import CtaButton from './CtaButton';

// `headline` is optional and opt-in. Without it every existing page renders exactly as before,
// with the role as the h1. Pass it and the role moves into the badge, so the biggest type on the
// page can be the line that actually pulls instead of a job title the reader already knows.
// `ctaHref` is optional. Without it CtaButton keeps its cal.com default, so every existing page
// renders exactly as before. Pass it when the label promises something other than booking a call:
// a button reading "Email me" that opened a Calendly link was a real bug on the Step page.
export default function LLPageHero({ companyName, role, oneLiner, headline, ctaLabel, ctaHref }) {
  const [headerVisible, setHeaderVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeaderVisible(true), 80); return () => clearTimeout(t); }, []);

  return (
    <div style={{
      background: 'linear-gradient(180deg, rgba(139,120,255,0.35) 0%, rgba(139,120,255,0.18) 40%, rgba(139,120,255,0.06) 65%, var(--bg) 90%)',
      position: 'relative',
    }}>
      <NoiseOverlay light />
      <div className="resume-hero-inner" style={{
        maxWidth: '1000px', margin: '0 auto',
        padding: 'var(--space-144) var(--space-48) var(--space-96)',
        minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-24)',
          opacity: headerVisible ? 1 : 0, filter: headerVisible ? 'blur(0px)' : 'blur(12px)',
          transition: 'opacity 0.7s ease, filter 0.7s ease',
        }}>
          {/* Glass pill badge */}
          <div style={{
            fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
            letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase', color: 'var(--text)',
            backgroundColor: 'var(--glass-bg)', backdropFilter: 'blur(var(--glass-blur))',
            WebkitBackdropFilter: 'blur(var(--glass-blur))',
            border: '1px solid var(--glass-stroke)', borderRadius: '100px',
            padding: '6px 16px', boxShadow: 'var(--shadow-glass)',
          }}>
            Jenny Lu × {companyName}{headline ? ` · ${role}` : ''}
          </div>

          {/* Headline: the hook when a page supplies one, otherwise the role */}
          <h1 style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h1)', fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-h1)', letterSpacing: 'var(--tracking-h1)',
            color: 'var(--text)', margin: 0, textAlign: 'center',
          }}>
            {headline || role}
          </h1>

          {/* One-liner */}
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--type-lead)', fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-body)', color: 'var(--muted)',
            margin: 0, textAlign: 'center', maxWidth: '600px',
          }}>
            {oneLiner}
          </p>

          {/* CTA */}
          <div style={{ marginTop: 'var(--space-12)' }}>
            <CtaButton href={ctaHref}>{ctaLabel}</CtaButton>
          </div>

          {/* Scroll chevron */}
          <div style={{ marginTop: 'var(--space-48)' }}>
            <svg className="scroll-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
