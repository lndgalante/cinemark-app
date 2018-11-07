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
    this.setState({ query: value }, () => this.debouncedOnChange(value))
  }

  debouncedOnChange(value) {
    this.search(value)
  }

  search(value) {
    const { handleSearch } = this.props
    handleSearch(value)
  }

  render() {
    const { query } = this.state

    return (
      <SearchInput
        height={40}
        value={query}
        onChange={this.onChange}
        className="search-input"
        placeholder="Buscar película"
      />
    )
  }
}

export default Search
