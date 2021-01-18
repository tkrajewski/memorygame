import * as React from 'react';
import { useSelector } from 'react-redux';

import { getCardValueCheckFuns } from '../../redux/game';

import Card from './styled/Card';
import CardGroup from './styled/CardGroup';
import CardValue from './styled/CardValue';
import Container from './styled/Container';

export type DeckProps = {
  cards: number[];
  onClick(cardIndex: number): any;
};

function Deck({ cards, onClick }: DeckProps): JSX.Element {
  const isValueVisible = useSelector(getCardValueCheckFuns);

  return (
    <Container
      initial={{ opacity: 0, translateX: '-20px' }}
      animate={{ opacity: 1, translateX: '0px' }}
      exit={{ opacity: 0, translateX: '-25px' }}
    >
      <CardGroup itemsPerRow={4}>
        {cards.map((cardValue, cardIndex) => {
          const isVisible = isValueVisible(cardIndex);

          return (
            <Card visibleValue={isVisible} onClick={() => { onClick(cardIndex) }} key={`card-${cardIndex}`}>
              <CardValue visibleValue={isVisible}>{isVisible ? cardValue : '?'}</CardValue>
            </Card>
          );
        })}
      </CardGroup>
    </Container>
  );
}

export default Deck;
