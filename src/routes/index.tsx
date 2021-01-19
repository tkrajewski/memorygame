import * as React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

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

      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/">
            <LandingScreen />
          </Route>
          <Route path="/leaderboards">
            <LeaderboardsScreen />
          </Route>
          <Route path="/game">
            <GameScreen />
          </Route>
          <Route path="/register">
            <RegisterScreen />
          </Route>
          <Route path="*">
            <NotFoundScreen />
          </Route>
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default Routes;