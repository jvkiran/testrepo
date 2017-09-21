import React from 'react';
import styled from 'styled-components';
import Welcome from './sections/Welcome';
import About from './sections/About';
import UseCases from './sections/UseCases';
import { colors } from './styles';

const StyledRoot = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, ${colors.lightPurple}, transparent);
`;

const Root = () => (
  <StyledRoot>
    <Welcome />
    <About />
    <UseCases />
  </StyledRoot>
);

export default Root;
