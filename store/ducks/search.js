import { sleep } from '../../utils'
import { setStatusLoading, setStatusSuccess } from './status'

// Initial State
const initialState = ''

// Action Types
const types = {
  setQuery: 'SET_QUERY',
}

// Reducer
const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.setQuery: {
      return payload
    }

    default: {
      return state
    }
  }
}

// Action Creators
const setQuery = payload => ({
  type: types.setQuery,
  payload,
})

// Async actions
const handleSearch = payload => {
  return async dispatch => {
    dispatch(setStatusLoading())
    dispatch(setQuery(payload))

    await sleep(1000)
    dispatch(setStatusSuccess())
  }
}

export { searchReducer, handleSearch }
