import React, { Component } from 'react'
import styled from 'styled-components'
import { Spinner } from 'evergreen-ui'

import Slider from './shared/Slider'

const MoviesContainer = styled.section`
  width: 100%;
  margin-top: 14px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 28px;
  }
`

const SpinnerContainer = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: white;
  border: 4px solid white;
`

class Movies extends Component {
  render() {
    const { status, movies, setPremiere } = this.props

    return (
      <MoviesContainer>
        {status === 'loading' && (
          <SpinnerContainer>
            <Spinner size={42} />
          </SpinnerContainer>
        )}
        <Slider movies={movies} handleSelectMovie={setPremiere} />
      </MoviesContainer>
    )
  }
}

export default Movies
