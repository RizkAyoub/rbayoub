import type { APIRoute } from 'astro';

const SITE = 'https://rbayoub.com';
const LASTMOD = new Date().toISOString().split('T')[0];

// Home pages use trailing slash; all internal pages use no trailing slash.
// Profile pages also use trailing slash (matches their canonical convention).
// x-default for standard pages points to the root language gateway (/);
// profile pages use a custom urlEntry that sets x-default to the EN profile URL.
const ROUTES = [
  { en: '/en/',        fr: '/fr/' },
  { en: '/en/services', fr: '/fr/services' },
  { en: '/en/work',    fr: '/fr/work' },
  { en: '/en/method',  fr: '/fr/method' },
  { en: '/en/company', fr: '/fr/company' },
  { en: '/en/contact', fr: '/fr/contact' },
];

// Profile pages have a different x-default (EN profile, not site root)
const PROFILE_ROUTES = [
  { en: '/en/rizk-ayoub/', fr: '/fr/rizk-ayoub/' },
];

function urlEntry(loc: string, enPath: string, frPath: string, xDefault = '/'): string {
  return `  <url>
    <loc>${SITE}${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <xhtml:link rel="alternate" hreflang="en"        href="${SITE}${enPath}"/>
    <xhtml:link rel="alternate" hreflang="fr"        href="${SITE}${frPath}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${xDefault}"/>
  </url>`;
}

export const GET: APIRoute = () => {
  const entries = [
    ...ROUTES.flatMap(({ en, fr }) => [urlEntry(en, en, fr), urlEntry(fr, en, fr)]),
    ...PROFILE_ROUTES.flatMap(({ en, fr }) => [
      urlEntry(en, en, fr, en),
      urlEntry(fr, en, fr, en),
    ]),
  ];

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
