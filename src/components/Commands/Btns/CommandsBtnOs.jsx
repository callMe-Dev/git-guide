import React from 'react'
import PropTypes from 'prop-types'

/**
 *
 * @param osName: string
 * @param handlePushView: Function
 */
export default function CommandsBtnOs({ osName, handlePushView }) {
  const funcText = osName.toLowerCase()

  return (
    <button
      className='CommandsContainer__content-btnOs'
      onClick={() => handlePushView(`${funcText}`)}>
      {osName}
    </button>
  )
}

CommandsBtnOs.propTypes = {
  osName: PropTypes.string.isRequired,
  handlePushView: PropTypes.func.isRequired
}