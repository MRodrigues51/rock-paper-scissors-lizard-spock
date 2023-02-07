import styled from "styled-components";

export const ButtonStyles = styled.button`
  .ButtonDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -5rem;
    gap: 1rem;
    border: none;
  }
  button {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: #fff;
  }

  .ButtonScissorsShow {
    border: solid 1.5rem #ec9e0e;
    box-shadow: inset 0px 8px 3px #999,
         0px 8px 3px 1px #222;
  }
  .ButtonSpockShow {
    border: solid 1.5rem #40b9ce;
    box-shadow: inset 0px 8px 3px #999,
         0px 8px 3px 1px #222;
  }
  .ButtonPaperShow {
    border: solid 1.5rem #4865f4;
    box-shadow: inset 0px 8px 3px #999,
         0px 8px 3px 1px #222;
  }
  .ButtonRockShow {
    border: solid 1.5rem #dc2e4e;
    box-shadow: inset 0px 8px 3px #999,
         0px 8px 3px 1px #222;
  }
  .ButtonLizardShow {
    border: solid 1.5rem #834fe3;
    box-shadow: inset 0px 8px 3px #999,
         0px 8px 3px 1px #222;
  }
`
