import { describe, expect, it } from 'vitest'
import { gravelMaterials } from './gravel'
import { getDensityValue, getDensityRange } from './material'

describe('gravel materials dataset', () => {
  it('has at least one material', () => {
    expect(gravelMaterials.length).toBeGreaterThan(0)
  })

  it('every material has required provenance fields', () => {
    for (const material of gravelMaterials) {
      expect(material.id).toBeTruthy()
      expect(material.name).toBeTruthy()
      expect(material.category).toBe('gravel')
      expect(material.unit).toBe('lb/ft³')
      expect(material.source.name).toBeTruthy()
      expect(material.source.url).toMatch(/^https?:\/\//)
      expect(material.source.verifiedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(material.notes.length).toBeGreaterThan(0)
    }
  })

  it('every material has a valid density', () => {
    for (const material of gravelMaterials) {
      const range = getDensityRange(material.densityLbPerCuFt)
      expect(range.min).toBeGreaterThan(0)
      expect(range.max).toBeGreaterThanOrEqual(range.min)
    }
  })

  it('gravel-loose-dry has a single density value', () => {
    const gravel = gravelMaterials.find((m) => m.id === 'gravel-loose-dry')
    expect(gravel).toBeDefined()
    expect(typeof gravel!.densityLbPerCuFt).toBe('number')
    expect(getDensityValue(gravel!.densityLbPerCuFt)).toBe(105)
  })

  it('pea-gravel has a density range', () => {
    const pea = gravelMaterials.find((m) => m.id === 'pea-gravel')
    expect(pea).toBeDefined()
    expect(typeof pea!.densityLbPerCuFt).not.toBe('number')
    const range = getDensityRange(pea!.densityLbPerCuFt)
    expect(range.min).toBe(95)
    expect(range.max).toBe(105)
  })

  it('river-rock has a wider density range', () => {
    const river = gravelMaterials.find((m) => m.id === 'river-rock')
    expect(river).toBeDefined()
    const range = getDensityRange(river!.densityLbPerCuFt)
    expect(range.min).toBe(89)
    expect(range.max).toBe(115)
  })

  it('crusher-run has the highest density range', () => {
    const crusher = gravelMaterials.find((m) => m.id === 'crusher-run')
    expect(crusher).toBeDefined()
    const range = getDensityRange(crusher!.densityLbPerCuFt)
    expect(range.min).toBe(120)
    expect(range.max).toBe(140)
  })

  it('all IDs are unique', () => {
    const ids = gravelMaterials.map((m) => m.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })
})