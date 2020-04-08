import React from 'react'
import { render } from '@testing-library/react'
import EditUserPage from './EditUserPage'
import { MemoryRouter } from 'react-router-dom'

const onClick = jest.fn()

describe('Edit User page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Edit user page is rendered', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <EditUserPage
          editUser={onClick}
          user={{ name: 'mockename', surname: 'surname', age: 1, email: 'kk@kk.r', id: '1' }}
        />
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('Is save button disabled', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <EditUserPage
          editUser={onClick}
          user={{ name: 'mockename', surname: 'surname', age: 1, email: 'kk@kk.r', id: '1' }}
        />
      </MemoryRouter>
    )
    expect(getByTestId('success-button')).toBeDisabled()
  })
})
