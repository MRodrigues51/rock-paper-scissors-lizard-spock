import styled from "styled-components";

export const HeaderContainer = styled.header`

  .Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
    height: 160px;
    border: 2px solid ${(props) => props.theme.white};
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
    background: ${(props) => props.theme.white};
    border-radius: 10px;

    @media only screen and (max-width: 500px) {
      width: 80px;
      height: 57.5px;
    }
  }
  .imgLogo {
    margin-left: 20px;
  }
  .PointerScore {
    font-size: 3.5rem;
    font-weight: 700;
    color: ${(props) => props.theme["gray-500"]};
  }
  .NameScore {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.245rem;
    color: ${(props) => props.theme.score};
  }
`
