export enum ActionTypes {
  removeUser = '[Core] Remove user',
  addUser = '[Core] Add a new user',
  editUser = '[Core] Edit user'
}

function createAction<T, P>(type: T) {
  return (payload: P): { type: T; payload: P } => {
    return { type, payload }
  }
}

export default {
  removeUser: createAction(ActionTypes.removeUser),
  addUser: createAction(ActionTypes.addUser),
  editUser: createAction(ActionTypes.editUser)
}
