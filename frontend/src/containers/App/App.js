import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { ToastWrapper } from '../../WebUI/';
import Navbar from '../../components/Navbar/Navbar';
import TopNav from '../../components/Topnav/Topnav';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Routes from '../../routes';
import history from '../../history';

export const App = () => {
  const sections = [
    {
      heading: 'examples',
      items: [
        {
          name: 'static pages',
          icon: 'fas fa-fw fa-cog',
          items: [
            { itemName: 'home', itemHref: '/', itemIcon: 'fas fa-fw fa-home' },
            { itemName: '404', itemHref: '/404' },
            { itemName: '500', itemHref: '/500' }
          ]
        },
        {
          name: 'dynamic pages',
          icon: 'fas fa-fw fa-cog',
          items: [
            { itemName: 'users', itemHref: '/users' },
            { itemName: 'colors', itemHref: '/colors' }
          ]
        }
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
          <div id="content-wrapper" className="d-flex flex-column">
            <TopNav links={links} history={history} />
            <Routes history={history} />
            <ToastWrapper />
          </div>
        </BrowserRouter>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default App;
