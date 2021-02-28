import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

export default function SideBar() {
  // Esta funcion solamente simula un estado que necesita como prop
  const setShowMenu = () => false;

  return (
    <Router>
      <aside className='SideBar'>
        <Logo setShowMenu={setShowMenu} />
      </aside>
    </Router>
  );
}
