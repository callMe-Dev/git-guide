import React from 'react';
import CommandName from './CommandName/CommandName';

export default function CommandsContainer() {
  return (
    <div className='CommandContainer'>
      <CommandName extCmdName='init' />
      <CommandName extCmdName='status' />
    </div>
  );
}
