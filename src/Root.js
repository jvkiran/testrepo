import React from 'react';
import styled from 'styled-components';
import Welcome from './sections/Welcome';
import Intro from './sections/Intro';
import About from './sections/About';
import UseCases from './sections/UseCases';
import Documentation from './sections/Documentation';
import Team from './sections/Team';
import Footer from './sections/Footer';

const StyledRoot = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const Root = () => (
  <StyledRoot>
    <Welcome />
    <Intro />
    <Documentation />
    <About />
    <UseCases />
    <Team />
    <Footer />
  </StyledRoot>
);

export default Root;
