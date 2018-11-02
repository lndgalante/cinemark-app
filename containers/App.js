import { Container } from 'unstated'
import { findNearest } from 'geolib'
import { toaster } from 'evergreen-ui'

import { sleep, theaters } from '../utils'

class AppContainer extends Container {
  constructor(props) {
    super()
    const { cinemas } = props

    this.state = {
      theaters,
      status: '',
      isShown: false,
      modalData: null,
      cinemas: cinemas,
      cinemasBackup: cinemas,
      selectedCinema: null,
      selectedCinemaLabel: null,
      selectedMovie: null,
      selectedIndex: 0,
      tabs: ['Horarios', 'Sinopsis', 'Trailer'],
    }
  }

  handleLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude, longitude } = coords
          const userLocation = { latitude, longitude }
          const cinemaLocations = theaters.map(({ latitude, longitude }) => ({ latitude, longitude }))
          const { key } = findNearest(userLocation, cinemaLocations)
          const closestCinema = theaters[key]

          this.handleSelectCinema(closestCinema)
        },
        err => {
          toaster.warning('No pudimos encontrar tu ubicación')
        }
      )
    } else {
      toaster.warning('La geolocalización no esta disponible')
    }
  }

  handleSelectCinema = async ({ value, label }) => {
    document.querySelector('.select-button').click()

    await this.setState({ status: 'loading' })
    await sleep(400)

    const { cinemasBackup } = this.state
    const cinemasFiltered = cinemasBackup.filter(({ cinemas }) => cinemas.hasOwnProperty(value))

    this.setState({ selectedCinema: value, selectedCinemaLabel: label, cinemas: cinemasFiltered, status: 'success' })
  }

  handleSelectMovie = movie => {
    const { selectedCinema } = this.state
    if (!selectedCinema) return toaster.warning('Primero debes elegir tu cine preferido')

    const modalData = movie.cinemas[selectedCinema]
    this.setState({ selectedMovie: movie, modalData }, () => this.toggleDialog())
  }

  handleSelectIndex = index => this.setState({ selectedIndex: index })

  toggleDialog = () => this.setState(({ isShown }) => ({ isShown: !isShown }))

  handleConfirmDialog = () => {
    const { selectedMovie } = this.state
    window.open(selectedMovie.link)
  }

  handleOpenTrailer = () => {
    const { selectedMovie } = this.state
    window.open(selectedMovie.details.trailer)
  }
}

export default AppContainer
