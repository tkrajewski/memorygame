import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { loadGame, loadDone, selectIsLoading, selectModifier } from '../redux/game';

var hameScreenTimeoutHandler: any = null;

export default function useGameLoading() {
  const modifier = useSelector(selectModifier);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadGame(modifier));

    hameScreenTimeoutHandler = setTimeout(() => {
      dispatch(loadDone());
    }, 5000);

    return () => {
      clearTimeout(hameScreenTimeoutHandler);
    };
  }, [dispatch, modifier]);

  return {
    isLoading,
  };
}