import { connect } from 'react-redux';

// components
import Movies from '../components/Movies';

// store
import { setPremiere } from '../store/ducks/movies';
import moviesSelector from '../store/selectors/movies';

const mapStateToProps = (state) => ({
  status: state.status,
  movies: moviesSelector(state),
});

const mapDispatchToProps = {
  setPremiere,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
