import React from 'react';
import menuImg from '../../assets/menu.svg';
import cancelLogo from '../../assets/cancel.svg';
import Logo from '../Logo/Logo';

export default function NavMobile({ setShowMenu, showMenu, reference }) {
  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='NavMobile' ref={reference}>
      <Logo setShowMenu={setShowMenu} />
      {showMenu ? (
        <img src={cancelLogo} alt='menu active' onClick={handleClickMenu} />
      ) : (
        <img src={menuImg} alt='menu' onClick={handleClickMenu} />
      )}
    </header>
  );
}
