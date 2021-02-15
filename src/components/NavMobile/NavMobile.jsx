import React from 'react';
import { Link } from 'react-router-dom';
import gitLogoMobile from '../../assets/gitLogoMobile.svg';
import menuImg from '../../assets/menu.svg';
import cancelLogo from '../../assets/cancel.svg';

export default function NavMobile({ setShowMenu, showMenu, reference }) {
  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeClickMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className='NavMobile' ref={reference}>
      <Link to='/' onClick={closeClickMenu} className='NavMobile__link'>
        <img src={gitLogoMobile} alt='git logo' />
      </Link>
      {showMenu ? (
        <img src={cancelLogo} alt='menu active' onClick={handleClickMenu} />
      ) : (
        <img src={menuImg} alt='menu' onClick={handleClickMenu} />
      )}
    </header>
  );
}
