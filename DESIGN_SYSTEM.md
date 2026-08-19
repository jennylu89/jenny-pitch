# Jenny Lu — Portfolio Design System

Complete export. Everything needed to rebuild a page in this style is in this file, including the actual texture asset.

Source: `src/index.css` (tokens) + `src/pages/DesignPage.jsx` (live gallery at `/design`).
Every value read from shipping code on 2026-08-17. React + Vite, inline styles referencing CSS custom properties.

**Hard rule: never write a raw hex or px in a component. Reference the token.**

### Before you build with this

- **Fonts do not travel.** `BDO Grotesk` is a self-hosted variable TTF at `public/fonts/BDOGrotesk-VF.ttf`. It is not on Google Fonts. If you don't have the file, substitute a neutral grotesk at weight 500 with tight negative tracking and say which you used. Closest free stand-ins: `Inter Tight`, `General Sans`, `Schibsted Grotesk`. Do not substitute Inter, Helvetica, or Poppins.
- `Google Sans Code` (weight 500) is on Google Fonts and does travel.
- Icons are **Font Awesome Pro 7.2 light** (licensed, self-hosted at `public/fonts/fontawesome-pro-7.2.0-web/`). If unavailable, use any thin-stroke outline set at matching weight.
- Section 6 contains the noise texture as a verbatim inline data URI. Copy it exactly. It is the single element most responsible for the site not looking like a template, and it cannot be approximated by an opacity layer.

---

## 1. Feel

Warm off-white paper, one purple accent, glass cards, a fine noise grain over every gradient.
Type is a single variable grotesk at medium weight, never bold. Corners are soft (12px), buttons are full pills.
Dark sections exist and are used as rhythm, not as a theme toggle.

Anti-references: heavy gradients, drop shadows that read as depth, bold/black weights, stock photography, generic SaaS card grids.

---

## 2. Color

### Light (default)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F5F4F1` | Page background, warm off-white |
| `--surface` | `#FFFFFF` | Elevated surfaces, cards |
| `--surface-alt` | `#E8E7E4` | Secondary surface |
| `--border` | `rgba(39,39,39,0.1)` | Dividers, card borders |
| `--text` | `#272727` | Primary text |
| `--muted` | `rgba(39,39,39,0.74)` | Secondary text, captions, labels |
| `--accent` | `#8B78FF` | Purple. Primary action, gradients, dots |
| `--accent-fg` | `#FFFFFF` | Text on accent |
| `--accent-subtle` | `#EAE8FF` | Lavender tint, hover, active nav |

Accent variants: `--accent-strong` `rgba(139,120,255,0.8)` · `--accent-medium` `0.4` · `--accent-faded` `0.3`

### Dark sections

| Token | Value | Use |
|---|---|---|
| `--dark-bg` | `#272727` | Dark section background |
| `--dark-bg-deep` | `#1a1a1a` | Deeper dark, bottom of scroll strips |
| `--dark-text` | `#FFFFFF` | Text on dark |
| `--dark-text-muted` | `rgba(255,255,255,0.58)` | Secondary text on dark |
| `--dark-text-faint` | `rgba(255,255,255,0.35)` | Tertiary / decorative only |
| `--dark-border` | `rgba(255,255,255,0.15)` | Borders on dark |
| `--dark-dot-inactive` | `rgba(255,255,255,0.08)` | Inactive dots, dark card fill |

### Contrast, do not lower these

`--muted` is `0.74` and `--dark-text-muted` is `0.58` for a measured reason, not taste.

- `--muted` at `0.74` = **6.05:1** on flat `--bg` and **4.93:1** on the hero purple gradient. At `0.62` it measured 4.20:1 flat and 3.62:1 on the gradient, both under the 4.5:1 AA floor.
- `--dark-text-muted` at `0.58` = **6.01:1** on flat `--dark-bg` and **5.12:1** on the dark MetricCard surface (`rgba(255,255,255,0.08)` over `--dark-bg`). At `0.5` the card measured 4.23:1 and was shipping sub-AA.

Any muted text has to clear 4.5:1 on **both** the flat background and whatever gradient or translucent card sits under it. Measure the worst case, not the flat one.

---

## 3. Typography

### Families

| Token | Value | Use |
|---|---|---|
| `--font-sans` | `'BDO Grotesk', system-ui, sans-serif` | Everything: headings, body, UI |
| `--font-badge` | `'Google Sans Code', monospace` | Badges, eyebrows, labels, code, metadata |

BDO Grotesk is variable (weight 100–900), self-hosted, `font-display: swap`.

### Scale — Major Third 1.26, base 14px

| Token | Size | Tracking | Leading | Use |
|---|---|---|---|---|
| `--type-h1` | `clamp(36px, 4.5vw, 56px)` | `-1.68px` | `1.15` | Hero headline |
| `--type-h2` | `clamp(28px, 3.5vw, 44px)` | `-0.88px` | `1.2` | Section heading, metric values |
| `--type-h3` | `clamp(24px, 2.8vw, 35px)` | `-0.35px` | `1.2` | Card title |
| `--type-h4` | `clamp(20px, 2.2vw, 28px)` | `-0.28px` | `1.3` | Subheading |
| `--type-h5` | `22px` | `-0.22px` | `1.4` | Tile heading |
| `--type-lead` | `18px` | `0` | `1.5` | Intro / one-liner |
| `--type-body` | `14px` | `0` | `1.5` | Body copy, buttons, nav |
| `--type-small` | `12px` | `0.96px` (badge) | `1.5` | Captions, badges, labels |

### Weights — only three, and none of them are bold

`--weight-normal` 400 · `--weight-medium` 500 · `--weight-semibold` 600.

**Headings are `--weight-medium` (500), not bold.** This is the strongest signal of the site's voice. The legacy tokens `--weight-bold` and `--weight-black` both alias to 500 on purpose so old code can't reintroduce heavy type.

### Body defaults

```css
font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
font-optical-sizing: auto;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```
Text selection: `--accent` background, `--accent-fg` text.

---

## 4. Space, radius, elevation

**Spacing scale (px):** 3 · 6 · 12 · 18 · 24 · 36 · 48 · 72 · 80 · 96 · 144
Tokens `--space-3` … `--space-144`. Use the token, don't invent a 20 or a 32.

**Radius:** `--radius` **12px** (default, cards) · `--radius-widget` / `--radius-btn` / `--radius-sm` 6px · `--radius-card` 16px (MetricCard only) · `--btn-radius` **200px** (full pill) · badges 24px · glass pill 100px · scroll-hint pill 20px.
→ For a standard card use `--radius`, not `--radius-card`.

**Shadows:** only two.
`--shadow-glass` `0 4px 12px rgba(0,0,0,0.1)` · `--shadow-widget` `0 4px 24px rgba(39,39,39,0.1)`

**Glass:** `--glass-bg` `rgba(255,255,255,0.7)` · `--glass-stroke` `#FFFFFF` · `--glass-blur` `6px`

**Layout widths:** page content `1000px` max (dominant, 33 uses). Body copy `600–680px`. Narrow blocks `480–560px`.
**Section rhythm:** `var(--space-96) 0` vertical, `var(--space-48)` horizontal. Mobile drops to `20px` horizontal.

---

## 5. Primitives

### Glass Card — the default card, used everywhere

```js
backgroundColor: 'var(--glass-bg)',            // rgba(255,255,255,0.7)
backdropFilter: 'blur(var(--glass-blur))',     // 6px, plus -webkit-
border: '1px solid var(--glass-stroke)',       // #FFFFFF
borderRadius: 'var(--radius)',                 // 12px
boxShadow: 'var(--shadow-glass)',
padding: '32px',
```
Always include the backdrop filter and the shadow. A flat white card with a grey border is the wrong component.

### Button

| | Primary | Outline |
|---|---|---|
| bg | `--btn-primary-bg` `#272727` | transparent |
| fg | `#FFFFFF` | `--text` |
| border | none | `1px solid var(--border)` |
| height | `--btn-height` 48px (nav: 32px, sm: 36px) | same |
| padding | `0 var(--btn-x-padding)` 24px | same |
| radius | `--btn-radius` 200px | same |
| type | `--type-body` / weight 500 | same |

The primary CTA is dark charcoal, **not** purple. Purple is for gradients and accents, never the button fill.
Primary CTA carries a 22px circular avatar left of the label (opt out with `hideAvatar` for in-page jumps).

Hover (`.btn-hover`): `translateY(-2px) scale(1.02)` + `0 6px 20px rgba(0,0,0,0.15)`, 0.2s ease.
Active: `translateY(0) scale(0.98)`, no shadow.

### Badge

Pill, `border-radius: 24px`, `--font-badge`, `--type-small`, weight 500, **uppercase**, `letter-spacing: 0.96px`, padding `6px 12px`.
Variants: `outline` (transparent + border) · `filled` (surface + border + shadow) · `subtle` (accent-subtle bg, accent text) · `solid` (accent bg, white text) · `glass`.
Optional leading dot (5–7px, `currentColor` at 0.6 opacity) or icon.

### Eyebrow

Section label above a heading. `--type-small`, `--font-badge`, weight 500, uppercase, `0.96px` tracking, `margin-bottom: var(--space-24)`. Usually `--muted`.

### MetricCard

Glass card at `--radius-card` (16px), padding 24px, gap 6px.
Value: `--type-h2`, weight 500, `--tracking-h2`. Label: `--type-body`, `--muted`.
Dark variant: bg `rgba(255,255,255,0.08)`, border `--dark-border`, no shadow, no blur, label `--dark-text-muted`.

### Nav

Fixed top, transparent until scroll. Past `scrollY > 10` it gains `rgba(245,244,241,0.7)` + `blur(12px)` + a 1px bottom border, transitioned over `0.3s ease`.
Padding `var(--space-12) var(--space-24)`, inner max-width 1024px.
Left: 28px circular avatar + "Jenny Lu" at `--type-body` weight 500. Right: two text links with 14px stroke-2 outline SVG icons, then a 32px charcoal pill CTA.
Link hover: `opacity 0.6`, 150ms.

### Gradient icon box

Outer: `linear-gradient(180deg, #a89fef 0%, #cfc9f5 65%, #eae8fb 100%)`, `--radius`, 5px padding.
Inner: `rgba(255,255,255,0.75)` + `blur(3px)`, `1px solid var(--glass-stroke)`, 8px radius, `--shadow-glass`.
Icon: `#6b55e8`, light weight. Sizes: 72px (process) / 48px (tiles).

### ScrollStrip

Horizontal scroller for screenshot galleries. `overflow-x: auto`, `scroll-snap-type: x mandatory`.
Dark variant (default): background `linear-gradient(180deg, #272727 0%, #1a1a1a 100%)`, top border `1px solid rgba(255,255,255,0.06)`, plus the plus-lighter noise from §6.
When content overflows and you are not at the end, a 100px right fade (`transparent → #1a1a1a` dark, `→ #ffffff` light) carries a charcoal "Scroll →" pill: 20px radius, `6px 12px`, `--type-small`, weight 500. It hides once scrolled to the end.

Five content types: `app` (dark, 450px phone screens, centered) · `flow` (light, captioned vertical stack) · `before-after` (dark, before → arrow → after) · `gallery` (light, 500px cards) · `compareScreens` (dark, 700px side-by-side). Plus `heroImage` for oversized journey maps at 200% width.

---

## 6. Texture — the noise grain

This is the asset. Copy the data URI verbatim; it is an inline SVG `feTurbulence` filter, no external file, no image request.

```
url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")
```

Decoded, the filter is: `<feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch"/>` painted over a 300×300 rect.

It renders as an absolutely positioned sibling, never a background on the content element:

```css
position: absolute;
inset: 0;
z-index: 0;
background-image: <the data URI above>;
background-repeat: repeat;
background-size: 200px 200px;   /* NOT 300px — downsampling the 300px tile is what makes the grain fine */
pointer-events: none;
```

Mark it `aria-hidden="true"`. Content sits in a sibling at `position: relative; z-index: 1`.

### Three applications, three blend modes

| Where | Opacity | Blend mode |
|---|---|---|
| Over light gradients (hero, closing CTA) | `0.25` | `multiply` |
| Over dark sections (`--dark-bg`) | `0.35` | `soft-light` |
| Inside a dark ScrollStrip | `0.12` | `plus-lighter` |

The blend mode is not interchangeable. `multiply` darkens the light wash into paper grain; `soft-light` lifts the dark field without greying it; `plus-lighter` on the strip adds only highlights so screenshots stay clean. Using one everywhere flattens all three.

### Copy-paste CSS

```css
.grain::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 200px 200px;
  opacity: 0.25;
  mix-blend-mode: multiply;
}
.grain--dark::before { opacity: 0.35; mix-blend-mode: soft-light; }
.grain--strip::before { opacity: 0.12; mix-blend-mode: plus-lighter; }
```

Every gradient and every dark section gets one. It is what keeps flat color from looking like a template.

---

## 7. Background patterns

Three, applied to whole sections, never to a single component.

```css
/* Hero + closing CTA — purple wash to page bg */
linear-gradient(180deg,
  rgba(139,120,255,0.35) 0%,
  rgba(139,120,255,0.18) 40%,
  rgba(139,120,255,0.06) 65%,
  var(--bg) 90%);                        /* + grain, multiply 0.25 */

/* A lighter hero variant used on some pages */
linear-gradient(180deg,
  rgba(139,120,255,0.13) 0%,
  rgba(139,120,255,0.04) 45%,
  var(--bg) 75%);

/* Mid-page sections — a breath of purple, then back */
linear-gradient(180deg, var(--bg) 0%, rgba(139,120,255,0.06) 50%, var(--bg) 100%);

/* Dark — case study screens, JD sections, timeline */
background-color: var(--dark-bg);        /* + grain, soft-light 0.35 */
```

---

## 8. Motion

Restrained. Reveal-on-scroll, one word-stagger headline, a small button lift. Nothing else.

**Blur-in entrance — the signature move.**
`opacity: 0 → 1` plus `filter: blur(12px) → blur(0px)`, `0.7s ease`. Fires 80ms after mount for the hero, or on IntersectionObserver for sections.

**Scroll-triggered fade** (`useFadeIn`): IntersectionObserver at `threshold: 0.15`, fires once, disconnects. Used by every section component.

**Word-stagger headline** (`TextReveal`, GSAP + ScrollTrigger): splits the heading into words, each in an `overflow: hidden` wrapper, animates `translateY(40px) → 0` and `opacity 0 → 1`, `duration 0.8`, `stagger 0.04`, `ease: power3.out`, trigger `top 85%`, `once: true`. Reserved for section headings, not body copy.

**Button:** 0.2s ease lift and press (see §5).
**Nav:** 0.3s ease on background, border, and backdrop-filter as it crosses scroll.
**Scroll chevron:** 6px vertical bounce, `2s ease-in-out infinite`.
**Page scroll:** `scroll-behavior: smooth`.

---

## 9. Page composition

Company pages are ~15 lines. Sections stack in a fixed order:

```
Nav
LLPageHero          glass pill badge → H1 → one-liner → CTA → scroll chevron
LLSummary           "Your ask / My proof" rows in glass cards
LLHowIWork          2-col glass tiles with gradient icon boxes, subtle gradient bg
AIProjects          AI process section, video + workflow steps + tool badges
LLSelectedProjects  case study cards filtered from src/data/jenny.js
LLCloseCta          gradient + grain, Schedule a call + View resume
```

Hero anatomy: glass pill badge (100px radius, `6px 16px`, glass tokens) → `--type-h1` centered → `--type-lead` one-liner capped at 600px → optional body paragraphs at 620px in full-strength `--text` → CTA row → bouncing chevron. Vertical padding `var(--space-144) var(--space-48) var(--space-96)`, `min-height: 100vh`. A `compact` variant trims to `96/48/72` and `78vh`.

Full component set: `LLPageHero · LLSummary · LLHowIWork · LLSelectedProjects · LLCaseStudy · LLCloseCta · LLBento · LLProofBlock(s) · LLSplitSection · LLSplitStatement · LLProblemBlock · LLJdSection · LLRoleStrip · LLWhyMe · LLContact · LLSection · LLClose`.

---

## 10. Responsive

Single breakpoint: **640px**.

- Nav becomes a **bottom tab bar**: icons over 10px labels, `rgba(245,244,241,0.92)` + `blur(16px)`, `env(safe-area-inset-bottom)`, body gets 72px bottom padding.
- All multi-column grids collapse to `1fr` (process grid goes to 2 columns, not 1).
- Section horizontal padding drops to 20px.
- CTA buttons stack full-width.
- Decorative floating badges hide.

---

## 11. Copy rules that are also design rules

- No em-dashes. Commas, colons, periods, parentheses.
- Plain language, roughly 5th-grade reading level. No buzzwords.
- Max 2 CTAs per screen: one primary, at most one secondary.
- Every claim carries a real number or a real name, or it gets cut.

---

## Known gaps

- `index.html` still loads **Inter** (7 weights + italic) from Google Fonts. Nothing uses it. Dead request on every page load.
- Legacy alias tokens (`--type-display`, `--tracking-tight`, `--shadow-lg`, etc.) are still defined and map onto the current scale. Read them as deprecated; write new code against the real tokens.
- `--radius-card` (16px) exists only for MetricCard. Everything else uses `--radius` (12px).
- `LLPageHero` references `var(--space-4, 4px)`, and `--space-4` is not defined. It falls back to 4px, so nothing is visibly broken.
