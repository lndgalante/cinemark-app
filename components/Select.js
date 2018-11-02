import { Pane, SelectMenu, Button } from 'evergreen-ui'

import { DetailView } from './shared'

const Select = ({
  state: { theaters, selectedCinemaValue, selectedCinemaLabel },
  handleSelectCinema,
  handleLocation,
}) => (
  <Pane marginBottom={24}>
    <SelectMenu
      options={theaters}
      hasTitle={false}
      onSelect={handleSelectCinema}
      selected={selectedCinemaValue}
      detailView={<DetailView secondaryButton="Más cercano" handleLocation={handleLocation} />}
    >
      <Button height={40} className="select-button">
        {selectedCinemaLabel || 'Elegí tu cine'}
      </Button>
    </SelectMenu>
  </Pane>
)

export default Select
