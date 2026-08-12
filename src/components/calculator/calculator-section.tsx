import { Card } from '@/components/ui/card'
import { cn } from '@/components/ui/cn'

/**
 * Structural skeleton for every calculator page section.
 * Holds inputs and results; contains NO formulas (per PROMPT-002) —
 * formula logic is injected later as children/props by calculator pages.
 */
export function CalculatorSection({
  title,
  description,
  children,
  className,
}: {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section aria-labelledby="calculator-heading" className={cn('space-y-4', className)}>
      <div className="space-y-1">
        <h2 id="calculator-heading" className="text-2xl font-semibold sm:text-3xl">
          {title}
        </h2>
        {description ? <p className="text-gray-600">{description}</p> : null}
      </div>
      <Card>{children}</Card>
    </section>
  )
}

/** Grouping wrapper for calculator form fields — keeps an accessible group label. */
export function CalculatorFieldset({
  legend,
  children,
  className,
}: {
  legend: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <fieldset className={cn('space-y-4', className)}>
      <legend className="mb-3 text-base font-medium text-gray-900">{legend}</legend>
      {children}
    </fieldset>
  )
}
