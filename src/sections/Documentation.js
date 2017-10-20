/* global ga */

import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Grid from '../components/Grid';
import ContentRow from '../components/ContentRow';
import Cell from '../components/Cell';
import { colors, fonts, responsive } from '../styles';

const StyledDownload = styled(Button)`margin-left: auto;`;

const StyledWhitepaper = styled(Cell)`
  border-radius: 2px;
  padding: 2rem 2.5rem !important;
  background: rgb(${colors.white});
  color: rgb(${colors.grey});
  hyphens: auto;
  @media screen and (${responsive.sm.min}) {
      min-height: 553px;
  }
  &:first-child {
    margin-bottom: 2rem;

    @media screen and (${responsive.sm.min}) {
      margin-right: 2rem;
    }
  }
  &:last-child {
    @media screen and (${responsive.sm.min}) {
      margin-left: 2rem;
      min-height: 553px;
    }
  }
  ${Title} {
    margin-bottom: 2rem;
  }
  ${StyledDownload} {
    margin-right: auto;

    span {
      font-size: ${fonts.size.small};
      opacity: .7;
      margin-left: .3rem;
    }
  }
  @media screen and (${responsive.sm.max}) {
    margin: 0;
    padding: 2rem 1.25rem !important;
  }
`;

const StyledTitle = styled(Title)`
  margin: 0;
  font-size: ${fonts.size.h3};
  min-height: 74px;
  @media screen and (${responsive.sm.max}) {
    font-size: ${fonts.size.h3};
  }
`;

const StyledIntro = styled(Paragraph)`
  margin-bottom: 1rem;
`;

const StyledAbstract = styled(Paragraph)`margin-bottom: 2rem;`;

const StyledFooter = styled(Paragraph) `
  margin-bottom: 0;
  margin-top: auto;
`;

const StyledComments = styled(Paragraph)`
  color: rgb(${colors.lightGrey});
  font-family: ${fonts.family.button};
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 0;
`;

const StyledRow = styled.div`
   margin-top: 3rem;
   margin-bottom: 1rem;
 
   &:first-child {
     margin-top: 2.5rem;
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
          <StyledTitle>Technical Primer</StyledTitle>
          <StyledIntro>
            This technical primer presents a short introduction to Ocean Protocol.
          </StyledIntro>
          <StyledAbstract>
            Ocean is a protocol and network that incentivizes to provide a vast supply of high-quality data, for use in training artificial intelligence (AI) models. Ocean incentivizes not only high-quality  priced  data but also high-quality public or commons  data. In turn, this helps to power data marketplaces.
          </StyledAbstract>
          <StyledFooter>
            <a href="./techprimer.pdf" download="Ocean Protocol Technical Primer">
              <StyledDownload onClick={() => ga('send', 'event', 'techprimer', 'download', 'button', true)}>
                Download <span>pdf</span>
              </StyledDownload>
            </a>
            <StyledComments>
              Have a comment or suggestions? <br />
              Let us know <a href="https://twitter.com/oceanprotocol">@oceanprotocol</a>
            </StyledComments>
          </StyledFooter>
        </StyledWhitepaper>

        <StyledWhitepaper center width={1 / 2}>
          <StyledTitle>Reference Marketplace Framework</StyledTitle>
          <StyledAbstract>
            This document presents a summary of the core marketplace attributes and components required to facilitate the successful deployment of the decentralized data exchange protocol and network called Ocean Protocol. It is complementary to the technical primer for Ocean Protocol.
          </StyledAbstract>
          <StyledFooter>
            <a href="./marketplace-framework.pdf" download="Ocean Protocol Reference Marketplace Framework">
              <StyledDownload onClick={() => ga('send', 'event', 'marketplace-framework', 'download', 'button', true)}>
                Download <span>pdf</span>
              </StyledDownload>
            </a>
            <StyledComments>
              Have a comment or suggestions? <br />
              Let us know <a href="https://twitter.com/oceanprotocol">@oceanprotocol</a>
            </StyledComments>
          </StyledFooter>
        </StyledWhitepaper>

      </Grid>
      <Cell width={2 / 3}>
        <StyledRow>
          <SubTitle white>Mission Statement</SubTitle>
          <StyledAbstract>
            Society is becoming increasingly reliant on data, especially with the advent of AI. However, a small handful of organizations with both massive data assets and AI capabilities have become powerful with control that is a danger to a free and open society.<br /><br />

            Ocean Protocol aims to unlock data, for more equitable outcomes for users of data, using a thoughtful application of both technology and governance.
            </StyledAbstract>
        </StyledRow>
      </Cell>
    </ContentRow>
  </Section>
);

export default Documentation;
