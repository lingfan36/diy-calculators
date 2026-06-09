// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const noindexCalculatorSlugs = [
  'underlayment-calculator',
  'floor-leveling-compound-calculator',
  'floor-screed-calculator',
  'stair-tread-flooring-calculator',
  'wallpaper-calculator',
  'joint-compound-calculator',
  'grout-calculator',
  'primer-calculator',
  'thinset-tile-adhesive-calculator',
  'ceiling-paint-calculator',
  'concrete-column-calculator',
  'concrete-stairs-calculator',
  'wall-framing-stud-calculator',
  'rebar-calculator',
  'insulation-calculator',
  'brick-calculator',
  'concrete-block-mortar-calculator',
  'retaining-wall-block-calculator',
  'raised-garden-bed-soil-calculator',
  'roof-underlayment-calculator',
  'gutter-calculator',
  'deck-joist-calculator',
  'fence-panel-calculator',
  'fence-post-calculator',
  'stair-stringer-calculator',
  'baseboard-trim-calculator',
];

// IMPORTANT: change `site` to the real domain before going live —
// sitemap + canonical URLs are generated from it.
export default defineConfig({
  // Temporary: live workers.dev subdomain. Change to the custom domain once bought.
  site: 'https://diy-calculators.2892672257.workers.dev',
  integrations: [
    sitemap({
      filter: (page) =>
        !noindexCalculatorSlugs.some((slug) => page.includes(`/calculators/${slug}/`)),
    }),
  ],
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de', 'zh'],
    routing: { prefixDefaultLocale: true }, // every language is under /<lang>/ — clean hreflang
  },
});
