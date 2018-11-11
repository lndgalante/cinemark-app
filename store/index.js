import { createStore, applyMiddleware, combineReducers } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { statusReducer } from './ducks/status'
import { selectReducer } from './ducks/select'
import { searchReducer } from './ducks/search'
import { moviesReducer } from './ducks/movies'
import { modalReducer } from './ducks/modal'

const middleware = [thunk]

const rootReducer = combineReducers({
  query: searchReducer,
  status: statusReducer,
  select: selectReducer,
  movies: moviesReducer,
  modalVisibility: modalReducer,
})

const makeStore = initialState => {
  // Remove dev tools in production
  // return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
  return createStore(rootReducer, initialState, applyMiddleware(...middleware))
}

export default makeStore
