// Initial State
const initialState = false

// Action Types
const types = {
  toggleVisibility: 'TOGGLE_VISIBILITY',
}

// Reducer
const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.toggleVisibility: {
      return !state
    }

    default: {
      return state
    }
  }
}

// Action Creators
const toggleVisibility = payload => ({
  type: types.toggleVisibility,
  payload,
})

export { modalReducer, toggleVisibility }
