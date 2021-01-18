import styled from 'styled-components';
import { Card } from 'semantic-ui-react'

export default styled<any>(Card).attrs(({ visibleValue }) => ({
  color: visibleValue ? 'green' : 'blue',
}))`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: center;
`;
