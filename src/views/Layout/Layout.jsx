import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
// Components
import ContentComponent from '../../components/ContentComponent/ContentComponent';
import NavMobile from '../../components/NavMobile/NavMobile';
import MenuMobile from '../../components/MenuMobile/MenuMobile';
import InstallWindows from '../../components/InstallWindows/InstallWindows';
import BtnToTop from '../../components/BtnToTop/BtnToTop';
import GitConfigView from '../../components/GitConfigView/GitConfigView';
import Commands from '../../components/Commands/Commands';
import CommandContent from '../../components/Commands/CommandContent/CommandContent';

export default function Layout() {
  const [showMenu, setShowMenu] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <Router>
      <div className='Layout'>
        <NavMobile
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          reference={ref}
        />
        {showMenu ? (
          <MenuMobile setShowMenu={setShowMenu} showMenu={showMenu} />
        ) : (
          <Switch>
            {/* @TODO: Convert to a simple RoutesFile */}
            <Route exact path='/'>
              <ContentComponent />
            </Route>
            <Route path='/windows'>
              <InstallWindows />
            </Route>
            <Route path='/config'>
              <GitConfigView />
            </Route>
            <Route path="/commands">
              <Commands/>
            </Route>
            <Route path="/git-init">
              <CommandContent description="Prueba desde layout"/>
            </Route>
          </Switch>
        )}
        <BtnToTop inView={inView} />
      </div>
    </Router>
  );
}

