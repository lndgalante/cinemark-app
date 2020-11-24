import { connect } from 'react-redux';

// components
import Modal from '../components/Modal';

// store
import { toggleVisibility } from '../store/ducks/modal';

const mapStateToProps = (state) => ({
  modalVisibility: state.modalVisibility,
  selectedPremiere: state.movies.selectedPremiere,
  selectedPremiereShows: state.movies.selectedPremiereShows,
});

const mapDispatchToProps = {
  toggleVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
