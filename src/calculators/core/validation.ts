/**
 * Input validation for calculators.
 * Returns an array of human-readable error messages.
 * An empty array means the input is valid.
 */

export type ValidationError = {
  field: string
  message: string
}

export function validatePositiveNumber(
  value: number | undefined | null,
  fieldName: string,
): ValidationError[] {
  const errors: ValidationError[] = []

  if (value === undefined || value === null) {
    errors.push({ field: fieldName, message: `${fieldName} is required.` })
    return errors
  }

  if (typeof value !== 'number' || Number.isNaN(value)) {
    errors.push({ field: fieldName, message: `${fieldName} must be a number.` })
    return errors
  }

  if (value <= 0) {
    errors.push({ field: fieldName, message: `${fieldName} must be greater than 0.` })
  }

  return errors
}

export function validateNonNegativeNumber(
  value: number | undefined | null,
  fieldName: string,
): ValidationError[] {
  const errors: ValidationError[] = []

  if (value === undefined || value === null) {
    errors.push({ field: fieldName, message: `${fieldName} is required.` })
    return errors
  }

  if (typeof value !== 'number' || Number.isNaN(value)) {
    errors.push({ field: fieldName, message: `${fieldName} must be a number.` })
    return errors
  }

  if (value < 0) {
    errors.push({ field: fieldName, message: `${fieldName} must be 0 or greater.` })
  }

  return errors
}

export function validateRange(
  value: number | undefined | null,
  fieldName: string,
  min: number,
  max: number,
): ValidationError[] {
  const errors = validatePositiveNumber(value, fieldName)
  if (errors.length > 0) return errors

  const v = value as number
  if (v < min || v > max) {
    errors.push({
      field: fieldName,
      message: `${fieldName} must be between ${min} and ${max}.`,
    })
  }

  return errors
}