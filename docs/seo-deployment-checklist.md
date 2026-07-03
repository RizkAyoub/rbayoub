# SEO Deployment Checklist — rbayoub.com

## 1. DNS (Cloudflare or registrar)

```
A     @    → <server IP>        ; rbayoub.com
A     www  → <server IP>        ; www.rbayoub.com
```

Or, if using a CNAME for www:

```
CNAME www  → rbayoub.com
```

Proxy status: Proxied (orange cloud) if using Cloudflare CDN.

---

## 2. Coolify — Application Domains

In the Coolify application settings, configure both domains:

```
https://rbayoub.com,https://www.rbayoub.com
```

Set the **primary domain** to `https://rbayoub.com` (non-www).

---

## 3. Coolify — www → non-www Redirect

In Coolify → Application → Redirects (or via Traefik middleware):

- Redirect `https://www.rbayoub.com` → `https://rbayoub.com` (301 Permanent)
- Preserve the path: `https://www.rbayoub.com/en/services` → `https://rbayoub.com/en/services`

If configuring manually in Traefik:

```yaml
# traefik label example
- "traefik.http.middlewares.www-redirect.redirectregex.regex=^https://www\\.rbayoub\\.com/(.*)"
- "traefik.http.middlewares.www-redirect.redirectregex.replacement=https://rbayoub.com/$${1}"
- "traefik.http.middlewares.www-redirect.redirectregex.permanent=true"
```

---

## 4. Environment Variables

Set in Coolify → Application → Environment Variables before each build:

```
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/<YOUR_REAL_FORM_ID>
```

---

## 5. Post-Deployment Verification Commands

Run these after every deployment to confirm the configuration is correct.

### www redirect (must be 301)
```bash
curl -sI https://www.rbayoub.com | grep -E "HTTP|location"
# Expected: HTTP/2 301 + location: https://rbayoub.com/

curl -sI https://www.rbayoub.com/en/services | grep -E "HTTP|location"
# Expected: HTTP/2 301 + location: https://rbayoub.com/en/services
```

### Main site responses (must be 200)
```bash
curl -sI https://rbayoub.com/           | grep "HTTP"  # 200
curl -sI https://rbayoub.com/en/        | grep "HTTP"  # 200
curl -sI https://rbayoub.com/en/services | grep "HTTP" # 200
curl -sI https://rbayoub.com/sitemap.xml | grep "HTTP" # 200
curl -sI https://rbayoub.com/robots.txt  | grep "HTTP" # 200
```

### Legacy redirects (must be 301)
```bash
curl -sI https://rbayoub.com/about      | grep -E "HTTP|location"
# Expected: 301 → /en/company/

curl -sI https://rbayoub.com/expertise  | grep -E "HTTP|location"
# Expected: 301 → /en/services/

curl -sI https://rbayoub.com/philosophy | grep -E "HTTP|location"
# Expected: 301 → /en/method/
```

### Canonical and hreflang in rendered HTML
```bash
curl -s https://rbayoub.com/en/services | grep -E "canonical|hreflang"
# Expected: one canonical (no www, no trailing slash)
#           hreflang en, hreflang fr, hreflang x-default → /
```

### Sitemap contents
```bash
curl -s https://rbayoub.com/sitemap.xml | grep "<loc>"
# Expected: 12 URLs (/en/ + /fr/ home, plus 5 internal pages × 2 languages)
# No URL should contain www or trailing slash (except /en/ and /fr/)
```

---

## 6. Google Search Console

1. Add property: `https://rbayoub.com` (URL prefix)
2. Verify via DNS TXT record (recommended) or HTML file
3. Submit sitemap: `https://rbayoub.com/sitemap.xml`
4. Request indexing for:
   - `https://rbayoub.com/`
   - `https://rbayoub.com/en/`
   - `https://rbayoub.com/en/services`
   - `https://rbayoub.com/en/work`
   - `https://rbayoub.com/en/method`
   - `https://rbayoub.com/en/company`
   - `https://rbayoub.com/en/contact`
   - `https://rbayoub.com/fr/`
5. Monitor Coverage report for indexing errors within 48 hours

---

## 7. Trailing Slash Policy

- Language home pages: **with trailing slash** — `/en/`, `/fr/`
- All other pages: **without trailing slash** — `/en/services`, `/en/work`, etc.
- Navigation hrefs and canonical tags follow this policy consistently
- If Coolify/Nginx redirects `/en/services/` → `/en/services`, that is fine and improves consistency
- Do not add redirect rules in application code for this — leave to the server
