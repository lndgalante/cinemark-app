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
`

const Movies = ({ state: { cinemas, status }, handleSelectMovie, width }) => (
  <MoviesContainer>
    {status === 'loading' ? (
      <Spinner />
    ) : (
      <Carousel
        cellSpacing={6}
        slideWidth="200px"
        wrapAround={width < 768}
        cellAlign={width < 768 ? 'center' : 'left'}
        renderBottomCenterControls={null}
        renderCenterLeftControls={({ currentSlide, previousSlide }) => {
          if (currentSlide < 0 || width < 768) return null
          return <Handler handleClick={previousSlide} position="left" />
        }}
        renderCenterRightControls={props => {
          const slidesLeft = props.slideCount - props.currentSlide
          const calculatedWidth = props.frameWidth - props.slideWidth * slidesLeft
          if (calculatedWidth > 0 || width < 768) return null
          return <Handler handleClick={props.nextSlide} position="right" />
        }}
      >
        {cinemas.map((cinema, index) => (
          <Movie key={cinema.title} cinema={cinema} index={index} handleSelectMovie={handleSelectMovie} />
        ))}
      </Carousel>
    )}
  </MoviesContainer>
)

export default withWindowSize(Movies)
