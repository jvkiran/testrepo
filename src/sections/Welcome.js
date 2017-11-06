import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import Section from '../components/Section';
import Title from '../components/Title';
import ContentRow from '../components/ContentRow';
import bigchainDBLogo from '../assets/logos/bigchain-db.svg';
import dexLogo from '../assets/logos/dex.svg';
import wavesStatic from '../assets/misc/waves.png';
import cross from '../assets/misc/cross.svg';
import videoThumb from '../assets/misc/video-thumb.jpg';
import videoThumb2x from '../assets/misc/video-thumb@2x.jpg';
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
  margin-top: 15%;
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
  margin-top: 3rem;
  margin-bottom: 4rem;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.fontWeight.title};
  text-transform: uppercase;
  text-align: center;

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

const StyledClose = styled.img`
  position: absolute;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 21;
  &:hover {
    opacity: 0.7;
  }
`;

const Video = styled.div`
  margin-top: 0;
`;

const StyledReactPlayer = styled(ReactPlayer) `
    max-width: 100%;
    height: auto !important;
    width: 100% !important;
    > div {
        position: relative;
        height: 0 !important;
        padding-bottom: 56.25%;
    }
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

const StyledVideoThumbnail = styled.div`
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    box-shadow: 0 9px 18px 0 rgba(0, 0, 0, 0.6);
    cursor: pointer;
    max-height: 180px;
    background: rgb(${colors.black});

    &:hover,
    &:focus {
      transform: translate3d(0, -0.05rem, 0);
      box-shadow: 0 12px 30px 0 rgba(0, 0, 0, 0.6);

      img {
        opacity: 1;
      }
    }

    img {
      opacity: .9;
      transition: .2s ease-out;
      border: .4rem solid #fff;
    }
`;

const videoModalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 20,
    backgroundColor: `rgba(${colors.black}, .9)`
  },
  content: {
    padding: '0',
    width: '100%',
    height: 'auto',
    zIndex: 2,
    maxWidth: '1080px',
    maxHeight: '100vh',
    borderRadius: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: `rgb(${colors.black})`,
    border: '0'
  }
};

class Welcome extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
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

            <StyledVideoThumbnail onClick={this.openModal}>
              <img src={videoThumb} srcSet={videoThumb2x + ' 2x, ' + videoThumb + ' 1x'} alt="Ocean Protocol Video" />
            </StyledVideoThumbnail>

          </ContentRow>
        </StyledHeroContent>
        <StyledWaves>
          <div id="background" />
        </StyledWaves>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={videoModalStyles}
          contentLabel="Example Modal"
        >
          <StyledClose src={cross} alt="close" onClick={this.closeModal} />

          <Video>
            <StyledReactPlayer url='https://www.youtube.com/watch?v=FEeicvNSyk4' controls={true} config={{ youtube: { playerVars: { color: 'white' } } }} />
          </Video>
        </Modal>
      </StyledHero>
    );
  };
};

export default Welcome;
