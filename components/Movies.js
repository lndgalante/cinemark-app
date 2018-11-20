import React, { Component } from 'react'
import styled from 'styled-components'
import { Spinner } from 'evergreen-ui'

import Slider from './shared/Slider'

const MoviesContainer = styled.section`
  width: 100%;
  height: 300px;
  margin-top: 14px;
  position: relative;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 162px);
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
  background-color: rgba(255, 255, 255, 0.8);

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
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
