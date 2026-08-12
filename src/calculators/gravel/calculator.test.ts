import { describe, expect, it } from 'vitest'
import { calculateGravel } from './calculator'

describe('calculateGravel', () => {
  it('calculates rectangle gravel correctly', () => {
    const { result, errors } = calculateGravel({
      shape: 'rectangle',
      lengthFt: 20,
      widthFt: 10,
      depthInches: 6,
      materialId: 'gravel-loose-dry',
      wastePercent: 10,
    })

    expect(errors).toEqual({})
    expect(result).toBeDefined()
    expect(result!.areaSqFt).toBe(200)
    expect(result!.volumeCuFt).toBe(100)
    expect(result!.weightLb).toBe(10500) // 100 * 105
    expect(result!.bagCount).toBeGreaterThanOrEqual(231)
    expect(result!.bagCount).toBeLessThanOrEqual(232)
  })

  it('calculates circle gravel correctly', () => {
    const { result, errors } = calculateGravel({
      shape: 'circle',
      radiusFt: 8,
      depthInches: 4,
      materialId: 'gravel-loose-dry',
      wastePercent: 5,
    })

    expect(errors).toBeDefined()
    expect(Object.keys(errors).length).toBe(0)
    expect(result).toBeDefined()
    expect(result!.areaSqFt).toBeCloseTo(201.06, 1)
    expect(result!.volumeCuFt).toBeCloseTo(67.02, 1)
  })

  it('calculates triangle gravel correctly', () => {
    const { result, errors } = calculateGravel({
      shape: 'triangle',
      baseFt: 10,
      heightFt: 5,
      depthInches: 3,
      materialId: 'pea-gravel',
      wastePercent: 0,
    })

    expect(errors).toEqual({})
    expect(result).toBeDefined()
    expect(result!.areaSqFt).toBe(25)
    expect(result!.volumeCuFt).toBeCloseTo(6.25, 1)
  })

  it('includes cost when price is provided', () => {
    const { result } = calculateGravel({
      shape: 'rectangle',
      lengthFt: 20,
      widthFt: 10,
      depthInches: 6,
      materialId: 'gravel-loose-dry',
      wastePercent: 0,
      pricePerTon: 50,
    })

    expect(result!.estimatedCost).toBeCloseTo(262.5, 0) // 5.25 tons * $50
  })

  it('returns errors for invalid inputs', () => {
    const { result, errors } = calculateGravel({
      shape: 'rectangle',
      lengthFt: 0,
      widthFt: 10,
      depthInches: -1,
      materialId: '',
      wastePercent: -5,
    })

    expect(result).toBeUndefined()
    expect(errors.lengthFt).toBeDefined()
    expect(errors.depthInches).toBeDefined()
    expect(errors.materialId).toBeDefined()
    expect(errors.wastePercent).toBeDefined()
  })

  it('returns error for unknown material', () => {
    const { result, errors } = calculateGravel({
      shape: 'rectangle',
      lengthFt: 10,
      widthFt: 10,
      depthInches: 6,
      materialId: 'nonexistent',
      wastePercent: 0,
    })

    expect(result).toBeUndefined()
    expect(errors.materialId).toBeDefined()
  })

  it('includes assumptions in result', () => {
    const { result } = calculateGravel({
      shape: 'rectangle',
      lengthFt: 10,
      widthFt: 10,
      depthInches: 6,
      materialId: 'crushed-stone',
      wastePercent: 5,
    })

    expect(result!.assumptions.length).toBeGreaterThan(0)
    expect(result!.assumptions.some((a) => a.includes('Crushed Stone'))).toBe(true)
  })
})