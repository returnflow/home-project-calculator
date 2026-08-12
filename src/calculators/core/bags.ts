/**
 * Bag count calculation.
 * Never round bag counts down.
 */

export function bagCount(requiredWeightLb: number, bagWeightLb: number): number {
  if (requiredWeightLb <= 0 || bagWeightLb <= 0) {
    return 0
  }
  return Math.ceil(requiredWeightLb / bagWeightLb)
}