import { Heading, Pill, Paragraph, Strong, Text } from 'evergreen-ui'

import { Tile, Poster, Overlay } from '.'

const Movie = ({ cinema, index, handleSelectMovie }) => (
  <Tile className="tile" tabIndex={index} onClick={() => handleSelectMovie(cinema)}>
    <Poster src={cinema.poster} />
    <Overlay className="overlay">
      <Heading color="white" marginBottom={6}>
        {cinema.title}
      </Heading>
      <Pill marginBottom={8} marginRight={4}>
        {cinema.details.minAge}
      </Pill>
      {cinema.votes && <Pill marginBottom={8}>{cinema.votes}</Pill>}
      {[...cinema.details.extras].sort((a, b) => b.key.localeCompare(a.key)).map(({ key, value }) => (
        <Paragraph key={`${key}-${value}`} size={300} marginBottom={2}>
          <Strong color="white">{key} </Strong>
          <Text color="white">{value}</Text>
        </Paragraph>
      ))}
    </Overlay>
  </Tile>
)

export default Movie
