import React, { Component } from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'

import Handler from './Handler'
import Movie from './Movie'

class Slider extends Component {
  state = {
    value: 0,
  }

  onChange = value => this.setState({ value })

  render() {
    const { value } = this.state
    const { movies, handleSelectMovie } = this.props

    return (
      <div>
        <Carousel
          infinite
          centered
          offset={6}
          value={value}
          onChange={this.onChange}
          addArrowClickHandler
          arrowLeft={movies.length > 1 && <Handler position="left" />}
          arrowRight={movies.length > 1 && <Handler position="right" />}
          breakpoints={{
            1680: {
              slidesPerPage: 6,
              infinite: movies.length >= 6,
              centered: movies.length >= 6,
            },
            1280: {
              slidesPerPage: 5,
              infinite: movies.length >= 5,
              centered: movies.length >= 5,
            },
            1080: {
              slidesPerPage: 4,
              infinite: movies.length >= 4,
              centered: movies.length >= 4,
            },
            868: {
              slidesPerPage: 3,
              infinite: movies.length >= 3,
              centered: movies.length >= 3,
            },
            768: {
              slidesPerPage: 2,
              infinite: movies.length >= 2,
              centered: movies.length >= 2,
            },
            576: {
              slidesPerPage: 1,
              infinite: movies.length >= 1,
              centered: movies.length >= 1,
            },
          }}
        >
          {movies.map(movie => (
            <Movie key={movie.title} movie={movie} handleSelectMovie={handleSelectMovie} />
          ))}
        </Carousel>
        {movies.length > 1 && <Dots value={value} onChange={this.onChange} number={movies.length} />}
      </div>
    )
  }
}

export default Slider
