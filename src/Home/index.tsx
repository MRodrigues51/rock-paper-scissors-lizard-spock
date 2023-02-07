import Modal from 'react-modal'
import ReactModal from 'react-modal'
import { useEffect, useState } from "react"
import { XCircle } from 'phosphor-react'

import { Homecontainer } from "./styles"


import MainBG from '../assets/img/bg-pentagon.svg'
import IconScissors from '../assets/img/icon-scissors.svg'
import IconSpock from '../assets/img/icon-spock.svg'
import IconPaper from '../assets/img/icon-paper.svg'
import IconLizard from '../assets/img/icon-lizard.svg'
import IconRock from '../assets/img/icon-rock.svg'
import RulesBG from '../assets/img/image-rules-bonus.svg'
import { Header } from '../Components/Header'
import { ShowPlayer } from '../Components/ShowPlayer'


export function Home() {
  const [Player, setPlayer] = useState<number>()
  const [Machine, setMachine] = useState<number>()
  const [Score, setScore] = useState(0)
  const [victory, setVictory] = useState("")

  // const [button, setButton] = useState({
  //   classNames: ['buttonScissors', 'buttonPaper', 'buttonRock', 'buttonLizard', 'buttonSpock']
  // })

  const [showElement, setShowElement] = useState(false)
  const showOrHide = () => setShowElement(true)
  // const latestScore = useRef(Score)
  //
  console.log('Aqui é o score' + Score)
  let playerCheck

  function PlayerMachine() {
    setMachine(Math.floor(Math.random() * 5))
  }

  function handleClickScissors() {
    playerCheck = 0 //'tesoura'
    setPlayer(playerCheck)
    PlayerMachine()
    showOrHide()
  }

  function handleClickPaper() {
    playerCheck = 1 //'Paper'
    setPlayer(playerCheck)
    PlayerMachine()
    showOrHide()
  }
  function handleClickRock() {
    playerCheck = 2 //'Rock'
    setPlayer(playerCheck)
    PlayerMachine()
    showOrHide()
  }
  function handleClickLizard() {
    playerCheck = 3 //'Lizard'
    setPlayer(playerCheck)
    PlayerMachine()
    showOrHide()
  }
  function handleClickSpock() {
    playerCheck = 4 //'Spock'
    setPlayer(playerCheck)
    PlayerMachine()
    showOrHide()
  }
  console.log('Jogador digitou: ' + Player);

  console.log('A máquina digitou: ' + Machine)

  useEffect(() => {
    if (Player === 0 && Machine === 1) {
      console.log(Player + 'Tesoura Ganhou(Player)')
      setVictory("You Win")
      setScore(Score + 1)
    } else if (Player === 0 && Machine === 2) {
      console.log(Machine + 'Rock Ganhou(Machine)')
      setVictory("You Loose")
      setScore(Score - 1)
    } else if (Player === 0 && Machine === 3) {
      console.log(Player + 'Tesoura Ganhou(Player)')
      setVictory("You Win")
      setScore(Score + 1)
    } else if (Player === 0 && Machine === 4) {
      console.log(Machine + 'Spock Ganhou(Machine)')
      setVictory("You Loose")
      setScore(Score - 1)
    } else if (Player === 0 && Machine === 0) {
      setVictory("Nobody Won")
      console.log('Ninguém Ganhou')

    } else if (Player === 1 && Machine === 0) {
      console.log(Machine + 'Papel Ganhou(Machine)')
      setVictory("You Loose")
      setScore(Score - 1)
    } else if (Player === 1 && Machine === 2) {
      console.log(Player + 'Papel Ganhou(Player)')
      setVictory("You Win")
      setScore(Score + 1)
    } else if (Player === 1 && Machine === 3) {
      console.log(Machine + 'Lagarto Ganhou(Machine)')
      setVictory("You Loose")
      setScore(Score - 1)
    } else if (Player === 1 && Machine === 4) {
      console.log(Player + 'Papel Ganhou(Player)')
      setVictory("You Win")
      setScore(Score + 1)
    } else if (Player === 1 && Machine === 1) {
      setVictory("Nobody Won")
      console.log('Ninguém Ganhou')

    } else if (Player === 2 && Machine === 0) {
      console.log(Player + 'Pedra Ganhou(Player)')
      setVictory("You Win")
      setScore(Score + 1)
    } else if (Player === 2 && Machine === 1) {
      console.log(Machine + 'Pedra Ganhou(Machine)')
      setVictory("You Loose")
      setScore(Score - 1)
    } else if (Player === 2 && Machine === 3) {
      console.log(Player + 'Pedra Ganhou(Player)')
      setVictory("You Win")
      setScore(Score + 1)
    } else if (Player === 2 && Machine === 4) {
      console.log(Machine + 'Spok Ganhou(Machine)')
      setVictory("You Loose")
      setScore(Score - 1)
    } else if (Player === 2 && Machine === 2) {
      setVictory("Nobody Won")
      console.log('Ninguém Ganhou')

    } else if (Player === 3 && Machine === 0) {
      console.log(Machine + 'Tesoura Ganhou(Machine)')
      setVictory("You Loose")
      setScore(Score - 1)
    } else if (Player === 3 && Machine === 1) {
      console.log(Player + 'Lagarto Ganhou(Player)')
      setVictory("You Win")
      setScore(Score + 1)
    } else if (Player === 3 && Machine === 2) {
      console.log(Machine + 'Pedra Ganhou(Machine)')
      setVictory("You Loose")
      setScore(Score - 1)
    } else if (Player === 3 && Machine === 4) {
      console.log(Player + 'Lagarto Ganhou(Player)')
      setVictory("You Win")
      setScore(Score + 1)
    } else if (Player === 3 && Machine === 3) {
      setVictory("Nobody Won")
      console.log('Ninguém Ganhou')

    } else if (Player === 4 && Machine === 0) {
      console.log(Player + 'Spock Ganhou(Player)')
      setVictory("You Win")
      setScore(Score + 1)
    } else if (Player === 4 && Machine === 1) {
      console.log(Machine + 'Papel Ganhou(Machine)')
      setVictory("You Loose")
      setScore(Score - 1)
    } else if (Player === 4 && Machine === 2) {
      console.log(Player + 'Spock Ganhou(Player)')
      setVictory("You Win")
      setScore(Score + 1)
    } else if (Player === 4 && Machine === 3) {
      console.log(Machine + 'Lagarto Ganhou(Machine)')
      setVictory("You Loose")
      setScore(Score - 1)
    } else if (Player === 4 && Machine === 4) {
      setVictory("Nobody Won")
      console.log('Ninguém Ganhou')
    } else {
      console.log('fim')
    }
  }, [Player, Machine])

  console.log(Score)

  Modal.setAppElement('#root')

  const [modalIsOpen, setIsOpen] = useState(false)


  function handleOpenModal() {
    setIsOpen(true)
  }
  function handleCloseModal() {
    setIsOpen(false)
  }
  function handleCloseResult() {
    setShowElement(false)
  }
  return (
    <Homecontainer>
      <div className="Container">
        <Header valueScore={Score} />
        {/* <ShowPlayer valuePlayer={Player} valueMachine={Machine} valueVictory={victory} /> */}

        {showElement ?
          <ShowPlayer
            valuePlayer={Player}
            valueMachine={Machine}
            valueVictory={victory}
            valueShowElement={handleCloseResult} /> :
          <div className="MainDiv" style={{
            backgroundImage: `url(${MainBG})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <div className="ButtonDiv">
              <div className="TopDiv">
                <button className="ButtonScissors" onClick={handleClickScissors}>
                  <img src={IconScissors} alt="" />
                </button>
              </div>
              <div className="MiddleDiv">
                <button className="ButtonSpock" onClick={handleClickSpock}>
                  <img src={IconSpock} alt="" />
                </button>
                <button className="ButtonPaper" onClick={handleClickPaper}>
                  <img src={IconPaper} alt="" />
                </button>
              </div>
              <div className="BottomDiv">
                <button className="ButtonLizard" onClick={handleClickLizard}>
                  <img src={IconLizard} alt="" />
                </button>
                <button className="ButtonRock" onClick={handleClickRock}>
                  <img src={IconRock} alt="" />
                </button>
              </div>
            </div>
          </div>
        }
        <div className="RulesDiv">
          <button className="ModalButton" onClick={handleOpenModal}>RULES</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <div style={{
              backgroundImage: `url(${RulesBG})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '500px',
              height: '500px'
            }}>
              <span className='buttonCloseModal' onClick={handleCloseModal}>
                <XCircle size={32} weight='fill' />
              </span>
            </div>
          </Modal>
        </div>
      </div>
    </Homecontainer>
  )
}
