import { SelectMenu, Button } from 'evergreen-ui'

const Select = ({ cinemas, selectedCinema, handleSelect, handleDeselect }) => (
  <SelectMenu
    width={220}
    height={170}
    isMultiSelect
    hasTitle={false}
    options={cinemas}
    onSelect={handleSelect}
    onDeselect={handleDeselect}
    selected={selectedCinema.value}
  >
    <Button height={40}>{selectedCinema.label || 'Elegí tu cine'}</Button>
  </SelectMenu>
)

export default Select
