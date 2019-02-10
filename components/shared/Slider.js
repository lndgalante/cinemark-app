import React, { Component } from 'react'

import Handler from './Handler'
import Movie from './Movie'

class Slider extends Component {
  state = { value: 0 }

  onChange = value => this.setState({ value })

  render() {
    const { value } = this.state
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
