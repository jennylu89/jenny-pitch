import { jenny } from '../data/jenny';

// Restructured 2026-08-19 to the shape Jenny pointed at on jointley.com: meta row on top,
// left aligned, split into identity on the left and a short statement on the right, a rule
// under it, then an oversized tonal wordmark that bleeds off the bottom and the right edge.
// ⛔ Deliberately NOT Jointley's electric blue ground. That is Jaythan's brand, not hers.
// This keeps her own lavender wash and her own tonal wordmark colour.
export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, rgba(139,120,255,0.13) 0%, rgba(139,120,255,0.04) 45%, var(--bg) 75%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Noise overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        opacity: 0.28,
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
      }} />

      <div
        className="w-full max-w-5xl mx-auto px-12"
        style={{ paddingTop: '80px', position: 'relative', zIndex: 1 }}
      >
        {/* Meta row: identity left, statement right */}
        <div className="footer-meta" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-36)',
          alignItems: 'start',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={`https://${jenny.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  border: '1px solid var(--border)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--muted)', textDecoration: 'none', fontSize: '13px',
                }}
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a
                href={`mailto:${jenny.contact.email}`}
                aria-label="Email"
                style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  border: '1px solid var(--border)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--muted)', textDecoration: 'none', fontSize: '13px',
                }}
              >
                <i className="fa-light fa-envelope" />
              </a>
            </div>

            <p style={{
              fontFamily: 'var(--font-badge)',
              fontSize: 'var(--type-caption)',
              letterSpacing: 'var(--tracking-badge)',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              margin: 0,
            }}>
              © {new Date().getFullYear()} Jenny Lu · Pittsburgh, PA
            </p>
          </div>

          <p style={{
            color: 'var(--muted)',
            fontSize: 'var(--type-caption)',
            lineHeight: 'var(--leading-body)',
            margin: 0,
            maxWidth: '420px',
          }}>
            Available for new opportunities. I take on founding and early product design roles,
            plus a small amount of fractional work. Research through production React, one person,
            no handoff.
          </p>
        </div>

        <div style={{ marginTop: 'var(--space-36)', height: '1px', backgroundColor: 'var(--border)' }} />
      </div>

      {/* Oversized wordmark, bleeding off the bottom and the right */}
      <div style={{
        position: 'relative', zIndex: 1,
        marginTop: 'var(--space-48)',
        paddingLeft: '48px',
        overflow: 'hidden',
        height: 'clamp(96px, 11vw, 160px)',
      }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(110px, 19vw, 260px)',
          fontWeight: 'var(--weight-black)',
          lineHeight: 0.82,
          letterSpacing: 'var(--tracking-tight)',
          color: 'var(--border)',
          margin: 0,
          whiteSpace: 'nowrap',
        }}>
          Jenny Lu
        </p>
      </div>
    </footer>
  );
}
