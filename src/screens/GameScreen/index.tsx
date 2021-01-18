import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Segment } from 'semantic-ui-react';

import { loadGame, loadDone, selectIsLoading } from '../../redux/game';

import Loader from './styled/Loader';
import InnerContainer from './styled/InnerContainer';
import Container from './styled/Container';
import LoaderContainer from './styled/LoaderContainer';

var hameScreenTimeoutHandler: any = null;

function GameScreen(): JSX.Element {
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

  return (
    <Container
      initial={{ opacity: 0, translateX: '-20px' }}
      animate={{ opacity: 1, translateX: '0px' }}
      exit={{ opacity: 0, translateX: '-25px' }}
    >
      <InnerContainer>
        <LoaderContainer active inverted>
          {isLoading && <Loader inverted content='Loading' />}
        </LoaderContainer>
      </InnerContainer>
    </Container>
  );
}

export default GameScreen;
