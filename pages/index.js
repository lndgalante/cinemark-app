import { Fragment } from 'react'
import { connect } from 'react-redux'

import fetch from 'node-fetch'
import { orderByDistance } from 'geolib'
import withEnv from 'env-hoc'
import '@brainhubeu/react-carousel/lib/style.css'

import Header from '../components/Header'
import Movies from '../containers/Movies'
import Modal from '../containers/Modal'
import Meta from '../components/Meta'

import { setCinemas } from '../store/ducks/select'
import { setPremieres } from '../store/ducks/movies'

import cinemas from '../utils/cinemas'

const Premieres = () => {
  return (
    <Fragment>
      <Meta />
      <Header />
      <Movies />
      <Modal />
    </Fragment>
  )
}

Premieres.getInitialProps = async ({ env, store }) => {
  // const ipAddress = env.ipAddress
  const ipAddress = '181.29.166.97'

  try {
    const urls = [
      `http://ip-api.com/json/${ipAddress}`,
      'https://cinemark-wrapper-api.now.sh/cinemas',
      'https://cinemark-wrapper-api.now.sh/movies',
    ]
    const [ip, cinemas, premieres] = await Promise.all(urls.map(url => fetch(url).then(res => res.json())))

    const { lat, lon } = await ip
    const parsedCinemas = cinemas.map(({ name, ...restProps }) => ({ value: name, label: name, ...restProps }))
    const cinemasOrderedByDistance = orderByDistance({ lat, lon }, parsedCinemas).map(({ key }) => parsedCinemas[key])

    store.dispatch(setCinemas(cinemasOrderedByDistance))
    store.dispatch(setPremieres(premieres))
  } catch (error) {
    const premieresRes = await fetch('https://cinemark-billboard-api.now.sh/movies')
    const premieres = await premieresRes.json()

    store.dispatch(setCinemas(cinemas))
    store.dispatch(setPremieres(premieres))
  }
}

export default connect()(withEnv(Premieres))
