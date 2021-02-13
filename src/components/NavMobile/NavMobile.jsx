import React from 'react';
import gitLogoMobile from '../../assets/gitLogoMobile.svg';
import menuImg from '../../assets/menu.svg';

export default function NavMobile() {
  return (
    <header className='NavMobile'>
      <img src={gitLogoMobile} alt='git logo' />
      <img src={menuImg} alt='menu' />
    </header>
  );
}
