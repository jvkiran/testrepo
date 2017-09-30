import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../styles';

const rotate360 = keyframes`
  from { transform: rotate(0deg) translateZ(0); }
  to { transform: rotate(360deg) translateZ(0); }
`;

const StyledSpinnnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSpinner = styled.div`
  animation: ${rotate360} 1s infinite linear;
  border: 0.25rem solid rgba(${colors.black}, 0.2);
  border-radius: 50%;
  border-top-color: rgb(${colors.black});
  height: 26px;
  width: 26px;
  margin: 20px;
`;

const Spinner = ({ ...props }) => (
  <StyledSpinnnerWrapper {...props}>
    <StyledSpinner />
  </StyledSpinnnerWrapper>
);

export default Spinner;
