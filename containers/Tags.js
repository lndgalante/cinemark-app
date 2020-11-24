import { connect } from 'react-redux';

// components
import Tags from '../components/Tags';

const mapStateToProps = ({ select }) => ({
  tags: select.selectedCinema.tags,
});

export default connect(mapStateToProps)(Tags);
