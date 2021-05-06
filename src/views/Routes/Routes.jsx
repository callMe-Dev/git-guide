import React from 'react'
import { Route } from 'react-router'

import ListCommands from '../../components/CommandsContainer/commands/ListCommands/ListCommands'
import CommandsContainer from '../../components/CommandsContainer/CommandsContainer'

import { routes } from './routes'

/************ ROUTES ***************/
export default function Routes() {
  return (
    <>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact}>
          {route.component}
        </Route>
      ))}

      <Route path='/commands'>
        {/*
          The div is inside the <Route> since Switch detects it as
          computedMatch which gives an error in React
         */}
        <div className='Layout__noView'>
          <CommandsContainer />
        </div>
        <ListCommands />
      </Route>
    </>
  )
}
