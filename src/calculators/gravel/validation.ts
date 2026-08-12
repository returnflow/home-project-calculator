/**
 * Gravel calculator input validation.
 * Returns keyed errors for the form.
 */

import { validatePositiveNumber, validateNonNegativeNumber } from '@/calculators/core/validation'
import type { GravelInputs } from './config'

export type GravelValidationErrors = Partial<Record<keyof GravelInputs, string>>

export function validateGravelInputs(inputs: GravelInputs): GravelValidationErrors {
  const errors: GravelValidationErrors = {}

  // Shape validation
  if (!inputs.shape) {
    errors.shape = 'Shape is required.'
  }

  // Material validation
  if (!inputs.materialId) {
    errors.materialId = 'Material is required.'
  }

  // Depth validation
  const depthErrors = validatePositiveNumber(inputs.depthInches, 'Depth')
  if (depthErrors.length > 0) {
    errors.depthInches = depthErrors[0].message
  }

  // Waste validation
  const wasteErrors = validateNonNegativeNumber(inputs.wastePercent, 'Waste allowance')
  if (wasteErrors.length > 0) {
    errors.wastePercent = wasteErrors[0].message
  }

  // Shape-specific dimension validation
  switch (inputs.shape) {
    case 'rectangle': {
      const lenErrors = validatePositiveNumber(inputs.lengthFt, 'Length')
      if (lenErrors.length > 0) errors.lengthFt = lenErrors[0].message

      const widErrors = validatePositiveNumber(inputs.widthFt, 'Width')
      if (widErrors.length > 0) errors.widthFt = widErrors[0].message
      break
    }
    case 'circle': {
      const radErrors = validatePositiveNumber(inputs.radiusFt, 'Radius')
      if (radErrors.length > 0) errors.radiusFt = radErrors[0].message
      break
    }
    case 'triangle': {
      const baseErrors = validatePositiveNumber(inputs.baseFt, 'Base')
      if (baseErrors.length > 0) errors.baseFt = baseErrors[0].message

      const heightErrors = validatePositiveNumber(inputs.heightFt, 'Height')
      if (heightErrors.length > 0) errors.heightFt = heightErrors[0].message
      break
    }
  }

  // Optional price validation (only if provided)
  if (inputs.pricePerTon !== undefined && inputs.pricePerTon !== null) {
    if (typeof inputs.pricePerTon !== 'number' || Number.isNaN(inputs.pricePerTon)) {
      errors.pricePerTon = 'Price must be a number.'
    } else if (inputs.pricePerTon < 0) {
      errors.pricePerTon = 'Price must be 0 or greater.'
    }
  }

  return errors
}