import Head from 'next/head'
import styled from 'styled-components'

import { Reset } from './shared'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Layout = ({ children }) => (
  <Wrapper>
    <Head>
      <title>Cinemark Estrenos</title>
    </Head>
    <Main>{children}</Main>
    <Reset />
  </Wrapper>
)

export default Layout
