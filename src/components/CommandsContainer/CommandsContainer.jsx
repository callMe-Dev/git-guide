import React from 'react';
import CommandName from './CommandName/CommandName';

export default function CommandsContainer() {
  return (
    <>
      <div className='CommandContainer'>
        <h2 className='CommandContainer__title'>Comandos</h2>
        {/* Botones de para los comandos de git */}
        <>
          <CommandName extCmdName='init' />
          <CommandName extCmdName='status' />
        </>
      </div>
    </>
  );
}
