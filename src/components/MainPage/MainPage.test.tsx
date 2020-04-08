import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import MainPage from './MainPage'
import { MemoryRouter } from 'react-router-dom'

const onClick = jest.fn()

jest.mock('./TableItem', () => ({
  __esModule: true,
  default: function TableItem(props: any) {
    return (
      <tr data-testid="tr">
        <td>{JSON.stringify(props)}</td>
      </tr>
    )
  }
}))

describe('MainPage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('is loading', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <MainPage isLoading={true} userIdList={null} />
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('is loaded', () => {
    const { getAllByTestId } = render(
      <MemoryRouter>
        <MainPage isLoading={false} userIdList={['1', '2', '3']} />
      </MemoryRouter>
    )
    expect(getAllByTestId('tr').length).toEqual(3)
  })

  it('button is clickable', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <MainPage isLoading={false} userIdList={null} />
      </MemoryRouter>
    )
    fireEvent.click(getByTestId('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('button is clickable 2', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <MainPage isLoading={false} userIdList={null} />
      </MemoryRouter>
    )
    fireEvent.click(getByTestId('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
