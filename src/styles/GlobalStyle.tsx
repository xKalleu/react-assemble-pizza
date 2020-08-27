import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset}
  body {
    font-family: Montserrat, sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
`;