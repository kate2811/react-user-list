import actions from './actions'
import {User, UserData} from './types'
import { v4 } from 'uuid'

export function removeUser(id: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function(dispatch: any) {
    if (window.confirm('Do you really want to remove this user?')) {
      dispatch(actions.removeUser(id))
    }
  }
}

export function addUser(userData: UserData) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function(dispatch: any) {
    const id = v4()
    dispatch(actions.addUser({ ...userData, id }))
  }
}

export function editUser(userData: User) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function(dispatch: any) {
    dispatch(actions.editUser(userData))
  }
}
