import { connect } from 'react-redux'

import Modal from '../components/Modal'
import modalSelector from '../store/selectors/modal'
import { toggleVisibility } from '../store/ducks/modal'

const mapStateToProps = state => ({
  modalData: modalSelector(state),
  modalVisibility: state.modalVisibility,
  selectedPremiere: state.movies.selectedPremiere,
})

const mapDispatchToProps = {
  toggleVisibility,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
