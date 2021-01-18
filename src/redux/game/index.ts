import { createSlice } from '@reduxjs/toolkit'

import { readMaxScore } from '../../utils/storage';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    isLoading: false,
    score: 0,
    maxScore: readMaxScore(),
    time: 0,
  },
  reducers: {
    loadGame: state => {
      state.isLoading = true;
    },
    loadDone: state => {
      state.isLoading = false;
    }
  },
})

export const { loadGame, loadDone } = gameSlice.actions

export const selectIsLoading = (state: any) => state?.game?.isLoading;
export const selectScore = (state: any) => state?.game?.score;
export const selectMaxScore = (state: any) => state?.game?.maxScore;
export const selectTime = (state: any) => state?.game?.time;

export default gameSlice.reducer;
