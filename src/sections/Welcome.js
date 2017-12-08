import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeInUp } from 'react-animations'
import Section from '../components/Section'
import Title from '../components/Title'
import ContentRow from '../components/ContentRow'
import SubscribeForm from '../components/SubscribeForm'
import bigchainDBLogo from '../assets/logos/bigchain-db.svg'
import dexLogo from '../assets/logos/dex.svg'
import wavesStatic from '../assets/misc/waves.png'
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

const StyledSubscribeForm = styled(SubscribeForm)`
    max-width: 25rem;
    margin-left: auto;
    margin-right: auto;
    animation: 1s ${animation} .8s backwards;
`

const Welcome = () => (
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

                <StyledSubscribeForm inputPlaceholder="Join our newsletter" />

            </ContentRow>
        </StyledHeroContent>
        <StyledWaves>
            <div className="waves__background" />
        </StyledWaves>
    </StyledHero>
)

export default Welcome
