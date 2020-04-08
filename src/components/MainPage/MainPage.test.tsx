import React from 'react'
import { render } from '@testing-library/react'
import MainPage from './MainPage'
import { MemoryRouter } from 'react-router-dom'

jest.mock('../TableItem', () => ({
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
})
