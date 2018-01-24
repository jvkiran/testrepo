import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeInUp } from 'react-animations'
import ReactPlayer from 'react-player'
import Section from '../components/Section'
import Title from '../components/Title'
import ContentRow from '../components/ContentRow'
import bigchainDBLogo from '../assets/logos/bigchain-db.svg'
import dexLogo from '../assets/logos/dex.svg'
import wavesStatic from '../assets/misc/waves.png'
import cross from '../assets/misc/cross.svg'
import videoThumb from '../assets/misc/video-thumb.jpg'
import videoThumb2x from '../assets/misc/video-thumb@2x.jpg'
import { colors, responsive, fonts, layout } from '../styles'

import '../waves'

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
`

const StyledHeroContent = styled.div`
    position: relative;
    z-index: 2;
`

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
    .waves__background {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .waves__container {
        position: absolute;
        top: 10vh;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
    }

    @media screen and (${responsive.sm.max}) {
        .waves__container {
            display: none;
        }
    }

    @media screen and (max-height: 700px) {
        .waves__container {
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
`

const animation = keyframes`
    ${fadeInUp}
`

const StyledTagline = styled(Title)`
    font-size: ${fonts.size.h1};
    margin-top: 20%;
    margin-bottom: 1.5rem;
    text-align: center;
    color: #fff;
    animation: 1s ${animation} backwards;

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
        margin-bottom: .5rem;
    }

    @media screen and (${responsive.smHeight.max}) {
        font-size: ${fonts.size.h4};
    }
`

const StyledPoweredBy = styled.div`
    margin-top: 3rem;
    margin-bottom: 4rem;
    font-size: ${fonts.size.small};
    font-weight: ${fonts.fontWeight.title};
    text-transform: uppercase;
    text-align: center;
    animation: 1s ${animation} .5s backwards;

    & p {
        margin: 0;
        margin-bottom: .75rem;
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
`

const StyledClose = styled.img`
    position: absolute;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 21;

    &:hover {
        opacity: .7;
    }
`

const Video = styled.div`
    margin-top: 0;
`

const StyledReactPlayer = styled(ReactPlayer)`
    max-width: 100%;
    height: auto !important; /* stylelint-disable-line declaration-no-important */
    width: 100% !important; /* stylelint-disable-line declaration-no-important */

    > div {
        position: relative;
        height: 0 !important; /* stylelint-disable-line declaration-no-important */
        padding-bottom: 56.25%;
    }

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const StyledVideoThumbnail = styled.div`
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    box-shadow: 0 9px 18px 0 rgba(0, 0, 0, .6);
    cursor: pointer;
    max-height: 180px;
    background: rgb(${colors.black});

    img {
        opacity: .9;
        transition: .2s ease-out;
        border: .4rem solid #fff;
    }

    &:hover,
    &:focus {
        transform: translate3d(0, -.05rem, 0);
        box-shadow: 0 12px 30px 0 rgba(0, 0, 0, .6);

        img {
            opacity: 1;
        }
    }
`

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    background-color: rgba(${colors.black}, .9);
`

const YoutubeModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    border: 0;
    background: rgb(20, 20, 20);
    overflow: auto;
    border-radius: 0;
    outline: none;
    padding: 0;
    width: 100%;
    height: auto;
    z-index: 2;
    max-width: 1080px;
    max-height: 100vh;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`

const srcSet = `${videoThumb2x}  2x,  ${videoThumb} 1x`

class Welcome extends React.Component {
    constructor() {
        super()

        this.state = {
            modalIsOpen: false
        }
    }

    openModal() {
        this.setState({ modalIsOpen: true })
        document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    }

    closeModal() {
        this.setState({ modalIsOpen: false })
        document.getElementsByTagName('html')[0].style.overflow = 'auto'
    }

    render() {
        return (
            <StyledHero viewport fontColor={colors.white} id="welcome">
                <StyledHeroContent>
                    <ContentRow>
                        <StyledTagline>A Decentralized Data Exchange Protocol to Unlock Data for AI</StyledTagline>
                    </ContentRow>
                    <ContentRow narrow>
                        <StyledPoweredBy>
                            <p>Powered by</p>
                            <a href="https://www.bigchaindb.com/">
                                <img alt="BigchainDB Logo" src={bigchainDBLogo} />
                            </a>
                            <a href="https://www.dex.sg/">
                                <img alt="Dex Logo" src={dexLogo} />
                            </a>
                        </StyledPoweredBy>

                        <StyledVideoThumbnail onClick={() => this.openModal()}>
                            <img
                                alt="Ocean Protocol Video"
                                src={videoThumb}
                                srcSet={srcSet} />
                        </StyledVideoThumbnail>

                    </ContentRow>
                </StyledHeroContent>
                <StyledWaves>
                    <div className="waves__background" />
                </StyledWaves>
                {this.state.modalIsOpen === true &&
                <ModalOverlay onClick={() => this.closeModal()}>
                    <YoutubeModal>
                        <StyledClose alt="close" onClick={() => this.closeModal()} src={cross} />
                        <Video>
                            <StyledReactPlayer
                                controls
                                config={{ youtube: { playerVars: { color: 'white' } } }}
                                url='https://www.youtube.com/watch?v=FEeicvNSyk4' />
                        </Video>
                    </YoutubeModal>
                </ModalOverlay>
                }
            </StyledHero>
        )
    }
}

export default Welcome
