import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { clear } from '../../redux/game';

import Button from './styled/Button';

import Container from './styled/Container';

function PlayAgain(): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Container
      initial={{ opacity: 0, translateY: '-30px' }}
      animate={{ opacity: 1, translateX: '0px' }}
      exit={{ opacity: 0, translateY: '-30px' }}
    >
      <Button onClick={() => {
        dispatch(clear())
        history.push('/register');
      }}>PLAY AGAIN</Button>
    </Container>
  );
}

export default PlayAgain;
