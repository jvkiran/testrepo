import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Grid from '../components/Grid';
import ContentRow from '../components/ContentRow';
import Cell from '../components/Cell';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Paragraph from '../components/Paragraph';
import dataUnanalyzed from '../assets/graphics/data-unanalyzed.svg';
import dataLocked from '../assets/graphics/data-locked.svg';
import dataUnavailable from '../assets/graphics/data-unavailable.svg';
import { responsive } from '../styles';

const StyledGrid = styled(Grid)`@media screen and (${responsive.sm.max}) {margin-top: 4rem;}`;

const StyledFirstGrid = styled(StyledGrid)`align-items: flex-end;`;

const StyledSecondGrid = styled(StyledGrid)`
  align-items: center;
  @media screen and (${responsive.sm.min}) {
    margin: 4rem 0;
  }
`;

const StyledUnalyzed = styled.img`
  width: auto;
  height: 100%;
  @media screen and (${responsive.sm.min}) {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
  }
  @media screen and (${responsive.sm.max}) {
    padding: 1rem 3rem;
  }
`;

const StyledLocked = styled.img`
  padding: 3rem 6rem 0 0;
  @media screen and (${responsive.sm.min}) {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
  }
  @media screen and (${responsive.sm.max}) {
    padding: 0 2rem;
  }
`;

const StyledUnavailable = styled.img`
  margin: 3rem 0;
  @media screen and (${responsive.sm.max}) {
    width: 300% !important;
    margin-left: -100%;
  }
`;

const Data = () => (
  <Section id="data">
    <ContentRow>
      <Title>Only 1% of collected data is analyzed</Title>

      <StyledFirstGrid left>
        <Cell center width={1 / 3}>
          <StyledUnalyzed src={dataUnanalyzed} alt="data unanalyzed" />
        </Cell>
        <Cell width={2 / 3} maxWidth="narrow">
          <SubTitle>Data is growing exponentially but is under-utilized</SubTitle>
          <Paragraph>
            The growth of data is remarkable. Where once data was primarily a side-effect of operations, today it is
            vital to daily life for consumers, governments, and businesses alike.
          </Paragraph>
        </Cell>
      </StyledFirstGrid>

      <StyledSecondGrid>
        <Cell center width={1 / 3}>
          <StyledLocked src={dataLocked} alt="data locked" />
        </Cell>
        <Cell width={2 / 3} maxWidth="narrow">
          <SubTitle>Data is immensely valuable, yet remains locked up</SubTitle>
          <Paragraph>
            Everyone knows that big data could be a huge revenue driver worth billions. If data can be unlocked from
            every organization safely and securely, value can spread and be shared.{' '}
          </Paragraph>
        </Cell>
      </StyledSecondGrid>

      <StyledGrid wrap textCenter>
        <Cell width={1}>
          <SubTitle>Data is widely available but owned by few</SubTitle>
        </Cell>
        <Cell center width={1}>
          <StyledUnavailable src={dataUnavailable} alt="data unavailable" />
        </Cell>
        <Cell width={1} maxWidth="narrow">
          <Paragraph>
            Data is critical to ensuring that advances in AI are shared by everyone. AI needs massive amounts of data
            and most startups are starving for data.
          </Paragraph>
        </Cell>
      </StyledGrid>
    </ContentRow>
  </Section>
);

export default Data;
