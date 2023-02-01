import { Homecontainer } from "./styles"
import Logo from '../assets/img/logo-bonus.svg'

export function Home() {
  return (
    <Homecontainer>
      <div className="Container">
        <div className="Header">
          <span className="imgLogo">
            <img src={Logo} alt="" />
          </span>
          <div className="ScoreDiv">
            <span>SCORE</span>
            <span className="PointerScore">12</span>
          </div>
        </div>

      </div>
    </Homecontainer>
  )
}
