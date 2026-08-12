import { describe, expect, it } from 'vitest'
import { volumeFromAreaAndDepth } from './volume'

describe('volumeFromAreaAndDepth', () => {
  it('calculates volume for normal case', () => {
    expect(volumeFromAreaAndDepth(100, 0.5)).toBe(50)
  })

  it('returns 0 when area is 0', () => {
    expect(volumeFromAreaAndDepth(0, 0.5)).toBe(0)
  })

  it('returns 0 when depth is 0', () => {
    expect(volumeFromAreaAndDepth(100, 0)).toBe(0)
  })

  it('handles large numbers', () => {
    expect(volumeFromAreaAndDepth(10000, 2)).toBe(20000)
  })
})