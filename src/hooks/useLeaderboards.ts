import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { selectGameScore, selectTime } from '../redux/game';

import { pushToLeaderboards, selectLeaderboards } from '../redux/leaderboards';
import { selectNickname } from '../redux/user';

export default function useLeaderboards() {
  const nickname = useSelector(selectNickname);
  const gameScore = useSelector(selectGameScore);
  const time = useSelector(selectTime);
  const leaderboards = useSelector(selectLeaderboards);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatchEvent(pushToLeaderboards({
      score: gameScore,
      nickname,
      time,
    }));
  }, []);

  return {
    leaderboards
  };
}