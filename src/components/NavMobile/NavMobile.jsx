import React from 'react';
import cancelLogo from '../../assets/cancel.svg';
import menuImg from '../../assets/menu.svg';
import Logo from '../Logo/Logo';
import LazyImg from '../LazyImg/LazyImg';

/**
 * @param setShowMenu: Function
 * @param showMenu: Boolean
 * @param reference: React.ref
 */
export default function NavMobile({ setShowMenu, showMenu, reference }) {
  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='NavMobile' ref={reference}>
      <Logo setShowMenu={setShowMenu} />
      {showMenu ? (
        <LazyImg
          source={cancelLogo}
          imgAlt='menu active'
          func={handleClickMenu}
        />
      ) : (
        <LazyImg source={menuImg} imgAlt='menu' func={handleClickMenu} />
      )}
    </header>
  );
}
