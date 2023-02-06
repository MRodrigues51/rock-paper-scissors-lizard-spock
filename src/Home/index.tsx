import Modal from 'react-modal'
import { useEffect, useState } from "react"
import { XCircle } from 'phosphor-react'

import { Homecontainer } from "./styles"

import Logo from '../assets/img/logo-bonus.svg'
import MainBG from '../assets/img/bg-pentagon.svg'
import IconScissors from '../assets/img/icon-scissors.svg'
import IconSpock from '../assets/img/icon-spock.svg'
import IconPaper from '../assets/img/icon-paper.svg'
import IconLizard from '../assets/img/icon-lizard.svg'
import IconRock from '../assets/img/icon-rock.svg'
import RulesBG from '../assets/img/image-rules-bonus.svg'

export function Home() {
  const [Player, setPlayer] = useState<number>()
  const [Machine, setMachine] = useState<number>()
  const [Score, setScore] = useState(0)

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
  }

  function handleClickPaper() {
    playerCheck = 1 //'Paper'
    setPlayer(playerCheck)
    PlayerMachine()
  }
  function handleClickRock() {
    playerCheck = 2 //'Rock'
    setPlayer(playerCheck)
    PlayerMachine()
  }
  function handleClickLizard() {
    playerCheck = 3 //'Lizard'
    setPlayer(playerCheck)
    PlayerMachine()
  }
  function handleClickSpock() {
    playerCheck = 4 //'Spock'
    setPlayer(playerCheck)
    PlayerMachine()
  }
  console.log('Jogador digitou: ' + Player);

  console.log('A máquina digitou: ' + Machine)

  const Incremment = () => {
    setScore(Score + 1)
  }
  const Decremment = () => {
    setScore(Score - 1)
  }
  useEffect(() => {
    if (Player === 0 && Machine === 1) {
      console.log(Player + 'Tesoura Ganhou(Player)')
      { () => setScore(Score + 1) }
    } else if (Player === 0 && Machine === 2) {
      console.log(Machine + 'Rock Ganhou(Machine)')
      { () => setScore(Score - 1) }
    } else if (Player === 0 && Machine === 3) {
      console.log(Player + 'Tesoura Ganhou(Player)')
      { () => setScore(Score + 1) }
    } else if (Player === 0 && Machine === 4) {
      console.log(Machine + 'Spock Ganhou(Machine)')
      { () => setScore(Score - 1) }
    } else if (Player === 0 && Machine === 0) {
      console.log('Ninguém Ganhou')

    } else if (Player === 1 && Machine === 0) {
      console.log(Machine + 'Papel Ganhou(Machine)')
      { () => setScore(Score + 1) }
    } else if (Player === 1 && Machine === 2) {
      console.log(Player + 'Papel Ganhou(Player)')
      { () => setScore(Score + 1) }
    } else if (Player === 1 && Machine === 3) {
      console.log(Machine + 'Lagarto Ganhou(Machine)')
      { () => setScore(Score - 1) }
    } else if (Player === 1 && Machine === 4) {
      console.log(Player + 'Papel Ganhou(Player)')
      { () => setScore(Score + 1) }
    } else if (Player === 1 && Machine === 1) {
      console.log('Ninguém Ganhou')

    } else if (Player === 2 && Machine === 0) {
      console.log(Player + 'Pedra Ganhou(Player)')
      { () => setScore(Score + 1) }
    } else if (Player === 2 && Machine === 1) {
      console.log(Machine + 'Pedra Ganhou(Machine)')
      { () => setScore(Score + 1) }
    } else if (Player === 2 && Machine === 3) {
      console.log(Player + 'Pedra Ganhou(Player)')
      { () => setScore(Score + 1) }
    } else if (Player === 2 && Machine === 4) {
      console.log(Machine + 'Spok Ganhou')
      { () => setScore(Score - 1) }
    } else if (Player === 2 && Machine === 2) {
      console.log('Ninguém Ganhou')

    } else if (Player === 3 && Machine === 0) {
      console.log(Machine + 'Tesoura Ganhou(Machine)')
      { () => setScore(Score + 1) }
    } else if (Player === 3 && Machine === 1) {
      console.log(Player + 'Lagarto Ganhou(Player)')
      { () => setScore(Score + 1) }
    } else if (Player === 3 && Machine === 2) {
      console.log(Machine + 'Pedra Ganhou(Machine)')
      { () => setScore(Score + 1) }
    } else if (Player === 3 && Machine === 4) {
      console.log(Player + 'Lagarto Ganhou(Player)')
      { () => setScore(Score + 1) }
    } else if (Player === 3 && Machine === 3) {
      console.log('Ninguém Ganhou')

    } else if (Player === 4 && Machine === 0) {
      console.log(Player + 'Spock Ganhou(Player)')
      { () => setScore(Score + 1) }
    } else if (Player === 4 && Machine === 1) {
      console.log(Machine + 'Papel Ganhou(Machine)')
      { () => setScore(Score + 1) }
    } else if (Player === 4 && Machine === 2) {
      console.log(Player + 'Spock Ganhou(Player)')
      { () => setScore(Score + 1) }
    } else if (Player === 4 && Machine === 3) {
      console.log(Machine + 'Lagarto Ganhou(Machine)')
    } else if (Player === 4 && Machine === 4) {
      console.log('Ninguém Ganhou')
    } else {
      console.log('fim')
    }
  })

  console.log(Score)

  Modal.setAppElement('#root')

  const [modalIsOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(true)
  }
  function handleCloseModal() {
    setIsOpen(false)
  }

  return (
    <Homecontainer>
      <div className="Container">
        <div className="Header">
          <span className="imgLogo">
            <img src={Logo} alt="" />
          </span>
          <div className="ScoreDiv">
            <span className="NameScore">SCORE</span>
            <span className="PointerScore">{Score}</span>
          </div>
        </div>

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
