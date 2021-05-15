import React from 'react'
import PropTypes from 'prop-types'
import CommandsContainer from 'components/SidebarCommands/CommandsContainer'
import GitCommandsContainer from 'components/CommandsContainer/CommandsContainer'
import Logo from 'components/Logo/Logo'

/**
 * @param {React.reference} reference
 * @param {string} darkTheme
 * @param {Function} setDarkTheme
 * @param {React.Ref} reference
 * @returns JSX.Element
 */
export default function SideBar({ darkTheme = '', setDarkTheme, reference }) {
  // This function only simulates a state that you need as a prop
  const setShowMenu = () => false

  const containsLight = document.body.classList.contains('Light')

  const classLight = 'SideBar lightScroll'
  const classDark = 'SideBar  darkScroll'

  return (
    <aside className={containsLight ? classLight : classDark}>
      <div className='SideBar__scroll'>
        <Logo
          setShowMenu={setShowMenu}
          isDark={darkTheme}
          reference={reference}
        />
        <div className='SideBar__line'></div>
        <CommandsContainer setTheme={setDarkTheme} setShowMenu={setShowMenu} />
        <GitCommandsContainer />
      </div>
    </aside>
  )
}

SideBar.propTypes = {
  reference: PropTypes.func,
  darkTheme: PropTypes.string.isRequired,
  setDarkTheme: PropTypes.func.isRequired
}
