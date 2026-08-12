import { describe, expect, it } from 'vitest'
import { calculateCost } from './pricing'

describe('calculateCost', () => {
  it('calculates cost for normal case', () => {
    expect(calculateCost(10, 5)).toBe(50)
  })

  it('returns 0 when quantity is 0', () => {
    expect(calculateCost(0, 5)).toBe(0)
  })

  it('returns 0 when unit price is 0', () => {
    expect(calculateCost(10, 0)).toBe(0)
  })

  it('returns 0 for negative inputs', () => {
    expect(calculateCost(-10, 5)).toBe(0)
    expect(calculateCost(10, -5)).toBe(0)
  })

  it('handles fractional quantities and prices', () => {
    expect(calculateCost(2.5, 1.5)).toBe(3.75)
  })
})