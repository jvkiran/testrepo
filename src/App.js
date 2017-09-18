import React from 'react';
import styled from 'styled-components';
import oceanLogo from './assets/ocean-logo.svg';
import bigchainDBLogo from './assets/bigchain-db.svg';
import dexLogo from './assets/dex.svg';
import { colors, responsive } from './styles';
import SubscribeForm from 'react-mailchimp-subscribe';

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
      fontSize: '1.4rem',
      color: 'auto'
    },
    success: {
      fontSize: '1.4rem',
      color: 'green'
    },
    error: {
      fontSize: '1.4rem',
      color: 'red'
    }
  }
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 1rem;
`;

const StyledColumn = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  padding-top: 4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media screen and (${responsive.sm.max}) and (min-height: 599px) {
    padding-top: 50px;
    justify-content: center;
  }
`;

const StyledLogo = styled.div`
  height: 13.8rem;
  & img {
    height: 100%;
  }
`;

const StyledTagline = styled.h1`
  margin: 5rem 0;
  font-weight: 400;
  font-size: 2.65rem;
`;

const StyledSubscribe = styled(SubscribeForm)`
  position: relative;
  & div {
    display: flex;
    background: rgb(${colors.white});
    border-radius: 0.7rem;
  }
  & input {
    outline: none;
    margin: 0;
    font-size: 1.8rem;
    padding: 1.2rem 2rem;
    color: rgb(${colors.black});
    background: transparent;
    border: none;
    border-style: none;
  }
  & input::placeholder {
    color: rgb(${colors.black});
  }
  & button {
    color: rgb(${colors.white});
    background: rgb(${colors.black});
    border-radius: 0.7rem;
    font-size: 1.6rem;
    padding: 1.2rem 2rem;
    margin: 0.3rem;
    @media screen and (hover: hover) {
      &:hover {
        opacity: 0.7;
      }
    }
  }
  & > form > p {
    width: 100%;
    position: absolute;
    text-align: center;
  }
`;

const StyledPoweredBy = styled.div`
  font-size: 1.6rem;
  margin-top: 9rem;
  margin-bottom: 3rem;
  & p {
    margin: 0;
    margin-bottom: 2rem;
  }
  & a {
    height: 2.65rem;
  }
  & img {
    height: 2.65rem;
  }
  & img:first-of-type {
    padding-right: 3rem;
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
      <StyledPoweredBy>
        <p>Powered by</p>
        <a href="https://www.bigchaindb.com/" target="_blank" rel="noopener noreferrer">
          <img src={bigchainDBLogo} alt="BigchainDB Logo" />
        </a>
        <a href="https://www.dex.sg/" target="_blank" rel="noopener noreferrer">
          <img src={dexLogo} alt="Dex Logo" />
        </a>
      </StyledPoweredBy>
    </StyledColumn>
  </StyledWrapper>
);

export default App;
