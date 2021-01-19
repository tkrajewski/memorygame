import * as React from 'react';
import { useSelector } from 'react-redux';

import { selectGameScore } from '../../redux/game';
import Container from './styled/Container';
import InnerContainer from './styled/InnerContainer';
import Text from './styled/Text';

function YourScore(): JSX.Element {
  const gameScore = useSelector(selectGameScore);

  return (
    <Container
      initial={{ opacity: 0, translateX: '-20px' }}
      animate={{ opacity: 1, translateX: '0px' }}
      exit={{ opacity: 0, translateX: '-25px' }}
    >
      <InnerContainer>
        <Text>YOUR SCORE: {gameScore}</Text>
      </InnerContainer>
    </Container>
  );
}

export default YourScore;
