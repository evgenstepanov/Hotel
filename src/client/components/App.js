import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import NotFound from './pages/NotFound';
import NavBar from './NavBar';
import '../index.scss'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/rooms">
          <Rooms />
        </Route>
        <Route path="/rooms/:id">
          <SingleRoom />
        </Route> 
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default hot(App);