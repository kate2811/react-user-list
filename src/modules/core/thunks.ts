import actions from './actions'
import { User, UserData } from './types'
import { State } from '../../store'
import { v4 } from 'uuid'

function updateUserList(getState: () => State) {
  const currentUsers = getState().core.userList
  localStorage.setItem('users', JSON.stringify(currentUsers))
}

export function removeUser(id: string) {
  return function(dispatch: any, getState: () => State) {
    if (window.confirm('Do you really want to remove this user?')) {
      dispatch(actions.removeUser(id))
      updateUserList(getState)
    }
  }
}

export function addUser(userData: UserData) {
  return function(dispatch: any, getState: () => State) {
    const id = v4()
    const currentUsers = getState().core.userList
    const allUsers = [...currentUsers, { ...userData, id }]
    localStorage.setItem('users', JSON.stringify(allUsers))
    dispatch(actions.addUser({ ...userData, id }))
  }
}

export function editUser(userData: User) {
  return function(dispatch: any, getState: () => State) {
    dispatch(actions.editUser(userData))
    updateUserList(getState)
  }
}

export function loadUserList() {
  return function(dispatch: any) {
    dispatch(actions.loadUserList())
    new Promise((resolve) => {
      setTimeout(() => resolve(JSON.parse(localStorage.getItem('users') as string) || []), 2000)
    }).then((result) => dispatch(actions.loadUserListSuccess(result)))
  }
}
