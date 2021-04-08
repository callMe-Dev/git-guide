import React from 'react'
import PropTypes from 'prop-types'

/**
 * This is just a function which will send to the 'url' that is passed to it
 * @param extCmdName: string
 */
export default function CommandName({ extCmdName }) {
  // @NOTE: extCmdName is the name of the end of each command to save us the 'git' of the beginning

  return (
    <div className='CommandContainer__command'>
      <a
        className='CommandContainer__command__name'
        // This sends a command for its id
        href={`/commands/#git-${extCmdName}`}>
        <i className='fas fa-hashtag'></i>
        <span>git</span> {extCmdName}
      </a>
    </div>
  )
}

CommandName.propTypes = {
  extCmdName: PropTypes.string.isRequired
}
