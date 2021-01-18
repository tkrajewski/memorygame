import { useSelector, useDispatch } from 'react-redux'

import { setVisible, selectCards } from '../redux/game';

export type NavigationManagerType = {
  cards: number[];
  onCardClick(cardIndex: number): any;
};

export default function useNavigationManager(): NavigationManagerType {
  const cards = useSelector(selectCards);
  const dispatch = useDispatch();

  const onCardClick = (cardIndex: number) => {
    dispatch(setVisible(cardIndex));
  };

  return {
    cards,
    onCardClick
  };
}
