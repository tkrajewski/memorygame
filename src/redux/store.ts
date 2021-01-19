import { configureStore } from '@reduxjs/toolkit';

import gameReducer from './game';
import leaderboardsReducer from './leaderboards';
import userReducer from './user';

const store = configureStore({
  reducer: {
    game: gameReducer,
    leaderboards: leaderboardsReducer,
    user: userReducer,
  },
});

export default store;
