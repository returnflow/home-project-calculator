import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CalculatorFieldset, CalculatorSection } from './calculator-section'

describe('CalculatorSection', () => {
  it('renders a labelled region with heading and description', () => {
    render(
      <CalculatorSection title="Gravel Calculator" description="Estimate gravel for an area.">
        <p>form here</p>
      </CalculatorSection>,
    )
    expect(screen.getByRole('heading', { level: 2, name: 'Gravel Calculator' })).toBeInTheDocument()
    expect(screen.getByText('Estimate gravel for an area.')).toBeInTheDocument()
    expect(screen.getByText('form here')).toBeInTheDocument()
  })
})

describe('CalculatorFieldset', () => {
  it('exposes the legend as the group name', () => {
    render(
      <CalculatorFieldset legend="Area dimensions">
        <input aria-label="Length" />
      </CalculatorFieldset>,
    )
    expect(screen.getByRole('group', { name: 'Area dimensions' })).toBeInTheDocument()
  })
})
