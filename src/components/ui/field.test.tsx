import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Input, Select } from './field'

describe('Input', () => {
  it('associates the label with the input', () => {
    render(<Input id="length" label="Length (ft)" />)
    expect(screen.getByLabelText('Length (ft)')).toBeInTheDocument()
  })

  it('exposes the hint via aria-describedby', () => {
    render(<Input id="width" label="Width (ft)" hint="Measure inside the edging" />)
    const input = screen.getByLabelText('Width (ft)')
    expect(input).toHaveAttribute('aria-describedby', 'width-hint')
  })

  it('declares errors with aria-invalid and an assertive alert', () => {
    render(<Input id="depth" label="Depth (in)" error="Depth must be greater than 0" />)
    const input = screen.getByLabelText('Depth (in)')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    const error = screen.getByRole('alert')
    expect(error).toHaveTextContent('Depth must be greater than 0')
    expect(input.getAttribute('aria-describedby')).toContain('depth-error')
  })

  it('combines hint and error in aria-describedby', () => {
    render(<Input id="d" label="Depth" hint="inches" error="Invalid" />)
    const describedBy = screen.getByLabelText('Depth').getAttribute('aria-describedby')
    expect(describedBy).toContain('d-hint')
    expect(describedBy).toContain('d-error')
  })
})

describe('Select', () => {
  it('associates the label with the select', () => {
    render(
      <Select id="material" label="Material">
        <option value="gravel">Gravel</option>
      </Select>,
    )
    expect(screen.getByLabelText('Material')).toBeInTheDocument()
  })
})
