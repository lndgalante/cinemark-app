import { sleep } from '../../utils'
import { setStatusLoading, setStatusSuccess } from './status'

// Initial State
const initialState = {
  cinemas: null,
  selectedCinema: { value: '', label: '' },
}

// Action Types
const types = {
  setCinemas: 'SET_CINEMAS',
  setCinema: 'SET_CINEMA',
  removeCinema: 'REMOVE_CINEMA',
}

// Reducer
const selectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.setCinemas: {
      return {
        ...state,
        cinemas: payload,
      }
    }

    case types.setCinema: {
      return {
        ...state,
        selectedCinema: payload,
      }
    }

    case types.removeCinema: {
      return {
        ...state,
        selectedCinema: { value: '', label: '' },
      }
    }

    default: {
      return state
    }
  }
}

// Action Creators
const setCinemas = payload => ({
  type: types.setCinemas,
  payload,
})

const setCinema = payload => ({
  type: types.setCinema,
  payload,
})

const removeCinema = () => ({
  type: types.removeCinema,
})

// Async actions
const handleSelect = payload => {
  document.title = payload.label
  document.querySelector('.btn-select').click()

  return async dispatch => {
    dispatch(setStatusLoading())
    dispatch(setCinema(payload))

    await sleep(400)
    dispatch(setStatusSuccess())
  }
}

const handleDeselect = () => {
  document.title = 'Cine Estrenos'
  document.querySelector('.btn-select').click()

  return async dispatch => {
    dispatch(setStatusLoading())
    dispatch(removeCinema())

    await sleep(1000)
    dispatch(setStatusSuccess())
  }
}

export { selectReducer, setCinemas, handleSelect, handleDeselect }
