import configureStore from 'redux-mock-store'
import { addUser, removeUser, editUser, loadUserList } from './thunks'
import thunk from 'redux-thunk'
import { v4 } from 'uuid'

jest.mock('uuid', () => ({
  v4: () => '1'
}))

const history = {
  push: jest.fn()
}
const storage = {
  setItem: jest.fn(),
  getItem: jest.fn(() => JSON.stringify([{ name: 'Elena', surname: 'Ivanova', email: 'jj', age: 1 }]))
}

const middlewares: any[] = [thunk.withExtraArgument({ history, storage })]
const mockStore = configureStore(middlewares)
const mockUserData = { name: 'Elena', surname: 'Ivanova', email: 'jj', age: 1 }

describe('thunks', () => {
  const initialState = { core: { userList: [{ name: 'Kate', surname: 'Pavlova', email: 'jj', age: 1, id: '3' }] } }
  const store = mockStore(initialState)
  const currentUsers = initialState.core.userList

  beforeEach(() => {
    jest.clearAllMocks()
    store.clearActions()
  })

  it('addUser', () => {
    store.dispatch(addUser(mockUserData))
    const id = v4()
    const allUsers = [...initialState.core.userList, { ...mockUserData, id }]

    expect(store.getActions()).toMatchSnapshot()
    expect(history.push).toHaveBeenCalledTimes(1)
    expect(history.push).toHaveBeenCalledWith('/')
    expect(storage.setItem).toHaveBeenCalledTimes(1)
    expect(storage.setItem).toHaveBeenCalledWith('users', JSON.stringify(allUsers))
  })

  it('removeUser confirmed', () => {
    window.confirm = jest.fn(() => true)
    store.dispatch(removeUser('1'))

    expect(store.getActions()).toMatchSnapshot()
    expect(storage.setItem).toHaveBeenCalledTimes(1)
    expect(storage.setItem).toHaveBeenCalledWith('users', JSON.stringify(currentUsers))
  })

  it('removeUser uncomfirmed', () => {
    window.confirm = jest.fn(() => false)
    store.dispatch(removeUser('1'))

    expect(store.getActions()).toMatchSnapshot()
    expect(store.getActions()).toHaveLength(0)
    expect(storage.setItem).toHaveBeenCalledTimes(0)
  })

  it('editUser', () => {
    store.dispatch(editUser({ ...mockUserData, id: '2' }))

    expect(store.getActions()).toMatchSnapshot()
    expect(storage.setItem).toHaveBeenCalledTimes(1)
    expect(storage.setItem).toHaveBeenCalledWith('users', JSON.stringify(currentUsers))
  })

  it('loadUserList', async () => {
    await store.dispatch(loadUserList())
    expect(store.getActions()).toMatchSnapshot()
    expect(storage.getItem).toHaveBeenCalledTimes(1)
  })
})
