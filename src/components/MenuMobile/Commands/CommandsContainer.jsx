import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import CommandsContainerContent from './CommandsContainerContent/CommandsContainerContent'
import CommandsContainerOne from './CommandsContainer/CommandsContainerOne'
import CommandsContainerTwo from './CommandsContainer/CommandsContainerTwo'

/**
 * @param setShowMenu: Function
 */
export default function CommandsContainer({ setShowMenu }) {
  let history = useHistory()

  // @viewText: string
  const handlePushView = (viewText) => {
    if (viewText === undefined) return

    history.push(`/${viewText}`)
    setShowMenu(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className='CommandsContainer'>
      <CommandsContainerContent>
        <CommandsContainerOne handlePushView={handlePushView} />
      </CommandsContainerContent>
      <CommandsContainerContent>
        <CommandsContainerTwo handlePushView={handlePushView} />
      </CommandsContainerContent>
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
  setShowMenu: PropTypes.func.isRequired
}
