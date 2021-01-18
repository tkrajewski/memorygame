import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export default styled(Button)`
  background-color: ${({ theme }) => theme.colors.blueDark}!important;
  box-shadow: none !important;
  color: ${({ theme }) => theme.colors.whiteDefault}!important;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blueDefault}!important;
  }
`;
