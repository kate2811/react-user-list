import React from 'react'
import { render } from '@testing-library/react'
import AddUserPage from './AddUserPage'
import { MemoryRouter } from 'react-router-dom'

const onClick = jest.fn()

describe('Add User Page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Add user page is rendered', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <AddUserPage addUser={onClick} />
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('Is add button disabled', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <AddUserPage addUser={onClick} />
      </MemoryRouter>
    )
    expect(getByTestId('success-button')).toBeDisabled()
  })
})
