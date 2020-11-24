import { connect } from 'react-redux';

// components
import Search from '../components/Search';

// store
import { handleSearch } from '../store/ducks/search';

const mapDispatchToProps = {
  handleSearch,
};

export default connect(null, mapDispatchToProps)(Search);
