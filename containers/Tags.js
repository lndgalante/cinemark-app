import { connect } from 'react-redux'

import Tags from '../components/Tags'

const mapStateToProps = ({ select }) => ({
  tags: select.selectedCinema.tags,
})

export default connect(mapStateToProps)(Tags)
