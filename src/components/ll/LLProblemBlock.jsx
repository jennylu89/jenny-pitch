import NoiseOverlay from './NoiseOverlay';
import Eyebrow from './Eyebrow';
import useFadeIn from './useFadeIn';

// The reader's problem, stated before any of Jenny's proof.
//
// Why this exists: a pitch page that opens with a hook and then runs straight into ask/proof rows
// is gain-framed end to end, and it casts Jenny as the hero of the story instead of the reader.
// This block sits directly under the hero so the cost of NOT solving the problem lands before the
// credentials do. Keep it short. Two paragraphs, no metrics, no CTA. It is the setup, not the ask.
export default function LLProblemBlock({ problem }) {
  const [ref, visible] = useFadeIn(0.1);
  if (!problem?.heading) return null;

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: 'var(--dark-bg)',
        padding: 'var(--space-96) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <NoiseOverlay />
      <div className="section-pad" style={{
        maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)',
        position: 'relative', zIndex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>
        {problem.eyebrow && (
          <Eyebrow>
            <span style={{ color: 'var(--dark-text-muted)', textAlign: 'center', display: 'block' }}>
              {problem.eyebrow}
            </span>
          </Eyebrow>
        )}

        <h2 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-h2)',
          fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-h2)',
          letterSpacing: 'var(--tracking-h2)',
          color: 'var(--dark-text)',
          margin: '0 auto var(--space-36)',
          maxWidth: '650px',
          textAlign: 'center',
        }}>
          {problem.heading}
        </h2>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: 'var(--space-18)',
          maxWidth: '640px', margin: '0 auto', textAlign: 'left',
        }}>
          {problem.body.map((p, i) => (
            <p key={i} style={{
              fontSize: 'var(--type-body)',
              lineHeight: 'var(--leading-body)',
              color: 'var(--dark-text-muted)',
              margin: 0,
            }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
