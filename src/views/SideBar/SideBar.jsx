import React from 'react';
import CommandsContainer from '../../components/MenuMobile/MenuContent/CommandsContainer';
// Estos son los comandos en lista de git
import GitCommandsContainer from '../../components/CommandsContainer/CommandsContainer';
import Logo from '../../components/Logo/Logo';

export default function SideBar({ reference }) {
  // Esta funcion solamente simula un estado que necesita como prop
  const setShowMenu = () => false;

  return (
    <aside className='SideBar'>
      <div className='SideBar__scroll'>
        <Logo setShowMenu={setShowMenu} reference={reference} />
        <div className='SideBar__line'></div>
        <CommandsContainer setShowMenu={setShowMenu} />
        <GitCommandsContainer />
      </div>
    </aside>
  );
}
