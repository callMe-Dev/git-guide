import React from 'react'
import { Route } from 'react-router'
import ListCommands from '../../../components/CommandsContainer/commands/ListCommands/ListCommands'
import CommandsContainer from '../../../components/CommandsContainer/CommandsContainer'
import InstallWindows from '../../os_views/InstallWindows/InstallWindows'
import InstallLinux from '../../os_views/InstallLinux/InstallLinux'
import InstallMacOs from '../../os_views/InstallMacOs/InstallMacos'
import GitConfigView from '../../GitConfigView/GitConfigView'
import ContentHome from '../../ContentHome/ContentHome'
import GitHub from '../../Repositories/GitHub/Github'
import GitLab from '../../Repositories/GitLab/GitLab'
import Tutorials from '../../Tutorials/Tutorials'
import { routes } from './routes'

/************ ROUTES ***************/
export default function Routes() {
  return (
    <>
      {/* * * * * * * * * * * */}
      <Route exact path={routes.root}>
        <ContentHome />
      </Route>
      {/* * * * * * * * * * * */}
      <Route path={routes.os.windows}>
        <InstallWindows />
      </Route>
      {/* * * * * * * * * * * */}
      <Route path={routes.os.linux}>
        <InstallLinux />
      </Route>
      {/* * * * * * * * * * * */}
      <Route path={routes.os.macos}>
        <InstallMacOs />
      </Route>
      {/* * * * * * * * * * * */}
      <Route path={routes.config}>
        <GitConfigView />
      </Route>
      {/*
       * Repositories
       */}
      <Route path={routes.repositories.github} component={GitHub} />
      <Route path={routes.repositories.gitlab} component={GitLab} />
      {/* * * * * * * * * * * */}
      <Route path={routes.tutorials} component={Tutorials} />
      {/* * * * * * * * * * * */}
      <Route path={routes.commands}>
        {/*
          The div is inside the <Route> since Switch detects it as
          computedMatch which gives an error in React
         */}
        <div className='Layout__noView'>
          <CommandsContainer />
        </div>

        {/* These are all the rendered commands */}
        <ListCommands />
      </Route>
    </>
  )
}
