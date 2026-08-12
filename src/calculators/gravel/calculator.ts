/**
 * Gravel calculator logic.
 * Pure function: inputs → CalculationResult via shared engine.
 * No UI, no side effects.
 */

import type { CalculationResult } from '@/types/calculation-result'
import { bagCount } from '@/calculators/core/bags'
import { calculateCost } from '@/calculators/core/pricing'
import {
  cubicFeetToCubicMeters,
  cubicFeetToCubicYards,
  inchesToFeet,
  poundsToMetricTonnes,
  poundsToUsTons,
} from '@/calculators/core/units'
import { volumeFromAreaAndDepth } from '@/calculators/core/volume'
import { applyWaste } from '@/calculators/core/waste'
import { weightFromVolumeAndDensity } from '@/calculators/core/weight'
import { circleArea, rectangleArea, triangleArea } from '@/calculators/core/geometry'
import { getDensityValue } from '@/data/materials/material'
import { gravelMaterials } from '@/data/materials/gravel'
import type { GravelInputs } from './config'
import { validateGravelInputs, type GravelValidationErrors } from './validation'

export { type GravelInputs, type GravelValidationErrors }

export function calculateGravel(inputs: GravelInputs): {
  result: CalculationResult | undefined
  errors: GravelValidationErrors
} {
  const errors = validateGravelInputs(inputs)
  if (Object.keys(errors).length > 0) {
    return { result: undefined, errors }
  }

  const material = gravelMaterials.find((m) => m.id === inputs.materialId)
  if (!material) {
    return {
      result: undefined,
      errors: { materialId: 'Selected material not found.' },
    }
  }

  const depthFt = inchesToFeet(inputs.depthInches!)
  const density = getDensityValue(material.densityLbPerCuFt)

  // Area
  let areaSqFt = 0
  switch (inputs.shape) {
    case 'rectangle':
      areaSqFt = rectangleArea(inputs.lengthFt!, inputs.widthFt!)
      break
    case 'circle':
      areaSqFt = circleArea(inputs.radiusFt!)
      break
    case 'triangle':
      areaSqFt = triangleArea(inputs.baseFt!, inputs.heightFt!)
      break
  }

  // Volume
  const volumeCuFt = volumeFromAreaAndDepth(areaSqFt, depthFt)

  // Weight
  const weightLb = weightFromVolumeAndDensity(volumeCuFt, density)

  // Waste-adjusted weight
  const adjustedWeightLb = applyWaste(weightLb, inputs.wastePercent)

  // Conversions
  const volumeCuYd = cubicFeetToCubicYards(volumeCuFt)
  const volumeM3 = cubicFeetToCubicMeters(volumeCuFt)
  const weightUsTons = poundsToUsTons(weightLb)
  const weightMetricTonnes = poundsToMetricTonnes(weightLb)

  // Bags (50 lb standard)
  const bagWeightLb = 50
  const bagCountValue = bagCount(adjustedWeightLb, bagWeightLb)

  // Cost
  let estimatedCost: number | undefined
  if (inputs.pricePerTon && inputs.pricePerTon > 0) {
    estimatedCost = calculateCost(weightUsTons, inputs.pricePerTon)
  }

  const assumptions = [
    `Material: ${material.name}`,
    `Bulk density: ${typeof material.densityLbPerCuFt === 'number' ? material.densityLbPerCuFt : `${material.densityLbPerCuFt.min}-${material.densityLbPerCuFt.max}`} lb/ft³`,
    `Depth: ${inputs.depthInches} inches`,
    inputs.wastePercent > 0 ? `Waste allowance: ${inputs.wastePercent}%` : 'No waste allowance',
    'Bag size: 50 lb',
    'Calculations use loose (uncompacted) bulk density',
  ]

  const result: CalculationResult = {
    areaSqFt,
    volumeCuFt,
    volumeCuYd,
    volumeM3,
    weightLb,
    weightUsTons,
    weightMetricTonnes,
    bagCount: bagCountValue,
    estimatedCost,
    recommendedOrderQuantity: bagCountValue,
    assumptions,
  }

  return { result, errors: {} }
}