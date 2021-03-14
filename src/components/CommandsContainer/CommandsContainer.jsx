import React from 'react';
import CommandName from './CommandName/CommandName';
import CommandsData from './commands/commands.json';

export default function CommandsContainer() {
  console.log(CommandsData);

  return (
    <>
      <div className='CommandContainer'>
        <h2 className='CommandContainer__title'>Comandos</h2>
        {/* Botones de para los comandos de git */}
        <>
          {/*@TODO: Añadir una funcion de map para recorrer el archivo de json para renderizar los comandos necesarios*/}
          <CommandName extCmdName='init' />
          <CommandName extCmdName='status' />
        </>
      </div>
    </>
  );
}
