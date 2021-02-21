import React from 'react';
import CommandsContainer from './MenuContent/MenuContent';

export default function MenuMobile({ setShowMenu }) {
  return (
    <section className='MenuMobile'>
      {/* Aqui pasamos las props para que al hacer click en el menu se quite el menu */}
      <CommandsContainer setShowMenu={setShowMenu} />
    </section>
  );
}
