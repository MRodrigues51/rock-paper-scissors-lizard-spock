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
    height: 200px;
    border: 2px solid #fff;
    border-radius: 20px;
  }
  .ScoreDiv {
    margin: 0;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 115px;
    height: 115px;
    background: #fff;
    border-radius: 20px;
  }
  .imgLogo {
    margin-left: 20px;
  }
  span {
  }
`
