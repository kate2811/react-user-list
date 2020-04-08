import React from 'react'
import { render } from '@testing-library/react'
import UserForm from './UserForm'
import { MemoryRouter } from 'react-router-dom'

const onSave = jest.fn()
const userData = { name: 'kate', surname: 'pavlova', email: 'em@al.ru', age: 20, id: '1' }

describe('User form', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Has form refilled data from props', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <UserForm user={userData} onSave={onSave} />
      </MemoryRouter>
    )

    function CompareInputValue(labelText: string, expectedText: string) {
      return expect(getByLabelText(labelText).getAttribute('value')).toEqual(expectedText)
    }
    CompareInputValue('Name', 'kate')
    CompareInputValue('Surname', 'pavlova')
    CompareInputValue('Email', 'em@al.ru')
    CompareInputValue('Age', '20')
  })

  it('Are inputs empty', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <UserForm onSave={onSave} />
      </MemoryRouter>
    )
    expect(getByLabelText('Name')).toBeEmpty()
    expect(getByLabelText('Surname')).toBeEmpty()
    expect(getByLabelText('Email')).toBeEmpty()
    expect(getByLabelText('Age')).toBeEmpty()
  })

  it('Is save button disabled', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <UserForm onSave={onSave} />
      </MemoryRouter>
    )
    expect(getByTestId('success-button')).toBeDisabled()
  })
})
