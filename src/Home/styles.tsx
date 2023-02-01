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
  .Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 160px;
    border: 2px solid #fff;
    border-radius: 20px;
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
    background: #fff;

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
    margin: 0;
    margin-top: -5rem;
    gap: 1rem;
    /* background: #f22; */
  }
  .ButtonDiv button {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /* background: #fff; */
  }
  .TopDiv {
    /* background: #fff; */
    /* margin: 0; */
    margin-bottom: -2.3rem ;
  }
  .MiddleDiv {
    /* background: #fff; */
    margin-bottom: 2.4rem;
    gap: 12rem;
  }
  .BottomDiv {
    /* background: #fff; */
    gap: 4.6rem;
    margin-bottom: -3.1rem;
  }
`
