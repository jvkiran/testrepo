import React from 'react';
import styled from 'styled-components';
import smoothScroll from 'smoothscroll';
import SubscribeForm from '../components/SubscribeForm';
import Section from '../components/Section';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import oceanLogo from '../assets/ocean-logo.svg';
import buttonMedium from '../assets/button-medium.svg';
import buttonTwitter from '../assets/button-twitter.svg';
import buttonSlack from '../assets/button-slack.svg';
import { responsive } from '../styles';

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

const StyledActions = styled.div`
  width: 100%;
  display: flex;
  @media screen and (${responsive.sm.max}) {
    flex-direction: column;
  }
`;

const StyledSocialLinks = styled.div`
  display: flex;
  & a {
    margin-left: 20px;
  }
  & img {
    width: calc(2.5rem + 4px);
    height: calc(2.5rem + 4px);
  }
  @media screen and (${responsive.sm.max}) {
    margin-top: 1.25rem;
    & a {
      margin-left: 0;
      margin-right: 20px;
    }
  }
`;

const Welcome = () => (
  <Section id="Welcome" viewport shadow>
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
        <a onClick={smoothScroll} href="#Documentation">
          Documentation
        </a>
        <a
          href="https://blog.oceanprotocol.com/"
          target="_blank" //eslint-disable-line
          rel="noopener"
        >
          Blog
        </a>
        <a onClick={smoothScroll} href="#Team">
          Community & Team
        </a>
      </StyledNav>
    </StyledHeader>
    <StyledTagline>A Decentralized Data Exchange Protocol</StyledTagline>
    <Paragraph>
      Ocean allows data to be shared and sold in a safe, secure and transparent manner. Connecting providers and
      consumers of valuable datasets, while providing open access for developers to build services.
    </Paragraph>
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
          className="logo"
        <a className="logo" href="https://www.dex.sg/" target="_blank" rel="noopener">
          <img src={buttonSlack} alt="Slack" />
          rel="noopener"
        >
          <img src={dexLogo} alt="Dex Logo" />
        </a>
      </StyledSocialLinks>
    </StyledActions>
  </Section>
);

export default Welcome;
