/**
 * verify-seo.mjs
 * Checks the static build output in dist/ for SEO correctness.
 * Run: node scripts/verify-seo.mjs
 *   or: npm run verify:seo  (after npm run build)
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const SITE = 'https://rbayoub.com';

let errors = 0;
let warnings = 0;

function pass(msg) { console.log(`  ✓  ${msg}`); }
function fail(msg) { console.error(`  ✗  ${msg}`); errors++; }
function warn(msg) { console.warn(`  ⚠  ${msg}`); warnings++; }

function readDist(rel) {
  const p = join(DIST, rel);
  return existsSync(p) ? readFileSync(p, 'utf8') : null;
}

// ─── 1. robots.txt ──────────────────────────────────────────────────────────
console.log('\n[1] robots.txt');
const robots = readDist('robots.txt');
if (!robots) {
  fail('robots.txt missing from dist/');
} else {
  pass('robots.txt exists');
  if (robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) {
    pass(`Sitemap directive → ${SITE}/sitemap.xml`);
  } else {
    fail('robots.txt does not point to correct sitemap URL');
  }
  if (robots.includes('Allow: /')) {
    pass('Allow: / present');
  } else {
    warn('Allow: / not found in robots.txt');
  }
}

// ─── 2. sitemap.xml ─────────────────────────────────────────────────────────
console.log('\n[2] sitemap.xml');
const sitemap = readDist('sitemap.xml');
if (!sitemap) {
  fail('sitemap.xml missing from dist/');
} else {
  pass('sitemap.xml exists');

  const requiredURLs = [
    `${SITE}/en/`,
    `${SITE}/fr/`,
    `${SITE}/en/services`,
    `${SITE}/fr/services`,
    `${SITE}/en/work`,
    `${SITE}/fr/work`,
    `${SITE}/en/method`,
    `${SITE}/fr/method`,
    `${SITE}/en/company`,
    `${SITE}/fr/company`,
    `${SITE}/en/contact`,
    `${SITE}/fr/contact`,
  ];

  for (const u of requiredURLs) {
    if (sitemap.includes(`<loc>${u}</loc>`)) {
      pass(`<loc> ${u}`);
    } else {
      fail(`Missing <loc> ${u}`);
    }
  }

  const retiredURLs = ['/about', '/expertise', '/philosophy'];
  for (const r of retiredURLs) {
    if (sitemap.includes(`<loc>${SITE}${r}`)) {
      fail(`Retired URL found in sitemap: ${SITE}${r}`);
    } else {
      pass(`Retired URL absent from sitemap: ${r}`);
    }
  }

  if (sitemap.includes('www.rbayoub.com')) {
    fail('sitemap.xml contains www.rbayoub.com URLs — only non-www allowed');
  } else {
    pass('No www.rbayoub.com URLs in sitemap');
  }

  if (sitemap.includes('hreflang="x-default"')) {
    if (sitemap.includes(`href="${SITE}/"`)) {
      pass(`x-default hreflang → ${SITE}/`);
    } else {
      warn('x-default hreflang found but may not point to root /');
    }
  } else {
    fail('No x-default hreflang in sitemap');
  }
}

// ─── 3. Per-page checks ─────────────────────────────────────────────────────
const pages = [
  { file: 'en/index.html',        canonical: `${SITE}/en/`,        hreflangEn: `${SITE}/en/`,        hreflangFr: `${SITE}/fr/` },
  { file: 'fr/index.html',        canonical: `${SITE}/fr/`,        hreflangEn: `${SITE}/en/`,        hreflangFr: `${SITE}/fr/` },
  { file: 'en/services/index.html', canonical: `${SITE}/en/services`, hreflangEn: `${SITE}/en/services`, hreflangFr: `${SITE}/fr/services` },
  { file: 'fr/services/index.html', canonical: `${SITE}/fr/services`, hreflangEn: `${SITE}/en/services`, hreflangFr: `${SITE}/fr/services` },
  { file: 'en/work/index.html',   canonical: `${SITE}/en/work`,    hreflangEn: `${SITE}/en/work`,    hreflangFr: `${SITE}/fr/work` },
  { file: 'fr/work/index.html',   canonical: `${SITE}/fr/work`,    hreflangEn: `${SITE}/en/work`,    hreflangFr: `${SITE}/fr/work` },
  { file: 'en/method/index.html', canonical: `${SITE}/en/method`,  hreflangEn: `${SITE}/en/method`,  hreflangFr: `${SITE}/fr/method` },
  { file: 'fr/method/index.html', canonical: `${SITE}/fr/method`,  hreflangEn: `${SITE}/en/method`,  hreflangFr: `${SITE}/fr/method` },
  { file: 'en/company/index.html',canonical: `${SITE}/en/company`, hreflangEn: `${SITE}/en/company`, hreflangFr: `${SITE}/fr/company` },
  { file: 'fr/company/index.html',canonical: `${SITE}/fr/company`, hreflangEn: `${SITE}/en/company`, hreflangFr: `${SITE}/fr/company` },
  { file: 'en/contact/index.html',canonical: `${SITE}/en/contact`, hreflangEn: `${SITE}/en/contact`, hreflangFr: `${SITE}/fr/contact` },
  { file: 'fr/contact/index.html',canonical: `${SITE}/fr/contact`, hreflangEn: `${SITE}/en/contact`, hreflangFr: `${SITE}/fr/contact` },
];

for (const page of pages) {
  console.log(`\n[3] ${page.file}`);
  const html = readDist(page.file);
  if (!html) { fail(`File missing: ${page.file}`); continue; }

  // Canonical — exactly one, correct URL, no www
  const canonicalMatches = [...html.matchAll(/rel="canonical"\s+href="([^"]+)"/g)];
  if (canonicalMatches.length === 0) {
    fail('No canonical tag');
  } else if (canonicalMatches.length > 1) {
    fail(`Duplicate canonical tags (${canonicalMatches.length})`);
  } else {
    const href = canonicalMatches[0][1];
    if (href === page.canonical) {
      pass(`canonical → ${href}`);
    } else {
      fail(`canonical wrong: expected ${page.canonical}, got ${href}`);
    }
    if (href.includes('www.')) {
      fail('canonical contains www');
    }
  }

  // hreflang alternates
  if (html.includes(`hreflang="en"`) && html.includes(page.hreflangEn)) {
    pass(`hreflang en → ${page.hreflangEn}`);
  } else {
    fail(`Missing hreflang en → ${page.hreflangEn}`);
  }

  if (html.includes(`hreflang="fr"`) && html.includes(page.hreflangFr)) {
    pass(`hreflang fr → ${page.hreflangFr}`);
  } else {
    fail(`Missing hreflang fr → ${page.hreflangFr}`);
  }

  // x-default
  if (html.includes('hreflang="x-default"')) {
    if (html.includes(`href="${SITE}/"`)) {
      pass(`x-default → ${SITE}/`);
    } else {
      fail(`x-default hreflang does not point to ${SITE}/`);
    }
  } else {
    fail('Missing x-default hreflang');
  }

  // No www in any canonical or hreflang
  if (html.match(/canonical|hreflang/g) && html.includes('www.rbayoub.com')) {
    fail('www.rbayoub.com found in head — check canonical/hreflang');
  }

  // Unique title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  if (titleMatch) {
    pass(`title: "${titleMatch[1]}"`);
  } else {
    fail('No <title> tag');
  }

  // Meta description exists
  if (html.includes('name="description"')) {
    pass('meta description present');
  } else {
    fail('Missing meta description');
  }

  // noindex check — no content page should be noindex
  if (html.includes('noindex')) {
    fail('Page has noindex — remove for production');
  }
}

// ─── 4. Root / page ─────────────────────────────────────────────────────────
console.log('\n[4] Root / (index.html)');
const root = readDist('index.html');
if (!root) {
  fail('dist/index.html missing');
} else {
  pass('dist/index.html exists');

  if (root.includes(`href="${SITE}/"`) && root.includes('rel="canonical"')) {
    pass(`canonical → ${SITE}/`);
  } else {
    fail(`Root canonical missing or wrong`);
  }

  if (root.includes('noindex')) {
    fail('Root page has noindex — should be index, follow');
  } else {
    pass('Root page is indexable');
  }

  if (root.includes('href="/en/"') && root.includes('href="/fr/"')) {
    pass('Crawlable language links present (/en/ and /fr/)');
  } else {
    fail('Root page missing crawlable <a href="/en/"> and/or <a href="/fr/">');
  }
}

// ─── 5. Navigation hrefs ─────────────────────────────────────────────────────
console.log('\n[5] Internal navigation links');
const enHome = readDist('en/index.html');
if (enHome) {
  const expectedLinks = ['/en/services', '/en/work', '/en/method', '/en/company', '/en/contact'];
  for (const link of expectedLinks) {
    if (enHome.includes(`href="${link}"`)) {
      pass(`Nav link: ${link}`);
    } else {
      warn(`Nav link not found in en/index.html: ${link}`);
    }
  }
}

// ─── Summary ────────────────────────────────────────────────────────────────
console.log('\n' + '─'.repeat(56));
if (errors === 0 && warnings === 0) {
  console.log(`✓ All SEO checks passed.`);
} else {
  if (errors > 0)   console.error(`✗ ${errors} error(s) found.`);
  if (warnings > 0) console.warn(`⚠ ${warnings} warning(s).`);
}
console.log('─'.repeat(56) + '\n');

if (errors > 0) process.exit(1);
