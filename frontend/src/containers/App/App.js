import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { ToastWrapper } from '../../WebUI/';
import Navbar from '../../components/Navbar/Navbar';
import TopNav from '../../components/Topnav/Topnav';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import RootContainer from '../../WebApp/modals/Root';
import Routes from '../../routes';
import history from '../../history';

export const App = () => {
  const sections = [
    {
      heading: 'Web App',
      items: [
        // {
        //   name: 'Routes',
        //   icon: 'fas fa-fw fa-cog',
        //   items: [
        //   //   { itemName: '404', itemHref: '/404' },
        //   //   { itemName: '500', itemHref: '/500' }
        //   ]
        // },
        {
          name: 'Courses',
          href: '/courses',
          icon: 'fas fa-fw fa-home'
        },
      ]
    }
  ];

  const links = [
    { name: 'profile', href: '#', icon: 'user' },
    { name: 'settings', href: '#', icon: 'cogs' },
    { name: 'activity log', href: '#', icon: 'list' },
    { divider: true },
    { name: 'log out', href: '#', icon: 'sign-out-alt' }
  ];

  return (
    <div className="App">
      <div id="wrapper">
        <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
          <Navbar sections={sections} history={history} />
          <div id="content-wrapper" className="d-flex flex-column" style={{
            overflowX: 'unset',
            minWidth: 550,
          }}>
            <TopNav links={links} history={history} />
            <Routes history={history} />
            <RootContainer />
            <ToastWrapper />
          </div>
        </BrowserRouter>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default App;
