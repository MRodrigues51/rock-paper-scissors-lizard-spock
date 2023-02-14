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
  @media (max-width: 700px) {
    .ButtonDiv {
      margin-top: 0;
    }
  }
  .ButtonDiv button {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: ${(props) => props.theme.white};
    cursor: pointer;
  }
  @media screen and (min-width: 400px) and (max-width: 700px) {
    .ButtonDiv button {
      width: 100px;
      height: 100px;
    }
  }
  @media screen and (max-width: 400px) {
    .ButtonDiv button {
      width: 80px;
      height: 80px;
    }
  }

  .TopDiv {
    margin-bottom: -5rem ;
  }
  @media screen and (min-width: 400px) and (max-width: 700px) {
    .TopDiv {
      margin-bottom: -3.5rem;
    }
  }
  @media screen and (max-width: 400px) {
    .TopDiv {
      margin-bottom: -1rem;
    }
  }
  .MiddleDiv {
    margin-bottom: -1rem;
    gap: 10rem;
  }
  @media screen and (min-width: 400px) and (max-width: 700px) {
    .MiddleDiv {
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 400px) {
    .MiddleDiv {
      margin-bottom: 2rem;
      gap: 12rem;
    }
  }
  .BottomDiv {
    gap: 2.5rem;
    margin-bottom: -1.5rem;
  }
  @media screen and (min-width: 400px) and (max-width: 700px) {
    .BottomDiv {
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 400px) {
    .BottomDiv {
      gap: 4.5rem;
      margin-bottom: 2rem;
    }
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

  @media screen and (min-width: 400px) and (max-width: 700px) {
    .ButtonScissors {
      border: solid 0.75rem ${(props) => props.theme["scissors-color"]};
    }
    .ButtonLizard {
      border: solid 0.75rem ${(props) => props.theme["lizard-color"]};
    }
    .ButtonSpock {
      border: solid 0.75rem ${(props) => props.theme["spock-color"]};
    }
    .ButtonPaper {
      border: solid 0.75rem ${(props) => props.theme["paper-color"]};
    }
    .ButtonRock {
      border: solid 0.75rem ${(props) => props.theme["rock-color"]};
    }
  }

  @media screen and (max-width: 400px) {
    .ButtonScissors {
      border: solid 0.5rem ${(props) => props.theme["scissors-color"]};
    }
    .ButtonScissors img {
      width: 50%;
    }

    .ButtonSpock {
      border: solid 0.5rem ${(props) => props.theme["spock-color"]};
    }
    .ButtonSpock img {
      width: 50%;
    }

    .ButtonPaper {
      border: solid 0.5rem ${(props) => props.theme["paper-color"]};
    }
    .ButtonPaper img {
      width: 50%;
    }

    .ButtonRock {
      border: solid 0.5rem ${(props) => props.theme["rock-color"]};
    }
    .ButtonRock img {
      width: 50%;
    }

    .ButtonLizard {
      border: solid 0.5rem ${(props) => props.theme["lizard-color"]};
    }
    .ButtonLizard img {
      width: 50%;
    }
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
  @media (max-width: 700px) {
    .RulesDiv button {
      width: 80px;
      height: 35px;
      font-weight: 400;

    }
  }

`
