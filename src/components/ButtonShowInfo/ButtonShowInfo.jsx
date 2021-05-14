import React, { useState } from 'react'
import PropTypes from 'prop-types'

/**
  We can reuse this component when we want to show
  information dynamically changing the state
  @param {string} textInBtn
  @param {React.FC | JSX.Element} component
  @param {string} textWithState
  @returns JSX.Element
*/
export default function ButtonShowInfo({
  textInBtn = 'Mostrar mas',
  component = null,
  textWithState = 'Mostrar menos'
}) {
  const [showInfo, setShowInfo] = useState(false)

  const handleShowInfo = () => setShowInfo(!showInfo)

  return (
    <>
      <button
        className='buttonToShowInfo__btn'
        onClick={handleShowInfo}
        id={showInfo ? 'btnActive' : ' '}>
        <i
          className={
            'far fa-caret-square-right' + (showInfo ? ' rotate' : ' ')
          }></i>
        {/* Validate if there is text in the state, and so it will change, otherwise the initial one will be kept */}
        {showInfo
          ? textWithState.length > 0
            ? textWithState
            : textInBtn
          : textInBtn}
      </button>
      {/* The component is rendered that we pass through props*/}
      {showInfo ? component : ''}
    </>
  )
}

ButtonShowInfo.propTypes = {
  textInBtn: PropTypes.string,
  component: PropTypes.element,
  textWithState: PropTypes.string
}
