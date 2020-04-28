import actions from './actions'
import { Filters, User, UserData } from './types'
import { State } from '../../store'

import { v4 } from 'uuid'

export function removeUser(id: string) {
  return function(dispatch: any, getState: () => State, { storage }: any) {
    if (window.confirm('Do you really want to remove this user?')) {
      dispatch(actions.removeUser(id))
      storage.setItem('users', JSON.stringify(getState().core.userList))
    }
  }
}

export function addUser(userData: UserData) {
  return function(dispatch: any, getState: () => State, { history, storage }: any) {
    dispatch(actions.resetFilters({ query: '', minAge: 1, maxAge: 59 }))
    const id = v4()
    const currentUsers = getState().core.userList
    const allUsers = [...currentUsers, { ...userData, id }]
    storage.setItem('users', JSON.stringify(allUsers))
    dispatch(actions.addUser({ ...userData, id }))
    history.push('/')
  }
}

export function editUser(userData: User) {
  return function(dispatch: any, getState: () => State, { history, storage }: any) {
    dispatch(actions.resetFilters({ query: '', minAge: 1, maxAge: 59 }))
    dispatch(actions.editUser(userData))
    storage.setItem('users', JSON.stringify(getState().core.userList))
    history.push('/')
  }
}

export function loadUserList() {
  return function(dispatch: any, getState: () => State, { storage }: any) {
    dispatch(actions.loadUserList())
    return new Promise((resolve) => {
      setTimeout(() => resolve(JSON.parse(storage.getItem('users') as string) || []), 2000)
    }).then((result) => dispatch(actions.loadUserListSuccess(result)))
  }
}

export function onFiltersChange(value: Filters) {
  return function(dispatch: any, getState: () => State, { history }: any) {
    dispatch(actions.setFilters(value))
    const params = new URLSearchParams()
    if (value.query) {
      params.append('query', value.query)
    }
    if (value.minAge) {
      params.append('minAge', String(value.minAge))
    }
    if (value.maxAge) {
      params.append('maxAge', String(value.maxAge))
    }
    history.push({
      search: params.toString()
    })
  }
}

export function onFiltersReset(minAge: number, maxAge: number) {
  return function(dispatch: any, getState: () => State, { history }: any) {
    dispatch(actions.resetFilters({ query: '', minAge: minAge, maxAge: maxAge }))
    history.push('/')
  }
}
