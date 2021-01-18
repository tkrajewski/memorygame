import * as React from 'react';

import InnerContainer from '../../components/InnerContainer';

import Container from './styled/Container';
import LogoImage from './styled/LogoImage';

import logo from '../../img/logo.png';

function AppNavigation(): JSX.Element {
  return (
    <Container>
      <InnerContainer>
        <LogoImage
          href="/"
          size="mini"
          src={logo}
        />
      </InnerContainer>
    </Container>
  );
}

export default AppNavigation;
