import React from 'react'
import { render } from '@testing-library/react'
import TableItem from './TableItem'
import { MemoryRouter } from 'react-router-dom'

const onClick = jest.fn()
const mockUser = { name: 'kate', surname: 'pavlova', email: 'kk@d.ru', age: 28, id: '1' }

describe('List Item', () => {
  it('Remove button is clickable', () => {
    const { getByTestId } = render(<TableItem user={mockUser} onRemove={onClick} />)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
