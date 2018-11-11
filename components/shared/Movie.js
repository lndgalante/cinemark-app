import ProgressiveImage from 'react-progressive-image'
import { Heading, Pill, Paragraph, Strong, Text } from 'evergreen-ui'

import Tile from './Tile'
import Poster from './Poster'
import Overlay from './Overlay'

const getStyle = src => {
  return {
    width: '200px',
    height: '300px',
    backgroundImage: `url(${src})`,
    filter: 'blur(10px)',
    transition: 'filter 500ms ease',
  }
}

const Movie = ({ movie, handleSelectMovie }) => (
  <Tile className="tile" onClick={() => handleSelectMovie(movie)}>
    <ProgressiveImage
      src={movie.poster}
      placeholder={movie.poster.includes('w300') ? movie.poster.replace('w300', 'w200') : movie.poster}
    >
      {(src, loading) => (loading ? <div style={getStyle(src)} /> : <Poster src={src} alt={movie.title} />)}
    </ProgressiveImage>
    <Overlay className="overlay">
      <Heading color="white" marginBottom={6}>
        {movie.name}
      </Heading>

      <Pill marginBottom={8} marginRight={4}>
        {movie.minAge}
      </Pill>

      {movie.votes ? <Pill marginBottom={8}>{movie.votes}</Pill> : null}

      <Paragraph size={300} marginBottom={2}>
        <Strong color="white">Género</Strong>
        <Text color="white"> {movie.category}</Text>
      </Paragraph>

      <Paragraph size={300} marginBottom={2}>
        <Strong color="white">Duración</Strong>
        <Text color="white"> {movie.duration}</Text>
      </Paragraph>

      <Paragraph size={300} marginBottom={2}>
        <Strong color="white">Director{movie.cast.directors.length > 1 ? 'es ' : ' '}</Strong>
        <Text color="white">{movie.cast.directors.join(', ')}</Text>
      </Paragraph>

      <Paragraph size={300} marginBottom={2}>
        <Strong color="white">Actor{movie.cast.actors.length > 1 ? 'es ' : ' '} </Strong>
        <Text color="white">{movie.cast.actors.join(', ')}</Text>
      </Paragraph>
    </Overlay>
  </Tile>
)

export default Movie
