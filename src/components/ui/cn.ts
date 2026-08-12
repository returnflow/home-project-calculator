/**
 * Tiny class merge helper. Intentionally no third-party dependency —
 * we only need conditional joining, not full tailwind-merge semantics.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}
