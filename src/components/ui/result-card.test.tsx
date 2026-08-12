import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ResultCard } from './result-card'

describe('ResultCard', () => {
  it('renders label/value pairs in a definition list', () => {
    render(<ResultCard items={[{ label: 'Volume', value: '1.5', unit: 'cu yd' }]} />)
    expect(screen.getByText('Volume')).toBeInTheDocument()
    expect(screen.getByText('1.5')).toBeInTheDocument()
    expect(screen.getByText('cu yd')).toBeInTheDocument()
  })

  it('announces updates politely by default', () => {
    const { container } = render(<ResultCard items={[]} />)
    expect(container.querySelector('section')).toHaveAttribute('aria-live', 'polite')
  })

  it('uses the title as the accessible section label', () => {
    render(<ResultCard title="Estimate" items={[]} />)
    expect(screen.getByRole('region', { name: 'Estimate' })).toBeInTheDocument()
  })
})
