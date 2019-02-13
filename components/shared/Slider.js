import React, { Component } from 'react'

import Movie from './Movie'

class Slider extends Component {
  render() {
    const { movies, handleSelectMovie } = this.props

    return (
      <React.Fragment>
        {movies.map(movie => (
          <Movie key={movie.movieId} movie={movie} handleSelectMovie={handleSelectMovie} />
        ))}
      </React.Fragment>
    )
  }
}

export default Slider
