import { describe, expect, it } from 'vitest'
import { bagCount } from './bags'

describe('bagCount', () => {
  it('returns exact count when division is clean', () => {
    expect(bagCount(100, 50)).toBe(2)
  })

  it('rounds up when there is a remainder', () => {
    expect(bagCount(101, 50)).toBe(3)
    expect(bagCount(1, 50)).toBe(1)
  })

  it('returns 0 when required weight is 0', () => {
    expect(bagCount(0, 50)).toBe(0)
  })

  it('returns 0 when bag weight is 0', () => {
    expect(bagCount(100, 0)).toBe(0)
  })

  it('returns 0 for negative inputs', () => {
    expect(bagCount(-10, 50)).toBe(0)
    expect(bagCount(100, -50)).toBe(0)
  })
})