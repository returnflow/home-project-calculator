/**
 * Shared result contract for every calculator.
 * See docs/ARCHITECTURE.md — "Result contract".
 */
export type CalculationResult = {
  areaSqFt?: number
  volumeCuFt?: number
  volumeCuYd?: number
  volumeM3?: number
  weightLb?: number
  weightUsTons?: number
  weightMetricTonnes?: number
  bagCount?: number
  estimatedCost?: number
  recommendedOrderQuantity?: number
  assumptions: string[]
}
