import styled from 'styled-components'
import { Icon } from 'evergreen-ui'

const Wrapper = styled.div`
  width: 56px;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  background: rgba(20, 20, 20, 0.5);
  transition: opacity 400ms ease-in-out 400ms, background 400ms ease-in-out 500ms;
  position: absolute;
  top: 0;
  left: ${({ position }) => (position === 'left' ? '0px' : 'auto')};
  right: ${({ position }) => (position === 'right' ? '0px' : 'auto')};
  z-index: 10;

  @media (hover: hover) {
    :hover {
      opacity: 1;
      background: rgba(20, 20, 20, 0.7);

      svg {
        transform: scale(2);
      }
    }
  }
`

const Handler = ({ handleClick, position }) => (
  <Wrapper className="handler" onClick={handleClick} position={position}>
    <Icon icon={`chevron-${position}`} color="white" size={30} />
  </Wrapper>
)

export default Handler
