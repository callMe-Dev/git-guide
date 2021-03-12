import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Sidebar
import SideBar from '../SideBar/SideBar';
// Components
import CommandsContainer from '../../components/CommandsContainer/CommandsContainer';
import GitInit from '../../components/CommandsContainer/commands/gitInit/gitInit';
import MenuMobile from '../../components/MenuMobile/MenuMobile';
import NavMobile from '../../components/NavMobile/NavMobile';
import GitConfigView from '../GitConfigView/GitConfigView';
import BtnToTop from '../../components/BtnToTop/BtnToTop';
// Install Components
import InstallWindows from '../os_views/InstallWindows/InstallWindows';
import InstallLinux from '../os_views/InstallLinux/InstallLinux';
import InstallMacOs from '../os_views/InstallMacOs/InstallMacos';
//Create repository
import Github from '../../components/Repositories/GitHub/Github';
import GitLab from '../../components/Repositories/GitLab/GitLab';
import ContentHome from '../ContentHome/ContentHome';
/* * * * * * * * * * * * ** * * * * * * * */
/* * * * * * * * * Layout * * * * * * * * */
/* * * * * * * * * * * * ** * * * * * * * */
export default function Layout() {
  const [showMenu, setShowMenu] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    // @TODO: mover los router a archivos separados por vistas, comandos, etc
    <Router>
      <SideBar />

      <div className='Layout'>
        <NavMobile
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          reference={ref}
        />
        {showMenu ? (
          <MenuMobile setShowMenu={setShowMenu} />
        ) : (
          <Switch>
            {/* @TODO: Convert to a simple RoutesFile */}
            <Route exact path='/'>
              <ContentHome />
            </Route>
            {/* Install Routes */}
            <Route path='/windows'>
              <InstallWindows />
            </Route>
            <Route path='/linux'>
              <InstallLinux />
            </Route>
            <Route path='/macos'>
              <InstallMacOs />
            </Route>
            <Route path='/gitlab'>
              <GitLab />
            </Route>
            {/* * * * * * * * * * * */}
            <Route path='/config'>
              <GitConfigView />
            </Route>
            {/*
             *
             * Repositories
             *
             */}
            <Route path='/github' component={Github} />
            <Route path='/gitlab' component={GitLab} />

            {/*
             *
             * Debemos cambiar esto por un routes nested
             * En lo mientras usarlo en el mismo Layout
             *
             */}
            <div className='Layout__noView'>
              <Route path='/commands' component={CommandsContainer}></Route>
            </div>
            <Route path='/git-init' component={GitInit} />
          </Switch>
        )}
        <BtnToTop inView={inView} />
      </div>
    </Router>
  );
}
