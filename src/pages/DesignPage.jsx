const colors = [
  { token: '--bg', value: '#F5F4F2', label: 'Warm Neutral', usage: 'Page background' },
  { token: '--surface', value: '#FFFFFF', label: 'Surface', usage: 'Cards, elevated surfaces' },
  { token: '--border', value: '#E2E0DC', label: 'Neutral Grey', usage: 'Dividers' },
  { token: '--text', value: '#2D3142', label: 'Jet Black', usage: 'Primary body text' },
  { token: '--muted', value: '#ADACB5', label: 'Pale Slate', usage: 'Secondary text' },
  { token: '--accent', value: '#8B78FF', label: 'Purple', usage: 'Primary action / CTA' },
  { token: '--accent-fg', value: '#FFFFFF', label: 'Accent FG', usage: 'White text on purple' },
  { token: '--accent-subtle', value: '#EAE8FF', label: 'Accent Subtle', usage: 'Light lavender tint' },
];

const elevations = [
  { token: '--shadow-sm', label: 'sm', usage: 'Resting card, chip', value: '0 1px 2px … 0 1px 4px' },
  { token: '--shadow-md', label: 'md', usage: 'Hover card, dropdown', value: '0 2px 8px … 0 4px 16px' },
  { token: '--shadow-lg', label: 'lg', usage: 'Sticky header, sheet', value: '0 4px 16px … 0 8px 32px' },
  { token: '--shadow-xl', label: 'xl', usage: 'Modal, overlay', value: '0 8px 24px … 0 16px 48px' },
];

const typeHierarchy = [
  {
    label: 'Display',
    token: '--type-display',
    weight: '--weight-black',
    weightVal: 800,
    sample: 'Hello, I\'m Jenny.',
    role: 'Hero — page entry point. Max visual weight.',
  },
  {
    label: 'Belief / H1',
    token: '--type-belief',
    weight: '--weight-black',
    weightVal: 800,
    sample: 'One conversation. Thirty minutes.',
    role: 'Section statement. Heavy weight, carries tone not just info.',
  },
  {
    label: 'Heading / H2',
    token: '--type-heading',
    weight: '--weight-bold',
    weightVal: 700,
    sample: 'Why I\'d be a good fit',
    role: 'Section titles. Clear but not screaming.',
  },
  {
    label: 'Subhead / H3',
    token: '--type-subhead',
    weight: '--weight-semibold',
    weightVal: 600,
    sample: 'Patient & Consumer Flows',
    role: 'Card titles, sub-sections. Scannable hierarchy.',
  },
  {
    label: 'Body',
    token: '--type-body',
    weight: '--weight-normal',
    weightVal: 400,
    sample: 'Own end-to-end design for patient booking flows and consumer-facing experiences from problem framing through shipped product.',
    role: 'Default reading text. 16px minimum for readability.',
  },
  {
    label: 'Small',
    token: '--type-small',
    weight: '--weight-medium',
    weightVal: 500,
    sample: 'Senior Design Manager · Pittsburgh, PA',
    role: 'Nav, meta, tags. Supporting info.',
  },
  {
    label: 'Label',
    token: '--type-label',
    weight: '--weight-semibold',
    weightVal: 600,
    sample: 'WHY I\'D BE A GOOD FIT',
    role: 'SMALL-CAPS eyebrow labels. letter-spacing 0.12em.',
    uppercase: true,
    tracking: '0.12em',
  },
];

const weights = [
  { token: '--weight-normal', value: '400', label: 'Normal' },
  { token: '--weight-medium', value: '500', label: 'Medium' },
  { token: '--weight-semibold', value: '600', label: 'Semibold' },
  { token: '--weight-bold', value: '700', label: 'Bold' },
  { token: '--weight-black', value: '800', label: 'Black' },
];

import Badge from '../components/Badge';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '80px' }}>
    <p style={{
      color: 'var(--accent)',
      fontSize: '12px',
      fontFamily: "'Google Sans Code', monospace",
      fontWeight: '500',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      marginBottom: '24px',
    }}>
      {title}
    </p>
    {children}
  </div>
);

const Token = ({ label }) => (
  <code style={{
    backgroundColor: '#F0EFF0',
    color: 'var(--muted)',
    fontSize: '11px',
    padding: '2px 6px',
    borderRadius: '3px',
    fontFamily: 'monospace',
  }}>
    {label}
  </code>
);

const Divider = () => (
  <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '72px 0' }} />
);

export default function DesignPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 48px' }}>

        <p style={{
          color: 'var(--accent)',
          fontSize: '12px',
          fontFamily: "'Google Sans Code', monospace",
          fontWeight: '500',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          Design System
        </p>
        <h1 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-display)',
          fontWeight: 'var(--weight-black)',
          letterSpacing: 'var(--tracking-tight)',
          color: 'var(--text)',
          marginBottom: '8px',
        }}>
          Tokens
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', marginBottom: '80px' }}>
          Based on Practical UI — contrast, elevation, and hierarchy principles.
        </p>

        {/* ── Color ── */}
        <Section title="Color">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '12px' }}>
            {colors.slice(0, 4).map((c) => (
              <div key={c.token}>
                <div style={{
                  backgroundColor: c.value,
                  height: '80px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  marginBottom: '10px',
                }} />
                <div style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--type-small)', color: 'var(--text)', marginBottom: '2px' }}>{c.label}</div>
                <Token label={c.token} />
                <div style={{ color: 'var(--muted)', fontSize: '11px', marginTop: '4px' }}>{c.value}</div>
                <div style={{ color: 'var(--muted)', fontSize: '11px' }}>{c.usage}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
            {colors.slice(4).map((c) => (
              <div key={c.token}>
                <div style={{
                  backgroundColor: c.value,
                  height: '80px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  marginBottom: '10px',
                }} />
                <div style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--type-small)', color: 'var(--text)', marginBottom: '2px' }}>{c.label}</div>
                <Token label={c.token} />
                <div style={{ color: 'var(--muted)', fontSize: '11px', marginTop: '4px' }}>{c.value}</div>
                <div style={{ color: 'var(--muted)', fontSize: '11px' }}>{c.usage}</div>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ── Elevation ── */}
        <Section title="Elevation">
          <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', marginBottom: '32px', marginTop: '-8px' }}>
            Shadows use the text color (#2D3142) at low opacity — warm-tinted to feel grounded on neutral bg. Four levels cover all surface needs.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {elevations.map((e) => (
              <div key={e.token}>
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: `var(${e.token})`,
                  marginBottom: '16px',
                  minHeight: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{ fontWeight: 'var(--weight-bold)', fontSize: 'var(--type-subhead)', color: 'var(--text)' }}>
                    {e.label}
                  </span>
                </div>
                <Token label={e.token} />
                <div style={{ color: 'var(--text)', fontSize: 'var(--type-small)', fontWeight: 'var(--weight-medium)', marginTop: '8px' }}>{e.usage}</div>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ── Typography Hierarchy ── */}
        <Section title="Typography Hierarchy">
          <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', marginBottom: '40px', marginTop: '-8px' }}>
            Hierarchy is set through size + weight together — never size alone. Each level has a clear role so copy writes itself into the right slot.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {typeHierarchy.map((t, i) => (
              <div
                key={t.token}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '160px 1fr',
                  gap: '32px',
                  alignItems: 'start',
                  padding: '28px 0',
                  borderBottom: i < typeHierarchy.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                {/* Meta */}
                <div>
                  <div style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--type-small)', color: 'var(--text)', marginBottom: '6px' }}>{t.label}</div>
                  <Token label={t.token} />
                  <div style={{ color: 'var(--muted)', fontSize: '11px', marginTop: '4px' }}>weight {t.weightVal}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '11px', lineHeight: 1.4, marginTop: '6px' }}>{t.role}</div>
                </div>
                {/* Sample */}
                <div style={{
                  fontSize: `var(${t.token})`,
                  fontWeight: t.weightVal,
                  color: 'var(--text)',
                  lineHeight: t.weightVal >= 700 ? 1.1 : 'var(--leading-body)',
                  letterSpacing: t.tracking || (t.weightVal >= 700 ? 'var(--tracking-tight)' : 'var(--tracking-normal)'),
                  textTransform: t.uppercase ? 'uppercase' : 'none',
                }}>
                  {t.sample}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ── Buttons ── */}
        <Section title="Buttons">
          <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', marginBottom: '40px', marginTop: '-8px' }}>
            3 variants × 3 sizes. Primary uses --accent purple. Secondary is outlined. Ghost is text-only. Border radius uses --radius-btn (8px) — tighter than cards.
          </p>

          {/* Variants */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', color: 'var(--muted)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Variants</div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              {/* Primary */}
              <button style={{
                backgroundColor: 'var(--btn-primary-bg)',
                color: 'var(--btn-primary-fg)',
                border: 'none',
                borderRadius: 'var(--radius-btn)',
                padding: '14px 24px',
                fontSize: 'var(--type-small)',
                fontWeight: 'var(--weight-bold)',
                letterSpacing: 'var(--tracking-wide)',
                cursor: 'default',
                fontFamily: 'var(--font-sans)',
              }}>
                Primary
              </button>
              {/* Secondary */}
              <button style={{
                backgroundColor: 'var(--btn-secondary-bg)',
                color: 'var(--btn-secondary-fg)',
                border: '1.5px solid var(--btn-secondary-border)',
                borderRadius: 'var(--radius-btn)',
                padding: '14px 24px',
                fontSize: 'var(--type-small)',
                fontWeight: 'var(--weight-semibold)',
                letterSpacing: 'var(--tracking-wide)',
                cursor: 'default',
                fontFamily: 'var(--font-sans)',
              }}>
                Secondary
              </button>
              {/* Ghost */}
              <button style={{
                backgroundColor: 'transparent',
                color: 'var(--btn-ghost-fg)',
                border: 'none',
                borderRadius: 'var(--radius-btn)',
                padding: '14px 24px',
                fontSize: 'var(--type-small)',
                fontWeight: 'var(--weight-semibold)',
                letterSpacing: 'var(--tracking-wide)',
                cursor: 'default',
                fontFamily: 'var(--font-sans)',
                textDecoration: 'underline',
                textDecorationColor: '#E2E0DC',
                textUnderlineOffset: '3px',
              }}>
                Ghost
              </button>
              {/* Disabled */}
              <button style={{
                backgroundColor: '#E2E0DC',
                color: '#ADACB5',
                border: 'none',
                borderRadius: 'var(--radius-btn)',
                padding: '14px 24px',
                fontSize: 'var(--type-small)',
                fontWeight: 'var(--weight-semibold)',
                cursor: 'not-allowed',
                fontFamily: 'var(--font-sans)',
              }}>
                Disabled
              </button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <div style={{ fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', color: 'var(--muted)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Sizes</div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <button style={{ backgroundColor: 'var(--btn-primary-bg)', color: '#fff', border: 'none', borderRadius: 'var(--radius-btn)', padding: '8px 14px', fontSize: '11px', fontWeight: 700, cursor: 'default', fontFamily: 'var(--font-sans)' }}>
                  Small
                </button>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>h 32px</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <button style={{ backgroundColor: 'var(--btn-primary-bg)', color: '#fff', border: 'none', borderRadius: 'var(--radius-btn)', padding: '12px 20px', fontSize: '13px', fontWeight: 700, cursor: 'default', fontFamily: 'var(--font-sans)' }}>
                  Medium
                </button>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>h 40px</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <button style={{ backgroundColor: 'var(--btn-primary-bg)', color: '#fff', border: 'none', borderRadius: 'var(--radius-btn)', padding: '16px 28px', fontSize: '15px', fontWeight: 700, cursor: 'default', fontFamily: 'var(--font-sans)' }}>
                  Large
                </button>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>h 48px</span>
              </div>
            </div>
          </div>
        </Section>

        <Divider />

        {/* ── Cards ── */}
        <Section title="Cards">
          <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', marginBottom: '40px', marginTop: '-8px' }}>
            All cards use --radius (16px) and --surface. Differentiate by shadow level and border treatment — not color.
          </p>

          {/* Variants */}
          <div style={{ fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', color: 'var(--muted)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Variants</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '48px', backgroundColor: 'var(--bg)', borderRadius: '16px', padding: '32px' }}>

            {/* Default */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex', flexDirection: 'column', gap: '8px',
              }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Label</span>
                <div style={{ fontWeight: 600, fontSize: '15px', color: 'var(--text)', lineHeight: 1.3 }}>Default card</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>Resting state. shadow-sm, no border.</div>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--muted)' }}>shadow-sm · no border</div>
            </div>

            {/* Hover */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                boxShadow: 'var(--shadow-md)',
                transform: 'translateY(-4px)',
                display: 'flex', flexDirection: 'column', gap: '8px',
              }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Label</span>
                <div style={{ fontWeight: 600, fontSize: '15px', color: 'var(--text)', lineHeight: 1.3 }}>Hover state</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>Lifted -4px, shadow-md.</div>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--muted)' }}>shadow-md · lift -4px</div>
            </div>

            {/* Outlined */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                border: '1px solid var(--border)',
                display: 'flex', flexDirection: 'column', gap: '8px',
              }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Label</span>
                <div style={{ fontWeight: 600, fontSize: '15px', color: 'var(--text)', lineHeight: 1.3 }}>Outlined</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>Flat, bordered. For dense lists.</div>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--muted)' }}>no shadow · 1px border</div>
            </div>
          </div>

          {/* Padding scale */}
          <div style={{ fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', color: 'var(--muted)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Padding Scale</div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { label: 'Compact', padding: '16px', note: '16px — chips, tags, dense grids' },
              { label: 'Default', padding: '24px', note: '24px — standard cards' },
              { label: 'Spacious', padding: '32px', note: '32px — featured, bento tiles' },
              { label: 'Open', padding: '40px', note: '40px — hero tiles, contact' },
            ].map((s) => (
              <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)',
                  padding: s.padding,
                  boxShadow: 'var(--shadow-sm)',
                  minWidth: '140px',
                }}>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--text)' }}>{s.label}</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px' }}>p: {s.padding}</div>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', maxWidth: '140px', lineHeight: 1.4 }}>{s.note}</div>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ── Typeface ── */}
        <Section title="Typeface">
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: '12px', padding: '48px', border: '1px solid #E2E0DC' }}>
            <Token label="--font-sans / --font-serif" />
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '48px', fontWeight: 800, color: 'var(--text)', marginTop: '20px', lineHeight: 1 }}>
              BDO Grotesk
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--type-body)', color: 'var(--muted)', marginTop: '20px', lineHeight: 'var(--leading-body)' }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789 &amp; ! ? . , —
            </div>
            <div style={{ display: 'flex', gap: '24px', marginTop: '24px', flexWrap: 'wrap' }}>
              {[400, 500, 600, 700, 800].map(w => (
                <span key={w} style={{ fontFamily: 'var(--font-sans)', fontSize: '22px', fontWeight: w, color: 'var(--text)' }}>
                  {w}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Divider />

        {/* ── Badges & Tags ── */}
        <Section title="Badges & Tags">
          <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', marginBottom: '40px', marginTop: '-8px' }}>
            4 variants × 3 sizes. All use 24px border-radius (pill). Optional dot or icon prefix.
          </p>

          {/* Variants */}
          <div style={{ fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', color: 'var(--muted)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Variants</div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '40px' }}>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="filled">Filled</Badge>
            <Badge variant="subtle">Subtle</Badge>
            <Badge variant="solid">Solid</Badge>
            <Badge variant="outline" dot>With dot</Badge>
            <Badge variant="subtle" icon="fa-solid fa-bolt">With icon</Badge>
          </div>

          {/* Sizes */}
          <div style={{ fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', color: 'var(--muted)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Sizes</div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '40px' }}>
            <Badge size="sm" variant="outline">Small</Badge>
            <Badge size="md" variant="outline">Medium</Badge>
            <Badge size="lg" variant="outline">Large</Badge>
          </div>

          {/* In context */}
          <div style={{ fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', color: 'var(--muted)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>In context</div>
          <div style={{ backgroundColor: 'var(--bg)', borderRadius: 'var(--radius)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Badge variant="outline">Patient & Consumer Flows</Badge>
              <Badge variant="outline">Compliance Made Invisible</Badge>
              <Badge variant="outline">Systems & Velocity</Badge>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Badge variant="subtle" dot>Healthcare UX</Badge>
              <Badge variant="subtle" dot>Design Systems</Badge>
              <Badge variant="subtle" dot>AI Prototyping</Badge>
              <Badge variant="subtle" dot>React</Badge>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Badge variant="subtle" icon="fa-solid fa-check">Shipped</Badge>
              <Badge variant="solid" icon="fa-solid fa-bolt">New</Badge>
            </div>
          </div>
        </Section>

        <Divider />

        {/* ── Layout Sections ── */}
        <Section title="Layout Sections">
          <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', marginBottom: '40px', marginTop: '-8px' }}>
            Four reusable section layouts. Each has a defined content role, spacing rhythm, and animation pattern.
          </p>

          {/* Hero Bento */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--type-small)', color: 'var(--text)' }}>Hero Bento</span>
              <Token label="Hero.jsx" />
            </div>
            <div style={{ color: 'var(--muted)', fontSize: '11px', marginBottom: '16px', lineHeight: 1.5 }}>
              Centered label pill + H1 + 2 CTAs · blur-in · 2-col asymmetric grid (0.72fr / 1fr) with 2×2 sub-grid right
            </div>
            <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '20px', border: '1px solid var(--border)' }}>
              {/* Headline block */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                <div style={{ width: '120px', height: '14px', backgroundColor: 'var(--accent-subtle)', borderRadius: '24px' }} />
                <div style={{ width: '80%', height: '20px', backgroundColor: 'var(--border)', borderRadius: '4px' }} />
                <div style={{ width: '60%', height: '20px', backgroundColor: 'var(--border)', borderRadius: '4px' }} />
                <div style={{ width: '60%', height: '12px', backgroundColor: '#F0EFF0', borderRadius: '4px', marginTop: '2px' }} />
                <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                  <div style={{ width: '90px', height: '28px', backgroundColor: 'var(--accent)', borderRadius: '6px' }} />
                  <div style={{ width: '90px', height: '28px', backgroundColor: 'transparent', border: '1px solid var(--border)', borderRadius: '6px' }} />
                </div>
              </div>
              {/* Bento grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '0.72fr 1fr', gap: '8px' }}>
                <div style={{ height: '120px', backgroundColor: 'var(--border)', borderRadius: '10px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '80px', height: '14px', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '24px' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '8px' }}>
                  <div style={{ backgroundColor: 'var(--accent-subtle)', borderRadius: '10px', padding: '8px', display: 'flex', flexWrap: 'wrap', gap: '3px', alignContent: 'flex-start' }}>
                    {[40, 50, 36, 44, 30].map((w, i) => <div key={i} style={{ width: `${w}px`, height: '8px', backgroundColor: 'rgba(139,120,255,0.3)', borderRadius: '24px' }} />)}
                  </div>
                  <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'space-around' }}>
                    {['384%', '4M', '20 yrs'].map(v => <div key={v} style={{ width: '40px', height: '10px', backgroundColor: 'var(--accent-subtle)', borderRadius: '3px' }} />)}
                  </div>
                  <div style={{ gridColumn: '1/-1', backgroundColor: 'var(--text)', borderRadius: '10px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ width: '60px', height: '7px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '3px' }} />
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {[50, 40, 48, 36].map((w, i) => <div key={i} style={{ width: `${w}px`, height: '9px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '3px' }} />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Split Section */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--type-small)', color: 'var(--text)' }}>Split Section</span>
              <Token label="LLSplitSection.jsx" />
            </div>
            <div style={{ color: 'var(--muted)', fontSize: '11px', marginBottom: '16px', lineHeight: 1.5 }}>
              2-col (1fr/1fr) · content left + parallax image right · flip prop alternates per section · label badge + heading + body + 2 metric cards · fade-up on scroll
            </div>
            <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '20px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[false, true].map(flip => (
                <div key={String(flip)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {/* Content col */}
                  <div style={{ order: flip ? 2 : 1, display: 'flex', flexDirection: 'column', gap: '6px', padding: '12px' }}>
                    <div style={{ width: '80px', height: '12px', backgroundColor: 'var(--accent-subtle)', borderRadius: '24px' }} />
                    <div style={{ width: '90%', height: '14px', backgroundColor: 'var(--border)', borderRadius: '4px' }} />
                    <div style={{ width: '70%', height: '14px', backgroundColor: 'var(--border)', borderRadius: '4px' }} />
                    <div style={{ width: '100%', height: '8px', backgroundColor: '#F0EFF0', borderRadius: '3px', marginTop: '2px' }} />
                    <div style={{ width: '85%', height: '8px', backgroundColor: '#F0EFF0', borderRadius: '3px' }} />
                    <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                      {[0, 1].map(j => (
                        <div key={j} style={{ flex: 1, backgroundColor: 'var(--bg)', borderRadius: '8px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <div style={{ width: '16px', height: '16px', backgroundColor: 'var(--accent-subtle)', borderRadius: '4px' }} />
                          <div style={{ width: '32px', height: '10px', backgroundColor: 'var(--border)', borderRadius: '3px' }} />
                          <div style={{ width: '48px', height: '8px', backgroundColor: '#F0EFF0', borderRadius: '3px' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Image col */}
                  <div style={{ order: flip ? 1 : 2, height: '100px', backgroundColor: 'var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '120%', backgroundColor: 'var(--border)', backgroundImage: 'linear-gradient(135deg, #E2E0DC 0%, #D4D2CE 100%)' }} />
                  </div>
                </div>
              ))}
              <div style={{ fontSize: '10px', color: 'var(--muted)', textAlign: 'center', paddingTop: '4px' }}>flip=false (content left) · flip=true (image left)</div>
            </div>
          </div>

          {/* Process Section */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--type-small)', color: 'var(--text)' }}>Process Section</span>
              <Token label="ProcessSection.jsx" />
            </div>
            <div style={{ color: 'var(--muted)', fontSize: '11px', marginBottom: '16px', lineHeight: 1.5 }}>
              Centered label + belief heading · 4-col grid of large numbers · dot connector line · text descriptions below · fade-up on scroll
            </div>
            <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '20px', border: '1px solid var(--border)', borderTop: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                <div style={{ width: '60px', height: '10px', backgroundColor: 'var(--accent-subtle)', borderRadius: '24px' }} />
                <div style={{ width: '200px', height: '16px', backgroundColor: 'var(--border)', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '6px' }}>
                {['01', '02', '03', '04'].map(n => (
                  <div key={n} style={{ textAlign: 'center', fontWeight: 800, fontSize: '28px', color: 'var(--accent)', lineHeight: 1 }}>{n}</div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative', margin: '4px 0 12px' }}>
                <div style={{ position: 'absolute', height: '1px', backgroundColor: 'var(--border)', width: '74%', left: '13%' }} />
                {[0,1,2,3].map(i => <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)', border: '2px solid var(--surface)', zIndex: 1, position: 'relative' }} />)}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                {['Research first', 'Frame the right problem', 'Design in code', 'Ship and measure'].map(t => (
                  <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center', textAlign: 'center', padding: '0 4px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>{t}</div>
                    <div style={{ width: '90%', height: '6px', backgroundColor: '#F0EFF0', borderRadius: '3px' }} />
                    <div style={{ width: '70%', height: '6px', backgroundColor: '#F0EFF0', borderRadius: '3px' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div style={{ marginBottom: '0' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--type-small)', color: 'var(--text)' }}>Contact Section</span>
              <Token label="ContactSection.jsx" />
            </div>
            <div style={{ color: 'var(--muted)', fontSize: '11px', marginBottom: '16px', lineHeight: 1.5 }}>
              Centered label pill + belief heading + body + availability badge · 3-col dark card grid · company marquee strip · blur-in on scroll
            </div>
            <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '20px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                <div style={{ width: '70px', height: '12px', backgroundColor: 'var(--accent-subtle)', borderRadius: '24px' }} />
                <div style={{ width: '70%', height: '18px', backgroundColor: 'var(--border)', borderRadius: '4px' }} />
                <div style={{ width: '50%', height: '18px', backgroundColor: 'var(--border)', borderRadius: '4px' }} />
                <div style={{ width: '120px', height: '14px', backgroundColor: '#F0EFF0', borderRadius: '3px' }} />
                <div style={{ width: '140px', height: '20px', border: '1px solid var(--border)', borderRadius: '24px', marginTop: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  <div style={{ width: '80px', height: '7px', backgroundColor: '#F0EFF0', borderRadius: '3px' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '12px' }}>
                {[0, 1, 2].map(i => (
                  <div key={i} style={{ backgroundColor: 'var(--text)', borderRadius: '10px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ width: '20px', height: '20px', backgroundColor: 'rgba(234,232,255,0.15)', borderRadius: '4px' }} />
                    <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }} />
                    <div style={{ width: '80%', height: '8px', backgroundColor: 'rgba(234,232,255,0.2)', borderRadius: '3px' }} />
                    <div style={{ width: '90%', height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '3px' }} />
                    <div style={{ width: '60%', height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '3px' }} />
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '10px', display: 'flex', gap: '20px', justifyContent: 'center', overflow: 'hidden' }}>
                {['Giant Eagle', 'Roadrunner', 'Talkiatry', 'Arena Labs', 'MegPrime'].map(n => (
                  <span key={n} style={{ fontSize: '10px', color: 'var(--muted)', whiteSpace: 'nowrap', opacity: 0.6, fontWeight: 500 }}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        {/* ── Project Variants ── */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', marginTop: '40px' }}>
            <div style={{ fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '4px' }}>Project Variants</div>
            <p style={{ color: 'var(--muted)', fontSize: '11px', lineHeight: 1.5, marginBottom: '32px' }}>
              LLCaseStudy.jsx — auto-selects layout via <code>caseStudy.screensType</code>. Set on each project in jenny.js.
            </p>

            {/* Image Right */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '6px' }}>
                <span style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--type-small)', color: 'var(--text)' }}>Image Right</span>
                <Token label="default" />
              </div>
              <div style={{ color: 'var(--muted)', fontSize: '11px', marginBottom: '12px', lineHeight: 1.5 }}>
                2-col split · index → title → company pill + tags → role → headline → insight → metrics · alternates flip on odd index · placeholder when no image
              </div>
              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '16px', border: '1px solid var(--border)' }}>
                {[false, true].map(flip => (
                  <div key={String(flip)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: flip ? 0 : '8px' }}>
                    <div style={{ order: flip ? 2 : 1, display: 'flex', flexDirection: 'column', gap: '5px', padding: '10px' }}>
                      <div style={{ width: '16px', height: '7px', backgroundColor: 'var(--accent-subtle)', borderRadius: '3px' }} />
                      <div style={{ width: '90%', height: '13px', backgroundColor: 'var(--border)', borderRadius: '4px' }} />
                      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                        <div style={{ width: '52px', height: '9px', backgroundColor: 'var(--accent-subtle)', borderRadius: '24px' }} />
                        <div style={{ width: '36px', height: '9px', border: '1px solid var(--border)', borderRadius: '24px' }} />
                      </div>
                      <div style={{ width: '100%', height: '7px', backgroundColor: '#F0EFF0', borderRadius: '3px', marginTop: '2px' }} />
                      <div style={{ width: '80%', height: '7px', backgroundColor: '#F0EFF0', borderRadius: '3px' }} />
                      <div style={{ width: '60%', height: '8px', borderLeft: '2px solid var(--accent)', paddingLeft: '4px', backgroundColor: '#F0EFF0', borderRadius: '3px', marginTop: '2px' }} />
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', marginTop: '4px' }}>
                        {[0,1,2,3].map(i => <div key={i} style={{ height: '20px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px' }} />)}
                      </div>
                    </div>
                    <div style={{ order: flip ? 1 : 2, height: '90px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                      </svg>
                    </div>
                  </div>
                ))}
                <div style={{ fontSize: '10px', color: 'var(--muted)', textAlign: 'center', paddingTop: '8px' }}>flip=false · flip=true (odd index)</div>
              </div>
            </div>

            {/* App Screenshots */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '6px' }}>
                <span style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--type-small)', color: 'var(--text)' }}>App Screenshots</span>
                <Token label="screensType: 'app'" />
              </div>
              <div style={{ color: 'var(--muted)', fontSize: '11px', marginBottom: '12px', lineHeight: 1.5 }}>
                Dark strip with mobile screens side-by-side + caption · 2-col below: info left · metrics right · used for mobile/app projects (MegPrime, Arena Labs)
              </div>
              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '16px', border: '1px solid var(--border)' }}>
                <div style={{ backgroundColor: 'var(--text)', borderRadius: '10px', padding: '12px', display: 'flex', gap: '8px', marginBottom: '10px' }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{ flex: '1 1 0', borderRadius: '6px', backgroundColor: 'rgba(255,255,255,0.08)', height: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '6px' }}>
                      <div style={{ width: '70%', height: '5px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '3px' }} />
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}>
                    <div style={{ width: '16px', height: '7px', backgroundColor: 'var(--accent-subtle)', borderRadius: '3px' }} />
                    <div style={{ width: '85%', height: '12px', backgroundColor: 'var(--border)', borderRadius: '4px' }} />
                    <div style={{ width: '52px', height: '9px', backgroundColor: 'var(--accent-subtle)', borderRadius: '24px' }} />
                    <div style={{ width: '90%', height: '7px', backgroundColor: '#F0EFF0', borderRadius: '3px' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }}>
                    {[0,1,2,3].map(i => <div key={i} style={{ height: '22px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px' }} />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '6px' }}>
                <span style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--type-small)', color: 'var(--text)' }}>Dashboard</span>
                <Token label="screensType: 'dashboard'" />
              </div>
              <div style={{ color: 'var(--muted)', fontSize: '11px', marginBottom: '12px', lineHeight: 1.5 }}>
                Full-width bordered frame showing web/desktop UI · 2-col below: info left · metrics right · used for platform and SaaS projects (Roadrunner)
              </div>
              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '16px', border: '1px solid var(--border)' }}>
                <div style={{ border: '1px solid var(--border)', borderRadius: '10px', height: '72px', marginBottom: '10px', backgroundColor: 'var(--bg)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '16px', backgroundColor: 'var(--border)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '4px' }}>
                    {[0,1,2].map(i => <div key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.1)' }} />)}
                  </div>
                  <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '40px 1fr', gap: '6px', padding: '6px 8px' }}>
                    <div style={{ backgroundColor: 'var(--border)', borderRadius: '4px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ width: '60%', height: '8px', backgroundColor: 'var(--border)', borderRadius: '3px' }} />
                      <div style={{ width: '40%', height: '6px', backgroundColor: '#F0EFF0', borderRadius: '3px' }} />
                    </div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}>
                    <div style={{ width: '16px', height: '7px', backgroundColor: 'var(--accent-subtle)', borderRadius: '3px' }} />
                    <div style={{ width: '85%', height: '12px', backgroundColor: 'var(--border)', borderRadius: '4px' }} />
                    <div style={{ width: '52px', height: '9px', backgroundColor: 'var(--accent-subtle)', borderRadius: '24px' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }}>
                    {[0,1,2,3].map(i => <div key={i} style={{ height: '22px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px' }} />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Full Width */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '6px' }}>
                <span style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--type-small)', color: 'var(--text)' }}>Full Width</span>
                <Token label="screensType: 'full'" />
              </div>
              <div style={{ color: 'var(--muted)', fontSize: '11px', marginBottom: '12px', lineHeight: 1.5 }}>
                16:7 hero image spanning full width · 2-col below: info left · metrics right · used for single strong hero shot
              </div>
              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '16px', border: '1px solid var(--border)' }}>
                <div style={{ borderRadius: '10px', aspectRatio: '16/7', backgroundColor: 'var(--border)', marginBottom: '10px', backgroundImage: 'linear-gradient(135deg, #E2E0DC 0%, #D0CECC 100%)' }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}>
                    <div style={{ width: '16px', height: '7px', backgroundColor: 'var(--accent-subtle)', borderRadius: '3px' }} />
                    <div style={{ width: '85%', height: '12px', backgroundColor: 'var(--border)', borderRadius: '4px' }} />
                    <div style={{ width: '52px', height: '9px', backgroundColor: 'var(--accent-subtle)', borderRadius: '24px' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }}>
                    {[0,1,2,3].map(i => <div key={i} style={{ height: '22px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px' }} />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Flow */}
            <div style={{ marginBottom: '0' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '6px' }}>
                <span style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--type-small)', color: 'var(--text)' }}>Flow</span>
                <Token label="screensType: 'flow'" />
              </div>
              <div style={{ color: 'var(--muted)', fontSize: '11px', marginBottom: '12px', lineHeight: 1.5 }}>
                Numbered screens with connector line · sequential step-by-step view · 2-col below: info left · metrics right · used for multi-screen flows (onboarding, KYC)
              </div>
              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '16px', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start', marginBottom: '10px' }}>
                  {[1,2,3,4].map((n, i, arr) => (
                    <div key={n} style={{ display: 'flex', alignItems: 'flex-start', flex: '1 1 0' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 700, marginBottom: '6px' }}>{n}</div>
                        <div style={{ border: '1px solid var(--border)', borderRadius: '6px', height: '48px', backgroundColor: 'var(--bg)' }} />
                      </div>
                      {i < arr.length - 1 && <div style={{ width: '16px', height: '1px', backgroundColor: 'var(--border)', flexShrink: 0, margin: '8px 2px 0' }} />}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}>
                    <div style={{ width: '16px', height: '7px', backgroundColor: 'var(--accent-subtle)', borderRadius: '3px' }} />
                    <div style={{ width: '85%', height: '12px', backgroundColor: 'var(--border)', borderRadius: '4px' }} />
                    <div style={{ width: '52px', height: '9px', backgroundColor: 'var(--accent-subtle)', borderRadius: '24px' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }}>
                    {[0,1,2,3].map(i => <div key={i} style={{ height: '22px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px' }} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Section>

        <Divider />

        {/* ── Patterns ── */}
        <Section title="Patterns">
          <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', marginBottom: '40px', marginTop: '-8px' }}>
            Reusable UI patterns used across sections — label pills, availability badge, dark card, blur-in animation.
          </p>

          {/* Label pill */}
          <div style={{ fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', color: 'var(--muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Label Pill</div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '32px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'var(--accent-subtle)', borderRadius: '24px', padding: '4px 12px' }}>
              <span style={{ color: 'var(--accent)', fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Fractional design partner
              </span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'var(--accent-subtle)', borderRadius: '24px', padding: '4px 12px' }}>
              <span style={{ color: 'var(--accent)', fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Let's talk
              </span>
            </div>
            <div style={{ border: '1px solid var(--border)', borderRadius: '24px', padding: '4px 12px', display: 'inline-flex' }}>
              <span style={{ color: 'var(--muted)', fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Patient & Consumer Flows
              </span>
            </div>
          </div>

          {/* Availability badge */}
          <div style={{ fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', color: 'var(--muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Availability Badge</div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '32px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid var(--border)', borderRadius: '24px', padding: '6px 16px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block', flexShrink: 0 }} />
              <span style={{ color: 'var(--muted)', fontSize: 'var(--type-small)' }}>Available for Q2 2026 · 1–2 clients</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(245,244,242,0.88)', backdropFilter: 'blur(12px)', borderRadius: '24px', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.5)' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block', flexShrink: 0 }} />
              <span style={{ color: 'var(--text)', fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Available Q2 2026</span>
            </div>
          </div>

          {/* Dark card */}
          <div style={{ fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', color: 'var(--muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Dark Card</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '32px' }}>
            {['Book a 30-min call', 'Connect on LinkedIn', 'View resume'].map((label, i) => (
              <div key={label} style={{
                backgroundColor: 'var(--text)',
                borderRadius: 'var(--radius)',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ color: 'var(--accent-subtle)', fontSize: '20px' }}>
                  <i className={['fa-regular fa-calendar', 'fa-brands fa-linkedin', 'fa-regular fa-file'][i]} />
                </div>
                <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }} />
                <div>
                  <div style={{ color: 'var(--accent-subtle)', fontSize: 'var(--type-small)', fontWeight: 'var(--weight-semibold)', marginBottom: '6px' }}>{label}</div>
                  <div style={{ color: 'rgba(245,244,242,0.5)', fontSize: '11px', lineHeight: 'var(--leading-body)' }}>Action card — dark bg, accent icon, subtle body.</div>
                </div>
              </div>
            ))}
          </div>

          {/* Blur-in animation */}
          <div style={{ fontSize: '12px', fontFamily: "'Google Sans Code', monospace", fontWeight: '500', color: 'var(--muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Entrance Animation</div>
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '28px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div>
                <Token label="blur-in" />
                <div style={{ color: 'var(--muted)', fontSize: '11px', marginTop: '4px', lineHeight: 1.5 }}>opacity:0 + blur(12px) → opacity:1 + blur(0)<br />Trigger: IntersectionObserver threshold:0.1<br />Duration: 0.7s ease</div>
              </div>
              <div>
                <Token label="fade-up" />
                <div style={{ color: 'var(--muted)', fontSize: '11px', marginTop: '4px', lineHeight: 1.5 }}>opacity:0 + translateY(24px) → opacity:1 + translateY(0)<br />Trigger: IntersectionObserver threshold:0.1<br />Duration: 0.7s ease</div>
              </div>
              <div>
                <Token label="stagger" />
                <div style={{ color: 'var(--muted)', fontSize: '11px', marginTop: '4px', lineHeight: 1.5 }}>Per-item delay: i × 80–100ms<br />Used on: cards, list items, grid cells</div>
              </div>
            </div>
          </div>
        </Section>

        <Divider />

        {/* ── Font Weights ── */}
        <Section title="Font Weights">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {weights.map((w) => (
              <div key={w.token} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div style={{ minWidth: '140px', flexShrink: 0 }}>
                  <Token label={w.token} />
                  <div style={{ color: 'var(--muted)', fontSize: '11px', marginTop: '4px' }}>{w.value}</div>
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '28px', fontWeight: w.value, color: 'var(--text)', lineHeight: 1 }}>
                  {w.label}
                </div>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  );
}
