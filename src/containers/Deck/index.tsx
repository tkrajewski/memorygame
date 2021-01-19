import * as React from 'react';
import { useSelector } from 'react-redux';
import { Transition } from 'semantic-ui-react';

import { getCardValueCheckFuns, selectModifier } from '../../redux/game';

import Card from './styled/Card';
import CardGroup from './styled/CardGroup';
import CardValue from './styled/CardValue';
import CardWrapper from './styled/CardWrapper';
import Container from './styled/Container';

export type DeckProps = {
  cards: number[];
  onClick(cardIndex: number): any;
};

function Deck({ cards, onClick }: DeckProps): JSX.Element {
  const isValueVisible = useSelector(getCardValueCheckFuns);
  const modifier = useSelector(selectModifier);

  return (
    <Container
      initial={{ opacity: 0, translateX: '-20px' }}
      animate={{ opacity: 1, translateX: '0px' }}
      exit={{ opacity: 0, translateX: '-25px' }}
    >
      <CardGroup itemsPerRow={modifier}>
        {cards.map((cardValue, cardIndex) => {
          const isVisible = isValueVisible(cardIndex);
          const key = `card-${cardIndex}`;

          return (
            <Card visibleValue={isVisible} onClick={() => { if (!isVisible) onClick(cardIndex) }} key={key}>
              <Transition.Group animation="horizontal flip" duration={500}>
                {isVisible && (
                  <CardWrapper>
                    <CardValue visibleValue>{cardValue}</CardValue>
                  </CardWrapper>
                )}
                {!isVisible && (
                  <CardWrapper>
                    <CardValue>?</CardValue>
                  </CardWrapper>
                )}
              </Transition.Group>
            </Card>
          );
        })}
      </CardGroup>
    </Container>
  );
}

export default Deck;
