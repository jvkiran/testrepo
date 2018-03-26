import React from 'react'
import styled, { keyframes } from 'styled-components'
import fadeInUp from 'react-animations/lib/fade-in-up'
import Section from '../components/Section'
import Title from '../components/Title'
import ContentRow from '../components/ContentRow'
import SocialHero from '../components/SocialHero'
import VideoModal from '../components/VideoModal'
import bigchainDBLogo from '../assets/logos/bigchain-db.svg'
import dexLogo from '../assets/logos/dex.svg'
import wavesStatic from '../assets/misc/waves.png'
import videoThumb from '../assets/misc/video-thumb.jpg'
import videoThumb2x from '../assets/misc/video-thumb@2x.jpg'
import { colors, responsive, fonts, layout } from '../styles'

import Waves from '../components/Waves'

const StyledHero = styled(Section)`
    background: rgb(${colors.black});
    padding-top: 0;
    min-height: calc(100vh - (${layout.pageFrame} * 2));
    position: relative;

    > div {
        padding-top: 2rem;
        padding-bottom: 2rem;
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

    @media screen and (${responsive.md.max}) {
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

        @media screen and (${responsive.md.max}) {
            display: none;
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
    margin-top: 15%;
    margin-bottom: 1.5rem;
    text-align: center;
    color: #fff;
    animation: ${animation} 1.5s backwards;

    @media screen and (${responsive.md.min}) {
        margin-left: 2rem;
        margin-right: 2rem;
    }

    @media screen and (${responsive.md.max}) {
        font-size: ${fonts.size.h2};
    }

    @media screen and (${responsive.sm.max}) {
        font-size: ${fonts.size.h3};
        margin-top: 8rem;
        margin-bottom: .5rem;
    }

    @media screen and (${responsive.smHeight.max}) {
        font-size: ${fonts.size.h3};
    }
`

const StyledPoweredBy = styled.div`
    margin-top: 3rem;
    margin-bottom: 4rem;
    font-size: ${fonts.size.small};
    font-weight: ${fonts.fontWeight.title};
    text-transform: uppercase;
    text-align: center;
    animation: ${animation} 1.5s .5s backwards;

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

const StyledVideoThumbnail = styled.div`
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    box-shadow: 0 9px 18px 0 rgba(0, 0, 0, .6);
    cursor: pointer;
    max-height: 180px;
    background: rgb(${colors.black});
    animation: ${animation} 1.75s .5s backwards;

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

const srcSet = `${videoThumb2x}  2x,  ${videoThumb} 1x`

const StyledSocialHero = styled.aside`
    margin-top: 1rem;

    & a {
        animation: ${animation} 1.5s 1.5s backwards;

        &:nth-child(2) {
            animation-delay: 1.75s;
        }

        &:nth-child(3) {
            animation-delay: 2s;
        }

        &:nth-child(4) {
            animation-delay: 2.25s;
        }
    }
`

class Welcome extends React.Component {
    state = {
        videoUrl: ''
    }

    openVideo = (link) => this.setState({ videoUrl: link })

    closeModal = () => {
        this.setState({ videoUrl: '' })
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

                        <StyledVideoThumbnail onClick={() => this.openVideo('https://www.youtube.com/watch?v=FEeicvNSyk4')}>
                            <img
                                alt="Ocean Protocol Video"
                                src={videoThumb}
                                srcSet={srcSet} />
                        </StyledVideoThumbnail>

                    </ContentRow>

                    <StyledSocialHero>
                        <SocialHero />
                    </StyledSocialHero>
                </StyledHeroContent>

                <StyledWaves>
                    <div className="waves__background" ref={node => Waves(node)} />
                </StyledWaves>

                <VideoModal onCloseModal={this.closeModal} source={this.state.videoUrl} />
            </StyledHero>
        )
    }
}

export default Welcome
