import React, { useState, Fragment } from 'react'
import { useInView } from 'react-intersection-observer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MenuMobile from '../../components/MenuMobile/MenuMobile'
import NavMobile from '../../components/NavMobile/NavMobile'
import BtnToTop from '../../components/BtnToTop/BtnToTop'
// Sidebar
import SideBar from '../SideBar/SideBar'
// Routes
import Routes from '../Routes/Routes'
import ErrorPage from '../404/ErrorPage'

/* * * * * * * * * * * * ** * * * * * * * */
/* * * * * * * * * Layout * * * * * * * * */
/* * * * * * * * * * * * ** * * * * * * * */
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
      {/* * * * Layout * * * */}
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
            <Switch>
              <Routes />

              {/* 404 Page */}
              <Route component={ErrorPage} />
            </Switch>
          </Fragment>
        )}
        <BtnToTop inView={inView} />
      </div>
    </Router>
  )
}
