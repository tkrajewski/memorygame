import { useSelector, useDispatch } from 'react-redux'

import { selectIsFinished, setVisible, selectCards } from '../redux/game';

export type NavigationManagerType = {
  cards: number[];
  isFinished: boolean;
  onCardClick(cardIndex: number): any;
};

export default function useNavigationManager(): NavigationManagerType {
  const cards = useSelector(selectCards);
  const isFinished = useSelector(selectIsFinished);
  const dispatch = useDispatch();

  const onCardClick = (cardIndex: number) => {
    dispatch(setVisible(cardIndex));
  };

  return {
    cards,
    isFinished,
    onCardClick
  };
}
