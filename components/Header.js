import { Pane, Tab } from 'evergreen-ui'
import styled from 'styled-components'

import { Select, Search } from './'

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
    /* grid-template-columns: max-content 1fr; */
  }

  @media screen and (max-width: 768px) {
    grid-gap: 14px;
    grid-auto-flow: row;
    grid-auto-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`

const Tags = styled.div`
  display: grid;
  grid-gap: 14px;
  grid-auto-flow: column;
  grid-template-columns: min-content min-content;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Header = props => (
  <Wrapper>
    <SubWrapper>
      <Select {...props} />
      {props.state.theaterTags && (
        <Tags className="tags">
          {props.state.theaterTags.map(({ tag, link }) => (
            <Tab key={tag} isSelected height={40} is="a" href={link} target="_blank">
              <span>{tag}</span>
            </Tab>
          ))}
        </Tags>
      )}
    </SubWrapper>
    <Search {...props} />
  </Wrapper>
)

export default Header
