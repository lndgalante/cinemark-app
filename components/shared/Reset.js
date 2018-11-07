import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .BrainhubCarousel {
    position: relative;
    width: 100%;
  }

  .BrainhubCarousel:hover .handler {
    opacity: 1;
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

  .BrainhubCarouselItem:not(.BrainhubCarouselItem--active) img {
    filter: blur(1px) brightness(80%);
    transform: scale(1.01);
  }

  svg[data-icon='chevron-left'],
  svg[data-icon='chevron-right'] {
    transform-origin: center;
    transition: all 400ms ease-in-out 100ms;
  }

  svg[data-icon="search"] {
    width: 16px;
    height: 16px;
  }

  #panel-Horarios .📦wht-spc_nowrap  {
    white-space: normal !important;
  }
`

export default Reset
