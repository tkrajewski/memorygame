import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { loadGame, loadDone, selectIsLoading } from '../redux/game';

var hameScreenTimeoutHandler: any = null;

export default function useGameLoading() {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadGame());

    hameScreenTimeoutHandler = setTimeout(() => {
      dispatch(loadDone());
    }, 3000);

    return () => {
      clearTimeout(hameScreenTimeoutHandler);
    };
  }, [dispatch]);

  return {
    isLoading,
  };
}