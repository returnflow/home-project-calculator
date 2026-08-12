import { describe, expect, it } from 'vitest'
import {
  cubicFeetToCubicMeters,
  cubicFeetToCubicYards,
  cubicMetersToCubicFeet,
  cubicYardsToCubicFeet,
  feetToInches,
  feetToMetres,
  inchesToFeet,
  kilogramsToPounds,
  metresToFeet,
  poundsToKilograms,
  poundsToMetricTonnes,
  poundsToUsTons,
  squareFeetToSquareMetres,
  squareMetresToSquareFeet,
} from './units'

describe('units', () => {
  it('converts inches to feet', () => {
    expect(inchesToFeet(12)).toBe(1)
    expect(inchesToFeet(6)).toBe(0.5)
  })

  it('converts feet to inches', () => {
    expect(feetToInches(1)).toBe(12)
    expect(feetToInches(0.5)).toBe(6)
  })

  it('converts metres to feet', () => {
    expect(metresToFeet(1)).toBeCloseTo(3.280839895)
  })

  it('converts feet to metres', () => {
    expect(feetToMetres(3.280839895)).toBeCloseTo(1)
  })

  it('round-trips metres and feet', () => {
    expect(feetToMetres(metresToFeet(50))).toBeCloseTo(50)
  })

  it('converts square metres to square feet', () => {
    expect(squareMetresToSquareFeet(1)).toBeCloseTo(10.76391041671)
  })

  it('converts square feet to square metres', () => {
    expect(squareFeetToSquareMetres(10.76391041671)).toBeCloseTo(1)
  })

  it('round-trips square metres and square feet', () => {
    expect(squareFeetToSquareMetres(squareMetresToSquareFeet(100))).toBeCloseTo(100)
  })

  it('converts cubic feet to cubic yards', () => {
    expect(cubicFeetToCubicYards(27)).toBe(1)
  })

  it('converts cubic yards to cubic feet', () => {
    expect(cubicYardsToCubicFeet(1)).toBe(27)
  })

  it('round-trips cubic yards and cubic feet', () => {
    expect(cubicYardsToCubicFeet(cubicFeetToCubicYards(100))).toBeCloseTo(100)
  })

  it('converts cubic feet to cubic meters', () => {
    expect(cubicFeetToCubicMeters(1)).toBeCloseTo(0.028316846592)
  })

  it('converts cubic meters to cubic feet', () => {
    expect(cubicMetersToCubicFeet(0.028316846592)).toBeCloseTo(1)
  })

  it('round-trips cubic feet and cubic meters', () => {
    expect(cubicMetersToCubicFeet(cubicFeetToCubicMeters(500))).toBeCloseTo(500)
  })

  it('converts kilograms to pounds', () => {
    expect(kilogramsToPounds(1)).toBeCloseTo(2.20462262185)
  })

  it('converts pounds to kilograms', () => {
    expect(poundsToKilograms(2.20462262185)).toBeCloseTo(1)
  })

  it('round-trips kilograms and pounds', () => {
    expect(poundsToKilograms(kilogramsToPounds(75))).toBeCloseTo(75)
  })

  it('converts pounds to US tons', () => {
    expect(poundsToUsTons(2000)).toBe(1)
  })

  it('converts pounds to metric tonnes', () => {
    expect(poundsToMetricTonnes(2204.62262185)).toBeCloseTo(1)
  })
})
