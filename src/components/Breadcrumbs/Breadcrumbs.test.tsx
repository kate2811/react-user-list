import React from 'react'
import { render } from '@testing-library/react'
import Breadcrumbs from './Breadcrumbs'
import { MemoryRouter } from 'react-router-dom'

describe('Breadcrumbs', () => {
  it('The path has content from props without link', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Breadcrumbs breadcrumbs={[{ title: 'test title' }]} />
      </MemoryRouter>
    )
    expect(getByTestId('path item')).toHaveTextContent('test title')
  })

  it('The path has content from props with link', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Breadcrumbs breadcrumbs={[{ title: 'test title', to: '/' }]} />
      </MemoryRouter>
    )
    expect(getByTestId('path item')).toContainHTML('<a href="/">test title</a>')
  })
})
