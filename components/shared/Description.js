import { Pane, Paragraph, Strong, Text } from 'evergreen-ui'

const Description = ({ movie }) => (
  <Pane paddingX={14} paddingY={10}>
    <Paragraph marginBottom={4}>{movie.description}</Paragraph>

    <Paragraph marginBottom={2}>
      <Strong>Clasificación</Strong>
      <Text> {movie.minAge}</Text>
    </Paragraph>

    <Paragraph marginBottom={2}>
      <Strong>Género</Strong>
      <Text> {movie.category}</Text>
    </Paragraph>

    <Paragraph size={300} marginBottom={2}>
      <Strong>Duración</Strong>
      <Text> {movie.duration}</Text>
    </Paragraph>

    {movie.votes ? (
      <Paragraph marginBottom={2}>
        <Strong>Puntuación</Strong>
        <Text> {movie.votes}</Text>
      </Paragraph>
    ) : null}

    <Paragraph size={300} marginBottom={2}>
      <Strong>Director{movie.cast.directors.length > 1 ? 'es' : ''}</Strong>
      <Text> {movie.cast.directors.join(', ')}</Text>
    </Paragraph>

    <Paragraph size={300} marginBottom={2}>
      <Strong>Actor{movie.cast.actors.length > 1 ? 'es' : ''}</Strong>
      <Text> {movie.cast.actors.join(', ')}</Text>
    </Paragraph>
  </Pane>
)

export default Description
