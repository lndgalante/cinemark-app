import Carousel from 'nuka-carousel'
import styled from 'styled-components'
import { Spinner } from 'evergreen-ui'

import { Handler, Movie } from './shared'

const MoviesContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Movies = ({ state: { cinemas, status }, handleSelectMovie }) => (
  <MoviesContainer>
    {status === 'loading' ? (
      <Spinner />
    ) : (
      <Carousel
        cellSpacing={6}
        slideWidth="200px"
        renderBottomCenterControls={null}
        renderCenterLeftControls={({ currentSlide, previousSlide }) =>
          currentSlide > 0 && <Handler handleClick={previousSlide} position="left" />
        }
        renderCenterRightControls={props => {
          const slidesLeft = props.slideCount - props.currentSlide
          const width = props.frameWidth - props.slideWidth * slidesLeft

          if (width > 0) return null
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

export default Movies
