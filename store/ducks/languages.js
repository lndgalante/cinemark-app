import sleep from '../../utils/sleep'
import { setStatusLoading, setStatusSuccess } from './status'

// Initial State
const initialState = {
  en: true,
  es: true,
}

// Action Types
const types = {
  setEnglish: 'SET_ENGLISH',
  setSpanish: 'SET_SPANISH',
}

// Reducer
const languagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.setEnglish: {
      return {
        ...state,
        en: payload,
      }
    }

    case types.setSpanish: {
      return {
        ...state,
        es: payload,
      }
    }

    default: {
      return state
    }
  }
}

// Action Creators
const setEnglish = payload => ({
  type: types.setEnglish,
  payload,
})

const setSpanish = payload => ({
  type: types.setSpanish,
  payload,
})

// Async actions
const handleChangeEnglish = payload => {
  return async dispatch => {
    dispatch(setStatusLoading())
    dispatch(setEnglish(payload))

    await sleep(1000)
    dispatch(setStatusSuccess())
  }
}

const handleChangeSpanish = payload => {
  return async dispatch => {
    dispatch(setStatusLoading())
    dispatch(setSpanish(payload))

    await sleep(1000)
    dispatch(setStatusSuccess())
  }
}

export { languagesReducer, handleChangeEnglish, handleChangeSpanish }
