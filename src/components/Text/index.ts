import styled from 'styled-components';
import { Header} from 'semantic-ui-react';

export default styled(Header).attrs(() => ({
  as: 'h4',
}))`
  color: ${({ theme }) => theme.colors.whiteDeault};
  font-family: 'Orbitron';
  margin: 0 !important;
`;