import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContentComponent from '../../components/ContentComponent/ContentComponent';
import NavMobile from '../../components/NavMobile/NavMobile';

export default function Layout() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Router>
      <div className='Layout'>
        <NavMobile setShowMenu={setShowMenu} showMenu={showMenu} />
        <Switch>
          <Route exact path='/'>
            {showMenu ? <p>Menu</p> : ContentComponent}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
