import { Pane, Tab } from 'evergreen-ui'
import styled from 'styled-components'

import { Select, Search } from './'

const StyledPane = styled(Pane)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .tags {
    a {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .tags {
      display: none;
    }

    .select-button {
      width: 100%;
    }

    > div {
      width: 100%;
      margin-top: 12px;

      input {
        width: 100%;
      }
    }
  }
`

const Header = props => (
  <StyledPane>
    <Pane display="flex" alignItems="center" className="subheader">
      <Select {...props} />
      {props.state.theaterTags && (
        <Pane display="inline-flex" marginLeft={8} className="tags">
          {props.state.theaterTags.map(({ tag, link }) => (
            <Tab key={tag} isSelected height={40} is="a" href={link} target="_blank">
              {tag}
            </Tab>
          ))}
        </Pane>
      )}
    </Pane>
    <Search {...props} />
  </StyledPane>
)

export default Header
