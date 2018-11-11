import { createSelector } from 'reselect'
import { toaster } from 'evergreen-ui'

const getPremieres = state => state.movies.premieres
const getSelectedCinema = state => state.select.selectedCinema.cinemaId
const getSearchQuery = state => state.query

const filterMoviesByCinema = (movies, cinema) => movies.filter(({ inCinemas }) => inCinemas.includes(cinema))
const filterMoviesByQuery = (movies, query) =>
  movies.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()))
const filterMoviesByCinemaAndQuery = (movies, cinema, query) =>
  movies.filter(({ name, inCinemas }) => inCinemas.includes(cinema) && name.toLowerCase().includes(query.toLowerCase()))

const moviesSelector = createSelector(
  [getPremieres, getSelectedCinema, getSearchQuery],
  (movies, selectedCinema, query) => {
    // There's no filter selected
    if (!query && !selectedCinema) return movies

    // There's no query but there's a cinema selected
    if (!query && selectedCinema) return filterMoviesByCinema(movies, selectedCinema)

    // There's a query and a cinema selected
    if (query && selectedCinema) {
      const moviesFilteredByCinemaAndQuery = filterMoviesByCinemaAndQuery(movies, selectedCinema, query)

      if (!moviesFilteredByCinemaAndQuery.length) {
        toaster.warning(`No encontramos "${query}"`)
        return filterMoviesByCinema(movies, selectedCinema)
      }

      return moviesFilteredByCinemaAndQuery
    }

    // There's a query but no cinema selected
    if (query && !selectedCinema) {
      const moviesFilteredByQuery = filterMoviesByQuery(movies, query)

      if (!moviesFilteredByQuery.length) {
        toaster.warning(`No encontramos "${query}"`)
        return movies
      }

      return moviesFilteredByQuery
    }
  }
)

export default moviesSelector
