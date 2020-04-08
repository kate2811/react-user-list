import React from 'react'
import { render } from '@testing-library/react'
import UserForm from './UserForm'
import { MemoryRouter } from 'react-router-dom'

const onSave = jest.fn()

describe('User form', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Is user data loaded', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <UserForm user={{ name: 'kate', surname: 'pavlova', email: 'em@al.ru', age: 20, id: '1' }} onSave={onSave} />
      </MemoryRouter>
    )
    expect((getByTestId('input-name')).getAttribute('value')).toEqual('kate')
  })

  it('Is save button disabled', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <UserForm user={{ name: 'name', surname: 'surname', email: 'em@al.ru', age: 20, id: '1' }} onSave={onSave} />
      </MemoryRouter>
    )
    expect(getByTestId('success-button')).toBeDisabled()
  })

  it('Is input empty', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <UserForm onSave={onSave} />
      </MemoryRouter>
    )
    expect(getByTestId('input-name')).toBeEmpty()
  })

  it('Is input required', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <UserForm onSave={onSave} />
      </MemoryRouter>
    )
    expect(getByTestId('input-name')).not.toBeRequired()
  })

  it('Is form contains input', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <UserForm onSave={onSave} />
      </MemoryRouter>
    )
    const form = getByTestId('form')
    const input = getByTestId('input-name')
    expect(form).toContainElement(input)
  })


})
