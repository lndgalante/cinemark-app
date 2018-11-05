import { Pane } from 'evergreen-ui'
import YouTube from 'react-youtube'

const Trailer = ({ videoId }) => (
  <Pane height={297}>
    <YouTube
      videoId={videoId}
      opts={{
        width: '100%',
        height: '100%',
      }}
    />
  </Pane>
)

export default Trailer
