import { configureStore } from '@reduxjs/toolkit';

import gameReducer from './game';
import userReducer from './user';

const store = configureStore({
  reducer: {
    game: gameReducer,
    user: userReducer,
  },
});

export default store;
