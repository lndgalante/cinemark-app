import React, { Component } from 'react'
import styled from 'styled-components'
import { Spinner } from 'evergreen-ui'

import Slider from './shared/Slider'

const MoviesContainer = styled.section`
  width: 100%;
  height: 300px;
  margin-top: 14px;
`

const SpinnerContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

class Movies extends Component {
  render() {
    const { status, movies, setPremiere } = this.props

    if (status === 'loading') {
      return (
        <MoviesContainer>
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        </MoviesContainer>
      )
    }

    if (movies && movies.length) {
      return (
        <MoviesContainer>
          <Slider movies={movies} handleSelectMovie={setPremiere} />
        </MoviesContainer>
      )
    }

    return <MoviesContainer />
  }
}

export default Movies
