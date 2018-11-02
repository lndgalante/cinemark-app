import { Pane, Button } from 'evergreen-ui'

const DetailView = ({ handleLocation, secondaryButton }) => (
  <Pane
    width={140}
    height={32}
    display="flex"
    borderBottom="default"
    justifyContent="center"
    alignItems="center"
    background="tint1"
  >
    <Button height={20} onClick={handleLocation}>
      <span role="img" aria-label="Pushpin">
        📍
      </span>
      {secondaryButton}
    </Button>
  </Pane>
)

export default DetailView
