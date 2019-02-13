import styled from 'styled-components'

const Tile = styled.article`
  width: 200px;
  height: 300px;
  cursor: pointer;
  transform-origin: center center;
  transition: all 400ms ease-in-out;
  border-radius: 3px;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 768px) {
    :hover {
      .overlay {
        opacity: 1;
      }
    }
  }
`

export default Tile
