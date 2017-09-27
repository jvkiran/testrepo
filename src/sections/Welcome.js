import React from 'react';
import styled from 'styled-components';
import smoothScroll from 'smoothscroll';
import Section from '../components/Section';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import oceanLogo from '../assets/logos/ocean-logo.svg';
import bigchainDBLogo from '../assets/logos/bigchain-db.svg';
import dexLogo from '../assets/logos/dex.svg';
import { colors, responsive, fonts } from '../styles';

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.nav`
  text-transform: uppercase;
  text-align: right;
  & a {
    display: inline-block;
    margin-right: 20px;
  }

  @media screen and (${responsive.sm.max}) {
    display: flex;
    flex-direction: column;
    & a {
      display: inline-block;
      margin-top: 0.5rem;
    }
  }
`;

const StyledLogo = styled.div`
  height: 44px;
  & img {
    height: 100%;
  }
`;

const StyledTagline = styled(Title)`
  font-size: ${fonts.size.h1};
  margin-top: 5rem;
  margin-bottom: 1.45rem;
  font-weight: 600;

  @media screen and (${responsive.sm.max}) {
    font-size: ${fonts.size.h3};
    margin-top: 2rem;
    margin-bottom: 0.42rem;
  }
`;

const SParagraph = styled(Paragraph)`
  font-weight: 400;
  max-width: 40rem;
  margin: 0 auto;
`;

const StyledPoweredBy = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;

  @media screen and (${responsive.sm.max}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  & p {
    margin: 0;
    margin-bottom: 0.75rem;
  }
  & a {
    display: inline-block;
    margin-right: 2rem;
  }
  & img {
    height: 1rem;
    margin-right: -1rem;
  }
`;

const Welcome = () => (
  <Section id="Welcome" viewport fontColor={colors.white}>
    <StyledHeader>
      <a href="/">
        <StyledLogo>
          <img src={oceanLogo} alt="Ocean" />
        </StyledLogo>
      </a>
      <StyledNav>
        <a onClick={smoothScroll} href="#About">
          Project
        </a>
        <a onClick={smoothScroll} href="#UseCases">
          Use Cases
        </a>
        <a onClick={smoothScroll} href="#Documentation">
          Docs
        </a>
        <a onClick={smoothScroll} href="#Team">
          Team
        </a>
        <a
          href="https://blog.oceanprotocol.com/"
          target="_blank" //eslint-disable-line
          rel="noopener"
        >
          Blog
        </a>
      </StyledNav>
    </StyledHeader>
    <StyledTagline>A Decentralized Data Exchange Protocol to Unlock Data for AI</StyledTagline>
    <SParagraph>
      Ocean allows data to be shared and sold in a safe, secure and transparent manner. Connecting providers and
      consumers of valuable datasets, while providing open access for developers to build services.
    </SParagraph>
    <StyledPoweredBy>
      <p>Powered by</p>
      <a
        href="https://www.bigchaindb.com/"
        target="_blank" // eslint-disable-line
        rel="noopener"
      >
        <img src={bigchainDBLogo} alt="BigchainDB Logo" />
      </a>
      <a
        href="https://www.dex.sg/"
        target="_blank" // eslint-disable-line
        rel="noopener"
      >
        <img src={dexLogo} alt="Dex Logo" />
      </a>
    </StyledPoweredBy>
  </Section>
);

export default Welcome;
