import React, { useState, Fragment, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import MenuMobile from '../../components/MenuMobile/MenuMobile';
import NavMobile from '../../components/NavMobile/NavMobile';
import BtnToTop from '../../components/BtnToTop/BtnToTop';
// Sidebar
import SideBar from '../SideBar/SideBar';
// Routes
import Routes from './Routes/Routes';

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
      <Suspense fallback={<div>Loading...</div>}>
        <SideBar />
        {/* * * * Layout * * * */}
        <div className='Layout'>
          <NavMobile
            setShowMenu={setShowMenu}
            showMenu={showMenu}
            reference={ref}
          />
          {showMenu ? (
            <MenuMobile setShowMenu={setShowMenu} />
          ) : (
            <Fragment>
              <Switch>
                {/* Routes */}
                <Routes />
              </Switch>
            </Fragment>
          )}
          <BtnToTop inView={inView} />
        </div>
      </Suspense>
    </Router>
  );
}
