import React from 'react';
import gitLogoMobile from '../../assets/gitLogoMobile.svg';
import menuImg from '../../assets/menu.svg';
import cancelLogo from '../../assets/cancel.svg';

export default function NavMobile({ setShowMenu, showMenu }) {
  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='NavMobile'>
      <img src={gitLogoMobile} alt='git logo' />
      {showMenu ? (
        <img src={cancelLogo} alt='menu active' onClick={handleClickMenu} />
      ) : (
        <img src={menuImg} alt='menu' onClick={handleClickMenu} />
      )}
    </header>
  );
}
