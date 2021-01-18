import * as React from 'react';
import { useHistory } from 'react-router-dom';

import Button from './styled/Button';
import Container from './styled/Container';

function SummaryButton(): JSX.Element {
  const history = useHistory();

  return (
    <Container
      initial={{ opacity: 0, translateY: '-30px' }}
      animate={{ opacity: 1, translateX: '0px' }}
      exit={{ opacity: 0, translateY: '-30px' }}
    >
      <Button onClick={() => history.push('/leaderboards')}>SEE SCORES</Button>
    </Container>
  );
}

export default SummaryButton;
