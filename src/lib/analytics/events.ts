/**
 * Privacy-conscious analytics events.
 * Non-blocking, no personal data, fires to GA4 if available.
 *
 * Event reference (per docs/PRD.md):
 * - calculator_started    { calculator: string }
 * - calculation_completed { calculator: string, shape: string, material: string }
 * - calculator_error      { calculator: string, field: string }
 * - material_selected     { calculator: string, material: string }
 * - unit_changed          { calculator: string, unit: string }  — not yet used
 * - result_copied         { calculator: string }
 * - print_clicked         { calculator: string }
 * - related_calculator_clicked { from: string, to: string }
 */

export type AnalyticsEvent =
  | { name: 'calculator_started'; payload: { calculator: string } }
  | { name: 'calculation_completed'; payload: { calculator: string; shape: string; material: string } }
  | { name: 'calculator_error'; payload: { calculator: string; field: string } }
  | { name: 'material_selected'; payload: { calculator: string; material: string } }
  | { name: 'unit_changed'; payload: { calculator: string; unit: string } }
  | { name: 'result_copied'; payload: { calculator: string } }
  | { name: 'print_clicked'; payload: { calculator: string } }
  | { name: 'related_calculator_clicked'; payload: { from: string; to: string } }

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

/**
 * Fire an analytics event. Never throws, never blocks.
 * Respects cookie consent — only fires if user has granted consent.
 * If GA4 (gtag) is not loaded, the event is silently dropped in production
 * or logged to console in development.
 */
export function track(event: AnalyticsEvent): void {
  try {
    const { name, payload } = event

    // Gate tracking behind cookie consent
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem('cookie-consent') !== 'granted'
    ) {
      return
    }

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', name, payload)
    } else if (process.env.NODE_ENV === 'development') {
      console.log('[analytics]', name, payload)
    }
  } catch {
    // Analytics must never break the app
  }
}
