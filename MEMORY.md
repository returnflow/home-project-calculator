# Project Memory

> **Convention:** Read this file at the start of every session. Append new facts under `## Key Facts` and log the session under `## Session Log`. Never delete existing facts unless they are explicitly invalidated.

---

## How to Use

1. **At session start:** Read this file to recall project context.
2. **During work:** When you learn a non-obvious fact that future sessions should know, append it to the relevant section under `## Key Facts`.
3. **At session end:** Log what you did under `## Session Log` with the date and a brief summary.

---

## Key Facts

### Dependencies

- **Locking strategy:** Production deps (`next`, `react`, `react-dom`) are pinned to exact versions. DevDependencies use `^` ranges — exact versions are only guaranteed by `package-lock.json`.
- **Security status:** `npm audit` clean (0 vulnerabilities) as of 2025-08-17.
- **TypeScript registry anomaly:** `npm outdated` reports `typescript` latest as `7.0.2`, which is suspicious — official TypeScript stable is v5.x. Verify before upgrading.
- **Packages with available updates:** `@testing-library/user-event` (14.6.3 → 14.6.4), `eslint-config-next` (16.3.0 → 16.3.1), `next` (16.3.0 → 16.3.1).
- **Packages on older major lines:** `@types/node` (20.x, latest 26.x), `eslint` (9.x, latest 10.x) — not urgent.

### Architecture

- (To be populated)

### Security / HTTPS

- **Static export limitation:** `output: 'export'` means server-side headers (HSTS, redirects, secure cookies) CANNOT be set by Next.js. Must be configured at hosting layer (Cloudflare, Vercel, nginx, etc.).
- **Client-side mitigations in place:** CSP `upgrade-insecure-requests` meta tag, `HttpsEnforcer` component for best-effort JS redirect, secure preconnect hints.
- **Mixed content scan:** Clean — no `http://` hardcoded in source. All external links use `https://`, all internal links are relative.
- **Hosting checklist pending:** HTTP→HTTPS redirect, HSTS header, TLS 1.2+, secure cookie flags. See `docs/HTTPS_SETUP.md`.

### Constraints

- `output: 'export'` (static HTML) — no server-side rendering, no API routes, no middleware.

---

## Session Log

| Date | Summary |
|------|---------|
| 2025-08-17 | Audited dependency setup. Confirmed mixed version locking (exact prod deps, loose dev deps). No security vulnerabilities. Flagged TypeScript `7.0.2` registry anomaly. Created this memory file convention. |
| 2025-08-17 | Implemented HTTPS hardening: added CSP `upgrade-insecure-requests` meta tag, `HttpsEnforcer` component, secure preconnect hints, and `docs/HTTPS_SETUP.md` for hosting-layer configuration. Mixed content scan clean. |
