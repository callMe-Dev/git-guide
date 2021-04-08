import React from 'react'
import { Route } from 'react-router'
import ListCommands from '../../../components/CommandsContainer/commands/ListCommands/ListCommands'
import CommandsContainer from '../../../components/CommandsContainer/CommandsContainer'
import InstallWindows from '../../os_views/InstallWindows/InstallWindows'
import InstallLinux from '../../os_views/InstallLinux/InstallLinux'
import InstallMacOs from '../../os_views/InstallMacOs/InstallMacos'
import GitHub from '../../Repositories/GitHub/Github'
import GitLab from '../../Repositories/GitLab/GitLab'
import GitConfigView from '../../GitConfigView/GitConfigView'
import ContentHome from '../../ContentHome/ContentHome'

export default function Routes() {
  return (
    <>
      <Route exact path='/'>
        <ContentHome />
      </Route>
      <Route path='/windows'>
        <InstallWindows />
      </Route>
      <Route path='/linux'>
        <InstallLinux />
      </Route>
      <Route path='/macos'>
        <InstallMacOs />
      </Route>
      {/* * * * * * * * * * * */}
      <Route path='/config'>
        <GitConfigView />
      </Route>
      {/*
       * Repositories
       */}
      <Route path='/github' component={GitHub} />
      <Route path='/gitlab' component={GitLab} />

      <Route path='/commands'>
        {/*
         * El div esta dentro del <Route> ya que Switch lo detecta como
         * computedMatch lo cual da un error en React
         */}
        <div className='Layout__noView'>
          <CommandsContainer />
        </div>

        {/* Estos son todos los comandos renderizados */}
        <ListCommands />
      </Route>
    </>
  )
}
