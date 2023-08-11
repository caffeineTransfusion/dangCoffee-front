import { Fragment } from 'react'
import GlobalStyle from '../public/assets/common/GlobalStyle'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Outlet />
    </Fragment>
  )
}

export default App
