import * as React from 'react';

import InnerContainer from './styled/InnerContainer';
import Container from './styled/Container';
import Button from './styled/Button';
import Title from './styled/Title';

function LandingScreen(): JSX.Element {
  return (
    <Container
      initial={{ opacity: 0, translateX: '-20px' }}
      animate={{ opacity: 1, translateX: '0px' }}
      exit={{ opacity: 0, translateX: '-25px' }}
    >
      <InnerContainer>
        <Title>CHECK YOUR MEMORY</Title>
        <Button>START GAME</Button>
      </InnerContainer>
    </Container>
  );
}

export default LandingScreen;
