import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param btnTxt: string
 * @param route: string
 * @param handlePushView: Function
 *
 * @returns <button>{...}</button>
 */
export default function CommandsBtnBlue({
  btnText = '',
  route,
  handlePushView
}) {
  return (
    <button
      className='CommandsContainer__content-btnBlue'
      onClick={() => handlePushView(`${route}`)}>
      {btnText}
    </button>
  )
}

CommandsBtnBlue.propTypes = {
  btnText: PropTypes.string,
  route: PropTypes.string.isRequired,
  handlePushView: PropTypes.func
}
