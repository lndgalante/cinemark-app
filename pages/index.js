import { Fragment } from 'react'
import { connect } from 'react-redux'

import fetch from 'node-fetch'
import { orderByDistance } from 'geolib'
import withEnv from 'env-hoc'

import Movies from '../containers/Movies'
import Modal from '../containers/Modal'
import Navbar from '../components/Navbar'
import Meta from '../components/Meta'

import { toggleVisibility } from '../store/ducks/modal'
import { setCinemas, setCinema } from '../store/ducks/select'
import { setPremieres, setDefaultPremiere, setDefaultPremiereShows } from '../store/ducks/movies'

import cinemas from '../utils/cinemas'

const Premieres = () => {
  return (
    <Fragment>
      <Meta />
      <Navbar />
      <Movies />
      <Modal />
    </Fragment>
  )
}

Premieres.getInitialProps = async ({ query, store, env }) => {
  const { id, cinema } = query
  const ipAddress = env.ipAddress

  if (id && cinema) {
    try {
      const urls = [
        `http://ip-api.com/json/${ipAddress}`,
        'https://cinemark-wrapper-api.now.sh/movies',
        `https://cinemark-wrapper-api.now.sh/movie?movieId=${id}&cinemaId=${cinema}`,
      ]
      const [ip, premieres, premiere] = await Promise.all(urls.map(url => fetch(url).then(res => res.json())))

      const { lat, lon } = ip
      const parsedCinemas = cinemas.map(({ name, ...restProps }) => ({ value: name, label: name, ...restProps }))
      const cinemasOrderedByDistance = orderByDistance({ lat, lon }, parsedCinemas).map(({ key }) => parsedCinemas[key])
      const selectedCinema = cinemas.find(({ cinemaId }) => String(cinemaId) === cinema)
      const selectedPremiere = premieres.find(({ movieId }) => movieId === id)

      store.dispatch(setCinemas(cinemasOrderedByDistance))
      store.dispatch(setCinema(selectedCinema))
      store.dispatch(setPremieres(premieres))
      store.dispatch(setDefaultPremiere(selectedPremiere))
      store.dispatch(setDefaultPremiereShows(premiere.shows))
      store.dispatch(toggleVisibility())
    } catch (error) {
      const urls = [
        'https://cinemark-wrapper-api.now.sh/movies',
        `https://cinemark-wrapper-api.now.sh/movie?movieId=${id}&cinemaId=${cinema}`,
      ]
      const [premieres, premiere] = await Promise.all(urls.map(url => fetch(url).then(res => res.json())))
      const selectedCinema = cinemas.find(({ cinemaId }) => String(cinemaId) === cinema)
      const selectedPremiere = premieres.find(({ movieId }) => movieId === id)

      store.dispatch(setCinemas(cinemas))
      store.dispatch(setCinema(selectedCinema))
      store.dispatch(setPremieres(premieres))
      store.dispatch(setDefaultPremiere(selectedPremiere))
      store.dispatch(setDefaultPremiereShows(premiere.shows))
      store.dispatch(toggleVisibility())
    }

    return
  }

  try {
    const urls = [`http://ip-api.com/json/${ipAddress}`, 'https://cinemark-wrapper-api.now.sh/movies']
    const [ip, premieres] = await Promise.all(urls.map(url => fetch(url).then(res => res.json())))

    const { lat, lon } = ip
    const parsedCinemas = cinemas.map(({ name, ...restProps }) => ({ value: name, label: name, ...restProps }))
    const cinemasOrderedByDistance = orderByDistance({ lat, lon }, parsedCinemas).map(({ key }) => parsedCinemas[key])

    store.dispatch(setCinemas(cinemasOrderedByDistance))
    store.dispatch(setPremieres(premieres))
  } catch (error) {
    const premieresRes = await fetch('https://cinemark-wrapper-api.now.sh/movies')
    const premieres = await premieresRes.json()

    store.dispatch(setCinemas(cinemas))
    store.dispatch(setPremieres(premieres))
  }
}

export default connect()(withEnv(Premieres))
