import styled from "styled-components";

export const ShowDivPlayer = styled.div`
.MiddleDiv {
    margin-bottom: -1rem;
    gap: 10rem;
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
`
