import React from 'react';
import { Link } from 'react-router-dom';
import CommandName from './CommandName/CommandName';
import commandsData from './commands/commands.json';

export default function CommandsContainer() {
  console.log(commandsData);

  /**
   * @file gitCommand {
   *  @param name: string
   *  @param gitCmd: string
   *  @param description: string
   * }
   */
  const gitCommandsData = commandsData.map((gitCommand) => {
    return <CommandName extCmdName={gitCommand.gitCmd} key={gitCommand.name} />;
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='CommandContainer'>
      <Link
        className='CommandContainer__title'
        to='/commands'
        onClick={scrollToTop}
      >
        Comandos
      </Link>
      {/* Botones de para los comandos de git */}
      {gitCommandsData}
    </div>
  );
}
