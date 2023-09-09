import { styled } from 'styled-components'

// 모달 컴포넌트를 화면 전체영역으로 띄워줌
const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
//모달 백그라운드 색상
const ModalBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  /* animation: modal-bg-show 0.2s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  } */
`
//children이 들어올 모달 본체
const ModalBox = styled.div`
  position: relative;
  top: 0;
  left: 0;
  transform: translate(0%, 10%);
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  width: 500px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`

interface modalPropsType {
  setModalOpen: (a: boolean) => void
  children?: JSX.Element
}

const Modal = ({ setModalOpen, children }: modalPropsType) => {
  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <ModalContainer>
      <ModalBackground onClick={closeModal}>
        <ModalBox onClick={(e) => e.stopPropagation()}>{children}</ModalBox>
      </ModalBackground>
    </ModalContainer>
  )
}

export default Modal
