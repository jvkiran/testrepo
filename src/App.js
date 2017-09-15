import React from 'react';
import styled from 'styled-components';
import oceanLogo from './assets/ocean-logo.svg';
import emailIcon from './assets/email-icon.svg';
import bigchainDBLogo from './assets/bigchain-db.svg';
import dexLogo from './assets/dex.svg';
import { colors, responsive } from './styles';

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
  background: rgb(${colors.black});
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
`;

const StyledSubscribe = styled.form`
  display: flex;
  position: relative;
  & img {
    position: absolute;
    width: 18px;
    top: 19px;
    left: 19px;
  }
  & input {
    border-radius: 2px 0 0 2px;
    background: transparent;
    font-size: 16px;
    padding: 14px;
    color: rgb(${colors.white});
    padding-left: 54px;
    border: none;
    border-style: none;
    border: 1px solid white;
  }
  & input::placeholder {
    color: rgb(${colors.white});
  }
  & button {
    border-radius: 0 2px 2px 0;
    font-size: 16px;
    padding: 14px 34px;
    background: rgb(${colors.white});
    color: rgb(${colors.black});
    @media screen and (${responsive.sm.max}) {
      padding: 14px 20px;
    }
  }
`;

const StyledPoweredBy = styled.div`
  font-size: 20px;
  position: absolute;
  bottom: 10vh;
  & img {
    height: 30px;
    padding-left: 10px;
  }
`;

const StyledTilted = styled.div`
  height: 25vh;
  position: absolute;
  width: 100%;
  max-width: 1000px;
  left: 0;
  bottom: 0;
  opacity: 0;
  overflow: hidden;
  & div {
    height: 100%;
    transform: skewY(5deg) translate3d(0, 5vh, 0);
    background: rgba(${colors.white}, 0.1);
  }
`;

const App = () => (
  <StyledWrapper>
    <StyledColumn>
      <StyledLogo>
        <img src={oceanLogo} alt="Ocean" />
      </StyledLogo>
      <StyledTagline>A Decentralized Data Exchange Protocol</StyledTagline>
      <StyledSubscribe onSubmit={e => alert(`${e.target.value} is subscribed`)}>
        <img src={emailIcon} alt="email" />
        <input placeholder="type@your.email" />
        <button>Join us</button>
      </StyledSubscribe>
      <StyledTilted>
        <div />
      </StyledTilted>
      <StyledPoweredBy>
        <p>Powered by</p>
        <img src={bigchainDBLogo} alt="BigchainDB Logo" />
        <img src={dexLogo} alt="Dex Logo"/>
      </StyledPoweredBy>
    </StyledColumn>
  </StyledWrapper>
);

export default App;
