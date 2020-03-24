import produce from 'immer'
import { CoreModuleState } from './types'
import { ActionTypes } from './actions'

const initialState: CoreModuleState = {
  userList: []
}

export default function coreReducer(state = initialState, action: any): CoreModuleState {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.removeUser: {
        draft.userList = draft.userList.filter((item) => item.id !== action.payload)
        return draft
      }

      case ActionTypes.addUser: {
        draft.userList.push(action.payload)
        return draft
      }

      case ActionTypes.editUser: {
        draft.userList = draft.userList.map((item) =>
          item.id === action.payload.id ? item = action.payload : item
        )
        return draft
      }

      case ActionTypes.loadUserListSuccess: {
        draft.userList = action.payload
        return draft
      }

      default:
        return state
    }
  })
}
