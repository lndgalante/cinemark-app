import { Fragment } from 'react'
import { Provider, Subscribe } from 'unstated'
import fetch from 'node-fetch'
import { orderByDistance } from 'geolib'
import withEnv from 'env-hoc'

import { Layout, Header, Movies, Modal } from '../components'
import { AppContainer } from '../containers'
import { theaters } from '../utils'

const Premieres = ({ initialData, theatersOrderedByDistance }) => {
  const cinemas = new AppContainer({ initialData, theatersOrderedByDistance })

  return (
    <Provider inject={[cinemas]}>
      <Layout>
        <Subscribe to={[AppContainer]}>
          {props => (
            <Fragment>
              <Header {...props} />
              <Movies {...props} />
              <Modal {...props} />
            </Fragment>
          )}
        </Subscribe>
      </Layout>
    </Provider>
  )
}

Premieres.getInitialProps = async ({ env }) => {
  const ipAddress = env.ipAddress

  const res = await fetch('https://cinemark-api.now.sh')
  const initialData = await res.json()

  try {
    const resIp = await fetch(`http://ip-api.com/json/${ipAddress}`)
    const { lat, lon } = await resIp.json()
    const ordered = orderByDistance({ lat, lon }, theaters)
    const theatersOrderedByDistance = ordered.map(({ key }) => theaters[key])
    return { initialData, theatersOrderedByDistance }
  } catch (error) {
    return { initialData }
  }
}

export default withEnv(Premieres)
