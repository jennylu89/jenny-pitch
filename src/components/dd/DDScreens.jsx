import ScrollStrip from '../ll/ScrollStrip';

// Annotated product screens on the portfolio's existing dark image band.
//
// It imports the SAME ScrollStrip the shared case studies use, so the dark
// gradient, the noise texture, the right-edge fade and the "Scroll" pill are
// literally the same component, not a copy. The only thing this adds is the
// annotation: a labelled question above each screen, because on this page every
// screenshot has to answer "why is this here?" without the reader hunting for a
// paragraph.
//
// `variant`:
//   'phone' — 220px columns, full screen shown, nothing cropped. The summary row
//             at the bottom of these cards is load-bearing, so cover/top cropping
//             (what LLCaseStudy does at 450px) would cut the point.
//   'wide'  — 620px columns for desktop captures.
//
// ⚠️ A single item does NOT render as a one-column strip. A 220px phone alone in
// a 900px dark band reads as a mistake, which is exactly how it looked on the
// first build. One item gets the `feature` layout instead: annotation on the
// left, screen on the right, both filling the band. Multiple items centre
// themselves when they fit and fall back to the scroll strip when they do not.
// Hoisted to module scope, not defined inside DDScreens: a component declared in
// a render body is a new type on every render, so React remounts the subtree and
// the lint rule react-hooks/static-components rejects it.
function Annotation({ item, single }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {item.label && (
        <span style={{
          fontFamily: 'var(--font-badge)', fontSize: 'var(--type-small)',
          fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
          // 0.65, matching the caption colour the shared ScrollStrip already ships,
          // rather than a new lighter value. Small uppercase text needs the headroom.
          textTransform: 'uppercase', color: 'rgba(245,244,242,0.65)',
        }}>
          {item.label}
        </span>
      )}
      {item.question && (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: single ? 'var(--type-h4)' : 'var(--type-body)',
          fontWeight: 'var(--weight-medium)',
          lineHeight: single ? 'var(--leading-h4)' : 'var(--leading-body)',
          letterSpacing: single ? 'var(--tracking-h4)' : 0,
          color: '#ffffff', margin: 0,
          minHeight: single ? 0 : '2.9em',
        }}>
          {item.question}
        </p>
      )}
      {item.caption && (
        <p style={{
          fontSize: 'var(--type-small)', lineHeight: 'var(--leading-h5)',
          color: 'rgba(245,244,242,0.65)', margin: single ? 'var(--space-6) 0 0' : 0,
          maxWidth: single ? '340px' : 'none',
        }}>
          {item.caption}
        </p>
      )}
    </div>
  );
}

export default function DDScreens({ items, variant = 'phone', frameless = false }) {
  const wide = variant === 'wide';
  const single = items.length === 1;
  // Two wide captures at 620px overflowed the 1000px column, so the before and
  // the after could not be seen at once. That is the entire job of that section,
  // so the column narrows instead of scrolling. Phones stay at 220: three of them
  // fit, and shrinking them would cost legibility.
  const width = wide ? 430 : 220;

  // Wide captures are whole web pages, several thousand pixels tall. Shown at
  // natural height one of them filled two screens and left the next one's caption
  // floating in a void. Capped and cropped from the top, the same way the shared
  // case study crops its compare strip, so the fold a buyer actually sees is what
  // shows. Phones are never cropped: their bottom summary row is the point.
  const frame = {
    borderRadius: wide ? '8px' : '14px',
    border: frameless ? 'none' : '1px solid rgba(255,255,255,0.12)',
    ...(wide ? { height: single ? '440px' : '300px', objectFit: 'cover', objectPosition: 'top' } : {}),
  };

  // ── One screen: side by side, the annotation carrying the left half ──
  if (single) {
    const item = items[0];
    return (
      <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden' }}>
        <ScrollStrip>
          <div className="dd-screens-feature" style={{
            display: 'grid',
            gridTemplateColumns: wide ? '1fr' : 'minmax(0, 1fr) auto',
            gap: 'var(--space-36)', alignItems: 'center',
            padding: wide ? '32px' : '40px 48px',
          }}>
            <Annotation item={item} single />
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              style={{
                width: wide ? '100%' : '260px',
                display: 'block', justifySelf: wide ? 'stretch' : 'end',
                ...frame,
              }}
            />
          </div>
        </ScrollStrip>

        <style>{`
          @media (max-width: 760px) {
            .dd-screens-feature {
              grid-template-columns: 1fr !important;
              gap: var(--space-24) !important;
              padding: 28px 20px !important;
            }
            .dd-screens-feature img { justify-self: start !important; width: 100% !important; max-width: 300px; }
          }
        `}</style>
      </div>
    );
  }

  // ── Several screens: the existing scroll strip ──
  return (
    <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden' }}>
      <ScrollStrip>
        <div className={`dd-screens-strip ${wide ? 'is-wide' : 'is-phone'}`} style={{
          display: 'flex', alignItems: 'flex-start', gap: '20px',
          padding: '32px', minWidth: 'max-content',
          // Centres while the row fits, which is the normal desktop case for
          // three phones inside a 1000px column. Once it overflows, `min-width:
          // max-content` wins and ScrollStrip's fade and Scroll pill take over.
          justifyContent: 'center',
        }}>
          {items.map((item, i) => (
            <figure key={i} style={{
              width: `${width}px`, flexShrink: 0, margin: 0,
              scrollSnapAlign: 'start',
              display: 'flex', flexDirection: 'column', gap: '10px',
            }}>
              {/* In the multi-screen strip the caption sits UNDER the image, the
                  way the shared case study does it. Only the label and the
                  question lead. */}
              <Annotation item={{ ...item, caption: undefined }} single={false} />
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{ width: '100%', display: 'block', ...frame }}
              />
              {item.caption && (
                <p style={{
                  fontSize: 'var(--type-small)', lineHeight: 'var(--leading-h5)',
                  color: 'rgba(245,244,242,0.65)', margin: 0,
                }}>
                  {item.caption}
                </p>
              )}
            </figure>
          ))}
        </div>
      </ScrollStrip>

      <style>{`
        @media (max-width: 640px) {
          /* Phones get wider on a phone. 220px was tuned so three fit inside the
             1000px desktop column; on a 390px screen that constraint is gone and
             the only thing that matters is being able to read the screen. The
             strip already scrolls, so nothing is hidden. */
          .dd-screens-strip.is-phone figure { width: 268px !important; }
          .dd-screens-strip { padding: 24px !important; }
        }
      `}</style>
    </div>
  );
}
