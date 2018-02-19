/* global gtag */

import React from 'react'
import styled from 'styled-components'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import Button from '../components/Button'
import Grid from '../components/Grid'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import SubscribeForm from '../components/SubscribeForm'
import { colors, fonts, responsive } from '../styles'
import { social } from '../constants'

const StyledDownload = styled(Button)`
    margin-left: auto;
`

const StyledWhitepaper = styled(Cell)`
    border-radius: .2rem;
    padding: 2rem;
    background: rgb(${colors.white});
    color: rgb(${colors.grey});
    hyphens: auto;
    position: relative;
    flex: 1 0 auto;

    &:before {
        content: '';
        width: 3rem;
        height: 3rem;
        background: rgb(${colors.black});
        position: absolute;
        right: -1.5rem;
        top: -1.5rem;
        transform: rotate(45deg);
    }

    @media screen and (${responsive.sm.min}) {
        min-height: 540px;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    @media screen and (${responsive.sm.min}) and (${responsive.tablet.max}) {
        min-height: 0;
    }

    &:first-child {
        margin-bottom: 2rem;
    }

    ${Title} { /* stylelint-disable-line */
        margin-bottom: 2rem;
    }

    ${StyledDownload} { /* stylelint-disable-line */
        margin-right: auto;

        span {
            font-size: ${fonts.size.small};
            opacity: .7;
            margin-left: .3rem;
        }
    }

    @media screen and (${responsive.sm.max}) {
        margin: 0;
        padding: 2rem !important; /* stylelint-disable-line declaration-no-important */
    }
`

const StyledTitle = styled(Title)`
    margin: 0;
    font-size: ${fonts.size.h3};

    @media screen and (${responsive.sm.max}) {
        font-size: ${fonts.size.h3};
    }
`

const StyledIntro = styled.div`
    margin-bottom: 1rem;
`

const StyledAbstract = styled.div`
    margin-bottom: 2rem;
`

const StyledFooter = styled.div`
    margin-bottom: 0;
    margin-top: auto;
`

const StyledComments = styled.h4`
    color: rgb(${colors.lightGrey});
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 0;
`

const StyledRow = styled.div`
    margin-top: 4rem;
    margin-bottom: 0;

    @media screen and (${responsive.sm.min}) {
        padding-left: 2rem;
        padding-right: 4rem;
    }

    a {
        display: block;
        text-transform: uppercase;
        font-family: ${fonts.family.button};
        margin-top: -.5rem;
    }
`

const Documentation = () => (
    <Section background={colors.black} fontColor={colors.white} id="papers">
        <ContentRow>
            <Title white>Learn how Ocean Protocol works</Title>
        </ContentRow>

        <ContentRow wide>
            <Grid>
                <Cell center width={1 / 3}>
                    <StyledWhitepaper>
                        <StyledTitle>Business Whitepaper</StyledTitle>
                        <StyledIntro>
                            This document presents a summary of the business model and ecosystem of Ocean Protocol. In addition, it describes the logic behind the Ocean utility token and the economics incentives driving the Protocol.
                        </StyledIntro>
                        <StyledAbstract>
                            It is complementary to the technical primer for Ocean Protocol.
                        </StyledAbstract>
                        <StyledFooter>
                            <a download="Ocean Protocol Business Whitepaper.pdf" href={`${process.env.PUBLIC_URL}/business-whitepaper.pdf`}>
                                <StyledDownload onClick={() => gtag('event', 'business-whitepaper', { 'event_category': 'download', 'event_label': 'button' })}>
                                    Download <span>pdf</span>
                                </StyledDownload>
                            </a>
                        </StyledFooter>
                    </StyledWhitepaper>
                </Cell>
                <Cell center width={1 / 3}>
                    <StyledWhitepaper >
                        <StyledTitle>Technical Primer</StyledTitle>
                        <StyledIntro>
                This technical primer presents a short introduction to Ocean Protocol.
                        </StyledIntro>
                        <StyledAbstract>
                Ocean is a protocol and network that incentivizes to provide a vast supply of high-quality data, for use in training artificial intelligence (AI) models. Ocean incentivizes not only high-quality  priced  data but also high-quality public or commons  data. In turn, this helps to power data marketplaces.
                        </StyledAbstract>
                        <StyledFooter>
                            <a download="Ocean Protocol Technical Primer.pdf" href={`${process.env.PUBLIC_URL}/techprimer.pdf`}>
                                <StyledDownload onClick={() => gtag('event', 'techprimer', { 'event_category': 'download', 'event_label': 'button' })}>
                    Download <span>pdf</span>
                                </StyledDownload>
                            </a>
                        </StyledFooter>
                    </StyledWhitepaper>
                </Cell>
                <Cell center width={1 / 3}>
                    <StyledWhitepaper>
                        <StyledTitle>Marketplace Framework</StyledTitle>
                        <StyledIntro>
                This document presents a summary of the core marketplace attributes and components required to facilitate the successful deployment of the decentralized data exchange protocol and network called Ocean Protocol.
                        </StyledIntro>
                        <StyledAbstract>
                It is complementary to the technical primer for Ocean Protocol.
                        </StyledAbstract>
                        <StyledFooter>
                            <a download="Ocean Protocol Reference Marketplace Framework.pdf" href={`${process.env.PUBLIC_URL}/marketplace-framework.pdf`}>
                                <StyledDownload onClick={() => gtag('event', 'marketplace-framework', { 'event_category': 'download', 'event_label': 'button' })}>
                    Download <span>pdf</span>
                                </StyledDownload>
                            </a>
                        </StyledFooter>
                    </StyledWhitepaper>
                </Cell>
            </Grid>
        </ContentRow>

        <ContentRow>
            <StyledComments>
                Have a comment or suggestions about any of our documents? <br />
                Let us know <a href={social.twitter}>@oceanprotocol</a>
            </StyledComments>
        </ContentRow>

        <ContentRow>
            <Grid>
                <Cell width={1 / 2}>
                    <StyledRow>
                        <SubTitle white>Mission Statement</SubTitle>
                        <StyledAbstract>
                Society is becoming increasingly reliant on data, especially with the advent of AI. However, a small handful of organizations with both massive data assets and AI capabilities have become powerful with control that is a danger to a free and open society.<br /><br />

                Ocean Protocol aims to unlock data, for more equitable outcomes for users of data, using a thoughtful application of both technology and governance.
                        </StyledAbstract>
                    </StyledRow>
                </Cell>
                <Cell width={1 / 2}>
                    <StyledRow>
                        <SubTitle white>Subscribe to updates</SubTitle>
                        <StyledAbstract>
                Be the first to know when we release new papers.
                        </StyledAbstract>
                        <SubscribeForm />
                    </StyledRow>
                </Cell>
            </Grid>
        </ContentRow>
    </Section>
)

export default Documentation
