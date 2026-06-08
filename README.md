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

## Deploy (Cloudflare Pages)

Free, unlimited bandwidth, commercial/ads allowed. Two ways:

**A. GitHub-connected (recommended, auto-deploys on push)**
1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Build settings: framework preset **Astro**, build command `npm run build`, output dir `dist`.
4. Deploy → you get a free `*.pages.dev` URL.

**B. CLI (manual)**
```bash
npm run build
npx wrangler pages deploy dist   # needs a Cloudflare login
```

Config in this repo:
- `.nvmrc` (Node 22) — pins the build Node version so CF doesn't use an old one.
- `public/_headers` — security headers + long cache for `/_astro/*`.
- `wrangler.toml` — project name + output dir for CLI deploys.

**Before binding a real domain**, change the placeholder host in **two** places (they drive canonical / hreflang / sitemap):
- `astro.config.mjs` → `site`
- `public/robots.txt` → `Sitemap:` line

## Status
- ✅ 50 SEO pages generate (5 category hubs + index + sitemap).
- ✅ 24 calculators currently render interactive tools with shared client-side math.
- ✅ Responsive calculator-focused UI, localized hub copy, hreflang, FAQ schema and sitemap generation.
- ⬜ 26 calculators still render the SEO shell + "coming soon" state.
- ⬜ Replace short guide copy with full 1,200–1,800 word localized guides.
- ⬜ Set real domain in `astro.config.mjs` `site` and `public/robots.txt`.
- ⬜ Add ad slots / affiliate links once content is in.
