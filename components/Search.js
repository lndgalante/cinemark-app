import React, { Component, Fragment } from 'react'
import { SearchInput } from 'evergreen-ui'
import debounce from 'lodash.debounce'
import styled from 'styled-components'

const Label = styled.label`
  display: none;
`

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = { query: '' }

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
      <Fragment>
        <Label htmlFor="search-input">Buscar película</Label>
        <SearchInput
          height={40}
          value={query}
          onChange={this.onChange}
          id="search-input"
          className="search-input"
          placeholder="Buscar película"
        />
      </Fragment>
    )
  }
}

export default Search
