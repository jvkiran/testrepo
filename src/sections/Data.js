import React from 'react'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'
import Section from '../components/Section'
import Grid from '../components/Grid'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import Paragraph from '../components/Paragraph'
import dataUnanalyzed from '../assets/graphics/data-unanalyzed.svg'
import dataLocked from '../assets/graphics/data-locked.svg'
import dataUnavailable from '../assets/graphics/data-unavailable.svg'
import { responsive, colors, transitions, fonts } from '../styles'

const StyledSection = styled(Section)`
    p:last-child {
        margin-bottom: 0;
    }

    .Collapsible {
        margin: 1rem auto 0 auto;
        max-width: 87.5%;
    }

    .Collapsible__contentInner {
        border-top: 1px solid rgba(${colors.lightGrey}, .4);
        padding-top: 1.5rem;
    }

    .Collapsible__trigger {
        cursor: pointer;
        transition: ${transitions.base};
        display: block;
        font-family: ${fonts.family.title};
        font-weight: ${fonts.fontWeight.title};
        font-size: ${fonts.size.large};
        padding-bottom: 1.5rem;

        @media screen and (${responsive.sm.max}) {
            text-align: center;
        }

        &:hover,
        &:focus {
            text-decoration: none;
            color: rgb(${colors.pink});
        }

        &:active {
            text-decoration: none;
        }

        &:before {
            content: '+';
            font-size: 2.25rem;
            line-height: 0;
            vertical-align: middle;
            margin-right: .5rem;
            color: rgb(${colors.pink});
            font-weight: ${fonts.fontWeight.base};
            font-family: ${fonts.family.base};
            position: relative;
        }

        &.is-open:before {
            content: '-';
            top: -.25rem;
        }
    }
`

const StyledGrid = styled(Grid)`
    margin-top: 6rem;
    align-items: center;

    @media screen and (${responsive.sm.min}) {
        margin-top: 10rem;
    }
`

const StyledUnalyzed = styled.img`
    width: auto;
    height: 100%;
    max-height: 300px;
    transform: scale(1.3);
    padding: 0 4rem;

    @media screen and (${responsive.sm.min}) {
        max-width: 300px;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }

    @media screen and (${responsive.sm.max}) {
        max-height: 80vw;
    }

    @media screen and (${responsive.smHeight.max}) {
        padding: 0 2rem;
    }
`

const StyledFirstGrid = styled(StyledGrid)`
    margin-top: 6rem;

    @media screen and (${responsive.sm.max}) {
        text-align: center;
    }
`

const StyledLocked = styled.img`
    max-height: 224px;

    @media screen and (${responsive.sm.min}) {
        max-width: 300px;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }

    @media screen and (${responsive.sm.max}) {
        padding: 0 2rem;
        max-height: 40vw;
    }
`

const StyledSecondGrid = styled(StyledGrid)`
    align-items: center;

    @media screen and (${responsive.sm.max}) {
        text-align: center;
    }

    + .Collapsible {
        .Collapsible__trigger {
            @media screen and (${responsive.sm.min}) {
                margin-left: 52%;
                text-align: left;
            }
        }
    }
`

const StyledUnavailable = styled.img`
    max-height: 300px;

    @media screen and (${responsive.sm.max}) {
        width: 200% !important; /* stylelint-disable-line declaration-no-important */
        margin: 0;
        margin-bottom: 1rem;
    }
`

const StyledThirdGrid = styled(StyledGrid)`
    margin-bottom: 2rem;

    & > div:nth-child(2) {
        padding-left: 0;
    }

    img {
        margin-top: 2rem;
    }

    + .Collapsible {
        margin-top: 0;

        .Collapsible__trigger {
            text-align: center;
        }
    }
`

const Data = () => (
    <StyledSection id="why">
        <ContentRow>
            <Cell maxWidth="small" width={1}>
                <Title>In 2016, the world produced 16 ZB of data,
                but only 1% was analyzed &mdash; this needs to change.
                </Title>
            </Cell>

            <StyledFirstGrid left>
                <Cell center width={1 / 3}>
                    <StyledLocked alt="data locked" src={dataLocked} />
                </Cell>
                <Cell maxWidth="narrow" width={2 / 3}>
                    <SubTitle>A lack of trust prevents data sharing</SubTitle>
                    <Paragraph>
            Centralized data exchanges fail because they lack fair and flexible pricing mechanisms, data providers lose control over their assets, and there is a lack of transparency in how the data is used. So data remains locked up due to a lack of trust.
                    </Paragraph>
                </Cell>
            </StyledFirstGrid>

            <Collapsible easing="ease-out" transitionTime={200} trigger="Use case: autonomous vehicles">
                <p>A leading use case for proprietary data is autonomous (self-driving) vehicles. The RAND Corporation calculated that 500 billion to 1 trillion miles driven are needed to get AI models accurate enough for production deployment of self-driving cars.</p>
                <p>Our collaborators at <a href="http://www.tri.global">Toyota Research Institute (TRI)</a> saw that it would be prohibitively expensive for each automaker to generate that much data on its own. The answer would be to pool data via marketplaces.</p>
                <p>Then the challenge is, a single data marketplace may itself be centralized: we arrive at another data silo. We need a substrate that enables many data marketplaces to emerge. This is the goal of Ocean Protocol. Critical new benefits emerge: higher liquidity for each marketplace, and organizations are directly incentivized to pool data rather than silo it.</p>
            </Collapsible>

            <StyledSecondGrid>
                <Cell center width={1 / 3}>
                    <StyledUnalyzed alt="data unanalyzed" src={dataUnanalyzed} />
                </Cell>
                <Cell maxWidth="narrow" width={2 / 3}>
                    <SubTitle>AI advances six times faster, when data is available</SubTitle>
                    <Paragraph>AI models have limited accuracy and usability without appropriate data. Ocean Protocol will unlock more data for AI. This should lead to more breakthroughs to help society. Ocean Protocol gives the tools to unlock the remaining 99% of untapped data.</Paragraph>
                </Cell>
            </StyledSecondGrid>

            <Collapsible easing="ease-out" transitionTime={200} trigger="Use case: medical data">
                <p>We are working with <a href="https://connectedlife.io">ConnectedLife</a>, a diagnostics and wearables company, who are working with hospitals in Munich, Singapore, and Australia on a Parkinson’s research study. The goal is to build models based on patient data spanning these hospitals.</p>
                <p>A data marketplace makes it easier to connect the data suppliers; and it must be decentralized to avoid the siloing issue. The extra challenge here is data protection: German data protection laws prevent the Munich Hospital from transferring the raw data out of Germany.</p>
            </Collapsible>

            <StyledThirdGrid textCenter wrap="true">
                <Cell maxWidth="narrow" width={1}>
                    <SubTitle center>Only a handful of companies today have both Data and AI</SubTitle>
                    <Paragraph>AI start-ups and researchers are drowning in algorithms, but lack data. The opposite is true for many large corporations. Ocean Protocol is the bridge between these two sides. By bringing together data and AI, Ocean Protocol will unlock a trillion-dollar market for data sharing.</Paragraph>
                </Cell>
                <Cell center width={1}>
                    <StyledUnavailable alt="data unavailable" src={dataUnavailable} />
                </Cell>
            </StyledThirdGrid>

            <Collapsible easing="ease-out" transitionTime={200} trigger="Use case: image processing">
                <p>Our vision is to grow a massive set of data assets, all free for the planet to use. We’ve seen glimpses of the power of this.</p>
                <p><a href="http://www.image-net.org">ImageNet</a> is an open dataset with over 10 million tagged images–much larger than previous open image datasets. It has allowed AI researchers to train image classifiers with radically less error than before, for dozens of computer vision applications. Providing Data Commons on Ocean Protocol would benefit the whole world, providing accessible data to anyone.</p>
            </Collapsible>
        </ContentRow>
    </StyledSection>
)

export default Data
