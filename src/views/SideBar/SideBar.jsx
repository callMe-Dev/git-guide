import React from 'react'
import PropTypes from 'prop-types'
import CommandsContainer from '../../components/MenuMobile/Commands/CommandsContainer'
// Estos son los comandos en lista de git
import GitCommandsContainer from '../../components/CommandsContainer/CommandsContainer'
import Logo from '../../components/Logo/Logo'

/**
 * @param reference: React.ref
 */
export default function SideBar({ darkTheme, setDarkTheme, reference }) {
  // Esta funcion solamente simula un estado que necesita como prop
  const setShowMenu = () => false

  return (
    <aside className='SideBar'>
      <div className='SideBar__scroll'>
        <Logo setShowMenu={setShowMenu} isDark={darkTheme} reference={reference} />
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
