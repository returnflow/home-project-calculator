import { cn } from './cn'

/**
 * Result card — presents one calculation output (label + value + unit).
 * Uses a definition list so label/value pairs are programmatically associated;
 * meaning is never conveyed by color alone.
 */
export type ResultItem = {
  label: string
  value: string
  unit?: string
}

export function ResultCard({
  title = 'Results',
  items,
  className,
  live = true,
}: {
  title?: string
  items: ResultItem[]
  className?: string
  /** Announce result updates to screen readers (accessible result updates). */
  live?: boolean
}) {
  return (
    <section
      aria-label={title}
      aria-live={live ? 'polite' : undefined}
      className={cn('rounded-xl border border-border bg-surface-muted p-5 sm:p-6', className)}
    >
      <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
      <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="rounded-lg border border-border bg-surface p-4">
            <dt className="text-sm text-gray-600">{item.label}</dt>
            <dd className="mt-1 text-2xl font-semibold tabular-nums text-gray-900">
              {item.value}
              {item.unit ? (
                <span className="ml-1 text-base font-normal text-gray-600">{item.unit}</span>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
