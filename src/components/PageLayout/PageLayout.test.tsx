import React from 'react'
import { render } from '@testing-library/react'
import PageLayout from './PageLayout'
import { MemoryRouter } from 'react-router-dom'

describe('Page Layout', () => {
  it('Page Layout is rendered', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <PageLayout title={'Test'} breadcrumbs={[{ title: 'path' }]}>
          <div>Mock children</div>
          <button>Mock action button</button>
        </PageLayout>
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
