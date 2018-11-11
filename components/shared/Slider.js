import React, { Component } from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'

import Handler from './Handler'
import Movie from './Movie'

class Slider extends Component {
  state = { value: 0 }

  onChange = value => this.setState({ value })

  render() {
    const { value } = this.state
    const { movies, handleSelectMovie } = this.props

    return (
      <div>
        <Carousel
          offset={6}
          value={value}
          itemWidth={206}
          onChange={this.onChange}
          centered={movies.length >= 3}
          infinite={movies.length >= 3}
          addArrowClickHandler
          arrowLeft={movies.length >= 3 && <Handler position="left" />}
          arrowRight={movies.length >= 3 && <Handler position="right" />}
        >
          {movies.map(movie => (
            <Movie key={movie.movieId} movie={movie} handleSelectMovie={handleSelectMovie} />
          ))}
        </Carousel>
        {movies.length >= 3 && <Dots value={value} number={movies.length} onChange={this.onChange} />}
      </div>
    )
  }
}

export default Slider
