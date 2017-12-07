import React from 'react'
import styled from 'styled-components'
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
import { responsive } from '../styles'

const StyledGrid = styled(Grid)`
    margin-top: 6rem;
    align-items: center;

    @media screen and (${responsive.sm.min}) {
        margin-top: 10rem;
    }

    p { margin-bottom: 0; }
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
`

const StyledUnavailable = styled.img`
    max-height: 300px;

    @media screen and (${responsive.sm.max}) {
        width: 200% !important; /* stylelint-disable-line declaration-no-important */
        margin: 0;
        margin-left: -50%;
        margin-bottom: 1rem;
    }
`

const StyledThirdGrid = styled(StyledGrid)`
    margin-bottom: 4rem;

    & > div:nth-child(2) {
        padding-left: 0;
    }

    p {
        margin-bottom: 2rem;
    }
`

const Data = () => (
    <Section id="why">
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

            <StyledSecondGrid>
                <Cell center width={1 / 3}>
                    <StyledUnalyzed alt="data unanalyzed" src={dataUnanalyzed} />
                </Cell>
                <Cell maxWidth="narrow" width={2 / 3}>
                    <SubTitle>AI advances six times faster, when data is available</SubTitle>
                    <Paragraph>AI models have limited accuracy and usability without appropriate data. Ocean Protocol will unlock more data for AI. This should lead to more breakthroughs to help society. Ocean Protocol gives the tools to unlock the remaining 99% of untapped data.</Paragraph>
                </Cell>
            </StyledSecondGrid>

            <StyledThirdGrid textCenter wrap="true">
                <Cell maxWidth="narrow" width={1}>
                    <SubTitle center>Only a handful of companies today have both Data and AI</SubTitle>
                    <Paragraph>AI start-ups and researchers are drowning in algorithms, but lack data. The opposite is true for many large corporations. Ocean Protocol is the bridge between these two sides. By bringing together data and AI, Ocean Protocol will unlock a trillion-dollar market for data sharing.</Paragraph>
                </Cell>
                <Cell center width={1}>
                    <StyledUnavailable alt="data unavailable" src={dataUnavailable} />
                </Cell>
            </StyledThirdGrid>
        </ContentRow>
    </Section>
)

export default Data
