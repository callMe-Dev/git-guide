import React from 'react';
import CommandsContainer from './Commands/CommandsContainer';

/**
 * @param setShowMenu: Function
 */
export default function MenuMobile({ setShowMenu }) {
  return (
    <section className='MenuMobile'>
      {/* Aqui pasamos las props para que al hacer click en el menu se quite el menu */}
      <CommandsContainer setShowMenu={setShowMenu} />
    </section>
  );
}
