import styled from 'styled-components';

export default styled.nav`
  background-color: ${({ theme }) => theme.colors.blueDefault};
  box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.3);
  padding-bottom: 15px;
  padding-top: 15px;
  position: relative;
  z-index: 9;
`;
