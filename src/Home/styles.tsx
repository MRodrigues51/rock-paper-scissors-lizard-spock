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
    background: #fff;
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
    border: solid 1rem #ec9e0e;
    box-shadow: inset 0px 6px 3px #999,
         0px 6px 3px 1px #222;
  }
  .ButtonSpock {
    border: solid 1rem #40b9ce;
    box-shadow: inset 0px 6px 3px #999,
         0px 6px 3px 1px #222;
  }
  .ButtonPaper {
    border: solid 1rem #4865f4;
    box-shadow: inset 0px 6px 3px #999,
         0px 6px 3px 1px #222;
  }
  .ButtonRock {
    border: solid 1rem #dc2e4e;
    box-shadow: inset 0px 6px 3px #999,
         0px 6px 3px 1px #222;
  }
  .ButtonLizard {
    border: solid 1rem #834fe3;
    box-shadow: inset 0px 6px 3px #999,
         0px 6px 3px 1px #222;
  }
  .RulesDiv {
    display: flex;
    width: 100vw;
    justify-content: flex-end;
    /* margin: 0; */
    /* background: #4865f4; */
  }
  .RulesDiv button {
    width: 100px;
    height: 40px;
    margin-right: 5%;
    border: 2px solid #fff;
    border-radius: 8px;
    color: #fff;
    letter-spacing: 2px;
    cursor: pointer;

  }

  .ModalContent h2{
    color: #fff;
    background: #fff;
  }
  .CloseModal {
    background: #fff;
  }

`
