import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { incTimer, selectIsFinished, setVisible, selectCards, countTheScores, selectGameScore } from '../redux/game';

export type GameEngineType = {
  gameScore: number;
  cards: number[];
  isFinished: boolean;
  showButton: boolean;
  incrementTimer(): any;
  setShowButton(val: boolean): any;
  onCardClick(cardIndex: number): any;
};

export default function useGameEngine(): GameEngineType {
  const [showButton, setShowButton] = React.useState<boolean>(false);
  const cards = useSelector(selectCards);
  const isFinished = useSelector(selectIsFinished);
  const gameScore = useSelector(selectGameScore);
  const dispatch = useDispatch();

  const onCardClick = (cardIndex: number) => {
    dispatch(setVisible(cardIndex));
  };

  const incrementTimer = () => {
    dispatch(incTimer());
  };

  React.useEffect(() => {
    if (isFinished) {
      dispatch(countTheScores());
    }
  }, [dispatch, isFinished]);

  React.useEffect(() => {
    if (isFinished && gameScore !== null) {
      setShowButton(true);
    }
  }, [isFinished, gameScore, setShowButton]);

  return {
    cards,
    isFinished,
    gameScore,
    incrementTimer,
    onCardClick,
    showButton,
    setShowButton,
  };
}
