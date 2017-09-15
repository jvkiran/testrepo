import React from 'react';
import styled from 'styled-components';
import oceanLogo from './assets/ocean-logo.svg';
import emailIcon from './assets/email-icon.svg';
import bigchainDBLogo from './assets/bigchain-db.svg';
import dexLogo from './assets/dex.svg';
import { colors, responsive } from './styles';
import SubscribeForm from 'react-mailchimp-subscribe';

const formProps = {
  action: '//oceanprotocol.us16.list-manage.com/subscribe/post?u=cd10df7575858374f6a066d13&amp;id=3c6eed8b71',
  messages: {
    inputPlaceholder: 'type@your.email',
    btnLabel: 'Join our community',
    sending: 'Sending...',
    success: 'Thanks! Please click the link in the confirmation email to complete your subscription.',
    error: 'Oops, something went wrong'
  },
  styles: {
    sending: {
      fontSize: 16,
      color: 'auto'
    },
    success: {
      fontSize: 16,
      color: 'green'
    },
    error: {
      fontSize: 16,
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
`;

const StyledColumn = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 50px auto;
  padding: 30px 60px;
  overflow: hidden;
  position: relative;
  max-height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media screen and (${responsive.sm.max}) {
    margin: 0 auto;
    padding: 50px 25px;
    overflow: scroll;
  }
  @media screen and (min-height: 650px) and (${responsive.sm.max}) {
    justify-content: center;
  }
`;

const StyledLogo = styled.div`
  width: 90px;
  & img {
    width: 100%;
  }
`;

const StyledTagline = styled.h1`
  margin: 40px 0;
  font-weight: 400;
  font-size: 26px;
  @media screen and (${responsive.sm.min}) {
    margin-top: 70px;
  }
`;

const StyledSubscribeWrapper = styled.div`
  position: relative;
  & img {
    position: absolute;
    width: 18px;
    left: 18px;
    top: calc(50% - 5px);
  }
`;

const StyledSubscribe = styled(SubscribeForm)`
  & div {
    display: flex;
  }
  & input {
    outline: none;
    margin: 0;
    border-radius: 2px 0 0 2px;
    font-size: 16px;
    padding: 14px;
    background: rgb(${colors.white});
    color: rgb(${colors.black});
    padding-left: 54px;
    border: none;
    border-style: none;
    @media screen and (${responsive.sm.max}) {
      line-height: 1;
      padding: 10px;
      padding-left: 44px;
      width: 200px;
    }
  }
  & input::placeholder {
    color: rgb(${colors.black});
  }
  & button {
    color: rgb(${colors.white});
    background: rgb(${colors.black});
    border: 1px solid white;
    border-radius: 0 2px 2px 0;
    font-size: 16px;
    padding: 14px 34px;
    margin: 0;
    &:hover {
      opacity: 0.7;
    }
    @media screen and (${responsive.sm.max}) {
      padding: 14px 20px;
    }
  }
  & > form > p {
    position: absolute;
    text-align: center;
  }
`;

const StyledPoweredBy = styled.div`
  font-size: 20px;
  margin-top: 35px;
  & a {
    height: 30px;
  }
  & img {
    height: 30px;
  }
  & img:first-of-type {
    padding-right: 15px;
  }
`;
const App = () => (
  <StyledWrapper>
    <StyledColumn>
      <StyledLogo>
        <img src={oceanLogo} alt="Ocean" />
      </StyledLogo>
      <StyledTagline>A Decentralized Data Exchange Protocol</StyledTagline>
      <StyledSubscribeWrapper>
        <img src={emailIcon} alt="email" />
        <StyledSubscribe {...formProps}>
          <input placeholder="type@your.email" />
          <button>Join our community</button>
        </StyledSubscribe>
      </StyledSubscribeWrapper>
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
