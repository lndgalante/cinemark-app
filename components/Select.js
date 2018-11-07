import { SelectMenu, Button } from 'evergreen-ui'

const Select = ({ handleSelect, removeCinema, cinemas, selectedCinema }) => (
  <SelectMenu
    width={220}
    height={170}
    isMultiSelect
    hasTitle={false}
    options={cinemas}
    onSelect={handleSelect}
    onDeselect={removeCinema}
    selected={selectedCinema.value}
  >
    <Button height={40}>{selectedCinema.label || 'Elegí tu cine'}</Button>
  </SelectMenu>
)

export default Select
