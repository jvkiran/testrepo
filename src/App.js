import React from 'react';
import styled from 'styled-components';
import SubscribeForm from 'react-mailchimp-subscribe';
import oceanLogo from './assets/ocean-logo.svg';
import bigchainDBLogo from './assets/bigchain-db.svg';
import dexLogo from './assets/dex.svg';
import { colors, layout, responsive } from './styles';
import { IconTwitter } from './icons';

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
  margin: 0 auto;
  padding: 2rem 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledLogo = styled.div`
  & img {
    width: 89px;
    height: 123px;
  }
`;

const StyledTagline = styled.h1`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
  font-size: 1.5rem;
  max-width: ${layout.maxWidth};
  width: 100%;

  @media screen and (${responsive.sm.min}) {
    font-size: 1.75rem;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
`;

const StyledSubscribe = styled(SubscribeForm)`
  position: relative;
  max-width: ${layout.maxWidthSm};
  width: 100%;

  & div {
    display: flex;
    flex-wrap: wrap;
    background: rgb(${colors.white});
    border-radius: 0.5rem;

    @media screen and (${responsive.sm.min}) {
      flex-wrap: nowrap;
    }
  }
  & input {
    outline: none;
    margin: 0;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    color: rgb(${colors.black});
    background: transparent;
    border: none;
    box-shadow: none;
    text-align: center;
    width: 100%;
    transition: 0.15s ease-out;

    @media screen and (${responsive.sm.min}) {
      text-align: left;
      width: auto;
      min-width: 18rem;
    }

    &:focus {
      &::placeholder {
        color: rgba(${colors.black}, 0.3);
      }
    }
  }
  & input::placeholder {
    color: rgba(${colors.black}, 0.5);
  }
  & button {
    color: rgb(${colors.white});
    background: rgb(${colors.black});
    border-radius: 0.35rem;
    font-size: 0.85rem;
    padding: 0.75rem 1rem;
    margin: 0.15rem;
    width: 100%;
    transition: 0.15s ease-out;
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

const StyledLinks = styled.div`
  margin-top: 2rem;
  font-size: 0.9rem;
  text-align: left;
  width: 100%;
  max-width: ${layout.maxWidthSm};

  @media screen and (${responsive.sm.min}) {
    margin-top: 2vh;
    display: flex;
    justify-content: space-between;
  }

  & h2 {
    font-size: 0.9rem;
    margin-bottom: 0.1rem;
  }

  & a {
    display: inline-block;
  }

  & .social-link {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    margin-left: -0.75rem;
  }

  & .icon {
    width: 1rem;
    height: 1rem;
    fill: #fff;
    margin-bottom: -0.1rem;
  }

  & .icon--twitter {
    &:hover,
    &:focus {
      fill: #00b6f1;
    }
  }

  & .icon--facebook {
    &:hover,
    &:focus {
      fill: #3b5998;
    }
  }
`;

const StyledPoweredBy = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;

  @media screen and (${responsive.sm.min}) {
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
  & p {
    margin: 0;
    margin-bottom: 0.75rem;
  }
  & .logo {
    display: inline-block;
    margin-right: 1rem;
    margin-left: 1rem;
    transition: 0.15s ease-out;

    &:hover,
    &:focus {
      transform: translate3d(0, -0.05rem, 0);
    }

    &:active {
      transform: none;
      transition: none;
    }

    img {
      height: 1rem;

      @media screen and (${responsive.sm.min}) {
        height: 1.5rem;
      }
    }
  }
`;
const App = () => (
  <StyledWrapper>
    <StyledColumn>
      <StyledLogo>
        <img src={oceanLogo} alt="Ocean" />
      </StyledLogo>
      <StyledTagline>A Decentralized Data Exchange Protocol</StyledTagline>
      <StyledSubscribe {...formProps} />
      <StyledLinks>
        <div>
          <h2 className="dimmed">Announcement</h2>
          <a href="https://blog.oceanprotocol.com/from-ai-to-blockchain-to-data-meet-ocean-f210ff460465">
            From AI to Blockchain to Data: Meet Ocean
          </a>
        </div>
        <div>
          <h2 className="dimmed">Follow</h2>
          <a className="social-link" href="https://twitter.com/oceanprotocol" title="Twitter">
            <IconTwitter />
          </a>
        </div>
      </StyledLinks>
      <StyledPoweredBy>
        <p className="dimmed">Powered by</p>
        <a
          className="logo"
          href="https://www.bigchaindb.com/"
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
