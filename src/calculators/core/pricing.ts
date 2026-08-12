/**
 * Pricing calculations.
 * quantity: the quantity to price (weight, volume, or count)
 * unitPrice: price per unit
 * Returns total cost.
 */

export function calculateCost(quantity: number, unitPrice: number): number {
  if (quantity <= 0 || unitPrice <= 0) {
    return 0
  }
  return quantity * unitPrice
}