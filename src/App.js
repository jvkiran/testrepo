import React from 'react';
import styled from 'styled-components';
import SubscribeForm from './components/SubscribeForm';
import oceanLogo from './assets/ocean-logo.svg';
import emailIcon from './assets/email-icon.svg';
import buttonMedium from './assets/button-medium.svg';
import buttonTwitter from './assets/button-twitter.svg';
import buttonSlack from './assets/button-slack.svg';
import bigchainDBLogo from './assets/bigchain-db.svg';
import dexLogo from './assets/dex.svg';
import { colors, responsive, transitions } from './styles';

const formProps = {
  action: '//oceanprotocol.us16.list-manage.com/subscribe/post?u=cd10df7575858374f6a066d13&amp;id=3c6eed8b71',
  messages: {
    inputPlaceholder: 'your@email.com',
    btnLabel: 'Join our community',
    sending: 'Sending...',
    success: 'Thank you! Please click the link in the confirmation email to complete your subscription.',
    error: 'Oops, something went wrong. Would you mind trying again?'
  },
  styles: {
    sending: {
      fontSize: '.7rem',
      color: 'auto'
    },
    success: {
      fontSize: '.7rem',
      color: 'auto'
    },
    error: {
      fontSize: '.7rem',
      color: 'auto'
    }
  }
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const StyledColumn = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 6rem 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  @media screen and (${responsive.sm.max}) {
    padding: 2rem 1rem;
  }
`;

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledNav = styled.nav`
  text-transform: uppercase;
  & a {
    transition: ${transitions.short};
    margin: 0 18px;
  }
  & a:hover,
  & a:focus {
    text-decoration: none;
    transform: translate3d(0, -0.05rem, 0);
  }
`;

const StyledLogo = styled.div`
  & img {
    width: 89px;
    height: 123px;
  }
`;

const StyledTagline = styled.h1`
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

const StyledDescription = styled.p`
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

const StyledSubscribe = styled(SubscribeForm)`
  position: relative;
  max-width: 34rem;
  width: 100%;

  & img {
    position: absolute;
    left: 1rem;
    top: calc(50% - 0.5rem);
    height: 0.9rem;
  }

  & div {
    display: flex;
    border-radius: 2px;
    background: linear-gradient(to right, #b3b3b3, #909090);
    border: 1px solid rgb(${colors.white});
    @media screen and (${responsive.sm.max}) {
      flex-wrap: wrap;
    }
  }
  & input {
    outline: none;
    margin: 0;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    padding-left: 3rem;
    background: rgb(${colors.black});
    color: rgb(${colors.white});
    border: none;
    min-width: 18rem;
    border-radius: 2px;
    box-shadow: none;
    transition: ${transitions.short};

    @media screen and (${responsive.sm.max}) {
      text-align: center;
      width: 100%;
      min-width: 0;
    }

    &:focus {
      &::placeholder {
        color: rgba(${colors.white}, 0.3);
      }
    }
  }
  & input::placeholder {
    color: rgba(${colors.white}, 0.5);
  }
  & button {
    color: rgb(${colors.white});
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${transitions.short};
    cursor: pointer;

    @media screen and (hover: hover) {
      &:hover,
      &:focus {
        opacity: 0.85;
      }
    }
  }
  & > form > p {
    width: 100%;
    position: absolute;
    text-align: center;
    margin-top: 0.25rem;
  }
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
  margin-top: 5rem;
  margin-bottom: 5rem;
  font-size: 0.9rem;

  @media screen and (${responsive.sm.max}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  & p {
    margin: 0;
    margin-bottom: 0.75rem;
  }
  & .logo {
    display: inline-block;
    margin-right: 2rem;
    transition: ${transitions.short};

    &:hover,
    &:focus {
      transform: translate3d(0, -0.05rem, 0);
    }

    &:active {
      transform: none;
      transition: none;
    }

    img {
      height: 1.5rem;

      @media screen and (${responsive.sm.max}) {
        height: 1rem;
      }
    }
  }
`;

const App = () => (
  <StyledWrapper>
    <StyledColumn>
      <StyledHeader>
        <StyledLogo>
          <img src={oceanLogo} alt="Ocean" />
        </StyledLogo>
        <StyledNav>
          <a href="">What is Ocean?</a>
          <a href="">Use Cases</a>
          <a href="">Blog</a>
          <a href="">Community & Team</a>
        </StyledNav>
      </StyledHeader>
      <StyledTagline>A Decentralized Data Exchange Protocol</StyledTagline>
      <StyledDescription>
        Ocean allows data to be shared and sold in a safe, secure and transparent manner. Connecting providers and
        consumers of valuable datasets, while providing open access for developers to build services.
      </StyledDescription>
      <StyledActions>
        <StyledSubscribe {...formProps}>
          <img src={emailIcon} alt="email" />
        </StyledSubscribe>
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
        <p className="dimmed">Powered by</p>
        <a
          className="logo"
          href="https://www.bigchaindb.com/?utm_source=oceanprotocol&utm_medium=logo"
          target="_blank" // eslint-disable-line
          rel="noopener"
        >
          <img src={bigchainDBLogo} alt="BigchainDB Logo" />
        </a>
        <a
          className="logo"
          href="https://www.dex.sg/"
          target="_blank" // eslint-disable-line
          rel="noopener"
        >
          <img src={dexLogo} alt="Dex Logo" />
        </a>
      </StyledPoweredBy>
    </StyledColumn>
  </StyledWrapper>
);

export default App;
