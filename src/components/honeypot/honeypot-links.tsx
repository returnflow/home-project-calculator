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
      <a href="/admin">Admin Panel</a>
      <a href="/wp-admin">WordPress Admin</a>
      <a href="/login">Login</a>
    </div>
  )
}