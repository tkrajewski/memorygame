import * as React from 'react';

import Deck from '../../containers/Deck';
import SummaryButton from '../../containers/SummaryButton';
import useGameLoading from '../../hooks/useGameLoading';
import useGameEngine from '../../hooks/useGameEngine';

import Loader from './styled/Loader';
import InnerContainer from './styled/InnerContainer';
import Container from './styled/Container';
import LoaderContainer from './styled/LoaderContainer';

function GameScreen(): JSX.Element {
  const modifier = 4;
  const { cards, isFinished, onCardClick } = useGameEngine();
  const { isLoading } = useGameLoading(modifier);

  return (
    <Container
      initial={{ opacity: 0, translateX: '-20px' }}
      animate={{ opacity: 1, translateX: '0px' }}
      exit={{ opacity: 0, translateX: '-25px' }}
    >
      <InnerContainer>
        {isLoading && (
          <LoaderContainer active inverted>
            <Loader inverted content='Loading' />
          </LoaderContainer>
        )}
        {!isLoading && cards.length > 0 && (
          <Deck
            cards={cards}
            onClick={onCardClick}
          />
        )}
        {isFinished && <SummaryButton />}
      </InnerContainer>
    </Container>
  );
}

export default GameScreen;
