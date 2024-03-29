import PropTypes from 'prop-types'

/**
 *
 * @param {string} classText
 * @param {string} iframeSrc
 */
export default function YtIframe({ classText, iframeSrc }) {
  return (
    <iframe
      className={classText}
      src={iframeSrc}
      title='YouTube video player'
      frameBorder='0'
      loading='lazy'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  )
}

YtIframe.propTypes = {
  classText: PropTypes.string.isRequired,
  iframeSrc: PropTypes.string.isRequired
}
