import configureStore from 'redux-mock-store'
import actions from './actions'
import coreReducer from './reducer'

const middlewares: any[] = []
const mockStore = configureStore(middlewares)

const mockInitialUserData = { name: 'Elena', surname: 'Ivanova', email: 'jj', age: 21, id: '1' }
const mockAddedUserData = { name: 'Regina', surname: 'Petrova', email: 'dd', age: 23, id: '2' }
const mockEditedUserData = { name: 'Irina', surname: 'Svetik', email: 'ss', age: 24, id: '1' }
const mockLoadedUserData = [
  { name: 'Regina', surname: 'Petrova', email: 'dd', age: 21, id: '3' },
  { name: 'Olesya', surname: 'Simonova', email: 'dd', age: 31, id: '4' }
]

describe('reducer', () => {
  const initialState = { core: { userList: [mockInitialUserData], isLoading: false } }
  const store = mockStore(initialState)

  beforeEach(() => {
    jest.clearAllMocks()
    store.clearActions()
  })

  it('addUser', () => {
    expect(coreReducer(initialState.core, actions.addUser(mockAddedUserData))).toStrictEqual({
      userList: [mockInitialUserData, mockAddedUserData],
      isLoading: false
    })
  })

  it('removeUser', () => {
    expect(coreReducer(initialState.core, actions.removeUser('1'))).toStrictEqual({
      userList: [],
      isLoading: false
    })
  })

  it('editUser', () => {
    expect(coreReducer(initialState.core, actions.editUser(mockEditedUserData))).toStrictEqual({
      userList: [mockEditedUserData],
      isLoading: false
    })
  })

  it('loadUserList', () => {
    expect(coreReducer(initialState.core, actions.loadUserList())).toStrictEqual({
      userList: [mockInitialUserData],
      isLoading: true
    })
  })

  it('loadUserListSuccess', () => {
    expect(coreReducer(initialState.core, actions.loadUserListSuccess(mockLoadedUserData))).toStrictEqual({
      userList: mockLoadedUserData,
      isLoading: false
    })
  })
})
