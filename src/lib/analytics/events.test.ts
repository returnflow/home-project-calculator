import { describe, expect, it, vi } from 'vitest'
import { track } from './events'

describe('analytics track', () => {
  it('calls gtag when available', () => {
    const gtag = vi.fn()
    Object.defineProperty(window, 'gtag', { value: gtag, writable: true })

    track({ name: 'calculator_started', payload: { calculator: 'gravel' } })

    expect(gtag).toHaveBeenCalledWith('event', 'calculator_started', { calculator: 'gravel' })
  })

  it('does not throw when gtag is missing', () => {
    Object.defineProperty(window, 'gtag', { value: undefined, writable: true })
    expect(() => track({ name: 'calculator_started', payload: { calculator: 'gravel' } })).not.toThrow()
  })

  it('logs to console in development when gtag missing', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    vi.stubEnv('NODE_ENV', 'development')
    Object.defineProperty(window, 'gtag', { value: undefined, writable: true })

    track({ name: 'calculation_completed', payload: { calculator: 'gravel', shape: 'rectangle', material: 'loose' } })

    expect(consoleSpy).toHaveBeenCalled()
    consoleSpy.mockRestore()
    vi.unstubAllEnvs()
  })
})