import { connect } from 'react-redux';

// components
import Select from '../components/Select';

// store
import { handleSelect, handleDeselect } from '../store/ducks/select';

const mapStateToProps = ({ select }) => ({
  cinemas: select.cinemas,
  selectedCinema: select.selectedCinema,
});

const mapDispatchToProps = {
  handleSelect,
  handleDeselect,
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
