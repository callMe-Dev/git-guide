import React from 'react';
import gitLogoMobile from '../../assets/gitLogoMobile.svg';
import { Link } from 'react-router-dom';
import LazyImg from '../LazyImg/LazyImg';

/**
 * @param setShowMenu: Function
 */
export default function Logo({ setShowMenu }) {
  const closeClickMenu = () => {
    setShowMenu(false);
  };
  return (
    <Link to='/' onClick={closeClickMenu} className='NavMobile__link'>
      <LazyImg source={gitLogoMobile} imgAlt='git logo' />
    </Link>
  );
}
