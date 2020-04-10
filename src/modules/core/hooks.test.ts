import { renderHook } from '@testing-library/react-hooks'
import {
  useRemoveUser,
  useUsersIds,
  useAddUser,
  useEditUser,
  useLoadUserList,
  useIsLoading,
  useUserById,
  useTableItemProps
} from './hooks'
import { removeUser, addUser, editUser, loadUserList } from './thunks'

jest.mock('../../store', () => {
  const state = {
    core: {
      userList: [
        {
          id: '1',
          name: 'Mihail'
        },
        {
          id: '2',
          name: 'Grigorij'
        },
        {
          id: '3',
          name: 'Proskofiya'
        }
      ],
      isLoading: true
    }
  }

  return {
    useSelector: (cb: any) => cb(state)
  }
})

jest.mock('react-redux', () => ({
  useDispatch: () => () => {}
}))

jest.mock('./thunks', () => ({
  removeUser: jest.fn(() => {}),
  addUser: jest.fn(() => {}),
  editUser: jest.fn(() => {}),
  loadUserList: jest.fn(() => {})
}))

const mockUserData = { name: 'Elena', surname: 'Ivanova', age: 30, email: 'kjjk@kk.ru' }

describe('hooks', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('useUsersIds', () => {
    const { result } = renderHook(() => useUsersIds())
    expect(result.current).toEqual(['1', '2', '3'])
  })

  it('useUserById', () => {
    const { result } = renderHook(() => useUserById('1'))
    expect(result.current).toEqual({ id: '1', name: 'Mihail' })
  })

  it('useIsLoading', () => {
    const { result } = renderHook(() => useIsLoading())
    expect(result.current).toBe(true)
  })

  it('useRemoveUser', () => {
    const { result } = renderHook(() => useRemoveUser())
    result.current('mail@test.com')
    expect(removeUser).toHaveBeenCalledTimes(1)
    expect(removeUser).toHaveBeenCalledWith('mail@test.com')
  })

  it('useAddUser', () => {
    const { result } = renderHook(() => useAddUser())
    result.current(mockUserData)
    expect(addUser).toHaveBeenCalledTimes(1)
    expect(addUser).toHaveBeenCalledWith(mockUserData)
  })

  it('useEditUser', () => {
    const { result } = renderHook(() => useEditUser())
    result.current(mockUserData)
    expect(editUser).toHaveBeenCalledTimes(1)
    expect(editUser).toHaveBeenCalledWith(mockUserData)
  })

  it('useLoadUserList', () => {
    const { result } = renderHook(() => useLoadUserList())
    result.current()
    expect(loadUserList).toHaveBeenCalledTimes(1)
  })

  describe('useTableItemProps', () => {
    it('Has useTableItemProps return user data', () => {
      const { result } = renderHook(() => useTableItemProps('1'))
      expect(result.current.user).toStrictEqual({ id: '1', name: 'Mihail' })
    })

    it('Has useTableItemProps return onRemove', () => {
      const { result } = renderHook(() => useTableItemProps('1'))
      result.current.onRemove()
      expect(removeUser).toHaveBeenCalled()
      expect(removeUser).toHaveBeenCalledWith('1')
    })

    it('Has useTableItemProps return error if user is undefined', () => {
      const { result } = renderHook(() => {
        useTableItemProps('5')
      })
      expect(() => result.current).toThrow()
    })
  })
})
