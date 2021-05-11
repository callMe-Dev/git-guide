import React from 'react'
import { Route, Switch } from 'react-router'

import ListCommands from '../../components/CommandsContainer/ListCommands/ListCommands'
import CommandsContainer from '../../components/CommandsContainer/CommandsContainer'
import ErrorPage from '../404/ErrorPage'
import Test from '../Test/Test'

import { routes } from './routes'

/************ ROUTES ***************/
export default function Routes() {
  return (
    <Switch>
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

      <Route path='/test' component={Test} />

      {/* 404 Page */}
      <Route component={ErrorPage} />
    </Switch>
  )
}
