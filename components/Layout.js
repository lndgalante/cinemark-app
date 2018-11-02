import React, { Component } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import ReactGA from 'react-ga'

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

class Layout extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-128371929-1')
    ReactGA.pageview(window.location.pathname)
  }

  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <Head>
          <title>Cinemark Estrenos</title>
        </Head>
        <Main>{children}</Main>
        <Reset />
      </Wrapper>
    )
  }
}

export default Layout
