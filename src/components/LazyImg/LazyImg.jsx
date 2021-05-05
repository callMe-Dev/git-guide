import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param {string} source
 * @param {string} imgAlt
 * @param {string} imgClass
 * @param {Function} func
 *
 * @returns JSX.Element
 */
export default function LazyImg({
  source,
  imgAlt = '',
  imgClass = '',
  func = null
}) {
  // This is a component to render images with lazy loading
  return (
    <img
      src={source}
      alt={imgAlt}
      className={imgClass}
      onClick={func}
      loading='lazy'
    />
  )
}

LazyImg.propTypes = {
  source: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
  imgClass: PropTypes.string,
  func: PropTypes.func
}
