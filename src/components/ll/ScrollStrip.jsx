import { useRef, useState, useEffect, useCallback } from 'react';

// Extracted verbatim from LLCaseStudy.jsx 2026-07-30 so LLProofBlock can show the same media
// strips without a second implementation. LLCaseStudy now imports it from here. No behaviour
// change: same markup, same scroll hint, same dark/light handling.
export default function ScrollStrip({ children, bg = 'var(--text)' }) {
  const scrollRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const hasOverflow = el.scrollWidth > el.clientWidth + 4;
    setCanScroll(hasOverflow);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    // Recheck after images load
    const timer = setTimeout(checkScroll, 500);
    const timer2 = setTimeout(checkScroll, 1500);
    window.addEventListener('resize', checkScroll);
    // Listen for image loads inside the strip
    const el = scrollRef.current;
    if (el) {
      const imgs = el.querySelectorAll('img');
      imgs.forEach(img => img.addEventListener('load', checkScroll));
    }
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const isDark = bg === 'var(--text)';

  return (
    <div style={{ position: 'relative', borderTop: isDark ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        style={{
          background: isDark
            ? 'linear-gradient(180deg, #272727 0%, #1a1a1a 100%)'
            : bg,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          position: 'relative',
        }}
      >
        {isDark && (
          <div style={{
            position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
            opacity: 0.12, mixBlendMode: 'plus-lighter',
          }} />
        )}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </div>
      {/* Right fade + scroll hint */}
      {canScroll && !atEnd && (
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px',
          background: `linear-gradient(to right, transparent, ${isDark ? '#1a1a1a' : '#ffffff'})`,
          pointerEvents: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 2,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            backgroundColor: 'var(--btn-primary-bg)',
            color: 'var(--btn-primary-fg)',
            borderRadius: '20px',
            padding: '6px 12px',
            fontSize: 'var(--type-small)',
            fontWeight: 'var(--weight-medium)',
          }}>
            Scroll
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
