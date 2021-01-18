import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectScore, selectMaxScore, selectTime } from '../../redux/game';

import Container from './styled/Container';
import InnerContainer from './styled/InnerContainer';
import Score from './styled/Score';

function Scores(): JSX.Element {
  const score = useSelector(selectScore);
  const maxScore = useSelector(selectMaxScore);
  const time = useSelector(selectTime);

  return (
    <Container
      initial={{ opacity: 0, translateX: '-20px' }}
      animate={{ opacity: 1, translateX: '0px' }}
      exit={{ opacity: 0, translateX: '-25px' }}
    >
      <InnerContainer>
        <Score>CURRENT SCORE: {score}</Score>
        <Score>MAX SCORE: {maxScore}</Score>
        <Score>TIME: {time}s</Score>
      </InnerContainer>
    </Container>
  );
}

export default Scores;
