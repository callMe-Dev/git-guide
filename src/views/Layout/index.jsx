import { useState, Fragment } from 'react'
import { useInView } from 'react-intersection-observer'
import { BrowserRouter as Router } from 'react-router-dom'
import MenuMobile from 'components/MenuMobile/MenuMobile'
import NavMobile from 'components/NavMobile/NavMobile'
import BtnToTop from 'components/BtnToTop/BtnToTop'
import SideBar from '../SideBar/SideBar'
import Routes from '../Routes/Routes'

export default function Layout() {
  const [showMenu, setShowMenu] = useState(false)
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  const [ref, inView] = useInView({
    threshold: 0
  })

  return (
    <Router>
      <SideBar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      <div className='Layout'>
        <NavMobile
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          darkTheme={darkTheme}
          reference={ref}
        />
        {showMenu ? (
          <MenuMobile setTheme={setDarkTheme} setShowMenu={setShowMenu} />
        ) : (
          <Fragment>
            <Routes />
          </Fragment>
        )}
        <BtnToTop inView={inView} />
      </div>
    </Router>
  )
}
