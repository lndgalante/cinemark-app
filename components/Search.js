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
    const { query } = this.state
    const { handleSearch, state } = this.props

    if (state.selectedCinema !== prevProps.state.selectedCinema) {
      handleSearch(query)
    }
  }

  render() {
    const { query } = this.state
    return (
      <SearchInput
        height={40}
        onChange={this.onChange}
        value={query}
        placeholder="Buscar película"
        className="search-input"
      />
    )
  }
}

export default Search
