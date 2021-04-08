import React from 'react'
import PropTypes from 'prop-types'

export default function CommandsContainerTwo({ handlePushView }) {
  return (
    <>
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
    </>
  )
}

CommandsContainerTwo.propTypes = {
  handlePushView: PropTypes.func.isRequired
}
