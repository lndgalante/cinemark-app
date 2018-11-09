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

  .📦mb_12vmin[role='dialog'] {
    padding-bottom: 20px;
  }
`

export default Reset
