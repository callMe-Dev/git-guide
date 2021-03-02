import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
// Sidebar
import SideBar from '../SideBar/SideBar';
// Components
import ContentComponent from '../../components/ContentComponent/ContentComponent';
import NavMobile from '../../components/NavMobile/NavMobile';
import MenuMobile from '../../components/MenuMobile/MenuMobile';
import BtnToTop from '../../components/BtnToTop/BtnToTop';
import GitConfigView from '../../components/GitConfigView/GitConfigView';
import CommandsContainer from '../../components/CommandsContainer/CommandsContainer';
import GitInit from '../../components/CommandsContainer/commands/gitInit/gitInit';
// Install Components
import InstallWindows from '../../components/InstallWindows/InstallWindows';
import InstallLinux from '../../components/InstallLinux/InstallLinux';
import InstallMacOs from '../../components/InstallMacOs/InstallMacos';
/* * * * * * * * * * * * ** * * * * * * * */
/* * * * * * * * * Layout * * * * * * * * */
/* * * * * * * * * * * * ** * * * * * * * */
export default function Layout() {
  const [showMenu, setShowMenu] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
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
              <ContentComponent />
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
            {/* * * * * * * * * * * */}
            <Route path='/config'>
              <GitConfigView />
            </Route>
            <Route path='/commands' component={CommandsContainer}></Route>
            {/*
             *
             * Debemos cambiar esto por un routes nested
             * En lo mientras usarlo en el mismo Layout
             *
             */}
            <Route path='/git-init' component={GitInit} />
          </Switch>
        )}
        <BtnToTop inView={inView} />
      </div>
    </Router>
  );
}
