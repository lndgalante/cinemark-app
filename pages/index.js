import { Fragment } from 'react'
import { connect } from 'react-redux'

import fetch from 'node-fetch'
import { orderByDistance } from 'geolib'
import withEnv from 'env-hoc'
import '@brainhubeu/react-carousel/lib/style.css'

import Header from '../components/Header'
import Movies from '../containers/Movies'
import Modal from '../containers/Modal'

import { setCinemas } from '../store/ducks/select'
import { setPremieres } from '../store/ducks/movies'

import theaters from '../utils/theaters'

const Premieres = () => {
  return (
    <Fragment>
      <Header />
      <Movies />
      <Modal />
    </Fragment>
  )
}

Premieres.getInitialProps = async ({ env, store }) => {
  // const ipAddress = env.ipAddress
  const ipAddress = '162.158.123.132'

  const res = await fetch('https://cinemark-api.now.sh')
  const initialData = await res.json()
  store.dispatch(setPremieres(initialData))

  try {
    const resIp = await fetch(`http://ip-api.com/json/${ipAddress}`)
    const { lat, lon } = await resIp.json()
    const ordered = orderByDistance({ lat, lon }, theaters)
    const theatersOrderedByDistance = ordered.map(({ key }) => theaters[key])
    store.dispatch(setCinemas(theatersOrderedByDistance))
  } catch (error) {
    store.dispatch(setCinemas(theaters))
  }
}

export default connect()(withEnv(Premieres))
