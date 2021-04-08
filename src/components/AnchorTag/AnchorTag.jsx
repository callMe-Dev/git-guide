import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param anchorText: string
 * @param url: string
 * @param anchorKey?: string
 * @returns <a>{...}</a>
 */
export default function AnchorTag({ anchorText, url, anchorKey = '' }) {
  return (
    <a href={url} target='_blank' rel='noreferrer' accessKey={anchorKey}>
      <i className='fas fa-paperclip'></i>
      {anchorText}
    </a>
  )
}

AnchorTag.propTypes = {
  anchorText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  anchorKey: PropTypes.string
}
