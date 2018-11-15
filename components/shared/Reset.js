import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

  .BrainhubCarousel .BrainhubCarousel__trackContainer {
    margin: 0 -3px;
  }

  .BrainhubCarousel__customArrows {
    height: 100%;
  }

  .BrainhubCarousel__dots {
    margin-top: 14px;
  }

  .BrainhubCarousel__dots .BrainhubCarousel__dot {
    opacity: 0.7;
  }

  .BrainhubCarousel__dots .BrainhubCarousel__dot.BrainhubCarousel__dot--selected:before {
    width: 6px;
    height: 6px;
  }

  /* Carousel Handlers */
  svg[data-icon='chevron-left'],
  svg[data-icon='chevron-right'] {
    transform-origin: center;
    transition: all 400ms ease-in-out 100ms;
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
      margin: 14px !important;
      width: 100% !important;
      max-width: 100vw !important;
      height: 100% !important;
      max-height: 96vh !important;
      padding: 0 0 14px 0 !important;
    }

    .date-cell {
      flex-basis: 115px !important;
      flex-shrink: 0 !important;
      flex-grow: 0 !important;
    }
  }
`

export default Reset
