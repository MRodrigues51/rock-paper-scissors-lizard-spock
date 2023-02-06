import styled from "styled-components";

export const Homecontainer = styled.main`
  * {
    background: transparent;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
  }
  .MainDiv {
    /* background: #fff; */
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
    /* margin: 0; */
    margin-top: -5rem;
    gap: 1rem;
    /* background: #834fe3; */
    /* margin-top: 0; */
    /* margin-bottom: 0; */
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
    /* border-color: linear-gradient(, #ec9e0e, #eca922); */
    /* border: 10px solid;
    border-image: linear-gradient(to right, #ec9e0e, #eca922) 1;
    border-radius: 50%;
    border-radius: 20px; */
    border: solid 1rem #ec9e0e;
    box-shadow: inset 0px 6px 3px #999,
         0px 6px 3px 1px #222;
         /* 5px 5px 10px #444; */
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
  /* .RulesDiv .Modal {
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    width: 1000px;
    background-color: papayawhip;
  } */
  .ModalContent h2{
    color: #fff;
    background: #fff;
  }
  .CloseModal {
    background: #fff;
  }

`
