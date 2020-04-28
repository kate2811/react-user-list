import produce from 'immer'
import { CoreModuleState } from './types'
import { ActionTypes } from './actions'

export const initialState: CoreModuleState = {
  userList: [],
  filters: {
    query: '',
    minAge: 1,
    maxAge: 59
  },
  sortParams: { direction: undefined, field: undefined },
  isLoading: false,
  requiredAge: { min: 1, max: 59 }
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
        draft.userList = draft.userList.map((item) => (item.id === action.payload.id ? action.payload : item))
        return draft
      }

      case ActionTypes.loadUserList: {
        draft.isLoading = true
        return draft
      }

      case ActionTypes.loadUserListSuccess: {
        draft.userList = action.payload
        draft.isLoading = false
        return draft
      }

      case ActionTypes.setFilters: {
        draft.filters = action.payload
        return draft
      }

      case ActionTypes.resetFilters: {
        draft.filters = action.payload
        return draft
      }

      case ActionTypes.setFiltersFromUrl: {
        draft.filters = action.payload
        return draft
      }

      case ActionTypes.setSortParams: {
        draft.sortParams = action.payload
        return draft
      }

      default:
        return state
    }
  })
}
