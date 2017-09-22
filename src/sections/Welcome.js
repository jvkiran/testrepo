import React from 'react';
import styled from 'styled-components';
import smoothScroll from 'smoothscroll';
import SubscribeForm from '../components/SubscribeForm';
import Section from '../components/Section';
import Title from '../components/Title';
import oceanLogo from '../assets/ocean-logo.svg';
import buttonMedium from '../assets/button-medium.svg';
import buttonTwitter from '../assets/button-twitter.svg';
import buttonSlack from '../assets/button-slack.svg';
import bigchainDBLogo from '../assets/bigchain-db.svg';
import dexLogo from '../assets/dex.svg';
import { responsive, transitions } from '../styles';

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledNav = styled.nav`
  text-transform: uppercase;
  text-align: right;
  & a {
    display: inline-block;
    margin-right: 20px;
  }
`;

const StyledLogo = styled.div`
  & img {
    width: 89px;
    height: 123px;
  }
`;

const StyledTagline = styled(Title)`
  font-size: 2.27rem;
  margin-top: 5rem;
  margin-bottom: 1.45rem;
  font-weight: 600;

  @media screen and (${responsive.sm.max}) {
    font-size: 1.95rem;
    margin-top: 2rem;
    margin-bottom: 0.42rem;
  }
`;

const StyledIntro = styled.p`
  line-height: 2.13;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 3rem;
  @media screen and (${responsive.sm.max}) {
    font-size: 0.85rem;
    margin-bottom: 1.2rem;
  }
`;

const StyledActions = styled.div`
  width: 100%;
  display: flex;
`;

const StyledSocialLinks = styled.div`
  display: flex;
  & a {
    transition: ${transitions.short};
    margin-left: 20px;
  }
  & a:hover,
  & a:focus {
    transform: translate3d(0, -0.05rem, 0);
  }
  & img {
    width: calc(2.5rem + 4px);
    height: calc(2.5rem + 4px);
  }
`;

const StyledPoweredBy = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  font-size: 0.9rem;

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

    img {
      height: 1.5rem;

      @media screen and (${responsive.sm.max}) {
        height: 1rem;
      }
    }
  }
`;

const Welcome = () => (
  <Section id="Welcome" viewport>
    <StyledHeader>
      <a href="/">
        <StyledLogo>
          <img src={oceanLogo} alt="Ocean" />
        </StyledLogo>
      </a>
      <StyledNav>
        <a onClick={smoothScroll} href="#About">
          What is Ocean?
        </a>
        <a onClick={smoothScroll} href="#UseCases">
          Use Cases
        </a>
        <a onClick={smoothScroll} href="#Medium">
          Blog
        </a>
        <a onClick={smoothScroll} href="#Team">
          Community & Team
        </a>
      </StyledNav>
    </StyledHeader>
    <StyledTagline>A Decentralized Data Exchange Protocol</StyledTagline>
    <StyledIntro>
      Ocean allows data to be shared and sold in a safe, secure and transparent manner. Connecting providers and
      consumers of valuable datasets, while providing open access for developers to build services.
    </StyledIntro>
    <StyledActions>
      <SubscribeForm />
      <StyledSocialLinks>
        <a href="medium.com">
          <img src={buttonMedium} alt="Medium" />
        </a>
        <a href="twitter.com">
          <img src={buttonTwitter} alt="Twitter" />
        </a>
        <a href="slack.com">
          <img src={buttonSlack} alt="Slack" />
        </a>
      </StyledSocialLinks>
    </StyledActions>
    <StyledPoweredBy>
      <p>Powered by</p>
      <a href="https://www.bigchaindb.com/" target="_blank" rel="noreferrer noopener">
        <img src={bigchainDBLogo} alt="BigchainDB Logo" />
      </a>
      <a href="https://www.dex.sg/" target="_blank" rel="noreferrer noopener">
        <img src={dexLogo} alt="Dex Logo" />
      </a>
    </StyledPoweredBy>
  </Section>
);

export default Welcome;
