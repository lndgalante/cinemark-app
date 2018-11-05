import { Pane, Paragraph, Strong, Text } from 'evergreen-ui'

const Description = ({ movie }) => (
  <Pane paddingX={14} paddingY={10}>
    <Paragraph marginBottom={4}>{movie.details.description}</Paragraph>

    <Paragraph marginBottom={2}>
      <Strong>Clasificación</Strong>
      <Text> {movie.details.minAge}</Text>
    </Paragraph>

    {movie.votes && (
      <Paragraph marginBottom={2}>
        <Strong>Puntuación</Strong>
        <Text> {movie.votes}</Text>
      </Paragraph>
    )}

    {[...movie.details.extras].sort((a, b) => b.key.localeCompare(a.key)).map(({ key, value }) => (
      <Paragraph key={`${key}-${value}`} size={300} marginBottom={2}>
        <Strong>{key} </Strong>
        <Text>{value}</Text>
      </Paragraph>
    ))}
  </Pane>
)

export default Description
