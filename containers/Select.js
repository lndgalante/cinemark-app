import { connect } from 'react-redux'

import Select from '../components/Select'
import { handleSelect, removeCinema } from '../store/ducks/select'

const mapStateToProps = ({ select }) => ({
  cinemas: select.cinemas,
  selectedCinema: select.selectedCinema,
})

const mapDispatchToProps = {
  handleSelect,
  removeCinema,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Select)
