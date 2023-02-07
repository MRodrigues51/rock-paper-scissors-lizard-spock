import { ShowDivPlayer } from './styles'
import IconScissors from '../../assets/img/icon-scissors.svg'
import IconSpock from '../../assets/img/icon-spock.svg'
import IconPaper from '../../assets/img/icon-paper.svg'
import IconLizard from '../../assets/img/icon-lizard.svg'
import IconRock from '../../assets/img/icon-rock.svg'
import { ButtonLizard, ButtonPaper, ButtonRock, ButtonScissors, ButtonSpock } from '../Buttons'

interface ShowPlayersProps {
  valuePlayer: number | undefined
  valueMachine: number | undefined
  valueVictory: string
  valueShowElement: (show: boolean) => void

}
export function ShowPlayer({ valuePlayer, valueMachine, valueVictory, valueShowElement }: ShowPlayersProps) {
  function closeShowElement() {
    valueShowElement(false)
  }
  console.log('boleano' + valueShowElement)
  if (valuePlayer === 0) {
    return (
      <div className='ButtonDiv'>
        <ButtonScissors />
        <button onClick={closeShowElement}>Play Again</button>
      </div>
    )
  } else if (valuePlayer === 1) {
    return (
      <div className='ButtonDiv'>
        <ButtonPaper />
        <button onClick={closeShowElement}>Play Again</button>
      </div>

    )
  } else if (valuePlayer === 2) {
    return (
      <div className='ButtonDiv'>
        <ButtonRock />
        <button onClick={closeShowElement}>Play Again</button>
      </div>
    )
  } else if (valuePlayer === 3) {
    return (
      <div className='ButtonDiv'>
        <ButtonLizard />
        <button onClick={closeShowElement}>Play Again</button>
      </div>
    )
  } else if (valuePlayer === 4) {
    return (
      <div className='ButtonDiv'>
        <ButtonSpock />
        <button onClick={closeShowElement}>Play Again</button>
      </div>
    )
  }

  return (
    <ShowDivPlayer>
      <div className='ButtonDiv'>
        <div className="MiddleDiv">
          <button className="ButtonSpock">
            {/* <img src={ } alt="" /> */}
          </button>
          <button className="ButtonPaper">
            {/* <img src={ } alt="" /> */}
          </button>
        </div>
        <span>Valor de Player: {valuePlayer}</span>
        <span>Valor de Machine: {valueMachine}</span>
        <span>Resultado da jogada: {valueVictory}</span>
        <button onClick={closeShowElement}>Play Again</button>
      </div>
    </ShowDivPlayer>
  )
}
