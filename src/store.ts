import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as reactRedux from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import coreReducer from './modules/core/reducer'

const reducer = combineReducers({
  core: coreReducer
})

export type State = ReturnType<typeof reducer>

export const useSelector: <TSelected>(
  selector: (state: State) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) => TSelected = reactRedux.useSelector

export default createStore(
  reducer,
  composeWithDevTools({ name: 'UserList' })(applyMiddleware(thunk.withExtraArgument({})))
)
