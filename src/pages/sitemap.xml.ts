import type { APIRoute } from 'astro';

const SITE = 'https://rbayoub.com';
const LASTMOD = new Date().toISOString().split('T')[0];

// Home pages use trailing slash; all internal pages use no trailing slash.
// x-default points to the root language gateway (/), not /en/.
const ROUTES = [
  { en: '/en/',        fr: '/fr/' },
  { en: '/en/services', fr: '/fr/services' },
  { en: '/en/work',    fr: '/fr/work' },
  { en: '/en/method',  fr: '/fr/method' },
  { en: '/en/company', fr: '/fr/company' },
  { en: '/en/contact', fr: '/fr/contact' },
];

function urlEntry(loc: string, enPath: string, frPath: string): string {
  return `  <url>
    <loc>${SITE}${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <xhtml:link rel="alternate" hreflang="en"        href="${SITE}${enPath}"/>
    <xhtml:link rel="alternate" hreflang="fr"        href="${SITE}${frPath}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/"/>
  </url>`;
}

export const GET: APIRoute = () => {
  const entries = ROUTES.flatMap(({ en, fr }) => [urlEntry(en, en, fr), urlEntry(fr, en, fr)]);

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
