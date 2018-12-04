import styled from 'styled-components'

const Emojis = styled.div`
  opacity: 0.95;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 3px 7px;
  font-size: 21px;
  width: 100%;
  display: flex;
  justify-content: ${({ withPremiere }) => (withPremiere ? 'space-between' : 'flex-end')};
`

export default Emojis
