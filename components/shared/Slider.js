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
          infinite
          centered
          offset={6}
          value={value}
          itemWidth={206}
          onChange={this.onChange}
          addArrowClickHandler
          arrowLeft={movies.length > 1 && <Handler position="left" />}
          arrowRight={movies.length > 1 && <Handler position="right" />}
        >
          {movies.map(movie => (
            <Movie key={movie.movieId} movie={movie} handleSelectMovie={handleSelectMovie} />
          ))}
        </Carousel>
        {movies.length > 1 && <Dots value={value} onChange={this.onChange} number={movies.length} />}
      </div>
    )
  }
}

export default Slider
