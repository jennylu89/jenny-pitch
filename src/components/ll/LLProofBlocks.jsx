import Eyebrow from './Eyebrow';
import LLProofBlock from './LLProofBlock';

// Section wrapper for the 5 blocks. Same eyebrow, heading and max-width treatment as LLSummary,
// so the page rhythm is unchanged from what Jenny already approved.
export default function LLProofBlocks({ heading, blocks }) {
  return (
    <section style={{ padding: 'var(--space-96) 0 var(--space-80)' }}>
      <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)' }}>
        <Eyebrow>
          <span style={{ color: 'var(--muted)', textAlign: 'center', display: 'block' }}>Why me</span>
        </Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h2)', fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-h2)', letterSpacing: 'var(--tracking-h2)',
          color: 'var(--text)', margin: '0 auto var(--space-48)', maxWidth: '650px', textAlign: 'center',
        }}>
          {heading}
        </h2>
        <div>
          {blocks.map((b, i) => (
            <LLProofBlock key={i} index={i} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
