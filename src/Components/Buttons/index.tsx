import IconScissors from '../../assets/img/icon-scissors.svg'
import IconSpock from '../../assets/img/icon-spock.svg'
import IconPaper from '../../assets/img/icon-paper.svg'
import IconLizard from '../../assets/img/icon-lizard.svg'
import IconRock from '../../assets/img/icon-rock.svg'

import { ButtonStyles } from './styles'

export function ButtonScissors() {
  return (
    <ButtonStyles>
      <button className="ButtonScissorsShow" >
        <img src={IconScissors} alt="" />
      </button>
    </ButtonStyles>
  )
}

export function ButtonPaper() {
  return (
    <ButtonStyles>
      <button className="ButtonPaperShow" >
        <img src={IconPaper} alt="" />
      </button>
    </ButtonStyles>
  )
}

export function ButtonRock() {
  return (
    <ButtonStyles>
      <button className="ButtonRockShow" >
        <img src={IconRock} alt="" />
      </button>
    </ButtonStyles>
  )
}

export function ButtonLizard() {
  return (
    <ButtonStyles>
      <button className="ButtonLizardShow" >
        <img src={IconLizard} alt="" />
      </button>
    </ButtonStyles>
  )
}

export function ButtonSpock() {
  return (
    <ButtonStyles>
      <button className="ButtonSpockShow" >
        <img src={IconSpock} alt="" />
      </button>
    </ButtonStyles>
  )
}
