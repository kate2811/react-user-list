import { useSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { addUser, editUser, loadUserList, removeUser } from './thunks'

export function useUsersIds() {
  const userList = useSelector((state) => state.core.userList)
  return userList ? userList.map((item) => item.id) : null
}

export function useUserById(id: string) {
  return useSelector((state) => state.core.userList).find((item) => item.id === id)
}

export function useRemoveUser() {
  const dispatch = useDispatch()
  return useCallback(
    (email) => {
      dispatch(removeUser(email))
    },
    [dispatch]
  )
}

export function useAddUser() {
  const dispatch = useDispatch()
  return useCallback(
    (userData) => {
      dispatch(addUser(userData))
    },
    [dispatch]
  )
}

export function useEditUser() {
  const dispatch = useDispatch()
  return useCallback(
    (userData) => {
      dispatch(editUser(userData))
    },
    [dispatch]
  )
}

export function useLoadUserList() {
  const dispatch = useDispatch()
  return useCallback(() => {
    return dispatch(loadUserList())
  }, [dispatch])
}

export function useIsLoading() {
  return useSelector((state) => state.core.isLoading)
}

export function useTableItemProps(id: string) {
  const removeUser = useRemoveUser()
  const user = useUserById(id)

  if (!user) {
    throw new Error('user is not found')
  }

  const onRemove = useCallback(() => {
    removeUser(id)
  }, [id, removeUser])
  return { user, onRemove }
}
