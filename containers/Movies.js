import { connect } from 'react-redux'

import Movies from '../components/Movies'
import { setPremiere } from '../store/ducks/movies'
import moviesSelector from '../store/selectors/movies'

const mapStateToProps = state => ({
  status: state.status,
  movies: moviesSelector(state),
})

const mapDispatchToProps = {
  setPremiere,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies)
