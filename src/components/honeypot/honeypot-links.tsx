import Link from 'next/link'

/**
 * Invisible honeypot links placed in the site footer.
 * Legitimate users (with CSS enabled and using screen readers correctly)
 * will never see or follow these. Bots that scrape raw HTML will.
 *
 * aria-hidden="true" ensures screen readers ignore these.
 * display:none via Tailwind keeps them visually hidden.
 */
export function HoneypotLinks() {
  return (
    <div className="hidden" aria-hidden="true">
      <Link href="/admin">Admin Panel</Link>
      <Link href="/wp-admin">WordPress Admin</Link>
      <Link href="/login">Login</Link>
    </div>
  )
}
