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
import { colors, responsive } from '../styles';

const StyledWhitepaper = styled(Cell)`
  border-radius: 5px;
  margin: 1rem;
  padding: 2rem !important;
  text-align: center;
  align-items: center;
  background: rgb(${colors.white});
  color: rgb(${colors.black});
  ${SubTitle} {
    opacity: 0.7;
    @media screen and (${responsive.sm.max}) {
      font-size: 1.2rem;
    }
  }
  @media screen and (${responsive.sm.max}) {
    margin: 0;
  }
`;

const StyledTitle = styled(Title)`
  margin: 0;
  font-size: 3rem;
  @media screen and (${responsive.sm.max}) {
    font-size: 2rem;
  }
`;

const SDownload = styled(Button)`
  float: right;
  box-shadow: 0px 4px 30px 0px rgb(0, 0, 0);
`;

const StyledAbstract = styled.div`margin-top: 1rem;`;

const StyledRow = styled.div`width: 100%;`;

const Documentation = () => (
  <Section id="documentation" background={colors.black} fontColor={colors.white}>
    <ContentRow>
      <Title>Learn how Ocean Protocol works</Title>

      <Grid>
        <StyledWhitepaper center width={1 / 2}>
          <StyledTitle>Our Whitepaper</StyledTitle>
          <SubTitle>Abstract</SubTitle>
          <Paragraph>
            This paper presents a decentralized data marketplace protocol and network called Ocean, on which data
            marketplaces can be built. The world has recognized the value of data, but it’s been very difficult to
            establish a price for the data (especially non-fungible data) while reconciling privacy concerns. Many
            enterprises have tremendous amounts of data, but have difficulty exploiting it. Conversely, many startups
            have deep expertise in artificial intelligence (AI), but lack the data to make their AI models perform. To
            address this problem, data marketplaces have emerged, but they are silos themselves.
          </Paragraph>
          <a href="https://google.com">
            <SDownload>Download</SDownload>
          </a>
        </StyledWhitepaper>
        <Cell width={1 / 2}>
          <StyledRow>
            <StyledAbstract>
              <SubTitle>ONE PAGER</SubTitle>
              <Paragraph>
                A quick introduction to the Ocean Protocol and how it should function. We explain how the suppliers,
                exchangers and buyers of data interact with each other. We also cover the technology stack involved.
              </Paragraph>
            </StyledAbstract>
            <a href="https://google.com">
              <SDownload>Download</SDownload>
            </a>
          </StyledRow>
          <StyledRow>
            <StyledAbstract>
              <SubTitle>MANIFESTO</SubTitle>
              <Paragraph>
                Data producers like enterprises have tremendous data assets but don't know how to unlock the data's
                potential. Conversely, data consumers like AI startups are starving for data. Data marketplaces can
                connect data suppliers and consumers.
              </Paragraph>
            </StyledAbstract>
            <a href="https://google.com">
              <SDownload>Download</SDownload>
            </a>
          </StyledRow>
        </Cell>
      </Grid>
    </ContentRow>
  </Section>
);

export default Documentation;
