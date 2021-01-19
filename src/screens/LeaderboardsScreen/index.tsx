import * as React from 'react';

import InnerContainer from './styled/InnerContainer';
import Container from './styled/Container';
import PlayAgain from '../../containers/PlayAgain';
import ScoresTable from '../../containers/ScoresTable';
import YourScore from '../../containers/YourScore';

function LeaderboardsScreen(): JSX.Element {
  return (
    <Container
      initial={{ opacity: 0, translateX: '-20px' }}
      animate={{ opacity: 1, translateX: '0px' }}
      exit={{ opacity: 0, translateX: '-25px' }}
    >
      <InnerContainer>
        <YourScore />
        <ScoresTable />
        <PlayAgain />
      </InnerContainer>
    </Container>
  );
}

export default LeaderboardsScreen;
