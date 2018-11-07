import { createSelector } from 'reselect'

const getPremiereCinemas = state => state.movies.selectedPremiere.cinemas
const getSelectedCinema = state => state.select.selectedCinema.value

const modalSelector = createSelector([getPremiereCinemas, getSelectedCinema], (movieCinemas, selectedCinema) => {
  if (!selectedCinema) return { error: 'No cinema selected' }

  if (!movieCinemas) return null

  return movieCinemas.hasOwnProperty(selectedCinema) ? movieCinemas[selectedCinema] : null
})

export default modalSelector
