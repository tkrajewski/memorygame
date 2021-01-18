import styled from 'styled-components';
import { Header} from 'semantic-ui-react';

export default styled(Header).attrs(() => ({
  as: 'h1',
}))`
  font-family: 'Orbitron';
`;