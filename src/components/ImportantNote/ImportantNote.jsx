import React, { useState } from 'react'
import PropTypes from 'prop-types'

/**
 * @param content: string
 */
export default function ImportantNote({ content }) {
  const [showImportantNote, setShowImportantNote] = useState(false)

  const handleShowImportantNote = () => {
    setShowImportantNote(!showImportantNote)
  }

  return (
    <div className='importantNote'>
      <div className='importantNote__flex' onClick={handleShowImportantNote}>
        <i
          className={
            'fas fa-caret-right ' + `${showImportantNote ? ' rotate' : ''}`
          }></i>
        <h3 className='importantNote__title'>Important...</h3>
      </div>
      {showImportantNote ? (
        <>
          {/* 
             Here implement a component that will be the content of the important note 
             It can be a component or between <> pass pure html
          */}
          {content}
        </>
      ) : (
        ''
      )}
    </div>
  )
}

ImportantNote.propTypes = {
  content: PropTypes.object.isRequired
}
