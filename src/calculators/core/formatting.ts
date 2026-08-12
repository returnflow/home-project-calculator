/**
 * Presentation formatting for calculation results.
 * Keep full precision internally. Round only at presentation boundaries.
 */

export type FormatOptions = {
  decimals?: number
  prefix?: string
  suffix?: string
}

export function formatNumber(
  value: number | undefined,
  options: FormatOptions = {},
): string | undefined {
  if (value === undefined || Number.isNaN(value)) return undefined

  const decimals = options.decimals ?? 2
  const formatted = value.toFixed(decimals)

  // Remove trailing zeros after decimal point
  const withoutTrailing = formatted.replace(/\.?0+$/, '')

  let result = withoutTrailing
  if (options.prefix) result = options.prefix + result
  if (options.suffix) result = result + options.suffix

  return result
}

export function formatCurrency(
  value: number | undefined,
  currency: 'USD' | 'EUR' = 'USD',
  options: { decimals?: number } = {},
): string | undefined {
  if (value === undefined || Number.isNaN(value)) return undefined

  const decimals = options.decimals ?? 2

  // Use Intl for proper currency formatting
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

export function formatInteger(
  value: number | undefined,
  suffix?: string,
): string | undefined {
  if (value === undefined || Number.isNaN(value)) return undefined

  const result = Math.round(value).toString()
  return suffix ? `${result} ${suffix}` : result
}