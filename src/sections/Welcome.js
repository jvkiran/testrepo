import React from 'react';
import styled from 'styled-components';
import smoothScroll from 'smoothscroll';
import Section from '../components/Section';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import oceanLogo from '../assets/logos/ocean-logo.svg';
import bigchainDBLogo from '../assets/logos/bigchain-db.svg';
import dexLogo from '../assets/logos/dex.svg';
import { colors, responsive, fonts, layout } from '../styles';

const StyledHero = styled(Section)`
  background: rgb(${colors.darkBackground});
  padding-top: 0;
  min-height: calc(100vh - (${layout.pageFrame} * 2));
  position: relative;

  > div {
    padding-top: 2rem;
    min-height: auto;
    position: static;
  }
`;

const StyledHeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledWaves = styled.div`
  z-index: 0;

  &,
  #background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  div#container {
    position: absolute;
    top: 10vh;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  @media screen and (${responsive.sm.max}) {
    div#container {
      display: none;
    }
  }
  @media screen and (max-height: 700px) {
    div#container {
      &:before {
        content: '';
        top: 50%;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        background: linear-gradient(to bottom, rgba(${colors.darkBackground}, 1) 20%, rgba(${colors.darkBackground}, 0) 60%);
        z-index: 1;
      }
    }
  }

  canvas {
    max-width: 100%;
  }
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
  text-align: center;

  @media screen and (${responsive.sm.max}) {
    font-size: ${fonts.size.h3};
    margin-top: 2rem;
    margin-bottom: 0.42rem;
  }
`;

const SParagraph = styled(Paragraph)`
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
`;

const StyledPoweredBy = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  font-size: ${fonts.size.small};
  text-transform: uppercase;
  text-align: center;

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
  <StyledHero id="Welcome" viewport fontColor={colors.white}>
    <StyledHeroContent>
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
          rel="noopener">
          
          <img src={bigchainDBLogo} alt="BigchainDB Logo" />
        </a>
        <a
          href="https://www.dex.sg/"
          target="_blank" // eslint-disable-line
          rel="noopener">
          
          <img src={dexLogo} alt="Dex Logo" />
        </a>
        </StyledPoweredBy>
      </StyledHeroContent>
    <StyledWaves>
      <div id="background"></div>
    </StyledWaves>
  </StyledHero>
);

export default Welcome;
