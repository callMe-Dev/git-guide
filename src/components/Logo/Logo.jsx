import React from 'react';
import { Link } from 'react-router-dom';
import gitLogoMobile from '../../assets/gitLogoMobile.svg';

export default function Logo({ setShowMenu }) {
  const closeClickMenu = () => {
    setShowMenu(false);
  };
  return (
    <Link to='/' onClick={closeClickMenu} className='NavMobile__link'>
      <img src={gitLogoMobile} alt='git logo' />
    </Link>
  );
}
