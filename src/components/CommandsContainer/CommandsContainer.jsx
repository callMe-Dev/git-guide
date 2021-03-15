import React from 'react';
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

  const scrollToTop = () => {
    // Esto manda hacia la cima del objeto window (browser)
    window.scrollTo(0, 0);
  };

  return (
    <div className='CommandContainer' onClick={scrollToTop}>
      <h2 className='CommandContainer__title'>Comandos</h2>
      {/* Botones de para los comandos de git */}
      {gitCommandData}
    </div>
  );
}
