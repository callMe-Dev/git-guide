import React from 'react';
import CommandsContainer from '../CommandsContainer/CommandsContainer';

export default function MenuMobile({ setShowMenu, showMenu }) {
  return (
    <section className='MenuMobile'>
      {/* Aqui pasamos las props para que al hacer click en el menu se quite el menu */}
      <CommandsContainer setShowMenu={setShowMenu} showMenu={showMenu} />
    </section>
  );
}
