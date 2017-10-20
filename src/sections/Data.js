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
import { responsive, fonts } from '../styles';

const StyledSubTitle = styled(Title)`
  font-size: ${fonts.size.h3};
  @media screen and (${responsive.sm.max}) {
    font-size: ${fonts.size.h4};
  }
`;

const StyledGrid = styled(Grid)`
  margin-top: 6rem;

  @media screen and (${responsive.sm.min}) {
    margin-top: 10rem;
  }

  p { margin-bottom: 0; }
`;

const StyledUnalyzed = styled.img`
  width: auto;
  height: 100%;
  max-height: 300px;
  transform: scale(1.4);
  padding: 0 4rem;
  @media screen and (${responsive.sm.min}) {
    max-width: 300px;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  @media screen and (${responsive.sm.max}) {
    max-height: 80vw;
  }
  @media screen and (${responsive.smHeight.max}) {
    padding: 0 2rem;
  }
`;

const StyledFirstGrid = styled(StyledGrid)`
  @media screen and (${responsive.sm.max}) {
    text-align: center;
    margin-top: 0;
  }
`;

const StyledLocked = styled.img`
  max-height: 300px;
  @media screen and (${responsive.sm.min}) {
    max-width: 320px;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  @media screen and (${responsive.sm.max}) {
    padding: 0 2rem;
    max-height: 40vw;
  }
`;

const StyledSecondGrid = styled(StyledGrid)`
  align-items: center;
  @media screen and (${responsive.sm.max}) {
    text-align: center;
  }
`;

const StyledUnavailable = styled.img`
  max-height: 300px;
  @media screen and (${responsive.sm.max}) {
    width: 200% !important;
    margin: 0;
    margin-left: -50%;
    margin-bottom: 1rem;
  }
`;

const StyledThirdGrid = styled(StyledGrid)`
  margin-bottom: 4rem;
  & > div:nth-child(2) {
    padding-left: 0;
  }

  p {
    margin-bottom: 2rem;
  }
`;

const Data = () => (
  <Section id="why">
    <ContentRow>
      <Title>Why Ocean Protocol?</Title>

      <StyledSubTitle>Only 1% of data is analyzed</StyledSubTitle>

      <StyledFirstGrid left>
        <Cell center width={1 / 3}>
          <StyledUnalyzed src={dataUnanalyzed} alt="data unanalyzed" />
        </Cell>
        <Cell width={2 / 3} maxWidth="narrow">
          <SubTitle>Data is growing exponentially but is under-utilized</SubTitle>
          <Paragraph>
            The growth of data is remarkable. Where once data was primarily a side-effect of operations, today it is vital to daily life for consumers, governments, and businesses alike.
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
            Everyone knows that big data could be a huge revenue driver worth billions. If data can be unlocked from every organization safely and securely, value can spread and be shared.
          </Paragraph>
        </Cell>
      </StyledSecondGrid>

      <StyledThirdGrid wrap textCenter>
        <Cell width={1} maxWidth="narrow">
          <SubTitle>Data is widely available but owned by few</SubTitle>
          <Paragraph>
            Data is critical to ensuring that advances in Data Analytics and AI are shared by everyone. AI needs massive amounts of data and most startups are starving for data.
          </Paragraph>
        </Cell>
        <Cell center width={1}>
          <StyledUnavailable src={dataUnavailable} alt="data unavailable" />
        </Cell>
      </StyledThirdGrid>
    </ContentRow>
  </Section>
);

export default Data;
