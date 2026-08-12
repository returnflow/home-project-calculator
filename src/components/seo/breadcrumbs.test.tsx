import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Breadcrumbs } from '../seo/breadcrumbs'

describe('Breadcrumbs', () => {
  it('marks the last item as the current page and does not link it', () => {
    render(
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Gravel', href: '/gravel' },
          { label: 'Gravel Calculator' },
        ]}
      />,
    )
    const nav = screen.getByRole('navigation', { name: 'Breadcrumb' })
    expect(nav).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Gravel' })).toHaveAttribute('href', '/gravel')

    const current = screen.getByText('Gravel Calculator')
    expect(current).toHaveAttribute('aria-current', 'page')
    expect(current.closest('a')).toBeNull()
  })

  it('uses an ordered list', () => {
    const { container } = render(
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'X' }]} />,
    )
    expect(container.querySelector('ol')).not.toBeNull()
  })
})
