import PropTypes from 'prop-types'
import gitLogoMobile from 'assets/gitLogoMobile.svg'
import gitDarkLogoMobile from 'assets/gitLogoDarkMobile.svg'
import { Link } from 'react-router-dom'
import LazyImg from '../LazyImg/LazyImg'

/**
 * @param {Function} setShowMenu
 * @param {string} isDark
 * @returns JSX.Element
 */
export default function Logo({ isDark, setShowMenu }) {
  const closeClickMenu = () => {
    setShowMenu(false)
  }

  return (
    <Link to='/' onClick={closeClickMenu} className='NavMobile__link'>
      <LazyImg
        source={isDark === 'dark' ? gitDarkLogoMobile : gitLogoMobile}
        imgAlt='git logo'
      />
    </Link>
  )
}

Logo.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
  isDark: PropTypes.string.isRequired
}
