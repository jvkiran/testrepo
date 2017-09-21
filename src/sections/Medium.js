import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Description from '../components/Description';
import Row from '../components/Row';
import Cell from '../components/Cell';
import DraftSix from '../assets/drafts/draft-6.png';
import MediumLogo from '../assets/medium-logo.svg';
import { colors } from '../styles';

const StyledMediumLink = styled.a`
  margin-top: 2rem;
  &:hover {
    opacity: 0.7;
  }
  & img {
    height: 22px;
  }
`;

const Medium = () => (
  <Section id="Medium" background={`rgb(${colors.darkPurple})`}>
    <Row>
      <Cell width={1 / 3}>
        <img style={{ width: '100%' }} src={DraftSix} alt="draft" />
      </Cell>
      <Cell width={2 / 3}>
        <Title>Learn more about the Ocean Protocol</Title>
        <Description>
          Ocean is supported by a Singapore based non-profit foundation, whose mandate is to ensure open access to the
          protocol and platform, provide data governance, encourage the network ecosystem growth and take measures to
          ensure that the platform becomes ever more decentralized with time.
        </Description>
        <StyledMediumLink href="medium.com">
          <img src={MediumLogo} alt="medium" />
        </StyledMediumLink>
      </Cell>
    </Row>
  </Section>
);

export default Medium;
