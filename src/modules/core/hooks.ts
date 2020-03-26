import { useSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import {addUser, editUser, loadUserList, removeUser} from './thunks'

export function useUserId() {
  return useSelector((state) => state.core.userList).map((item) => item.id)
}

export function useUserById(id: string) {
  return useSelector((state) => state.core.userList).find((item) => item.id === id)
}

export function useRemoveUser() {
  const dispatch = useDispatch()
  return useCallback(
    (email) => {
      return dispatch(removeUser(email))
    },
    [dispatch]
  )
}

export function useAddUser() {
  const dispatch = useDispatch()
  return useCallback(
    (userData) => {
      return dispatch(addUser(userData))
    },
    [dispatch]
  )
}

export function useEditUser() {
  const dispatch = useDispatch()
  return useCallback(
    (userData) => {
      return dispatch(editUser(userData))
    },
    [dispatch]
  )
}

export function useLoadUserList() {
  const dispatch = useDispatch()
  return useCallback(
    () => {
      return dispatch(loadUserList())
    },
    [dispatch]
  )
}

export function useIsLoading() {
  return useSelector((state) => state.core.isLoading)
}
