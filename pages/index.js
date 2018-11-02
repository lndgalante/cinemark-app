import { Fragment } from 'react'
import { Provider, Subscribe } from 'unstated'
import fetch from 'node-fetch'

import { Layout, Select, Movies, Modal } from '../components'
import { AppContainer } from '../containers'

const Premieres = ({ data }) => {
  const cinemas = new AppContainer({ cinemas: data })

  return (
    <Provider inject={[cinemas]}>
      <Layout>
        <Subscribe to={[AppContainer]}>
          {props => (
            <Fragment>
              <Select {...props} />
              <Movies {...props} />
              <Modal {...props} />
            </Fragment>
          )}
        </Subscribe>
      </Layout>
    </Provider>
  )
}

Premieres.getInitialProps = async () => {
  const res = await fetch('https://cinemark-api.now.sh')
  const data = await res.json()

  return { data }
}

export default Premieres
