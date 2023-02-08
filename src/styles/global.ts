import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

  }
  body {
    background: radial-gradient(
      circle,
      ${(props) => props.theme.gradientInitial},
      ${(props) => props.theme.gradientEnd}
    );
  }
  body, button, span {
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
  .modal-content {
    background: ${(props) => props.theme.white};
    width: 90%;
    max-width: 500px;
    padding: 10px;
    border-radius: 5px;
  }
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buttonCloseModal {
    float: right;
    cursor: pointer;
    color: ${(props) => props.theme['gray-200']};
    width: 32px;
    height: 32px;
  }

`
