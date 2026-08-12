import { describe, expect, it } from 'vitest'
import { circleArea, rectangleArea, totalArea, triangleArea } from './geometry'

describe('geometry', () => {
  describe('rectangleArea', () => {
    it('calculates area for normal case', () => {
      expect(rectangleArea(10, 5)).toBe(50)
    })

    it('returns 0 when length or width is 0', () => {
      expect(rectangleArea(0, 5)).toBe(0)
      expect(rectangleArea(10, 0)).toBe(0)
    })

    it('handles fractional dimensions', () => {
      expect(rectangleArea(2.5, 4)).toBe(10)
    })
  })

  describe('circleArea', () => {
    it('calculates area for radius 1', () => {
      expect(circleArea(1)).toBeCloseTo(Math.PI)
    })

    it('calculates area for radius 2', () => {
      expect(circleArea(2)).toBeCloseTo(4 * Math.PI)
    })

    it('returns 0 for radius 0', () => {
      expect(circleArea(0)).toBe(0)
    })
  })

  describe('triangleArea', () => {
    it('calculates area for normal case', () => {
      expect(triangleArea(10, 4)).toBe(20)
    })

    it('returns 0 when base or height is 0', () => {
      expect(triangleArea(0, 4)).toBe(0)
      expect(triangleArea(10, 0)).toBe(0)
    })
  })

  describe('totalArea', () => {
    it('sums multiple shapes', () => {
      const shapes = [
        { type: 'rectangle' as const, length: 10, width: 5 },
        { type: 'circle' as const, radius: 1 },
        { type: 'triangle' as const, base: 10, height: 4 },
      ]
      expect(totalArea(shapes)).toBeCloseTo(50 + Math.PI + 20)
    })

    it('returns 0 for empty array', () => {
      expect(totalArea([])).toBe(0)
    })
  })
})