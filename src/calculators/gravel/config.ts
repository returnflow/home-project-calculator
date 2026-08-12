/**
 * Gravel calculator configuration.
 * Defines input schema and shape options.
 */

export type ShapeType = 'rectangle' | 'circle' | 'triangle'

export type GravelInputs = {
  shape: ShapeType
  lengthFt?: number
  widthFt?: number
  radiusFt?: number
  baseFt?: number
  heightFt?: number
  depthInches?: number
  materialId: string
  wastePercent: number
  pricePerTon?: number
}

export const shapeOptions = [
  { value: 'rectangle', label: 'Rectangle' },
  { value: 'circle', label: 'Circle' },
  { value: 'triangle', label: 'Triangle' },
] as const