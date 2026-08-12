import Link from 'next/link'

/**
 * Static site header. Plain anchor text links — no menus, dropdowns or
 * client JS — keeping the header fast and fully keyboard accessible.
 * A skip link lets keyboard/screen-reader users jump past navigation.
 */
export function SiteHeader() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-2 focus:rounded-lg focus:bg-primary-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4 sm:px-6">
          <Link href="/" className="text-lg font-bold tracking-tight text-primary-800">
            Home Project Calculator
          </Link>
          <nav aria-label="Main">
            <ul className="flex items-center gap-5 text-base">
              <li>
                <Link href="/" className="text-gray-700 underline-offset-2 hover:underline">
                  Gravel calculators
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
