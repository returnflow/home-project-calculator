import type { Metadata, Viewport } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { CookieConsent } from '@/components/cookie-consent'
import { HoneypotGuard } from '@/components/honeypot/honeypot-guard'
import { HoneypotLinks } from '@/components/honeypot/honeypot-links'
import { HttpsEnforcer } from '@/components/security/https-enforcer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Home Project Calculator',
  description:
    'Accurate, easy-to-use calculators for home projects — starting with gravel and landscaping materials.',
}

/**
 * Content-Security-Policy delivered via <meta> because this is a static export.
 * For production, move this to an HTTP header at your hosting layer so it
 * cannot be stripped by an attacker.
 *
 * upgrade-insecure-requests: force all http:// subresources to https://
 * (prevents mixed content on supporting browsers)
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* CSP meta tag for static export — upgrade all HTTP subresources to HTTPS */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        {/* Preload connect to HTTPS origins only */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-screen flex-col bg-surface text-gray-900 antialiased">
        <HttpsEnforcer />
        <HoneypotGuard>
          <SiteHeader />
          <div id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6">
            {children}
          </div>
          <SiteFooter />
          <HoneypotLinks />
          <CookieConsent />
        </HoneypotGuard>
      </body>
    </html>
  )
}
