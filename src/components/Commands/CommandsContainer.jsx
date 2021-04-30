import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import CommandsContainerContent from './CommandsContainerContent/CommandsContainerContent'
import CommandsContainerOS from './CommandsContainer/CommandsContainerOS'
import CommandsContainerRepositories from './CommandsContainer/CommandsContainerRepositories'
import DarkModeComponent from './DarkMode/DarkMode'
import CommandsBtnBlue from './Btns/CommandsBtnBlue'

/**
 * @param setShowMenu: Function
 */
export default function CommandsContainer({ setTheme, setShowMenu }) {
  let history = useHistory()

  /**
   *  @param viewText: string
   */
  const handlePushView = (viewText) => {
    if (viewText === undefined) return

    history.push(`/${viewText}`)
    setShowMenu(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className='CommandsContainer'>
      <CommandsContainerContent>
        <DarkModeComponent setImgTheme={setTheme} />
      </CommandsContainerContent>
      <CommandsContainerContent>
        <CommandsContainerOS handlePushView={handlePushView} />
      </CommandsContainerContent>
      <CommandsContainerContent>
        <CommandsContainerRepositories handlePushView={handlePushView} />
      </CommandsContainerContent>
      <CommandsBtnBlue
        btnText='Tutoriales'
        route='tutoriales'
        handlePushView={handlePushView}
      />
      <CommandsContainerContent>
        <button
          className='CommandsContainer__content-btnKnowMore'
          onClick={() => handlePushView('commands')}>
          Conocer Comandos
        </button>
      </CommandsContainerContent>
    </div>
  )
}

CommandsContainer.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired
}
