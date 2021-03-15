import React from 'react';
import { Link } from 'react-router-dom';
import CommandName from './CommandName/CommandName';
import commandsData from './commands/commands.json';

export default function CommandsContainer() {
  console.log(commandsData);

  /*
   * @name: string
   * @gitCmd: string
   * @description: string
   */
  const gitCommandData = commandsData.map((gitCommand) => {
    return <CommandName extCmdName={gitCommand.gitCmd} key={gitCommand.name} />;
  });

  return (
    <div className='CommandContainer'>
      <Link className='CommandContainer__title' to='/commands'>
        Comandos
      </Link>
      {/* Botones de para los comandos de git */}
      <>{gitCommandData}</>
    </div>
  );
}
