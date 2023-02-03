import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background: radial-gradient(circle, #1f3756, #141539);
  }
  body, button {
    font-family: 'Barlow Semi Condensed', sans-serif;
  }

`
