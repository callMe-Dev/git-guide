import PropTypes from 'prop-types'

/**
 * @param {string} btnTxt
 * @param {string} route
 * @param {Function} handlePushView
 *
 * @returns JSX.Element
 */
export default function CommandsBtnBlue({
  btnText = '',
  route,
  handlePushView
}) {
  return (
    <button
      className='CommandsContainer__content-btnBlue'
      onClick={() => handlePushView(`${route}`)}
    >
      {btnText}
    </button>
  )
}

CommandsBtnBlue.propTypes = {
  btnText: PropTypes.string,
  route: PropTypes.string.isRequired,
  handlePushView: PropTypes.func
}
