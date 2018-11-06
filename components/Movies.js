import React, { Component } from 'react'
import Carousel from 'nuka-carousel'
import styled from 'styled-components'
import { Spinner } from 'evergreen-ui'
import { withWindowSize } from 'react-fns'

import { Handler, Movie } from './shared'

const MoviesContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
  background-color: rgba(249, 249, 251, 0.4);
`

const leftControl = ({ currentSlide, previousSlide }) => {
  if (currentSlide === 0) return null
  return <Handler handleClick={previousSlide} position="left" />
}

const rightControl = ({ slideCount, currentSlide, frameWidth, slideWidth, nextSlide }) => {
  const slidesLeft = slideCount - currentSlide
  const calculatedWidth = frameWidth - slideWidth * slidesLeft
  if (calculatedWidth > 0) return null
  return <Handler handleClick={nextSlide} position="right" />
}

const Movies = ({ state: { cinemas, status }, handleSelectMovie, width }) => (
  <MoviesContainer>
    {status === 'loading' ? (
      <Spinner />
    ) : (
      <Carousel
        cellSpacing={6}
        slideWidth="200px"
        wrapAround={
          (cinemas.length > 2 && width < 600) ||
          (cinemas.length > 3 && width < 768) ||
          (cinemas.length > 5 && width < 1024)
        }
        cellAlign={
          (cinemas.length > 2 && width < 600) ||
          (cinemas.length > 3 && width < 768) ||
          (cinemas.length > 5 && width < 1024)
            ? 'center'
            : 'left'
        }
        renderBottomCenterControls={null}
        renderCenterLeftControls={leftControl}
        renderCenterRightControls={rightControl}
      >
        {cinemas.map((cinema, index) => (
          <Movie key={cinema.title} cinema={cinema} index={index} handleSelectMovie={handleSelectMovie} />
        ))}
      </Carousel>
    )}
  </MoviesContainer>
)

export default withWindowSize(Movies)
