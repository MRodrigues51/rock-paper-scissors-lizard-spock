import { Homecontainer } from "./styles"
import Modal from 'react-modal'
import { useState } from "react"
import Logo from '../assets/img/logo-bonus.svg'
import MainBG from '../assets/img/bg-pentagon.svg'
import IconScissors from '../assets/img/icon-scissors.svg'
import IconSpock from '../assets/img/icon-spock.svg'
import IconPaper from '../assets/img/icon-paper.svg'
import IconLizard from '../assets/img/icon-lizard.svg'
import IconRock from '../assets/img/icon-rock.svg'
import ReactModal from "react-modal"

export function Home() {

  function handleClickScissors() {
    console.log('Tesoura');
  }
  function handleClickSpock() {
    console.log('Spock');
  }
  function handleClickPaper() {
    console.log('Papel');
  }
  function handleClickLizard() {
    console.log('Lagarto');
  }
  function handleClickRock() {
    console.log('Pedra');
  }

  Modal.setAppElement('#root')

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      width: '200px',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

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
            <span className="PointerScore">12</span>
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
          <ReactModal

            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            className="Modal"
          >
            <h2>Aqui é o modal</h2>
            <button onClick={handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
      </div>
    </Homecontainer>
  )
}
