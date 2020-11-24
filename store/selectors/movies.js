import { toaster } from 'evergreen-ui';
import { createSelector } from 'reselect';

// utils
import { normalize } from '../../utils';

const getSearchQuery = (state) => state.query;
const getPremieres = (state) => state.movies.premieres;
const getSelectedCinema = (state) => state.select.selectedCinema.cinemaId;

const filterMoviesByCinema = (movies, cinema) => {
  return movies.filter(({ inCinemas }) => inCinemas.includes(cinema));
};

const filterMoviesByQuery = (movies, query) => {
  return movies.filter(({ name }) => normalize(name).includes(query.toLowerCase()));
};

const filterMoviesByCinemaAndQuery = (movies, cinema, query) => {
  return movies.filter(
    ({ name, inCinemas }) => inCinemas.includes(cinema) && normalize(name).includes(query.toLowerCase()),
  );
};

const moviesSelector = createSelector(
  [getPremieres, getSelectedCinema, getSearchQuery],
  (movies, selectedCinema, query) => {
    // There's no filter selected
    if (!query && !selectedCinema) return movies;

    // There's no query but there's a cinema selected
    if (!query && selectedCinema) return filterMoviesByCinema(movies, selectedCinema);

    // There's a query and a cinema selected
    if (query && selectedCinema) {
      const moviesFilteredByCinemaAndQuery = filterMoviesByCinemaAndQuery(movies, selectedCinema, query);

      if (!moviesFilteredByCinemaAndQuery.length) {
        toaster.warning(`No encontramos "${query}"`);
        return filterMoviesByCinema(movies, selectedCinema);
      }

      return moviesFilteredByCinemaAndQuery;
    }

    // There's a query but no cinema selected
    if (query && !selectedCinema) {
      const moviesFilteredByQuery = filterMoviesByQuery(movies, query);

      if (!moviesFilteredByQuery.length) {
        toaster.warning(`No encontramos "${query}"`);
        return movies;
      }

      return moviesFilteredByQuery;
    }
  },
);

export default moviesSelector;
