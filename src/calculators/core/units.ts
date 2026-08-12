/**
 * Canonical internal units (docs/ARCHITECTURE.md):
 * length: feet, area: sq ft, volume: cu ft, weight: pounds, price: USD.
 * Convert at boundaries.
 */

export const INCHES_PER_FOOT = 12
export const FEET_PER_YARD = 3
export const FEET_PER_METRE = 3.280839895
export const CUBIC_FEET_PER_CUBIC_YARD = FEET_PER_YARD ** 3
export const CUBIC_METERS_PER_CUBIC_FOOT = 0.028316846592
export const POUNDS_PER_US_TON = 2000
export const POUNDS_PER_METRIC_TONNE = 2204.62262185
export const POUNDS_PER_KILOGRAM = 2.20462262185

export function inchesToFeet(inches: number): number {
  return inches / INCHES_PER_FOOT
}

export function feetToInches(feet: number): number {
  return feet * INCHES_PER_FOOT
}

export function metresToFeet(metres: number): number {
  return metres * FEET_PER_METRE
}

export function feetToMetres(feet: number): number {
  return feet / FEET_PER_METRE
}

export function squareMetresToSquareFeet(sqM: number): number {
  return sqM * FEET_PER_METRE ** 2
}

export function squareFeetToSquareMetres(sqFt: number): number {
  return sqFt / FEET_PER_METRE ** 2
}

export function cubicFeetToCubicYards(cuFt: number): number {
  return cuFt / CUBIC_FEET_PER_CUBIC_YARD
}

export function cubicYardsToCubicFeet(cuYd: number): number {
  return cuYd * CUBIC_FEET_PER_CUBIC_YARD
}

export function cubicFeetToCubicMeters(cuFt: number): number {
  return cuFt * CUBIC_METERS_PER_CUBIC_FOOT
}

export function cubicMetersToCubicFeet(cuM: number): number {
  return cuM / CUBIC_METERS_PER_CUBIC_FOOT
}

export function kilogramsToPounds(kg: number): number {
  return kg * POUNDS_PER_KILOGRAM
}

export function poundsToKilograms(lb: number): number {
  return lb / POUNDS_PER_KILOGRAM
}

export function poundsToUsTons(lb: number): number {
  return lb / POUNDS_PER_US_TON
}

export function poundsToMetricTonnes(lb: number): number {
  return lb / POUNDS_PER_METRIC_TONNE
}
