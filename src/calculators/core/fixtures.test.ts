/**
 * Known-answer regression tests for the full calculation pipeline.
 * These are the canonical "ground truth" calculations.
 */

import { describe, expect, it } from 'vitest'
import { bagCount } from './bags'
import { calculateCost } from './pricing'
import { cubicFeetToCubicMeters, cubicFeetToCubicYards, poundsToMetricTonnes, poundsToUsTons } from './units'
import { volumeFromAreaAndDepth } from './volume'
import { applyWaste } from './waste'
import { weightFromVolumeAndDensity } from './weight'

describe('known-answer regressions — gravel driveway', () => {
  /**
   * Scenario: 20 ft × 10 ft driveway, 6 inches deep, gravel at 100 lb/cu ft,
   * 10% waste, $50/ton, 50 lb bags.
   */
  const areaSqFt = 20 * 10
  const depthFt = 6 / 12
  const density = 100
  const wastePercent = 10
  const pricePerTon = 50
  const bagWeight = 50

  it('calculates correct volume', () => {
    const volume = volumeFromAreaAndDepth(areaSqFt, depthFt)
    expect(volume).toBe(100) // 200 sq ft × 0.5 ft = 100 cu ft
  })

  it('calculates correct weight', () => {
    const volume = volumeFromAreaAndDepth(areaSqFt, depthFt)
    const weight = weightFromVolumeAndDensity(volume, density)
    expect(weight).toBe(10000) // 100 cu ft × 100 lb/cu ft = 10,000 lb
  })

  it('calculates correct tons', () => {
    const volume = volumeFromAreaAndDepth(areaSqFt, depthFt)
    const weight = weightFromVolumeAndDensity(volume, density)
    expect(poundsToUsTons(weight)).toBe(5)
    expect(poundsToMetricTonnes(weight)).toBeCloseTo(4.5359237)
  })

  it('calculates correct cubic yards', () => {
    const volume = volumeFromAreaAndDepth(areaSqFt, depthFt)
    expect(cubicFeetToCubicYards(volume)).toBeCloseTo(3.7037)
  })

  it('calculates correct cubic metres', () => {
    const volume = volumeFromAreaAndDepth(areaSqFt, depthFt)
    expect(cubicFeetToCubicMeters(volume)).toBeCloseTo(2.83168)
  })

  it('calculates correct waste-adjusted weight', () => {
    const volume = volumeFromAreaAndDepth(areaSqFt, depthFt)
    const weight = weightFromVolumeAndDensity(volume, density)
    const adjusted = applyWaste(weight, wastePercent)
    expect(adjusted).toBe(11000) // 10,000 × 1.10
  })

  it('calculates correct bag count', () => {
    const volume = volumeFromAreaAndDepth(areaSqFt, depthFt)
    const weight = weightFromVolumeAndDensity(volume, density)
    const adjusted = applyWaste(weight, wastePercent)
    expect(bagCount(adjusted, bagWeight)).toBe(220) // 11,000 / 50 = 220
  })

  it('calculates correct cost', () => {
    const volume = volumeFromAreaAndDepth(areaSqFt, depthFt)
    const weight = weightFromVolumeAndDensity(volume, density)
    const tons = poundsToUsTons(weight)
    const cost = calculateCost(tons, pricePerTon)
    expect(cost).toBe(250) // 5 tons × $50
  })
})

describe('known-answer regressions — circle patio', () => {
  /**
   * Scenario: 8 ft radius circle patio, 4 inches deep, gravel at 100 lb/cu ft,
   * 5% waste, $60/ton, 40 lb bags.
   */
  const radius = 8
  const depthFt = 4 / 12
  const density = 100
  const wastePercent = 5
  const pricePerTon = 60
  const bagWeight = 40

  it('calculates correct area and volume', () => {
    const area = Math.PI * radius * radius
    const volume = volumeFromAreaAndDepth(area, depthFt)
    // π × 64 × 0.333... ≈ 67.02 cu ft
    expect(volume).toBeCloseTo(67.02, 1)
  })

  it('calculates correct weight', () => {
    const area = Math.PI * radius * radius
    const volume = volumeFromAreaAndDepth(area, depthFt)
    const weight = weightFromVolumeAndDensity(volume, density)
    expect(weight).toBeCloseTo(6702, 0)
  })

  it('calculates correct waste-adjusted weight', () => {
    const area = Math.PI * radius * radius
    const volume = volumeFromAreaAndDepth(area, depthFt)
    const weight = weightFromVolumeAndDensity(volume, density)
    const adjusted = applyWaste(weight, wastePercent)
    expect(adjusted).toBeCloseTo(7037.17, 1)
  })

  it('calculates correct bag count with waste', () => {
    const area = Math.PI * radius * radius
    const volume = volumeFromAreaAndDepth(area, depthFt)
    const weight = weightFromVolumeAndDensity(volume, density)
    const adjusted = applyWaste(weight, wastePercent)
    expect(bagCount(adjusted, bagWeight)).toBe(176) // ceil(7037.17 / 40)
  })

  it('calculates correct cost', () => {
    const area = Math.PI * radius * radius
    const volume = volumeFromAreaAndDepth(area, depthFt)
    const weight = weightFromVolumeAndDensity(volume, density)
    const tons = poundsToUsTons(weight)
    const cost = calculateCost(tons, pricePerTon)
    expect(cost).toBeCloseTo(201.06, 1)
  })
})

describe('known-answer regressions — multi-area garden path', () => {
  /**
   * Scenario: Two rectangular sections: 15×3 ft and 10×3 ft,
   * 3 inches deep, gravel at 95 lb/cu ft, no waste.
   */
  const shapes = [
    { type: 'rectangle' as const, length: 15, width: 3 },
    { type: 'rectangle' as const, length: 10, width: 3 },
  ]

  it('calculates correct total area', () => {
    const total = shapes.reduce((sum, s) => sum + s.length * s.width, 0)
    expect(total).toBe(75) // 45 + 30
  })

  it('calculates correct volume', () => {
    const total = shapes.reduce((sum, s) => sum + s.length * s.width, 0)
    const volume = volumeFromAreaAndDepth(total, 3 / 12)
    expect(volume).toBe(18.75) // 75 × 0.25
  })

  it('calculates correct weight', () => {
    const total = shapes.reduce((sum, s) => sum + s.length * s.width, 0)
    const volume = volumeFromAreaAndDepth(total, 3 / 12)
    const weight = weightFromVolumeAndDensity(volume, 95)
    expect(weight).toBe(1781.25) // 18.75 × 95
  })
})