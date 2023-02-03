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
  /* .Container {
    max-width: 90vw;
  } */
  .Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 160px;
    border: 2px solid #fff;
    border-radius: 20px;
    margin: 0;
  }
  .ScoreDiv {
    margin: 0;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 160px;
    height: 115px;
    background: #fff;
    border-radius: 10px;
  }
  .imgLogo {
    margin-left: 20px;
  }
  .PointerScore {
    font-size: 3.5rem;
    font-weight: 700;
    color: gray;
  }
  .NameScore {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.245rem;
    color: blue;
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
  }
`
