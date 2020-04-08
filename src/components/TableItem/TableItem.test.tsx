import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TableItem from './TableItem'
import { MemoryRouter } from 'react-router-dom'

const onClick = jest.fn()
const mockUser = { name: 'kate', surname: 'pavlova', email: 'kk@d.ru', age: 28, id: '1' }

describe('List Item', () => {
  it('Remove button is clickable', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <table>
          <tbody>
            <TableItem user={mockUser} onRemove={onClick} />
          </tbody>
        </table>
      </MemoryRouter>
    )

    fireEvent.click(getByTestId('remove button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
