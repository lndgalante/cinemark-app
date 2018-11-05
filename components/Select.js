import { SelectMenu, Button } from 'evergreen-ui'

const Select = ({ handleSelectCinema, state: { theaters, selectedCinemaValue, selectedCinemaLabel } }) => (
  <SelectMenu
    width={220}
    height={170}
    hasTitle={false}
    options={theaters}
    onSelect={handleSelectCinema}
    selected={selectedCinemaValue}
  >
    <Button height={40} className="select-button">
      {selectedCinemaLabel || 'Elegí tu cine'}
    </Button>
  </SelectMenu>
)

export default Select
