import { createSlice } from '@reduxjs/toolkit'

import generate from '../../utils/generate';
import { readMaxScore } from '../../utils/storage';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    cards: [],
    visibleIndex: [],
    successIndex: [],
    isLoading: false,
    score: 0,
    gameScore: null,
    maxScore: readMaxScore(),
    modifier: 4,
    time: 0,
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
      state.cards = [];
      state.visibleIndex = [];
      state.successIndex = [];
      state.isLoading = false;
      state.score = 0;
      state.gameScore = null;
      state.maxScore = readMaxScore();
      state.modifier = 0;
      state.time  = 0;
    },
    setModifier: (state, { payload }) => {
      state.modifier = parseInt(payload, 10);
    },
    incTimer: state => {
      state.time = state.time + 1;
    },
    countTheScores: state => {
      (state.gameScore as unknown) = state.score * 100 - state.time;
    },
  },
})

export const { countTheScores, incTimer, clear, loadGame, loadDone, setVisible, setModifier, clearVisible } = gameSlice.actions

export const selectIsLoading = (state: any) => state?.game?.isLoading;
export const selectScore = (state: any) => state?.game?.score;
export const selectMaxScore = (state: any) => state?.game?.maxScore;
export const selectTime = (state: any) => state?.game?.time;
export const selectGameScore = (state: any) => state?.game?.gameScore;
export const selectCards = (state: any) => state?.game?.cards;
export const selectSuccessIndex = (state: any) => state?.game?.successIndex;
export const selectIsFinished = (state: any) => selectCards(state).length !== 0 && selectCards(state).length === selectSuccessIndex(state).length;
export const selectModifier = (state: any) => state?.game?.modifier;

export const getCardValueCheckFuns = (state: any) => (cardIndex: number) => state?.game?.visibleIndex.includes(cardIndex)
  || selectSuccessIndex(state).includes(cardIndex);

export default gameSlice.reducer;
