import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import DogList from './DogList';
import DogDetails from './DogDetails';

const Routes = ({ dogs }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route exact path="/dogs/:name">
        <DogDetails dogs={dogs} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
