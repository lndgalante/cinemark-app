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

  /* Modal styles */
  #panel-Funciones .📦wht-spc_nowrap  {
    white-space: normal !important;
  }

  /*.📦ml_16px[role='dialog'] {
    padding-bottom: 14px;
  } */

  @media screen and (max-width: 576px) {
    .📦ml_16px[role='dialog'] {
      margin: 68px 0 0 0 !important;
      width: 100% !important;
      max-width: 100vw !important;
      height: 100% !important;
      padding: 0 !important;
      max-height: calc(100% - 68px) !important;
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
