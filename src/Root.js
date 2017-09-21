import React from 'react';
import styled from 'styled-components';
import Welcome from './sections/Welcome';
import About from './sections/About';
import UseCases from './sections/UseCases';
import Medium from './sections/Medium';
import Team from './sections/Team';
import { colors } from './styles';

const StyledRoot = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, rgb(${colors.lightPurple}), transparent);
`;

const Root = () => (
  <StyledRoot>
    <Welcome />
    <About />
    <UseCases />
    <Medium />
    <Team />
  </StyledRoot>
);

export default Root;
