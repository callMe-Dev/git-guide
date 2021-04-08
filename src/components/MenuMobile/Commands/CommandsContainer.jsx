import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import CommandsBtnOs from './BtnOs/CommandsBtnOs'

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
      <article className='CommandsContianer__content'>
        <h1 className='CommandsContainer__content__title'>
          Como instalar Git:
        </h1>
        <div className='CommandsContainer__content__flex'>
          <CommandsBtnOs osName='Windows' handlePushView={handlePushView} />
          <CommandsBtnOs osName='Linux' handlePushView={handlePushView} />
          <CommandsBtnOs osName='MacOs' handlePushView={handlePushView} />
          <button
            className='CommandsContainer__content-btnConfig'
            onClick={() => handlePushView('config')}>
            Configurar
          </button>
        </div>
      </article>
      <article className='CommandsContianer__content'>
        <h1 className='CommandsContainer__content__title'>
          Como crear un repositorio:
        </h1>
        <div className='CommandsContainer__content__flex'>
          <button
            className='CommandsContainer__content-btnRepo'
            onClick={() => handlePushView('github')}>
            Github
          </button>
          <button
            className='CommandsContainer__content-btnRepo'
            onClick={() => handlePushView('gitlab')}>
            Gitlab
          </button>
        </div>
      </article>
      <article className='CommandsContianer__content'>
        <button
          className='CommandsContainer__content-btnKnowMore'
          onClick={() => handlePushView('commands')}>
          Conocer Comandos
        </button>
      </article>
    </div>
  )
}

CommandsContainer.propTypes = {
  setShowMenu: PropTypes.func.isRequired
}
