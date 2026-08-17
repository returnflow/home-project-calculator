'use client'

import { useEffect } from 'react'

/**
 * Best-effort client-side HTTPS enforcement.
 *
 * CRITICAL LIMITATION: This only runs after JavaScript loads.
 * A true HTTP→HTTPS redirect must be configured at the hosting layer
 * (Cloudflare, Vercel, Netlify, nginx, CDN, etc.).
 *
 * This component handles two things:
 * 1. Redirects if `window.location.protocol === 'http:'` and not localhost
 * 2. Logs a console warning so developers remember to configure the host
 */
export function HttpsEnforcer() {
  useEffect(() => {
    // Skip during SSR / prerender
    if (typeof window === 'undefined') return

    const isLocalhost =
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname === '[::1]'

    const isSecure = window.location.protocol === 'https:' || window.location.protocol === 'file:'

    // 1. Redirect HTTP to HTTPS (won't help against active MITM, but
    //    catches lazy bookmarks and referrer leaks)
    if (!isSecure && !isLocalhost) {
      window.location.replace(
        `https://${window.location.host}${window.location.pathname}${window.location.search}${window.location.hash}`
      )
      return
    }

    // 2. Console reminder for hosting-layer configuration
    if (isLocalhost) {
      // eslint-disable-next-line no-console
      console.info(
        '[Security] Running on localhost — HTTPS redirect & HSTS must be configured at your hosting layer before going live.'
      )
    }
  }, [])

  return null
}