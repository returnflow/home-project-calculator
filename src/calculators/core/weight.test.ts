import { describe, expect, it } from 'vitest'
import { weightFromVolumeAndDensity } from './weight'

describe('weightFromVolumeAndDensity', () => {
  it('calculates weight for normal case', () => {
    expect(weightFromVolumeAndDensity(27, 100)).toBe(2700)
  })

  it('returns 0 when volume is 0', () => {
    expect(weightFromVolumeAndDensity(0, 100)).toBe(0)
  })

  it('returns 0 when density is 0', () => {
    expect(weightFromVolumeAndDensity(27, 0)).toBe(0)
  })

  it('handles typical gravel density', () => {
    // Gravel bulk density ~95-105 lb/cu ft
    expect(weightFromVolumeAndDensity(1, 100)).toBe(100)
  })
})