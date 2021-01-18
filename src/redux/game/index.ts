import { createSlice } from '@reduxjs/toolkit'

import { readMaxScore } from '../../utils/storage';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    cards: [1, 1, 2, 2, 3, 3, 4, 4, 9, 10, 11, 12, 13, 14],
    visibleIndex: [],
    successIndex: [],
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
    },
    setVisible: (state, action) => {
      if (state.visibleIndex.length === 2) {
        state.visibleIndex = [];  
      }

      (state.visibleIndex as any) = [...state.visibleIndex, action.payload];

      if (state.visibleIndex.length === 2) {
        const [firstElementIndex, secondElementIndex] = state.visibleIndex;
        const firstCard = state.cards[firstElementIndex];
        const secondCard = state.cards[secondElementIndex];

        if (firstCard === secondCard) {
          (state.successIndex as any) = [...state.successIndex, firstElementIndex, secondElementIndex];
        }
      }
    },
    clearVisible: state => {
      state.visibleIndex = [];
    }
  },
})

export const { loadGame, loadDone, setVisible, clearVisible } = gameSlice.actions

export const selectIsLoading = (state: any) => state?.game?.isLoading;
export const selectScore = (state: any) => state?.game?.score;
export const selectMaxScore = (state: any) => state?.game?.maxScore;
export const selectTime = (state: any) => state?.game?.time;
export const selectCards = (state: any) => state?.game?.cards;

export const getCardValueCheckFuns = (state: any) => (cardIndex: number) => state?.game?.visibleIndex.includes(cardIndex)
  || state?.game?.successIndex.includes(cardIndex);

export default gameSlice.reducer;
