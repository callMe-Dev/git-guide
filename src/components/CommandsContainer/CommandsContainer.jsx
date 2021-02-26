import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CommandName from './CommandName/CommandName';

export default function CommandsContainer() {
  return (
    <Switch>
      <Route path='/commands'>
        <div className='CommandContainer'>
          <CommandName extCmdName='init' />
          <CommandName extCmdName='status' />
        </div>
      </Route>
    </Switch>
  );
}
