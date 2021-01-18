import { createSlice } from '@reduxjs/toolkit'

import generate from '../../utils/generate';
import { readMaxScore } from '../../utils/storage';

const defaultState = {
  cards: [],
  visibleIndex: [],
  successIndex: [],
  isLoading: false,
  score: 0,
  maxScore: readMaxScore(),
  modifier: 0,
  time: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    ...defaultState,
  },
  reducers: {
    loadGame: (state, { payload }) => {
      state.isLoading = true;
      state.modifier = payload;
      (state.cards as number[]) = generate(payload);
    },
    loadDone: state => {
      state.isLoading = false;
    },
    setVisible: (state, action) => {
      if (state.visibleIndex.length === 2) {
        state.visibleIndex = [];  
      }

      (state.visibleIndex as number[]) = [...state.visibleIndex, action.payload];

      if (state.visibleIndex.length === 2) {
        const [firstElementIndex, secondElementIndex] = state.visibleIndex;
        const firstCard = state.cards[firstElementIndex];
        const secondCard = state.cards[secondElementIndex];

        if (firstCard === secondCard) {
          (state.successIndex as any) = [...state.successIndex, firstElementIndex, secondElementIndex];
          state.score = state.score + 1;
        }
      }
    },
    clearVisible: state => {
      state.visibleIndex = [];
    },
    clear: state => {
      state = {
        ...defaultState,
      };
    }
  },
})

export const { clear, loadGame, loadDone, setVisible, clearVisible } = gameSlice.actions

export const selectIsLoading = (state: any) => state?.game?.isLoading;
export const selectScore = (state: any) => state?.game?.score;
export const selectMaxScore = (state: any) => state?.game?.maxScore;
export const selectTime = (state: any) => state?.game?.time;
export const selectCards = (state: any) => state?.game?.cards;
export const selectSuccessIndex = (state: any) => state?.game?.successIndex;
export const selectIsFinished = (state: any) => selectCards(state).length !== 0 && selectCards(state).length === selectSuccessIndex(state).length;

export const getCardValueCheckFuns = (state: any) => (cardIndex: number) => state?.game?.visibleIndex.includes(cardIndex)
  || selectSuccessIndex(state).includes(cardIndex);

export default gameSlice.reducer;
