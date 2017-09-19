import React from 'react';
import styled from 'styled-components';
import oceanLogo from './assets/ocean-logo.svg';
import bigchainDBLogo from './assets/bigchain-db.svg';
import dexLogo from './assets/dex.svg';
import { colors, layout, responsive } from './styles';
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
    transition: .15s ease-out;
    
    @media screen and (${responsive.sm.min}) {
        text-align: left;
        width: auto;
        min-width: 18rem;
    }
    
    &:focus {            
        &::placeholder {
            color: rgba(${colors.black}, .3);
        }
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
    cursor: pointer;

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
    margin-top: .25rem;
  }
`;

const StyledLinks = styled.div`
  margin-top: 2rem;
  font-size: .9rem;
  text-align: left;
  width: 100%;
  max-width: ${layout.maxWidthSm};
  
  @media screen and (${responsive.sm.min}) {
      margin-top: 2vh;
      display: flex;
      justify-content: space-between;
  }
  
  & h2 {
      font-size: .9rem;
      margin-bottom: .15rem;
  }
  
  & a {
      display: inline-block;
      padding-left: .75rem;
      padding-right: .75rem;
      margin-left: -.75rem;
  }
  
  & .icon {
      width: 1rem;
      height: 1rem;
      fill: #fff;
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
  
  & .dimmed {
      margin-right: .25rem;
      text-decoration: none;
      display: block;
  }
`;

const StyledPoweredBy = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: .9rem;
  
  @media screen and (${responsive.sm.min}) {
      margin-top: 5vh;
      margin-bottom: 5vh;
  }
  & p {
    margin: 0;
    margin-bottom: 1rem;
  }
  & .logo {
      display: inline-block;
      margin-right: 1rem;
      margin-left: 1rem;
      transition: .15s ease-out;
      
      &:hover,
      &:focus {
          transform: translate3d(0, -.05rem, 0);
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
              <a href="https://medium.com/oceanprotocol/from-ai-to-blockchain-to-data-meet-ocean-f210ff460465">From AI to Blockchain to Data: Meet Ocean</a>
          </div>
          <div>
              <h2 className="dimmed">Follow</h2>
              <a href="https://twitter.com/oceanprotocol" title="Twitter">
                  <svg className="icon icon--twitter" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <path d="M17.316,4.246 C17.324,4.408 17.327,4.572 17.327,4.734 C17.327,9.724 13.53,15.476 6.587,15.476 C4.454,15.476 2.471,14.851 0.8,13.779 C1.096,13.814 1.396,13.832 1.7,13.832 C3.47,13.832 5.097,13.228 6.388,12.217 C4.737,12.186 3.342,11.096 2.862,9.596 C3.092,9.639 3.329,9.662 3.572,9.662 C3.917,9.662 4.251,9.617 4.567,9.531 C2.84,9.183 1.539,7.658 1.539,5.828 C1.539,5.812 1.539,5.797 1.539,5.781 C2.048,6.064 2.631,6.234 3.249,6.254 C2.236,5.576 1.569,4.422 1.569,3.111 C1.569,2.42 1.755,1.771 2.081,1.213 C3.942,3.498 6.725,5 9.862,5.158 C9.798,4.881 9.765,4.594 9.765,4.297 C9.765,2.213 11.454,0.524 13.539,0.524 C14.625,0.524 15.606,0.981 16.295,1.715 C17.154,1.545 17.962,1.231 18.692,0.799 C18.41,1.68 17.811,2.42 17.032,2.887 C17.796,2.795 18.522,2.594 19.2,2.293 C18.694,3.051 18.054,3.715 17.316,4.246 Z" transform="translate(0 2)"/>
                  </svg>
              </a>
              
              <a href="https://facebook.com/oceanprotocol" title="Facebook">
              <svg className="icon icon--facebook" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <path d="M16,0 L2,0 C0.9,0 0,0.9 0,2 L0,16 C0,17.101 0.9,18 2,18 L9,18 L9,11 L7,11 L7,8.525 L9,8.525 L9,6.475 C9,4.311 10.212,2.791 12.766,2.791 L14.569,2.793 L14.569,5.398 L13.372,5.398 C12.378,5.398 12,6.144 12,6.836 L12,8.526 L14.568,8.526 L14,11 L12,11 L12,18 L16,18 C17.1,18 18,17.101 18,16 L18,2 C18,0.9 17.1,0 16,0 Z" transform="translate(1 1)"/>
              </svg>

              </a>
          </div>
      </StyledLinks>
      <StyledPoweredBy>
        <p className="dimmed">Powered by</p>
        <a className="logo" href="https://www.bigchaindb.com/" target="_blank" rel="noopener noreferrer">
          <img src={bigchainDBLogo} alt="BigchainDB Logo" />
        </a>
        <a className="logo" href="https://www.dex.sg/" target="_blank" rel="noopener noreferrer">
          <img src={dexLogo} alt="Dex Logo" />
        </a>
      </StyledPoweredBy>
    </StyledColumn>
  </StyledWrapper>
);

export default App;
