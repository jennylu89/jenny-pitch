import { useState, useEffect } from 'react';
import NoiseOverlay from './NoiseOverlay';
import CtaButton from './CtaButton';

// `headline` is optional and opt-in. Without it every existing page renders exactly as before,
// with the role as the h1. Pass it and the role moves into the badge, so the biggest type on the
// page can be the line that actually pulls instead of a job title the reader already knows.
// `ctaHref` is optional. Without it CtaButton keeps its cal.com default, so every existing page
// renders exactly as before. Pass it when the label promises something other than booking a call:
// a button reading "Email me" that opened a Calendly link was a real bug on the Step page.
// `hideName` is optional and opt-in, so all 26 other pages keep "Jenny Lu × Company" untouched.
// Pass it when the nav already carries her name close enough to read as a repeat. Jenny caught
// this on /arborxr 2026-07-31: the nav says "Jenny Lu" with her avatar, and the badge said it
// again about 200px below. Known tradeoff she accepted: "Jenny Lu × ArborXR" was doing one job
// the nav does not, signalling a page built for them rather than a portfolio they landed on.
// `eyebrow` is optional and opt-in. Pass it and it REPLACES the whole badge string, so a page can
// show a positioning lens ("Jenny Lu · Senior Product Designer · Provider Experience") instead of
// "Jenny Lu × Company". Added 2026-08-16 for the reusable job template, where the company name in
// the badge was doing nothing the rest of the page didn't already say. Omit it and all 26 other
// pages render exactly as before.
// `compact`, `capabilityLine`, `secondaryLabel` and `secondaryFrom` are optional and opt-in, added
// 2026-08-16 for the job template. `compact` trims the hero about 20% so the work appears sooner.
// `capabilityLine` is deliberately small and low-contrast: it is metadata under the paragraph, not
// a second headline. Omit all four and every existing page renders exactly as before.
export default function LLPageHero({
  companyName, role, oneLiner, headline, ctaLabel, ctaHref, body, eyebrow,
  capabilityLine, secondaryLabel, secondaryFrom, hideName = false,
  compact = false, ctaHideAvatar = false,
}) {
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
        padding: compact
          ? 'var(--space-96) var(--space-48) var(--space-72)'
          : 'var(--space-144) var(--space-48) var(--space-96)',
        minHeight: compact ? '78vh' : '100vh',
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
            {eyebrow || `${hideName ? '' : 'Jenny Lu × '}${companyName}${headline ? ` · ${role}` : ''}`}
          </div>

          {/* Headline: the hook when a page supplies one, otherwise the role */}
          <h1 style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h1)', fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-h1)', letterSpacing: 'var(--tracking-h1)',
            color: 'var(--text)', margin: 0, textAlign: 'center',
          }}>
            {headline || role}
          </h1>

          {/* One-liner. Guarded so a page can omit it and run the `body` block alone, which is
              what Step does: Jenny wanted the hook and the letter reading as one paragraph, not
              a centered lead sitting above a left-aligned block. */}
          {oneLiner && (
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--type-lead)', fontWeight: 'var(--weight-medium)',
              lineHeight: 'var(--leading-body)', color: 'var(--muted)',
              margin: 0, textAlign: 'center', maxWidth: '600px',
            }}>
              {oneLiner}
            </p>
          )}

          {/* Optional letter paragraphs, rendered under the one-liner and above the CTA.
              Omit the prop and every existing page renders exactly as before. Added for Step,
              where the hero had a large empty band under the button and the letter was sitting
              in its own section below the fold. */}
          {body && body.length > 0 && (
            <div style={{
              display: 'flex', flexDirection: 'column', gap: 'var(--space-18)',
              maxWidth: '620px', marginTop: 'var(--space-12)', textAlign: 'center',
            }}>
              {/* --text, not --muted. This block is the page's primary copy, so it takes
                  full-strength ink and reads as a step above the one-liner. Not a contrast
                  workaround: --muted was raised to 0.74 in index.css on 2026-07-30 and now
                  clears AA on its own. This is a hierarchy choice. */}
              {body.map((p, i) => (
                <p key={i} style={{
                  fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)',
                  color: 'var(--text)', margin: 0,
                }}>
                  {p}
                </p>
              ))}
            </div>
          )}

          {/* Capability line. Metadata under the paragraph, never a second headline: badge font,
              small size, muted, wide tracking. If this ever starts reading like a claim, shrink it
              rather than rewording it. */}
          {capabilityLine && (
            <div style={{
              fontFamily: 'var(--font-badge)', fontSize: 'var(--type-small)',
              letterSpacing: 'var(--tracking-badge)', color: 'var(--muted)',
              textAlign: 'center', marginTop: 'var(--space-4, 4px)',
            }}>
              {capabilityLine}
            </div>
          )}

          {/* CTA */}
          <div className="resume-cta-buttons" style={{
            marginTop: 'var(--space-12)', display: 'flex', gap: 'var(--space-18)',
            alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap',
          }}>
            <CtaButton href={ctaHref} hideAvatar={ctaHideAvatar}>{ctaLabel}</CtaButton>
            {secondaryLabel && (
              <CtaButton variant="outline" from={secondaryFrom}>{secondaryLabel}</CtaButton>
            )}
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
