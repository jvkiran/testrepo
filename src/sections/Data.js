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
        line-height: ${fonts.lineHeight.title};
        font-size: ${fonts.size.large};
        padding-bottom: 1.5rem;
        text-align: center;

        @media screen and (${responsive.sm.min}) {
            text-align: left;
        }

        &:hover,
        &:focus {
            color: rgb(${colors.pink});
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

    @media screen and (${responsive.sm.min}) {
        margin-top: 10rem;
    }
`

const StyledFirstGrid = styled(StyledGrid)`
    text-align: center;

    @media screen and (${responsive.sm.min}) {
        text-align: left;

        > div:first-child {
            order: 2;
        }
    }
`

const StyledLocked = styled.img`
    padding: 0 2rem;
    margin: 0 auto;
    max-width: 300px;
    max-height: 220px;
    height: auto;

    @media screen and (${responsive.sm.min}) {
        padding: 0;
        margin: 0;
        margin-top: 2rem;
        width: 100%;
        height: 100%;
        transform: scale(1.2);
    }
`

const StyledSecondGrid = styled(StyledGrid)`
    text-align: center;

    @media screen and (${responsive.sm.min}) {
        text-align: left;
    }
`

const StyledUnalyzed = styled.img`
    width: auto;
    height: 100%;
    max-height: 220px;
    margin: 0 auto;
    padding: 0 4rem;

    @media screen and (${responsive.sm.min}) {
        padding: 0;
        margin: 0;
        max-height: 260px;
        transform: scale(1.5);
    }
`

const StyledThirdGrid = styled(StyledGrid)`
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 34rem;

    .Collapsible {
        .Collapsible__contentInner {
            text-align: left;
        }

        .Collapsible__trigger {
            text-align: center;
        }
    }
`

const StyledUnavailable = styled.img`
        margin-bottom: 2rem;
        margin-left: -5rem;
        margin-right: -5rem;
        max-width: none;
`

const StyledContentRow = styled(ContentRow)`
    max-width: 50rem;
`

const Data = () => (
    <StyledSection id="why">
        <ContentRow narrow>
            <Title>In 2016, the world produced 16 ZB of data,
            but only 1% was analyzed &mdash; this needs to change.
            </Title>
        </ContentRow>

        <StyledContentRow>
            <StyledFirstGrid left wrap>
                <Cell width={1 / 3}>
                    <StyledLocked alt="data locked" src={dataLocked} />
                </Cell>
                <Cell width={2 / 3}>
                    <SubTitle>A lack of trust prevents data sharing</SubTitle>
                    <Paragraph>
            Centralized data exchanges fail because they lack fair and flexible pricing mechanisms, data providers lose control over their assets, and there is a lack of transparency in how the data is used. So data remains locked up due to a lack of trust.
                    </Paragraph>

                    <Collapsible easing="ease-out" transitionTime={200} trigger="Use case: autonomous vehicles">
                        <p>A leading use case for proprietary data is autonomous (self-driving) vehicles. The RAND Corporation calculated that 500 billion to 1 trillion miles driven are needed to get AI models accurate enough for production deployment of self-driving cars.</p>
                        <p>Our collaborators at <a href="http://www.tri.global">Toyota Research Institute (TRI)</a> saw that it would be prohibitively expensive for each automaker to generate that much data on its own. The answer would be to pool data via marketplaces.</p>
                        <p>Then the challenge is, a single data marketplace may itself be centralized: we arrive at another data silo. We need a substrate that enables many data marketplaces to emerge. This is the goal of Ocean Protocol. Critical new benefits emerge: higher liquidity for each marketplace, and organizations are directly incentivized to pool data rather than silo it.</p>
                    </Collapsible>
                </Cell>
            </StyledFirstGrid>

            <StyledSecondGrid>
                <Cell center width={1 / 3}>
                    <StyledUnalyzed alt="data unanalyzed" src={dataUnanalyzed} />
                </Cell>
                <Cell width={2 / 3}>
                    <SubTitle>AI advances six times faster, when data is available</SubTitle>
                    <Paragraph>
                        AI models have limited accuracy and usability without appropriate data. Ocean Protocol will unlock more data for AI. This should lead to more breakthroughs to help society. Ocean Protocol gives the tools to unlock the remaining 99% of untapped data.
                    </Paragraph>

                    <Collapsible easing="ease-out" transitionTime={200} trigger="Use case: medical data">
                        <p>We are working with <a href="https://connectedlife.io">ConnectedLife</a>, a diagnostics and wearables company, who are working with hospitals in Munich, Singapore, and Australia on a Parkinson’s research study. The goal is to build models based on patient data spanning these hospitals.</p>
                        <p>A data marketplace makes it easier to connect the data suppliers; and it must be decentralized to avoid the siloing issue. The extra challenge here is data protection: German data protection laws prevent the Munich Hospital from transferring the raw data out of Germany.</p>
                    </Collapsible>
                </Cell>
            </StyledSecondGrid>

        </StyledContentRow>

        <ContentRow narrow>
            <StyledThirdGrid textCenter wrap="true">
                <Cell center width={1}>
                    <SubTitle center>Only a handful of companies today have both Data and AI</SubTitle>
                </Cell>

                <Cell center width={1}>
                    <StyledUnavailable alt="data unavailable" src={dataUnavailable} />
                </Cell>

                <Cell width={1}>
                    <Paragraph>
                        AI start-ups and researchers are drowning in algorithms, but lack data. The opposite is true for many large corporations. Ocean Protocol is the bridge between these two sides. By bringing together data and AI, Ocean Protocol will unlock a trillion-dollar market for data sharing.
                    </Paragraph>

                    <Collapsible easing="ease-out" transitionTime={200} trigger="Use case: computer vision">
                        <p>Our vision is to grow a massive set of data assets, all free for the planet to use. We’ve seen glimpses of the power of this.</p>
                        <p><a href="http://www.image-net.org">ImageNet</a> is an open dataset with over 10 million tagged images—much larger than previous open image datasets. It has allowed AI researchers to train image classifiers with radically less error than before, for dozens of computer vision applications. Providing Data Commons on Ocean Protocol would benefit the whole world, providing accessible data to anyone.</p>
                    </Collapsible>
                </Cell>
            </StyledThirdGrid>
        </ContentRow>
    </StyledSection>
)

export default Data
