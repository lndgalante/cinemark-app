import { connect } from 'react-redux'

import Select from '../components/Select'
import { handleSelect, handleDeselect } from '../store/ducks/select'

const mapStateToProps = ({ select }) => ({
  cinemas: select.cinemas,
  selectedCinema: select.selectedCinema,
})

const mapDispatchToProps = {
  handleSelect,
  handleDeselect,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Select)
