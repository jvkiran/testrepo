/* global ga */

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
import { colors, fonts, responsive } from '../styles';

const StyledDownload = styled(Button)`margin-left: auto;`;

const StyledWhitepaper = styled(Cell)`
  border-radius: 2px;
  padding: 2rem !important;
  background: rgb(${colors.white});
  color: rgb(${colors.grey});
  hyphens: auto;
  ${Title} {
    margin-bottom: 2rem;
  }
  ${StyledDownload} {
    margin-right: auto;
  }
  @media screen and (${responsive.sm.max}) {
    margin: 0;
    padding: 2rem 1.25rem !important;
  }
`;

const StyledTitle = styled(Title)`
  margin: 0;
  font-size: ${fonts.size.h2};
  @media screen and (${responsive.sm.max}) {
    font-size: ${fonts.size.h3};
  }
`;

const StyledIntro = styled(Paragraph)`
  font-weight: 600;
  margin-bottom: 1rem;
`;

const StyledAbstract = styled(Paragraph)`margin-bottom: 2rem;`;

const StyledComments = styled(Paragraph)`
  color: rgb(${colors.lightGrey});
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 0;
`;

const StyledRow = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;

  &:first-child {
    margin-top: 3rem;
  }

  a {
    display: block;
    text-transform: uppercase;
    font-family: ${fonts.family.button};
    margin-top: -0.5rem;
  }

  @media screen and (${responsive.md.min}) {
    margin-top: 2rem;
    margin-left: 4rem;
  }
`;

const Documentation = () => (
  <Section id="documentation" background={colors.black} fontColor={colors.white}>
    <ContentRow>
      <Title white>Learn how Ocean Protocol works</Title>

      <Grid>
        <StyledWhitepaper center width={1 / 2}>
          <StyledTitle>Whitepaper Primer</StyledTitle>
          <StyledIntro>
            This paper presents a decentralized data marketplace protocol and network called Ocean, on which data
            marketplaces can be built.
          </StyledIntro>
          <StyledAbstract>
            The world has recognized the value of data, but it’s been very difficult to establish a price for the data (especially non-fungible data) while reconciling privacy concerns. Many enterprises have tremendous amounts of data, but have difficulty exploiting it. Conversely, many startups have deep expertise in artificial intelligence (AI), but lack the data to make their AI models perform. To address this problem, data marketplaces have emerged, but they are silos themselves.
          </StyledAbstract>
          <a href="https://google.com">
            <StyledDownload onClick={() => ga('send', 'event', 'whitepaper', 'download', 'button', true)}>
              Download
            </StyledDownload>
          </a>
          <StyledComments>
            Have a comment or suggestions? <br />
            Let us know <a href="https://twitter.com/oceanprotocol">@oceanprotocol</a>
          </StyledComments>
        </StyledWhitepaper>
        <Cell width={1 / 2}>
          <StyledRow>
            <SubTitle>Mission statement</SubTitle>
            <StyledAbstract>
              Data producers like enterprises have tremendous data assets but don't know how to unlock the data's potential. Conversely, data consumers like AI startups are starving for data. Data marketplaces can connect data suppliers and consumers.
            </StyledAbstract>
            <a href="https://google.com" onClick={() => ga('send', 'event', 'manifesto', 'download', 'button', true)}>
              Download
            </a>
          </StyledRow>
        </Cell>
      </Grid>
    </ContentRow>
  </Section>
);

export default Documentation;
