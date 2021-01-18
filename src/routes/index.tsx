import * as React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import GameScreen from '../screens/GameScreen';
import LandingScreen from '../screens/LandingScreen';
import LeaderboardsScreen from '../screens/LeaderboardsScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import RegisterScreen from '../screens/RegisterScreen';

import AppNavigation from '../containers/AppNavigation';

function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <AppNavigation />

      <Switch>
        <Route path="/leaderboards">
          <LeaderboardsScreen />
        </Route>
        <Route path="/game">
          <GameScreen />
        </Route>
        <Route path="/register">
          <RegisterScreen />
        </Route>
        <Route path="/">
          <LandingScreen />
        </Route>
        <Route path="/*">
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;