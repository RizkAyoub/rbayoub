import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rbayoub.com',
  integrations: [tailwind()],
  output: 'static',
  redirects: {
    // Root-level legacy paths → English equivalents
    '/about':      '/en/company/',
    '/expertise':  '/en/services/',
    '/philosophy': '/en/method/',

    // English legacy paths
    '/en/about':      '/en/company/',
    '/en/expertise':  '/en/services/',
    '/en/philosophy': '/en/method/',

    // French legacy paths
    '/fr/about':      '/fr/company/',
    '/fr/expertise':  '/fr/services/',
    '/fr/philosophy': '/fr/method/',
  },
});
