import { describe, expect, it } from 'vitest'
import { applyWaste } from './waste'

describe('applyWaste', () => {
  it('adds 10% waste correctly', () => {
    expect(applyWaste(100, 10)).toBeCloseTo(110)
  })

  it('adds 0% waste correctly', () => {
    expect(applyWaste(100, 0)).toBe(100)
  })

  it('returns base when base is 0', () => {
    expect(applyWaste(0, 10)).toBe(0)
  })

  it('returns base when waste is negative', () => {
    expect(applyWaste(100, -5)).toBe(100)
  })

  it('handles fractional percentages', () => {
    expect(applyWaste(100, 7.5)).toBe(107.5)
  })
})