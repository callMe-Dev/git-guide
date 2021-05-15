import React from 'react'
import PropTypes from 'prop-types'
import cancelLogo from 'assets/cancel.svg'
import menuImg from 'assets/menu.svg'
import LazyImg from '../LazyImg/LazyImg'
import Logo from '../Logo/Logo'
import darkModeMenu from 'assets/navMobile/navMobile-darkmode.svg'

/**
 * @param {Function} setShowMenu
 * @param {Boolean} showMenu
 * @param {React.Ref} reference
 * @param {string} darkTheme
 */
export default function NavMobile({
  darkTheme,
  setShowMenu,
  showMenu,
  reference
}) {
  const handleClickMenu = () => {
    setShowMenu(!showMenu)
  }

  const containsLight = document.body.classList.contains('Light')

  return (
    <header className='NavMobile' ref={reference}>
      <Logo isDark={darkTheme} setShowMenu={setShowMenu} />
      {showMenu ? (
        <LazyImg
          source={cancelLogo}
          imgAlt='menu active'
          func={handleClickMenu}
        />
      ) : (
        <LazyImg
          source={containsLight ? menuImg : darkModeMenu}
          imgAlt='menu'
          func={handleClickMenu}
        />
      )}
    </header>
  )
}

NavMobile.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
  reference: PropTypes.func.isRequired,
  darkTheme: PropTypes.string.isRequired
}
