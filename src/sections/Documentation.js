import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import SubTitle from '../components/SubTitle';
import Button from '../components/Button';
import Grid from '../components/Grid';
import ContentRow from '../components/ContentRow';
import Cell from '../components/Cell';
import { colors, fonts, responsive, layout } from '../styles';

const StyledWhitepaper = styled(Cell)`
  border-radius: 2px;
  margin: 1rem;
  padding: 2rem !important;
  background: rgb(${colors.white});
  color: rgb(${colors.grey});
  hyphens: auto;
  ${SubTitle} {
    opacity: .5;
    margin-top: 2rem;
    margin-bottom: .75rem;
    @media screen and (${responsive.sm.max}) {
      font-size: ${fonts.size.large};
    }
  }
  @media screen and (${responsive.sm.max}) {
    margin: 0;
  }
`;

const StyledTitle = styled(Title)`
  margin: 0;
  font-size: ${fonts.size.h2};
  @media screen and (${responsive.sm.max}) {
    font-size: ${fonts.size.h3};
  }
`;

const StyledDownload = styled(Button)`
  margin-left: auto;
`;

const StyledIntro = styled(Paragraph)`
  font-weight: 600;
  margin-bottom: .75rem;
`;

const StyledAbstract = styled(Paragraph)`
  margin-bottom: 1.5rem;
`;

const StyledRow = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (${responsive.md.min}) {
    margin-left: 4rem;
  }
`;

const Documentation = () => (
  <Section id="documentation" background={colors.black} fontColor={colors.white}>
    <ContentRow>
      <Title white>Learn how Ocean Protocol works</Title>

      <Grid>
        <StyledWhitepaper center width={1 / 2}>
          <StyledTitle>Whitepaper</StyledTitle>
          <SubTitle>Abstract</SubTitle>
          <StyledIntro>
            This paper presents a decentralized data marketplace protocol and network called Ocean, on which data marketplaces can be built.
          </StyledIntro>
          <StyledAbstract>
            The world has recognized the value of data, but it’s been very difficult to establish a price for the data (especially non-fungible data) while reconciling privacy concerns. Many enterprises have tremendous amounts of data, but have difficulty exploiting it. Conversely, many startups
            have deep expertise in artificial intelligence (AI), but lack the data to make their AI models perform. To address this problem, data marketplaces have emerged, but they are silos themselves.
          </StyledAbstract>
          <a href="https://google.com">
            <StyledDownload>Download</StyledDownload>
          </a>
        </StyledWhitepaper>
        <Cell width={1 / 2}>
          <StyledRow>
            <SubTitle>One Pager</SubTitle>
            <StyledAbstract>
              A quick introduction to the Ocean Protocol and how it should function. We explain how the suppliers,
              exchangers and buyers of data interact with each other. We also cover the technology stack involved.
            </StyledAbstract>
            <a href="https://google.com">
              <StyledDownload>Download</StyledDownload>
            </a>
          </StyledRow>
          <StyledRow>
            <SubTitle>Manifesto</SubTitle>
            <StyledAbstract>
              Data producers like enterprises have tremendous data assets but don't know how to unlock the data's
              potential. Conversely, data consumers like AI startups are starving for data. Data marketplaces can
              connect data suppliers and consumers.
            </StyledAbstract>
            <a href="https://google.com">
              <StyledDownload>Download</StyledDownload>
            </a>
          </StyledRow>
        </Cell>
      </Grid>
    </ContentRow>
  </Section>
);

export default Documentation;
