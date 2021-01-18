import styled from 'styled-components';

export default styled<any>('span')`
  display: block;
  font-family: 'Orbitron';
  font-size: ${({ visibleValue }) => visibleValue ? '40px' : '20px'};
  text-align: center;
  transition: font-size 0.3s linear;
`;
