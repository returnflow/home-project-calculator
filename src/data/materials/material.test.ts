import { describe, expect, it } from 'vitest'
import { getDensityRange, getDensityValue, formatDensity } from './material'

describe('getDensityValue', () => {
  it('returns the number when density is a single value', () => {
    expect(getDensityValue(100)).toBe(100)
  })

  it('returns the midpoint when density is a range', () => {
    expect(getDensityValue({ min: 90, max: 110 })).toBe(100)
  })
})

describe('getDensityRange', () => {
  it('returns min=max when density is a single value', () => {
    expect(getDensityRange(100)).toEqual({ min: 100, max: 100 })
  })

  it('returns the range when density is a range', () => {
    expect(getDensityRange({ min: 90, max: 110 })).toEqual({ min: 90, max: 110 })
  })
})

describe('formatDensity', () => {
  it('formats a single value', () => {
    expect(formatDensity(100)).toBe('100 lb/ft³')
  })

  it('formats a range', () => {
    expect(formatDensity({ min: 90, max: 110 })).toBe('90–110 lb/ft³')
  })
})