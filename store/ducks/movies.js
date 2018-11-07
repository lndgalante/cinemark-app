import { toggleVisibility } from './modal'

// Initial State
const initialState = {
  premieres: [],
  selectedPremiere: { cinemas: null },
}

// Action Types
const types = {
  setPremieres: 'SET_PREMIERES',
  setPremiere: 'SET_PREMIERE',
}

// Reducer
const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.setPremieres: {
      return {
        ...state,
        premieres: payload,
      }
    }

    case types.setPremiere: {
      return {
        ...state,
        selectedPremiere: payload,
      }
    }

    default: {
      return state
    }
  }
}

// Action Creators
const setPremieres = payload => ({
  type: types.setPremieres,
  payload,
})

const setDefaultPremiere = payload => ({
  type: types.setPremiere,
  payload,
})

const setPremiere = payload => {
  return (dispatch, getState) => {
    const { selectedCinema } = getState().select

    dispatch(setDefaultPremiere(payload))
    if (selectedCinema.value) dispatch(toggleVisibility())
  }
}

export { moviesReducer, setPremieres, setPremiere }
