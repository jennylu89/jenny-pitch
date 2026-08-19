// ─────────────────────────────────────────────────────────────────────────────
// HOMEPAGE VARIANT RESOLVER
// ─────────────────────────────────────────────────────────────────────────────
// The homepage (PitchPage) renders the same components no matter what. This file
// only decides WHICH COPY those components get.
//
// To make a new job version: add ONE file to src/data/home/<slug>.js and it is
// live at /for/<slug>. No route to register, no page to copy, nothing here to
// edit. The glob below picks it up at build time.
//
// Every field in a config is optional. Anything a config leaves out falls back
// to the copy that is on the homepage today, so "/" is unchanged and so is any
// variant that only overrides one line.
// ─────────────────────────────────────────────────────────────────────────────

const modules = import.meta.glob('./home/*.js', { eager: true });

const configs = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const slug = path.replace('./home/', '').replace(/\.js$/, '');
    // Accept `export default {}` or a single named export, so a config file can
    // be written either way without this resolver caring.
    return [slug, mod.default || Object.values(mod)[0] || {}];
  })
);

export function getHomeConfig(slug) {
  if (!slug) return null;
  return configs[slug] || null;
}

export const homeConfigSlugs = Object.keys(configs).sort();
