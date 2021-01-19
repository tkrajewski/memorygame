import * as React from 'react';

import InnerContainer from './styled/InnerContainer';
import Container from './styled/Container';
import PlayAgain from '../../containers/PlayAgain';
import ScoresTable from '../../containers/ScoresTable';
import YourScore from '../../containers/YourScore';
import useLeaderboards from '../../hooks/useLeaderboards';

function LeaderboardsScreen(): JSX.Element {
  const { leaderboards } = useLeaderboards();

  return (
    <Container
      initial={{ opacity: 0, translateX: '-20px' }}
      animate={{ opacity: 1, translateX: '0px' }}
      exit={{ opacity: 0, translateX: '-25px' }}
    >
      <InnerContainer>
        <YourScore />
        <ScoresTable leaderboards={leaderboards} />
        <PlayAgain />
      </InnerContainer>
    </Container>
  );
}

export default LeaderboardsScreen;
