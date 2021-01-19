import * as React from 'react';

import Container from './styled/Container';
import InnerContainer from './styled/InnerContainer';
import Text from './styled/Text';

function YourScore(): JSX.Element {
  const gameScore = 123;

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
