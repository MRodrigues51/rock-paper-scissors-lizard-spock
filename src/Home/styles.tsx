import styled from "styled-components";

export const Homecontainer = styled.main`
  * {
    background: transparent;
    border: none;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
  }
  .MainDiv {
    margin-top: 5rem;
  }
  .Container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ButtonDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -5rem;
    gap: 1rem;
  }
  .ButtonDiv button {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: ${(props) => props.theme.white};
    cursor: pointer;
  }
  .TopDiv {
    margin-bottom: -5rem ;
  }
  .MiddleDiv {
    margin-bottom: -1rem;
    gap: 10rem;
  }
  .BottomDiv {
    gap: 2.5rem;
    margin-bottom: -1.5rem;
  }
  .ButtonScissors {
    border: solid 1rem ${(props) => props.theme["scissors-color"]};
    box-shadow: inset 0px 6px 3px ${(props) => props.theme["gray-shadow-400"]},
         0px 6px 3px 1px ${(props) => props.theme["gray-shadow-700"]};
  }
  .ButtonSpock {
    border: solid 1rem ${(props) => props.theme["spock-color"]};
    box-shadow: inset 0px 6px 3px ${(props) => props.theme["gray-shadow-400"]},
         0px 6px 3px 1px ${(props) => props.theme["gray-shadow-700"]};
  }
  .ButtonPaper {
    border: solid 1rem ${(props) => props.theme["paper-color"]};
    box-shadow: inset 0px 6px 3px ${(props) => props.theme["gray-shadow-400"]},
         0px 6px 3px 1px ${(props) => props.theme["gray-shadow-700"]};
  }
  .ButtonRock {
    border: solid 1rem ${(props) => props.theme["rock-color"]};
    box-shadow: inset 0px 6px 3px ${(props) => props.theme["gray-shadow-400"]},
         0px 6px 3px 1px ${(props) => props.theme["gray-shadow-700"]};
  }
  .ButtonLizard {
    border: solid 1rem ${(props) => props.theme["lizard-color"]};
    box-shadow: inset 0px 6px 3px ${(props) => props.theme["gray-shadow-400"]},
         0px 6px 3px 1px ${(props) => props.theme["gray-shadow-700"]};
  }
  .RulesDiv {
    display: flex;
    width: 100vw;
    justify-content: flex-end;
  }
  .RulesDiv button {
    width: 100px;
    height: 40px;
    margin-right: 5%;
    border: 2px solid ${(props) => props.theme.white};
    border-radius: 8px;
    color: ${(props) => props.theme.white};
    letter-spacing: 2px;
    cursor: pointer;

  }


`
