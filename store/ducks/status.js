// Initial State
const initialState = ''

// Action Types
const types = {
  setLoading: 'SET_LOADING',
  setSuccess: 'SET_SUCCESS',
}

// Reducer
const statusReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.setLoading: {
      return 'loading'
    }

    case types.setSuccess: {
      return 'success'
    }

    default: {
      return state
    }
  }
}

// Action Creators
const setStatusLoading = () => ({
  type: types.setLoading,
})

const setStatusSuccess = () => ({
  type: types.setSuccess,
})

export { statusReducer, setStatusLoading, setStatusSuccess }
