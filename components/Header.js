import styled from 'styled-components'

import Select from '../containers/Select'
import Tags from '../containers/Tags'
import Search from '../containers/Search'

const Wrapper = styled.header`
  display: grid;
  grid-gap: 14px;
  grid-template-columns: 1fr auto;

  @media screen and (max-width: 1024px) {
    grid-auto-flow: column;
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr;

    .search-input {
      width: 100%;
    }
  }
`

const SubWrapper = styled.div`
  display: grid;
  grid-gap: 0 14px;
  grid-template-columns: max-content auto;

  .tags a {
    margin: 0;
    min-width: 0;
    cursor: pointer;

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-gap: 14px;
    grid-auto-columns: 1fr auto;
    grid-template-columns: none;
  }

  @media screen and (max-width: 768px) {
    grid-gap: 14px;
    grid-auto-flow: row;
    grid-auto-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`

const Header = props => (
  <Wrapper>
    <SubWrapper>
      <Select />
      <Tags />
    </SubWrapper>
    <Search />
  </Wrapper>
)

export default Header
