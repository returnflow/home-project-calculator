/**
 * Weight calculations.
 * volumeCuFt: volume in cubic feet
 * densityLbPerCuFt: bulk density in pounds per cubic foot
 * Returns weight in pounds.
 */

export function weightFromVolumeAndDensity(
  volumeCuFt: number,
  densityLbPerCuFt: number,
): number {
  return volumeCuFt * densityLbPerCuFt
}