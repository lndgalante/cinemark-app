import { SelectMenu, Button, Icon } from 'evergreen-ui'
import styled from 'styled-components'

const DetailView = styled.div`
  position: absolute;
  right: 6px;
  top: 8px;
  cursor: pointer;
`

const Select = ({
  handleSelectCinema,
  handleRemoveSelectedCinema,
  state: { theaters, selectedCinemaValue, selectedCinemaLabel },
}) => (
  <SelectMenu
    width={220}
    height={170}
    hasTitle={false}
    options={theaters}
    onSelect={handleSelectCinema}
    selected={selectedCinemaValue}
    detailView={
      selectedCinemaLabel && (
        <DetailView onClick={handleRemoveSelectedCinema}>
          <Icon icon="cross" color="muted" title="Limpiar filtro" />
        </DetailView>
      )
    }
  >
    <Button height={40} className="select-button">
      {selectedCinemaLabel || 'Elegí tu cine'}
    </Button>
  </SelectMenu>
)

export default Select
