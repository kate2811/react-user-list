import { Filters } from './types'

export enum ActionTypes {
  removeUser = '[Core] Remove user',
  addUser = '[Core] Add a new user',
  editUser = '[Core] Edit user',
  loadUserList = '[Core] Load users list',
  loadUserListSuccess = '[Core] Load users list success',
  setFilters = '[Core] Set filters',
  resetFilters = '[Core] Reset filters',
  setFiltersFromUrl = '[Core] Set filters from url queries'
}

function createAction<T, P>(type: T) {
  return (payload: P): { type: T; payload: P } => {
    return { type, payload }
  }
}

export default {
  removeUser: createAction(ActionTypes.removeUser),
  addUser: createAction(ActionTypes.addUser),
  editUser: createAction(ActionTypes.editUser),
  loadUserList: createAction<ActionTypes.loadUserList, void>(ActionTypes.loadUserList),
  loadUserListSuccess: createAction(ActionTypes.loadUserListSuccess),
  setFilters: createAction<ActionTypes.setFilters, Filters>(ActionTypes.setFilters),
  resetFilters: createAction(ActionTypes.resetFilters),
  setFiltersFromUrl: createAction(ActionTypes.setFiltersFromUrl)
}
