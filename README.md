# DIY Material Calculators

Static, SEO-first site of home & construction material calculators.
Built with **Astro** (static output) + **client-side TypeScript** for calc logic.
Zero backend, zero per-request cost — that's the whole point of the business model.

## Why this stack
- **Astro static build** → best-in-class SEO, ships as plain HTML/CSS, hosts free on
  Cloudflare Pages / Vercel.
- **Pure calc functions** (`src/lib/calc/*.ts`) → same code powers the page UI and unit tests.
- **Programmatic generation** → every calculator is a row in `src/data/calculators.ts`;
  `pages/calculators/[slug].astro` turns each row into an SEO page automatically.

## Commands
```bash
# clear the broken node preload first on this machine (PowerShell):
#   $env:NODE_OPTIONS=''
npm install
npm run dev      # local dev server
npm run build    # static build -> dist/
npm run preview  # serve the built site
```

## Structure
```
src/
  data/calculators.ts        # SINGLE SOURCE OF TRUTH: all 50 calculators (slug/title/category/priority)
  lib/calc/mulch.ts          # pure calc logic (one module per calculator)
  layouts/BaseLayout.astro   # <head> SEO: title, meta, canonical, OG, JSON-LD slot
  components/
    MulchCalculator.astro    # interactive sample (server markup + client TS, imports lib/calc/mulch)
    Faq.astro                # visible FAQ + FAQPage schema
  pages/
    index.astro              # L0 hub
    categories/[category].astro  # L1 category hubs (5)
    calculators/[slug].astro     # L2 calculator pages (50, programmatic)
public/robots.txt            # crawlers + AI bots allowed; sitemap pointer
astro.config.mjs             # `site` + sitemap integration
```

## Adding a new live calculator
1. Add/flip its row in `src/data/calculators.ts` (set `live: true`).
2. Create `src/lib/calc/<name>.ts` with a pure calc function (+ later a unit test).
3. Create `src/components/<Name>Calculator.astro` (copy the mulch one).
4. Wire it in `pages/calculators/[slug].astro` (the `live` branch).

## Status (scaffold)
- ✅ 50 SEO pages generate (5 category hubs + index + sitemap).
- ✅ **Mulch calculator** is the fully working sample (calc + UI + schema).
- ⬜ Other 49 render the SEO shell + "coming soon" + guide placeholder.
- ⬜ Replace placeholder copy with 1,200–1,800 word guides (content template).
- ⬜ Set real domain in `astro.config.mjs` `site` and `public/robots.txt`.
- ⬜ Add ad slots / affiliate links once content is in.
```
