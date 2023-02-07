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

  if (valuePlayer === 0 && valueMachine === 0) {
    return (
      //Scissors

      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonScissors />
            </div>
            <span>
              NOBODY WON
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonScissors />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 0 && valueMachine === 1) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonScissors />
            </div>
            <span>
              YOU WIN
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonPaper />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 0 && valueMachine === 2) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonScissors />
            </div>
            <span>
              YOU LOOSE
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonRock />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 0 && valueMachine === 3) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonScissors />
            </div>
            <span>
              YOU WIN
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonLizard />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 0 && valueMachine === 4) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonScissors />
            </div>
            <span>
              YOU LOOSE
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonSpock />
            </div>
          </div>
        </div>
      </ShowDivPlayer>

    )
    //paper
  } else if (valuePlayer === 1 && valueMachine === 1) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonPaper />
            </div>
            <span>
              NOBODY WON
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonPaper />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 1 && valueMachine === 0) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonPaper />
            </div>
            <span>
              YOU LOOSE
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonScissors />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 1 && valueMachine === 2) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonPaper />
            </div>
            <span>
              YOU WIN
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonRock />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 1 && valueMachine === 3) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonPaper />
            </div>
            <span>
              YOU LOOSE
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonLizard />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 1 && valueMachine === 4) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonPaper />
            </div>
            <span>
              YOU WIN
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonSpock />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )

    //ROCK
  } else if (valuePlayer === 2 && valueMachine === 2) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonRock />
            </div>
            <span>
              NOBODY WON
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonRock />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 2 && valueMachine === 0) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonRock />
            </div>
            <span>
              YOU WIN
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonScissors />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 2 && valueMachine === 1) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonRock />
            </div>
            <span>
              YOU LOOSE
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonPaper />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 2 && valueMachine === 3) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonRock />
            </div>
            <span>
              YOU WIN
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonLizard />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 2 && valueMachine === 4) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonRock />
            </div>
            <span>
              YOU LOOSE
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonSpock />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )

    //Lizard
  } else if (valuePlayer === 3 && valueMachine === 3) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonLizard />
            </div>
            <span>
              NOBODY WON
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonLizard />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 3 && valueMachine === 0) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonLizard />
            </div>
            <span>
              YOU LOOSE
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonScissors />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 3 && valueMachine === 1) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonLizard />
            </div>
            <span>
              YOU WIN
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonPaper />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 3 && valueMachine === 2) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonLizard />
            </div>
            <span>
              YOU LOOSE
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonRock />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 3 && valueMachine === 4) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonLizard />
            </div>
            <span>
              YOU WIN
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonSpock />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )

    //Spock
  } else if (valuePlayer === 4 && valueMachine === 4) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonSpock />
            </div>
            <span>
              NOBODY WON
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonSpock />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 4 && valueMachine === 0) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonSpock />
            </div>
            <span>
              YOU WIN
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonScissors />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 4 && valueMachine === 1) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonSpock />
            </div>
            <span>
              YOU LOOSE
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonPaper />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 4 && valueMachine === 2) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonSpock />
            </div>
            <span>
              YOU WIN
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonRock />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  } else if (valuePlayer === 4 && valueMachine === 3) {
    return (
      <ShowDivPlayer>
        <div className='ShowDiv'>
          <div className='BodyDiv'>
            <div className='PinTitle'>
              <span>YOU PICKED</span>
              <ButtonSpock />
            </div>
            <span>
              YOU LOOSE
              <button className='PlayAgain' onClick={closeShowElement}>PLAY AGAIN</button>
            </span>
            <div className='PinTitle'>
              <span>THE HOUSE PICKED</span>
              <ButtonLizard />
            </div>
          </div>
        </div>
      </ShowDivPlayer>
    )
  }











  // return (
  //   <ShowDivPlayer>
  //     <div className='ButtonDiv'>
  //       <div className="MiddleDiv">
  //         <button className="ButtonSpock">

  //         </button>
  //         <button className="ButtonPaper">

  //         </button>
  //       </div>
  //       <span>Valor de Player: {valuePlayer}</span>
  //       <span>Valor de Machine: {valueMachine}</span>
  //       <span>Resultado da jogada: {valueVictory}</span>
  //       <button onClick={closeShowElement}>Play Again</button>
  //     </div>
  //   </ShowDivPlayer>
  // )
}
