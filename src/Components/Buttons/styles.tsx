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
    background: ${(props) => props.theme.white};
  }

  .ButtonScissorsShow {
    border: solid 1.5rem ${(props) => props.theme["scissors-color"]};
    box-shadow: inset 0px 8px 3px ${(props) => props.theme["gray-shadow-400"]},
         0px 8px 3px 1px ${(props) => props.theme["gray-shadow-700"]};
  }
  .ButtonSpockShow {
    border: solid 1.5rem ${(props) => props.theme["spock-color"]};
    box-shadow: inset 0px 8px 3px ${(props) => props.theme["gray-shadow-400"]},
         0px 8px 3px 1px ${(props) => props.theme["gray-shadow-700"]};
  }
  .ButtonPaperShow {
    border: solid 1.5rem ${(props) => props.theme["paper-color"]};
    box-shadow: inset 0px 8px 3px ${(props) => props.theme["gray-shadow-400"]},
         0px 8px 3px 1px ${(props) => props.theme["gray-shadow-700"]};
  }
  .ButtonRockShow {
    border: solid 1.5rem ${(props) => props.theme["rock-color"]};
    box-shadow: inset 0px 8px 3px ${(props) => props.theme["gray-shadow-400"]},
         0px 8px 3px 1px ${(props) => props.theme["gray-shadow-700"]};
  }
  .ButtonLizardShow {
    border: solid 1.5rem ${(props) => props.theme["lizard-color"]};
    box-shadow: inset 0px 8px 3px ${(props) => props.theme["gray-shadow-400"]},
         0px 8px 3px 1px ${(props) => props.theme["gray-shadow-700"]};
  }
`
