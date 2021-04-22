import React from 'react'
import PropTypes from 'prop-types'
import gitLogoMobile from '../../assets/gitLogoMobile.svg'
import gitDarkLogoMobile from '../../assets/gitLogoDarkMobile.svg'
import { Link } from 'react-router-dom'
import LazyImg from '../LazyImg/LazyImg'

/**
 * @param setShowMenu: Function
 */
export default function Logo({ isDark, setShowMenu }) {
  const closeClickMenu = () => {
    setShowMenu(false)
  }
  return (
    <Link to='/' onClick={closeClickMenu} className='NavMobile__link'>
      { isDark === 'light' && <LazyImg source={gitLogoMobile} imgAlt='git logo' />}
      { isDark === 'dark' && <LazyImg source={gitDarkLogoMobile} imgAlt='git logo' />}
    </Link>
  )
}

Logo.propTypes = {
  setShowMenu: PropTypes.func.isRequired
}
