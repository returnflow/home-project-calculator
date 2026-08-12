import Link from 'next/link'
import { Fragment } from 'react'

export type BreadcrumbItem = {
  label: string
  href?: string
}

/**
 * Accessible breadcrumb trail per WAI-ARIA breadcrumb pattern:
 * nav + aria-label, ordered list, last item is the current page
 * (aria-current="page", not a link).
 */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <Fragment key={`${item.label}-${index}`}>
              {index > 0 ? (
                <li aria-hidden="true" className="select-none text-gray-400">
                  /
                </li>
              ) : null}
              <li>
                {isLast || !item.href ? (
                  <span aria-current={isLast ? 'page' : undefined} className="text-gray-900">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="underline-offset-2 hover:underline">
                    {item.label}
                  </Link>
                )}
              </li>
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}
