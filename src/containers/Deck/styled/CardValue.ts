import styled from 'styled-components';

export default styled<any>('span')`
  align-items: center;
  background-color: #fff !important;
  display: flex !important;
  font-family: 'Orbitron';
  font-size: ${({ visibleValue }) => visibleValue ? '40px' : '20px'};
  text-align: center;
  justify-content: center;
  transition: font-size 0.3s linear;
  height: 100%;
  width: 100%;
`;
