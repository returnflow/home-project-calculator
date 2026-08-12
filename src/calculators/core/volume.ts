/**
 * Volume calculations.
 * areaSqFt: area in square feet
 * depthFt: depth in feet
 * Returns cubic feet.
 */

export function volumeFromAreaAndDepth(areaSqFt: number, depthFt: number): number {
  return areaSqFt * depthFt
}