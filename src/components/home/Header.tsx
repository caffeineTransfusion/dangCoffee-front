import { styled } from 'styled-components'
import { SlLogin, SlUserFollow } from 'react-icons/sl'
import { useState } from 'react'
import Modal from '../common/Modal'
import Login from '../../pages/Login'
import SignUp from '../../pages/SignUp'

const HeaderContainer = styled.div`
  height: 70px;
  border: 1px solid #a48484;
  background: #fff;
`
const HeaderWraper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
`
const IconWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`
const Logo = styled.h1`
  font-weight: 800;
  font-size: x-large;
  color: #a48484;
`

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(true)

  const onClickLogin = () => {
    setModalOpen(true)
    setShowLogin(true)
  }

  const onClickSignUp = () => {
    setModalOpen(true)
    setShowLogin(false)
  }
  return (
    <>
      <HeaderContainer>
        <HeaderWraper>
          <Logo>Caffeine Transfusion</Logo>
          <IconWraper>
            <SlLogin size="30" color="#a48484" onClick={onClickLogin} />
            <SlUserFollow size="30" color="#a48484" onClick={onClickSignUp} />
          </IconWraper>
        </HeaderWraper>
      </HeaderContainer>
      {modalOpen && <Modal setModalOpen={setModalOpen}>{showLogin ? <Login /> : <SignUp />}</Modal>}
    </>
  )
}

export default Header
