# HTTPS Setup Guide

> This app is a **static export** (`output: 'export'`). Server-side security headers and redirects **cannot** be delivered by Next.js — they must be configured at your hosting layer.

---

## Checklist

- [ ] **HTTP → HTTPS redirect** configured at host
- [ ] **HSTS header** sent on all HTTPS responses
- [ ] **Secure cookie flags** set for any server-side cookies
- [ ] **TLS 1.2+ only** (disable TLS 1.0 / 1.1)
- [ ] **Certificate** valid and auto-renewing

---

## What the App Already Does (Client-Side)

| Feature | Implementation | Limitation |
|---------|---------------|------------|
| CSP `upgrade-insecure-requests` | `<meta>` tag in `layout.tsx` | Only affects subresources; can be stripped by MITM before HTML arrives |
| Client-side HTTP→HTTPS redirect | `HttpsEnforcer` component | Only runs after JS loads; first request may still be HTTP |
| Secure preconnect hints | `preconnect` to `https://` origins only | Hints only; doesn't enforce |

---

## What You MUST Configure at the Host

### 1. HTTP → HTTPS Redirect

**Cloudflare:**
```
Rules → Transform Rules → URL Rewrite
When: (http.request.uri.scheme eq "http")
Then: Redirect to https://... (301)
```

**Vercel:**
Automatic (enabled by default for custom domains).

**Netlify:**
`_redirects` file:
```
http://* https://:splat 301!
```

**nginx:**
```nginx
server {
    listen 80;
    server_name _;
    return 301 https://$host$request_uri;
}
```

---

### 2. HSTS Header

Send this header on **all** HTTPS responses:

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

| Directive | Meaning |
|-----------|---------|
| `max-age=63072000` | Cache for 2 years (in seconds) |
| `includeSubDomains` | Apply to all subdomains |
| `preload` | Eligible for browser preload lists |

**Cloudflare:**
SSL/TLS → Edge Certificates → Always Use HTTPS + HSTS (enable all).

**nginx:**
```nginx
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
```

---

### 3. Secure Cookies

If your host sets any cookies (analytics, auth, etc.), ensure flags:

```
Set-Cookie: name=value; Secure; HttpOnly; SameSite=Strict
```

- `Secure` — only sent over HTTPS
- `HttpOnly` — not accessible from JavaScript
- `SameSite=Strict` — never sent on cross-site requests

---

## Mixed Content Scan Results

| Check | Result |
|-------|--------|
| Internal links | All relative (`/privacy`, `/calculators/...`) ✅ |
| External links in markup | All `https://` (`aboutcookies.org`, `policies.google.com`, GitHub) ✅ |
| Image assets | All local SVGs in `/public` ✅ |
| Preconnect hints | Pointing to `https://www.googletagmanager.com` ✅ |
| `http://` hardcoded anywhere | ❌ None found |

**Verdict:** No mixed content sources detected in source code.

---

## Testing After Deployment

1. Visit `http://your-domain.com` — should 301 to `https://`
2. `curl -I https://your-domain.com` — should see `strict-transport-security` header
3. [SSL Labs Test](https://www.ssllabs.com/ssltest/) — aim for A+
4. [Security Headers](https://securityheaders.com/) — check HSTS, CSP, referrer-policy