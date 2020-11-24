import Router from 'next/router';
import { toaster } from 'evergreen-ui';
import queryString from 'query-string';

// utils
import { getPremiereInfo } from '../../utils';

// ducks
import { toggleVisibility } from './modal';
import { setStatusLoading, setStatusSuccess } from './status';

// Initial State
const initialState = {
  premieres: [],
  selectedPremiere: { cinemas: null },
  selectedPremiereShows: { name: null },
};

// Action Types
const types = {
  setPremiere: 'SET_PREMIERE',
  setPremieres: 'SET_PREMIERES',
  setPremiereShows: 'SET_PREMIERE_SHOWS',
};

// Reducer
const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.setPremieres: {
      return {
        ...state,
        premieres: payload,
      };
    }

    case types.setPremiere: {
      return {
        ...state,
        selectedPremiere: payload,
      };
    }

    case types.setPremiereShows: {
      return {
        ...state,
        selectedPremiereShows: payload,
      };
    }

    default: {
      return state;
    }
  }
};

// Action Creators
const setPremieres = (payload) => ({ type: types.setPremieres, payload });
const setDefaultPremiere = (payload) => ({ type: types.setPremiere, payload });
const setDefaultPremiereShows = (payload) => ({ type: types.setPremiereShows, payload });

// Async actions
const setPremiere = (payload) => {
  return async (dispatch, getState) => {
    const { selectedCinema } = getState().select;

    if (!selectedCinema.value) return toaster.warning('Primero debes elegir tu cine preferido');

    const { cinemaId } = selectedCinema;
    const { movieId } = payload;

    dispatch(setStatusLoading());

    const premiereInfo = await getPremiereInfo(movieId, cinemaId);
    const routeQueryString = queryString.stringify({ id: movieId, cinemaId });
    Router.push(`/?${routeQueryString}`, `/?${routeQueryString}`, { shallow: true });

    dispatch(setStatusSuccess());

    if (premiereInfo && premiereInfo.name) {
      dispatch(setDefaultPremiere(payload));
      dispatch(setDefaultPremiereShows(premiereInfo.shows));
      dispatch(toggleVisibility());
    }
  };
};

export { moviesReducer, setPremieres, setPremiere, setDefaultPremiere, setDefaultPremiereShows };
