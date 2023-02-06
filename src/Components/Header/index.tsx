import Logo from '../../assets/img/logo-bonus.svg'
import { HeaderContainer } from './styles'
import { Home } from '../../Home'

interface ScoreProps {
  valueScore: number
}

export function Header({ valueScore }: ScoreProps) {


  return (
    <HeaderContainer>
      <div className="Header">
        <span className="imgLogo">
          <img src={Logo} alt="" />
        </span>
        <div className="ScoreDiv">
          <span className="NameScore">SCORE</span>
          <span className="PointerScore">{valueScore}</span>
        </div>
      </div>
    </HeaderContainer>

  )
}

