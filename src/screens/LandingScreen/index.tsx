import * as React from 'react';
import { useHistory } from 'react-router-dom';

import InnerContainer from './styled/InnerContainer';
import Container from './styled/Container';
import Button from './styled/Button';
import Title from './styled/Title';


function LandingScreen(): JSX.Element {
  const history = useHistory();

  return (
    <Container
      initial={{ opacity: 0, translateX: '-20px' }}
      animate={{ opacity: 1, translateX: '0px' }}
      exit={{ opacity: 0, translateX: '-25px' }}
    >
      <InnerContainer>
        <Title>CHECK YOUR MEMORY</Title>
        <Button onClick={() => {
          history.push('/game');
        }}>
          START GAME
        </Button>
      </InnerContainer>
    </Container>
  );
}

export default LandingScreen;
