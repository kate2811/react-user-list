import React from 'react'
import { render } from '@testing-library/react'
import UserForm from './UserForm'
import { MemoryRouter } from 'react-router-dom'

const onSave = jest.fn()
const userData = { name: 'kate', surname: 'pavlova', email: 'em@al.ru', age: 20, id: '1' }

describe('User form', () => {
  it('Has form pre filled data from props', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <UserForm user={userData} onSave={onSave} />
      </MemoryRouter>
    )

    const cases = [
      { label: 'Name', expected: 'kate' },
      { label: 'Surname', expected: 'pavlova' },
      { label: 'Email', expected: 'em@al.ru' },
      { label: 'Age', expected: '20' }
    ]
    cases.forEach(({ label, expected }) => {
      expect(getByLabelText(label).getAttribute('value')).toEqual(expected)
    })
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
