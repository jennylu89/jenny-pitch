# Portfolio personalization guideline

Jenny's rules, written down 2026-08-19. Read this before tailoring the portfolio to any
job description.

## The core identity

The portfolio has one core identity:

> **I find what matters in complex products.**

Do not create a different Jenny for every company.

The goal of a JD-specific version is to **help the hiring manager recognize the most
relevant evidence faster.**

It is not to:

- rewrite the portfolio
- copy JD language
- invent new skills
- create a new personal brand

**80% of the portfolio stays the same. The JD only changes the doorway into the work.**

---

## Step 1 · Identify hiring signals

Extract only the **top 3** signals this company is actually hiring for.
Do not summarize the whole JD.

Format each one as:

```
Hiring signal:
Why they care:
Where Jenny has evidence:
```

Example:

```
Signal:      AI-native prototyping
Why they care: They need someone who can move quickly from idea to working product.
Evidence:    Claude Code workflow, React prototypes, Arena Labs.
```

---

## Step 2 · Choose the closest portfolio context

Pick exactly one. **Do not create new categories.**

| Context | File | URL |
|---|---|---|
| Default / Fractional Product Partner | `src/data/home/default.js` | `/` and `/for/default` |
| B2B SaaS / Data Products | `src/data/home/datadelivers.js` | `/for/datadelivers` |
| Healthcare / High-Stakes Decisions | `src/data/home/placeformom.js` | `/for/placeformom` |
| AI-Native Product Design | `src/data/home/ai.js` | `/for/ai` |

---

## Step 3 · Personalize only these areas

### Hero supporting copy

Helps the hiring manager immediately understand relevance.

**Do not change the headline.** It is always:

> I find what matters in complex products.

Config key: `heroBody`.

### The four "How I work" cards

Choose the four principles most relevant to the JD. **Do not create new principles.**

Available principles:

- Find the real problem first
- Prototype to create alignment
- Stay close to shipping
- Build systems that last
- Design for decisions
- Reduce cognitive load
- Bridge design and engineering

Wording can be adjusted slightly for context. Config key: `valueCards`.

### Project order

Reorder projects only if one project better demonstrates the hiring signals.
**Do not change case studies.** Config key: `projectIds`.

### The resume round trip

Every variant page sends the reader to the resume with a **return path**, not a slug:
`/resume?from=for/<slug>`. The resume then links back to `/for/<slug>` and labels the link
with the config's `name`.

⛔ Do not pass the bare slug. `datadelivers` names two different pages, the variant at
`/for/datadelivers` and the older love-letter page at `/datadelivers`, so a slug alone
sends people to the wrong one.

Every config needs a `name` for the back-link label.

### Testimonials

Select which recommendations appear, and in what order. Config key: `testimonialIds`.
They come from the single list in `src/data/jenny.js`, so a quote is never duplicated.

Omit the key and all of them render.

Current sets:

| Variant | Who | Why |
|---|---|---|
| default, placeformom | jaythan, jeffrey, michael, mark | A founder, a PM, an engineer, and someone who was neither report nor manager. No two say the same thing. |
| datadelivers, ai | the same four plus harvey | Harvey praises funnel and conversion work, which reads as relevant to those two buyers and off message everywhere else. |

⛔ Do not add the seven funnel and landing page recommendations. They are strong, and
they pull the page toward reading as a marketing freelancer.

⛔ Ron P (2015) and Erica Hayes (2012) are on disk but not in use. Both are old enough to
undersell the current level.

### Qualification section

The "What you need. What I've done." ask-and-proof rows.

Select the **four most relevant** proof points.

- Do not add new qualifications.
- Do not make every JD requirement a separate row.

Config key: `qualification`. It renders only when a config supplies it, so `/` never
shows it.

```js
qualification: {
  heading: "What you need. What I've done.",
  rows: [
    { ask: 'their requirement, in their words', proof: ['what Jenny actually did'] },
  ],
}
```

---

## Output format, before implementation

Always provide this and **wait for approval before changing code.**

```
# Hiring signals
1.
2.
3.

# Recommended portfolio context
Default / B2B / Healthcare / AI
Reason:

# Changes
Hero support:
  Before:
  After:

Qualification section:
  Keep:
  Remove:
  Reorder:

How I work cards:
  1.
  2.
  3.
  4.

Project order:

# Why these changes
(3 bullets maximum)
```
