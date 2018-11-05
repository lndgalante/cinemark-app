import { Container } from 'unstated'
import { toaster } from 'evergreen-ui'

import { sleep, theaters } from '../utils'

class AppContainer extends Container {
  constructor(props) {
    super()

    const { initialData, theatersOrderedByDistance } = props

    this.state = {
      theaters: theatersOrderedByDistance || theaters,
      query: '',
      status: '',
      isShown: false,
      modalData: null,
      cinemas: initialData,
      cinemasBackup: initialData,
      selectedCinema: null,
      selectedCinemaLabel: null,
      selectedMovie: null,
      selectedIndex: 0,
      tabs: ['Horarios', 'Descripción', 'Trailer'],
    }
  }

  // Select
  handleSelectCinema = async ({ value, label }) => {
    const { selectedCinema } = this.state
    if (value === selectedCinema) return toaster.notify(`${selectedCinema} se encuentra seleccionado`)

    document.querySelector('.select-button').click()

    await this.setState({ status: 'loading' })
    await sleep(400)

    const { cinemasBackup } = this.state
    const cinemasFiltered = cinemasBackup.filter(({ cinemas }) => cinemas.hasOwnProperty(value))
    const theaterTags = theaters
      .map(({ value, address, map, rooms }) => ({
        value,
        values: [{ tag: address, link: map }, { tag: rooms, link: 'https://www.cinemarkhoyts.com.ar/formatos' }],
      }))
      .find(({ value: cinema }) => cinema === value).values

    this.setState({
      theaterTags,
      selectedCinema: value,
      selectedCinemaLabel: label,
      cinemas: cinemasFiltered,
      status: 'success',
    })
  }

  handleRemoveSelectedCinema = async () => {
    document.querySelector('.select-button').click()

    await this.setState({ status: 'loading' })
    await sleep(400)

    this.setState(({ cinemasBackup }) => ({
      theaterTags: null,
      selectedCinema: '',
      selectedCinemaLabel: '',
      cinemas: cinemasBackup,
      status: 'success',
    }))
  }

  // Search
  handleSearching = () => this.setState({ status: 'loading' })

  handleSearch = async value => {
    const { cinemas, selectedCinema } = this.state

    if (selectedCinema) {
      const { cinemasBackup } = this.state

      const cinemasFiltered = cinemas.filter(
        ({ title, cinemas }) =>
          cinemas.hasOwnProperty(selectedCinema) && title.toLowerCase().includes(value.toLowerCase())
      )

      if (!cinemasFiltered.length) {
        toaster.warning(`No encontramos "${value}" en ${selectedCinema}`)
        const cinemasFiltered = cinemasBackup.filter(({ cinemas }) => cinemas.hasOwnProperty(selectedCinema))

        return this.setState({ cinemas: cinemasFiltered, status: 'failed' })
      }
    }

    if (!value) {
      if (selectedCinema) {
        const { cinemasBackup } = this.state
        const cinemasFiltered = cinemasBackup.filter(({ cinemas }) => cinemas.hasOwnProperty(selectedCinema))

        return this.setState({ cinemas: cinemasFiltered, status: 'failed' })
      }

      return this.setState(({ cinemasBackup }) => ({ cinemas: cinemasBackup, status: 'failed' }))
    }

    const cinemasFiltered = cinemas.filter(({ title }) => title.toLowerCase().includes(value.toLowerCase()))

    if (!cinemasFiltered.length) {
      toaster.warning(`No encontramos "${value}"`)
      return this.setState(({ cinemasBackup }) => ({ cinemas: cinemasBackup, status: 'failed' }))
    }

    this.setState({ cinemas: cinemasFiltered, status: 'success' })
  }

  // Movies
  handleSelectMovie = movie => {
    const { selectedCinema } = this.state
    if (!selectedCinema) return toaster.warning('Primero debes elegir tu cine preferido')

    const modalData = movie.cinemas[selectedCinema]
    this.setState({ selectedMovie: movie, modalData }, () => this.toggleDialog())
  }

  // Dialog
  toggleDialog = () => this.setState(({ isShown }) => ({ isShown: !isShown }))

  handleSelectIndex = index => this.setState({ selectedIndex: index })

  handleConfirmDialog = () => {
    const { selectedMovie } = this.state
    window.open(selectedMovie.link)
  }
}

export default AppContainer
