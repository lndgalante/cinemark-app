import { connect } from 'react-redux'

import Search from '../components/Search'
import { handleSearch } from '../store/ducks/search'

const mapDispatchToProps = {
  handleSearch,
}

export default connect(
  null,
  mapDispatchToProps
)(Search)
