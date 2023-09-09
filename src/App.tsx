import { Fragment } from 'react'
import GlobalStyle from '../public/assets/common/GlobalStyle'
import { Outlet } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
      <Outlet />
    </Fragment>
  )
}

export default App
