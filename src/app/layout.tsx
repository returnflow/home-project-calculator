import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { CookieConsent } from '@/components/cookie-consent'
import { HoneypotGuard } from '@/components/honeypot/honeypot-guard'
import { HoneypotLinks } from '@/components/honeypot/honeypot-links'
import './globals.css'

export const metadata: Metadata = {
  title: 'Home Project Calculator',
  description:
    'Accurate, easy-to-use calculators for home projects — starting with gravel and landscaping materials.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-surface text-gray-900 antialiased">
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
