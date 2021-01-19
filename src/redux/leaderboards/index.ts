import { createSlice } from '@reduxjs/toolkit'

import sortScores from '../../utils/sort';
import { readLeaderboards, saveLeaderboards } from '../../utils/storage';

export const gameSlice = createSlice({
  name: 'leaderboards',
  initialState: {
    leaderboards: sortScores(readLeaderboards() || []),
  },
  reducers: {
    pushToLeaderboards: (state, { payload }) => {
      state.leaderboards = sortScores([...state.leaderboards, payload]);
      saveLeaderboards(state.leaderboards);
    },
  },
})

export const { pushToLeaderboards } = gameSlice.actions

export const selectLeaderboards = (state: any) => state?.leaderboards?.leaderboards;

export default gameSlice.reducer;
