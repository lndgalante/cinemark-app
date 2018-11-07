import { createSelector } from 'reselect'
import { toaster } from 'evergreen-ui'

const getPremiereCinemas = state => state.movies.selectedPremiere.cinemas
const getSelectedCinema = state => state.select.selectedCinema.value

const modalSelector = createSelector([getPremiereCinemas, getSelectedCinema], (movieCinemas, selectedCinema) => {
  if (!selectedCinema) {
    // toaster.warning('Primero debes elegir tu cine preferido')
    return null
  }

  return movieCinemas.hasOwnProperty(selectedCinema) ? movieCinemas[selectedCinema] : null
})

export default modalSelector
