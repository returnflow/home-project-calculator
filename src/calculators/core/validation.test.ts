import { describe, expect, it } from 'vitest'
import { validateNonNegativeNumber, validatePositiveNumber, validateRange } from './validation'

describe('validatePositiveNumber', () => {
  it('passes for valid positive number', () => {
    expect(validatePositiveNumber(5, 'Length')).toEqual([])
  })

  it('fails for 0', () => {
    expect(validatePositiveNumber(0, 'Length')).toEqual([
      { field: 'Length', message: 'Length must be greater than 0.' },
    ])
  })

  it('fails for negative number', () => {
    expect(validatePositiveNumber(-1, 'Length')).toEqual([
      { field: 'Length', message: 'Length must be greater than 0.' },
    ])
  })

  it('fails for undefined', () => {
    expect(validatePositiveNumber(undefined, 'Length')).toEqual([
      { field: 'Length', message: 'Length is required.' },
    ])
  })

  it('fails for null', () => {
    expect(validatePositiveNumber(null, 'Length')).toEqual([
      { field: 'Length', message: 'Length is required.' },
    ])
  })

  it('fails for NaN', () => {
    expect(validatePositiveNumber(NaN, 'Length')).toEqual([
      { field: 'Length', message: 'Length must be a number.' },
    ])
  })
})

describe('validateNonNegativeNumber', () => {
  it('passes for 0', () => {
    expect(validateNonNegativeNumber(0, 'Waste')).toEqual([])
  })

  it('passes for positive number', () => {
    expect(validateNonNegativeNumber(5, 'Waste')).toEqual([])
  })

  it('fails for negative number', () => {
    expect(validateNonNegativeNumber(-1, 'Waste')).toEqual([
      { field: 'Waste', message: 'Waste must be 0 or greater.' },
    ])
  })

  it('fails for undefined', () => {
    expect(validateNonNegativeNumber(undefined, 'Waste')).toEqual([
      { field: 'Waste', message: 'Waste is required.' },
    ])
  })
})

describe('validateRange', () => {
  it('passes for value within range', () => {
    expect(validateRange(50, 'Depth', 10, 100)).toEqual([])
  })

  it('fails for value below range', () => {
    expect(validateRange(5, 'Depth', 10, 100)).toEqual([
      { field: 'Depth', message: 'Depth must be between 10 and 100.' },
    ])
  })

  it('fails for value above range', () => {
    expect(validateRange(150, 'Depth', 10, 100)).toEqual([
      { field: 'Depth', message: 'Depth must be between 10 and 100.' },
    ])
  })

  it('fails for non-positive value', () => {
    expect(validateRange(0, 'Depth', 10, 100)).toEqual([
      { field: 'Depth', message: 'Depth must be greater than 0.' },
    ])
  })
})