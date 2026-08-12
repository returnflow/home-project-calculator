import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Alert } from './alert'

describe('Alert', () => {
  it('uses role="status" for informational alerts', () => {
    render(<Alert variant="info">Normal density assumed.</Alert>)
    expect(screen.getByRole('status')).toHaveTextContent('Normal density assumed.')
  })

  it('uses role="alert" for errors', () => {
    render(<Alert variant="error">Invalid input.</Alert>)
    expect(screen.getByRole('alert')).toHaveTextContent('Invalid input.')
  })

  it('renders an optional title', () => {
    render(
      <Alert variant="warning" title="Check depth">
        Depth looks shallow.
      </Alert>,
    )
    expect(screen.getByRole('status')).toHaveTextContent('Check depth')
  })
})
