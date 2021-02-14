import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import ContentComponent from '../../components/ContentComponent/ContentComponent';
import NavMobile from '../../components/NavMobile/NavMobile';
import MenuMobile from '../../components/MenuMobile/MenuMobile';
import InstallWindows from '../../components/InstallWindows/InstallWindows';

export default function Layout() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Router>
      <div className='Layout'>
        <NavMobile setShowMenu={setShowMenu} showMenu={showMenu} />
        {showMenu ? (
          <MenuMobile setShowMenu={setShowMenu} showMenu={showMenu} />
        ) : (
          <Switch>
            <Route exact path='/'>
              <ContentComponent />
            </Route>
            <Route path='/windows'>
              <InstallWindows />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}
