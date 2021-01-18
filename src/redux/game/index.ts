import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    isLoading: false,
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

export default gameSlice.reducer;
