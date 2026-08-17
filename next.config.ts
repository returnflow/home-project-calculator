import type { NextConfig } from 'next'

/**
 * SECURITY NOTE: This app uses `output: 'export'` (static HTML).
 *
 * The following HTTPS enforcement mechanisms CANNOT be done here and
 * MUST be configured at your hosting layer (Cloudflare, Vercel,
 * Netlify, nginx, etc.):
 *
 * 1. HTTP → HTTPS redirects
 * 2. HSTS header (Strict-Transport-Security)
 * 3. Secure cookie flags (Secure; HttpOnly; SameSite=Strict)
 * 4. Certificate pinning / OCSP stapling
 *
 * What IS configured below:
 * - CSP upgrade-insecure-requests (via <meta> in layout.tsx)
 * - Client-side HTTPS redirect (first-load, best-effort)
 */

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/home-project-calculator',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
