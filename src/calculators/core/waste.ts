/**
 * Waste adjustment.
 * baseQuantity: the calculated quantity before waste
 * wastePercent: percentage to add (e.g., 10 for 10%)
 * Returns the adjusted quantity.
 */

export function applyWaste(baseQuantity: number, wastePercent: number): number {
  if (baseQuantity <= 0 || wastePercent < 0) {
    return baseQuantity
  }
  return baseQuantity * (1 + wastePercent / 100)
}