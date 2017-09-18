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
  
  @media screen and (${responsive.sm.min}) {
    font-size: 1.75rem;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
`;

const StyledSubscribe = styled(SubscribeForm)`
  position: relative;
  & div {
    display: flex;
    flex-wrap: wrap;
    background: rgb(${colors.white});
    border-radius: .5rem;
    
    @media screen and (${responsive.sm.min}) {
        flex-wrap: nowrap;
    }
  }
  & input {
    outline: none;
    margin: 0;
    font-size: 1rem;
    padding: .75rem 1rem;
    color: rgb(${colors.black});
    background: transparent;
    border: none;
    box-shadow: none;
    text-align: center;
    width: 100%;
    
    @media screen and (${responsive.sm.min}) {
        text-align: left;
        width: auto;
    }
  }
  & input::placeholder {
    color: rgba(${colors.black}, .5);
  }
  & button {
    color: rgb(${colors.white});
    background: rgb(${colors.black});
    border-radius: .35rem;
    font-size: .85rem;
    padding: .75rem 1rem;
    margin: .15rem;
    width: 100%;
    transition: .15s ease-out;

    @media screen and (hover: hover) {
      &:hover,
      &:focus {
        opacity: .85;
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
  margin-top: 2rem;
  margin-bottom: 2rem;
  
  @media screen and (${responsive.sm.min}) {
      margin-top: 5vh;
      margin-bottom: 5vh;
  }
  & p {
    margin: 0;
    margin-bottom: 1rem;
  }
  & img {
    height: 1rem;
    
    @media screen and (${responsive.sm.min}) {
        height: 1.5rem;
    }
  }
  & img:first-of-type {
    margin-right: 2rem;
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
