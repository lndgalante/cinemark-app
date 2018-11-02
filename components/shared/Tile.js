import styled from 'styled-components'

const Tile = styled.div`
  width: 100%;
  height: 300px;
  cursor: pointer;
  transform-origin: center center;
  transition: all 400ms ease-in-out;
  position: relative;

  :hover .overlay {
    opacity: 1;
  }
`

export default Tile
