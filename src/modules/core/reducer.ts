import produce from 'immer'
import { CoreModuleState } from './types'
import { ActionTypes } from './actions'

const initialState: CoreModuleState = {
  userList: [
    {
      id: '1a',
      name: 'Kate',
      surname: 'Pavlova',
      email: 'kate@pavlov-a.ru',
      age: 29
    },
    {
      id: '2a',
      name: 'Alexey',
      surname: 'Pavlov',
      email: 'mail@pavlov-a.ru',
      age: 30
    }
  ]
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
          item.id === action.payload.id ? Object.assign(draft, action.payload) : item
        )
        return draft
      }

      default:
        return state
    }
  })
}
