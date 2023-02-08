import styled from "styled-components";

export const ShowDivPlayer = styled.div`

  span {
    font-weight: 700;
    font-size: 2.5rem;
    color: ${(props) => props.theme.white};
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase
  }
  .PinTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .PinTitle span {
    font-size: 1.5rem;
  }
  .BodyDiv {
    gap: 5rem;
  }
  .ShowDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
  .PlayAgain {
    border-radius: 8px;
    width: 100px;
    background: ${(props) => props.theme.white};
    width: 100%;
    height: 50px;
    letter-spacing: 0.25rem;
    cursor: pointer;
  }

`
