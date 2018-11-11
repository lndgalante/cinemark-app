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

    return (
      <MoviesContainer>
        <Slider movies={movies} status={status} handleSelectMovie={setPremiere} />
      </MoviesContainer>
    )
  }
}

export default Movies
