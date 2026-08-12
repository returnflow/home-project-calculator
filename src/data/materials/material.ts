/**
 * Material data model with provenance.
 * Every physical value must have source, URL, verified date, unit and notes.
 * See docs/ARCHITECTURE.md — "Material model" and SKILL-MATERIAL-DATA.
 */

export type MaterialSource = {
  name: string
  url: string
  verifiedDate: string // ISO 8601 date
}

export type Material = {
  id: string
  name: string
  category: string
  densityLbPerCuFt: number | { min: number; max: number }
  unit: 'lb/ft³'
  source: MaterialSource
  notes: string[]
}

export function getDensityValue(
  density: number | { min: number; max: number },
): number {
  if (typeof density === 'number') return density
  return (density.min + density.max) / 2
}

export function getDensityRange(
  density: number | { min: number; max: number },
): { min: number; max: number } {
  if (typeof density === 'number') return { min: density, max: density }
  return density
}

export function formatDensity(
  density: number | { min: number; max: number },
): string {
  if (typeof density === 'number') return `${density} lb/ft³`
  return `${density.min}–${density.max} lb/ft³`
}