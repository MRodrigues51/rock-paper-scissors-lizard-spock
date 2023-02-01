import { Homecontainer } from "./styles"
import Logo from '../assets/img/logo-bonus.svg'
import MainBG from '../assets/img/bg-pentagon.svg'

export function Home() {
  return (
    <Homecontainer>
      <div className="Container">
        <div className="Header">
          <span className="imgLogo">
            <img src={Logo} alt="" />
          </span>
          <div className="ScoreDiv">
            <span className="NameScore">SCORE</span>
            <span className="PointerScore">12</span>
          </div>
        </div>

        <div className="MainDiv" style={{
          backgroundImage: `url(${MainBG})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '500px',
          height: '500px'
        }}>
          <div className="ButtonDiv">
            <div className="TopDiv">
              <button className="ButtonScissors">Scissors</button>
            </div>
            <div className="MiddleDiv">
              <button className="ButtonSpok">Spok</button>
              <button className="ButtonPaper">Paper</button>
            </div>
            <div className="BottomDiv">
              <button className="ButtonLizard">Lizard</button>
              <button className="ButtonRock">Rock</button>
            </div>

          </div>
        </div>

      </div>
    </Homecontainer>
  )
}
