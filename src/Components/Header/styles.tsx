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
  @media screen and (max-width: 450px) {
  .Header {
    width: 50vw;
    height: 80px;
    border-radius: 10px;
  }
}
  @media screen and (min-width: 450px) and (max-width: 700px) {
  .Header {
    width: 50vw;
    height: 100px;
    border-radius: 15px;
   }
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
  }
  @media screen and (max-width: 450px) {
  .ScoreDiv {
    width: 80px;
    height: 60px;
  }
}
  @media screen and (min-width: 450px) and (max-width: 700px) {
  .ScoreDiv {
    width: 100px;
    height: 80px;
  }
}

  .imgLogo {
    margin-left: 20px;
  }
  @media screen and (max-width: 450px) {
  .imgLogo img {
    width: 60px;
    height: auto;
  }
}
  @media screen and (min-width: 450px) and (max-width: 700px) {
    .imgLogo img {
      width: 80px;
      height: auto;
    }
  }


  .PointerScore {
    font-size: 3.5rem;
    font-weight: 700;
    color: ${(props) => props.theme["gray-500"]};
  }
  @media (max-width: 700px) {
    .PointerScore {
      font-size: 1.75rem;
    }
  }
  .NameScore {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.245rem;
    color: ${(props) => props.theme.score};
  }
  @media (max-width: 700px) {
    .NameScore {
      font-size: 0.75rem;
    }
  }
`
