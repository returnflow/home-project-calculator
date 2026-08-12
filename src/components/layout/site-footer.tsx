import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface-muted">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} Home Project Calculator</p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <Link href="/" className="underline-offset-2 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/calculators" className="underline-offset-2 hover:underline">
                Calculators
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="underline-offset-2 hover:underline">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
