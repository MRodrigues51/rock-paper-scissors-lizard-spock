import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

  }
  body {
    background: radial-gradient(circle, #1f3756, #141539);
  }
  body, button {
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
  .modal-content {
    background: #fff;
    color: #fff;
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
    color: #c2c2c2;
    width: 32px;
    height: 32px;
  }

`
