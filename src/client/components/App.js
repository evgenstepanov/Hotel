import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StoreProvider from '../store';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import NotFound from './pages/NotFound';
import NavBar from './NavBar';
import Footer from './Footer';
import '../index.scss';

function App() {
  return (
    <>
      <StoreProvider>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/rooms'>
            <Rooms />
          </Route>
          <Route path='/rooms/:type'>
            <SingleRoom />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </StoreProvider>
    </>
  );
}

export default hot(App);
