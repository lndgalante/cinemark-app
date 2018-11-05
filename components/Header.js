import { Pane } from 'evergreen-ui'
import styled from 'styled-components'

import { Select, Search } from './'

const StyledPane = styled(Pane)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .select-button {
      width: 100%;
    }

    > div {
      width: 100%;

      input {
        width: 100%;
      }
    }
  }
`

const Header = props => (
  <StyledPane>
    <Select {...props} />
    <Search {...props} />
  </StyledPane>
)

export default Header
