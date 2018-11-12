import { Pane } from 'evergreen-ui'
import styled from 'styled-components'

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`

const Trailer = ({ videoId }) => (
  <Pane height={297}>
    <Iframe src={`https://www.youtube.com/embed/${videoId}`} />
  </Pane>
)

export default Trailer
