import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .slider:hover .handler {
    opacity: 1;
  }

  .slider-control-centerleft,
  .slider-control-centerright {
    height: 100%;
  }

  svg[data-icon='chevron-left'],
  svg[data-icon='chevron-right'] {
    transform-origin: center;
    transition: all 400ms ease-in-out 100ms;
  }
`

export default Reset
