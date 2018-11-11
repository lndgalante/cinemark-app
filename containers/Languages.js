import { connect } from 'react-redux'

import Languages from '../components/Languages'
import { handleChangeEnglish, handleChangeSpanish } from '../store/ducks/languages'

const mapStateToProps = ({ languages }) => ({
  english: languages.en,
  spanish: languages.es,
})

const mapDispatchToProps = {
  handleChangeEnglish,
  handleChangeSpanish,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Languages)
