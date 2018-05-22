/* global ga */

import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import Section from '../components/Section'
import Grid from '../components/Grid'
import ContentRow from '../components/ContentRow'
import Pulse from '../components/Pulse'
import Cell from '../components/Cell'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import Paragraph from '../components/Paragraph'
import Roadmap from '../components/Roadmap'
import dataDotsLeft from '../assets/graphics/data-dots-left.svg'
import dataDotsRight from '../assets/graphics/data-dots-right.svg'
import arrow from '../assets/misc/arrow.svg'
import { colors, fonts, responsive, transitions } from '../styles'

const slideRight = keyframes`
    0% {
        transform: translate3d(-30%, 0, 0);
    }

    33% {
        transform: translate3d(30%, 0, 0);
    }

    100% {
        transform: translate3d(30%, 0, 0);
    }
`

const slideRightLarge = keyframes`
    0% {
        transform: translate3d(-21%, 0, 0);
    }

    33% {
        transform: translate3d(20%, 0, 0);
    }

    100% {
        transform: translate3d(20%, 0, 0);
    }
`

const StyledData = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 0;
    margin-bottom: 4rem;

    @media screen and (${responsive.sm.max}) {
        flex-direction: column;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`

const StyledCard = styled.div`
    background: rgb(${colors.white});
    margin: 5%;
    border-radius: 2px;
    width: 30%;
    box-shadow: 0 9px 18px 0 rgba(0, 0, 0, .07);
    border: 1px solid rgba(${colors.black}, .07);
    transition: ${transitions.base};
    color: rgb(${colors.grey});
    display: block;
    padding: 2rem;
    cursor: pointer;

    @media screen and (${responsive.md.max}) {
        padding: 1.5rem;
    }

    @media screen and (${responsive.sm.max}) {
        width: 100%;

        &:first-child {
            margin-bottom: 10rem;
        }

        &:nth-child(2) {
            margin-top: 10rem;
        }
    }

    &:hover,
    &:focus {
        transform: translate3d(0, -.05rem, 0);
        box-shadow: 0 12px 30px 0 rgba(0, 0, 0, .07);
    }

    &:active {
        box-shadow: 0 9px 18px 0 rgba(0, 0, 0, .07);
        transform: none;
        transition: none;
    }

    h4 {
        margin-top: 0;
        margin-bottom: 1.5rem;
    }

    & button {
        border: none;
        padding: 0;
        font-family: ${fonts.family.button};
        font-size: 1rem;
        cursor: pointer;
        outline: inherit;
        display: block;
        color: inherit;
        margin-top: 2.5rem;
        background: transparent;
        width: fit-content;
        position: relative;
        text-transform: uppercase;

        @media screen and (${responsive.md.max}) {
            margin-top: 1.5rem;
        }

        &:after {
            content: '';
            display: block;
            width: 20px;
            height: 20px;
            position: absolute;
            top: 0;
            left: calc(100% + 10px);
            background: url(${arrow}) no-repeat;
        }
    }

    &:first-child {
        button {
            color: rgb(${colors.purple});
        }
    }

    &:last-child {
        button {
            color: rgb(${colors.softPink});
        }
    }
`

const StyledDataTransfer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(90deg);

    .pulse {
        transform: rotate(-90deg);
    }

    @media screen and (${responsive.sm.min}) {
        &,
        .pulse {
            transform: none;
        }
    }
`

const StyledDataDots = styled.div`
    width: 40%;
    height: 100vw;
    background: ${({ img }) => `url(${img}) repeat-x left`};
    animation: ${({ shouldAnimate }) => (shouldAnimate ? `${slideRight} 3s ease-in-out 0s infinite` : null)};

    @media screen and (${responsive.sm.min}) {
        width: 20%;
        height: 100%;
        animation-name: ${slideRightLarge};
    }
`

const StyledSubTitle = styled(SubTitle)`
    font-size: ${fonts.size.h4};
    text-align: center;
`

const Project = ({ toggleModal, ...props }) => {
    const isProduction = process.env.NODE_ENV === 'production'
    let shouldAnimate
    if (isProduction) {
        shouldAnimate = true
    } else {
        shouldAnimate = process.env.REACT_APP_ANIMATE_PROJECT === 'true'
    }

    const _toggleModal = modal => {
        if (modal === 'consumer' && window.ga) {
            ga('send', 'event', 'click', 'consumer', 'intro_card')
        } else if (modal === 'provider' && window.ga) {
            ga('send', 'event', 'click', 'provider', 'intro_card')
        }
        toggleModal(modal)
    }
    return (
        <Section id="project" {...props}>
            <ContentRow>
                <Title>
                    Ocean Protocol <br />unlocks data
                </Title>

                <StyledData width={1}>
                    <StyledCard onClick={() => _toggleModal('provider')}>
                        <h4>Data Providers</h4>
                        <p>Unlock your data and earn revenue.</p>
                        <button>Publish data</button>
                    </StyledCard>
                    <StyledDataTransfer>
                        <StyledDataDots img={dataDotsLeft} shouldAnimate={shouldAnimate} />
                        <StyledDataDots img={dataDotsRight} shouldAnimate={shouldAnimate} />
                        <Pulse className="pulse" shouldAnimate={shouldAnimate} />
                    </StyledDataTransfer>
                    <StyledCard onClick={() => _toggleModal('consumer')}>
                        <h4>Data Consumers</h4>
                        <p>Discover and buy data.</p>
                        <button>Get data</button>
                    </StyledCard>
                </StyledData>

                <Grid>
                    <Cell width={1 / 2}>
                        <StyledSubTitle>What is Ocean Protocol?</StyledSubTitle>
                        <Paragraph>
                            Ocean Protocol is an ecosystem for sharing data and associated services. It provides a tokenized service layer that exposes data, storage, compute and algorithms for consumption with a set of deterministic proofs on availability and integrity that serve as verifiable service agreements. There is staking on services to signal quality, reputation and ward against Sybil Attacks.
                        </Paragraph>
                        <Paragraph>
                            Ocean helps to unlock data, particularly for AI. It is designed for scale and uses blockchain technology that allows data to be shared and sold in a safe, secure and transparent manner.
                        </Paragraph>
                    </Cell>
                    <Cell width={1 / 2}>
                        <StyledSubTitle>How Ocean Protocol Works</StyledSubTitle>
                        <Paragraph>
                            The Ocean Protocol is an ecosystem composed of data assets and services, where assets are represented by data and algorithms, and services are represented by integration, processing and persistence mechanisms. Ocean Protocol facilitates discovery by storing and promoting metadata, linking assets and services, and provides a licensing framework that has toolsets for pricing.
                        </Paragraph>
                        <Paragraph>
                            A multitude of data marketplaces can hook into Ocean Protocol to provide “last mile” services to connect data providers and consumers. Ocean Protocol is designed so that data owners cannot be locked-in to any single marketplace. The data owner controls each dataset.
                        </Paragraph>
                    </Cell>
                </Grid>
            </ContentRow>

            <Roadmap />
        </Section>
    )
}

Project.propTypes = {
    toggleModal: PropTypes.func.isRequired
}

export default Project
