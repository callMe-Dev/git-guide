import React from 'react'
import PropTypes from 'prop-types'
import CommandsBtnOs from '../Btns/CommandsBtnOs'

export default function CommandsContainerOS({ handlePushView }) {
  return (
    <>
      <h1 className='CommandsContainer__content__title'>Como instalar Git:</h1>
      <div className='CommandsContainer__content__flex'>
        <CommandsBtnOs osName='Windows' handlePushView={handlePushView} />
        <CommandsBtnOs osName='Linux' handlePushView={handlePushView} />
        <CommandsBtnOs osName='MacOs' handlePushView={handlePushView} />
        <button
          className='CommandsContainer__content-btnConfig'
          onClick={() => handlePushView('config')}
        >
          Configurar
        </button>
      </div>
    </>
  )
}

CommandsContainerOS.propTypes = {
  handlePushView: PropTypes.func.isRequired
}
