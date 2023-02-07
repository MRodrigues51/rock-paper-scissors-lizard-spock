import IconScissors from '../../assets/img/icon-scissors.svg'
import IconSpock from '../../assets/img/icon-spock.svg'
import IconPaper from '../../assets/img/icon-paper.svg'
import IconLizard from '../../assets/img/icon-lizard.svg'
import IconRock from '../../assets/img/icon-rock.svg'


export function ButtonScissors() {
  return (
    <div className="TopDiv">
      <button className="ButtonScissors" >
        <img src={IconScissors} alt="" />
      </button>
    </div>
  )
}

export function ButtonPaper() {
  return (
    <div className="TopDiv">
      <button className="ButtonPaper" >
        <img src={IconPaper} alt="" />
      </button>
    </div>
  )
}

export function ButtonRock() {
  return (
    <div className="TopDiv">
      <button className="ButtonRock" >
        <img src={IconRock} alt="" />
      </button>
    </div>
  )
}

export function ButtonLizard() {
  return (
    <div className="TopDiv">
      <button className="ButtonLizard" >
        <img src={IconLizard} alt="" />
      </button>
    </div>
  )
}

export function ButtonSpock() {
  return (
    <div className="TopDiv">
      <button className="ButtonSpock" >
        <img src={IconSpock} alt="" />
      </button>
    </div>
  )
}
