import React, { Component } from 'react'
import { SearchInput } from 'evergreen-ui'
import debounce from 'lodash.debounce'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
    }

    this.onChange = this.onChange.bind(this)
    this.debouncedOnChange = debounce(this.debouncedOnChange.bind(this), 500)
  }

  onChange({ target }) {
    const { value } = target
    const { handleSearching } = this.props

    handleSearching()
    this.setState({ query: value })
    this.debouncedOnChange(value)
  }

  debouncedOnChange(value) {
    this.search(value)
  }

  search(value) {
    const { handleSearch } = this.props
    handleSearch(value)
  }

  componentDidUpdate(prevProps) {
    if (this.props.state.selectedCinema !== prevProps.state.selectedCinema) {
      this.setState({ query: '' })
    }
  }

  render() {
    const { query } = this.state
    return <SearchInput height={40} onChange={this.onChange} value={query} placeholder="Buscar película" />
  }
}

export default Search
