// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: change `site` to the real domain before going live —
// sitemap + canonical URLs are generated from it.
export default defineConfig({
  // Temporary: live workers.dev subdomain. Change to the custom domain once bought.
  site: 'https://diy-calculators.2892672257.workers.dev',
  integrations: [sitemap()],
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de'],
    routing: { prefixDefaultLocale: true }, // every language is under /<lang>/ — clean hreflang
  },
});
