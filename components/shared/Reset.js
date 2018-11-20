import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    user-select: none;
    box-sizing: border-box;
  }

  body {
    overflow: hidden;
  }

  /* Carousel */
  .BrainhubCarousel {
    position: relative;
    width: 100%;
    height: 300px;
  }

  @media screen and (min-width: 768px) {
    .BrainhubCarousel:hover .handler {
      opacity: 1;
    }
  }

  .BrainhubCarousel {
    transition: filter 300ms ease-in-out;
  }

  .blur {
    filter: blur(3px);
  }

  .BrainhubCarousel .BrainhubCarousel__trackContainer {
    margin: 0 -3px;
  }

  .BrainhubCarousel__customArrows {
    height: 100%;
  }

  /* Carousel Handlers */
  svg[data-icon='chevron-left'],
  svg[data-icon='chevron-right'] {
    transform-origin: center;
    transition: all 400ms ease-in-out 100ms;
  }

  /* Spinner */
  circle {
    stroke: white !important;
  }

  /* Modal styles */
  #panel-Funciones .📦wht-spc_nowrap  {
    white-space: normal !important;
  }

  .📦ml_16px[role='dialog'] {
    padding-bottom: 14px;
  }

  @media screen and (max-width: 576px) {
    .📦ml_16px[role='dialog'] {
      margin: 68px 0 0 0 !important;
      width: 100% !important;
      max-width: 100vw !important;
      height: 100% !important;
      max-height: calc(100vh - 68px) !important;
      padding: 0 0 14px 0 !important;
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }

    .date-cell {
      flex-basis: 105px !important;
      flex-shrink: 0 !important;
      flex-grow: 0 !important;
    }
  }
`

export default Reset
