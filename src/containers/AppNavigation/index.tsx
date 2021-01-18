import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';

import useNavigationManager from '../../hooks/useNavigationManager';
import logo from '../../img/logo.png';
import { selectIsLoading } from '../../redux/game';
import Scores from '../Scores';

import Container from './styled/Container';
import LogoImage from './styled/LogoImage';
import LogoWrapper from './styled/LogoWrapper';
import InnerContainer from './styled/InnerContainer';

function AppNavigation(): JSX.Element {
  const isLoading = useSelector(selectIsLoading);
  const { showScores } = useNavigationManager();

  return (
    <AnimatePresence exitBeforeEnter>
      <Container>
        <InnerContainer>
          <LogoWrapper>
            <LogoImage
              href="/"
              size="mini"
              src={logo}
            />
          </LogoWrapper>

          {!isLoading && showScores && <Scores />}
        </InnerContainer>
      </Container>
    </AnimatePresence>
  );
}

export default AppNavigation;
