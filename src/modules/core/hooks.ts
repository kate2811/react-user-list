import { useSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { addUser, editUser, loadUserList, onFiltersChange, onFiltersReset, removeUser } from './thunks'
import { Filters } from './types'
import actions from './actions'
import { getFilteredUsersIds } from './selectors'

export function useUsersIds() {
  return useSelector(getFilteredUsersIds)
}

export function useUserById(id: string) {
  return useSelector((state) => state.core.userList).find((item) => item.id === id)
}

export function useFiltersProps() {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.core.filters)
  return {
    value,
    onChange: useCallback((value: Filters) => dispatch(onFiltersChange(value)), [dispatch]),
    onReset: useCallback(() => dispatch(onFiltersReset()), [dispatch])
  }
}

export function useSetFiltersFromUrl() {
  const dispatch = useDispatch()
  return useCallback(
    (params) => {
      const filters = Object.fromEntries(params)
      if (Object.entries(filters).length !== 0) {
        dispatch(actions.setFiltersFromUrl(filters))
      }
    },
    [dispatch]
  )
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
