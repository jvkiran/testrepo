import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import ContentRow from '../components/ContentRow';
import bigchainDBLogo from '../assets/logos/bigchain-db.svg';
import dexLogo from '../assets/logos/dex.svg';
import wavesStatic from '../assets/misc/waves.png';
import { colors, responsive, fonts, layout } from '../styles';

const StyledHero = styled(Section)`
  background: rgb(${colors.black});
  padding-top: 0;
  min-height: calc(100vh - (${layout.pageFrame} * 2));
  position: relative;

  > div {
    padding-top: 2rem;
    min-height: auto;
    position: static;
  }
  @media screen and (${responsive.sm.max}) {
    min-height: 100vh;
  }
`;

const StyledHeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

const StyledWaves = styled.div`
  z-index: 0;

  background: none;

  @media screen and (${responsive.sm.max}) {
    background: url(${wavesStatic}) no-repeat;
    background-size: cover;
    background-position-y: 5rem;
    background-position-x: -5rem;
  }

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
        background: linear-gradient(to bottom, rgba(${colors.black}, 1) 20%, rgba(${colors.black}, 0) 60%);
        z-index: 1;
      }
    }
  }

  canvas {
    max-width: 100%;
  }
`;

const StyledTagline = styled(Title)`
  font-size: ${fonts.size.h1};
  margin-top: 20%;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #fff;

  @media screen and (${responsive.md.min}) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  media screen and (${responsive.md.max}) {
    font-size: ${fonts.size.h2};
  }

  @media screen and (${responsive.sm.max}) {
    font-size: ${fonts.size.h3};
    margin-top: 8rem;
    margin-bottom: 0.5rem;
  }

  @media screen and (${responsive.smHeight.max}) {
    font-size: ${fonts.size.h4};
  }
`;

const StyledPoweredBy = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.fontWeight.title};
  text-transform: uppercase;
  text-align: center;

  @media screen and (${responsive.sm.max}) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  & p {
    margin: 0;
    margin-bottom: 0.75rem;
  }
  & a {
    display: inline-block;

    &:first-of-type {
      margin-left: -1rem;
    }
  }
  & img {
    height: 1.3rem;
    margin: 0 .5rem;

    
  }
`;

const Welcome = () => (
  <StyledHero id="welcome" viewport fontColor={colors.white}>
    <StyledHeroContent>
      <ContentRow>
        <StyledTagline>A Decentralized Data Exchange Protocol to Unlock Data for AI</StyledTagline>
      </ContentRow>
      <ContentRow narrow>
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
      </ContentRow>
    </StyledHeroContent>
    <StyledWaves>
      <div id="background" />
    </StyledWaves>
  </StyledHero>
);

export default Welcome;
