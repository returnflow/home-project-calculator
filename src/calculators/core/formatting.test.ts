import { describe, expect, it } from 'vitest'
import { formatCurrency, formatInteger, formatNumber } from './formatting'

describe('formatNumber', () => {
  it('formats with default 2 decimals', () => {
    expect(formatNumber(3.14159)).toBe('3.14')
  })

  it('removes trailing zeros', () => {
    expect(formatNumber(3.0)).toBe('3')
  })

  it('returns undefined for undefined', () => {
    expect(formatNumber(undefined)).toBeUndefined()
  })

  it('returns undefined for NaN', () => {
    expect(formatNumber(NaN)).toBeUndefined()
  })

  it('formats with custom decimals', () => {
    expect(formatNumber(3.14159, { decimals: 4 })).toBe('3.1416')
  })

  it('adds prefix and suffix', () => {
    expect(formatNumber(100, { prefix: '~', suffix: ' sq ft' })).toBe('~100 sq ft')
  })
})

describe('formatCurrency', () => {
  it('formats USD by default', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56')
  })

  it('formats EUR', () => {
    expect(formatCurrency(1234.56, 'EUR')).toBe('€1,234.56')
  })

  it('returns undefined for undefined', () => {
    expect(formatCurrency(undefined)).toBeUndefined()
  })

  it('formats with custom decimals', () => {
    expect(formatCurrency(1234.5, 'USD', { decimals: 0 })).toBe('$1,235')
  })
})

describe('formatInteger', () => {
  it('formats as integer', () => {
    expect(formatInteger(3.7)).toBe('4')
  })

  it('adds suffix', () => {
    expect(formatInteger(5, 'bags')).toBe('5 bags')
  })

  it('returns undefined for undefined', () => {
    expect(formatInteger(undefined)).toBeUndefined()
  })
})