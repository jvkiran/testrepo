/* global ga */

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
    }

    @media screen and (${responsive.sm.min}) and (${responsive.tablet.max}) {
        min-height: 0;
    }

    &:first-child {
        margin-bottom: 2rem;
    }

    @media screen and (${responsive.sm.max}) {
        margin: 0;
        padding: 2rem !important; /* stylelint-disable-line declaration-no-important */
    }
`

const StyledTitle = styled(Title)`
    margin-top: 0;
    margin-bottom: 2rem;
    font-size: ${fonts.size.h3};
    word-spacing: 100vw; /* make sure every word is on its own line */
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

const StyledDownload = styled(Button)`
    margin-left: auto;
    margin-right: auto;

    span {
        font-size: ${fonts.size.small};
        opacity: .7;
        margin-left: .3rem;
    }
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
`

const Documentation = () => (
    <Section background={colors.black} fontColor={colors.white} id="papers">
        <ContentRow>
            <Title white>Learn how Ocean Protocol works</Title>
        </ContentRow>

        <ContentRow wide>
            <Grid>
                <Cell smallGutter width={1 / 3}>
                    <StyledWhitepaper >
                        <StyledTitle>Technical Whitepaper</StyledTitle>
                        <StyledIntro>
                            This paper presents Ocean Protocol. Ocean is a decentralized protocol and network of artificial intelligence (AI) data/services. It incentivizes for a vast supply of relevant AI data/services.
                        </StyledIntro>
                        <StyledAbstract>
                            The heart of Ocean’s network is a new construction called Proofed Curation Markets (PCMs). PCMs bridge predicted relevance with actual relevance of each AI service, by combining curation markets with cryptographic proofs.
                        </StyledAbstract>
                        <StyledFooter>
                            <a download="Ocean Protocol Technical Whitepaper.pdf" href={`${process.env.PUBLIC_URL}/tech-whitepaper.pdf`}>
                                <StyledDownload
                                    onClick={() => window.ga && ga('send', 'event', 'download', 'tech-whitepaper', 'button')}>
                                    Download <span>pdf</span>
                                </StyledDownload>
                            </a>
                        </StyledFooter>
                    </StyledWhitepaper>
                </Cell>
                <Cell smallGutter width={1 / 3}>
                    <StyledWhitepaper>
                        <StyledTitle>Business Whitepaper</StyledTitle>
                        <StyledIntro>
                            This document presents a summary of the business model and ecosystem of Ocean Protocol. In addition, it describes the logic behind the Ocean utility token and the economics incentives driving the Protocol.
                        </StyledIntro>
                        <StyledAbstract>
                            It is complementary to the technical whitepaper for Ocean Protocol.
                        </StyledAbstract>
                        <StyledFooter>
                            <a download="Ocean Protocol Business Whitepaper.pdf" href={`${process.env.PUBLIC_URL}/business-whitepaper.pdf`}>
                                <StyledDownload
                                    onClick={() => window.ga && ga('send', 'event', 'download', 'business-whitepaper', 'button')}>
                                    Download <span>pdf</span>
                                </StyledDownload>
                            </a>
                        </StyledFooter>
                    </StyledWhitepaper>
                </Cell>
                <Cell smallGutter width={1 / 3}>
                    <StyledWhitepaper>
                        <StyledTitle>Marketplace Framework</StyledTitle>
                        <StyledIntro>
                            This document presents a summary of the core marketplace attributes and components required to facilitate the successful deployment of the decentralized data exchange protocol and network called Ocean Protocol.
                        </StyledIntro>
                        <StyledAbstract>
                            It is complementary to the technical whitepaper for Ocean Protocol.
                        </StyledAbstract>
                        <StyledFooter>
                            <a download="Ocean Protocol Reference Marketplace Framework.pdf" href={`${process.env.PUBLIC_URL}/marketplace-framework.pdf`}>
                                <StyledDownload
                                    onClick={() => window.ga && ga('send', 'event', 'download', 'marketplace-framework', 'button')}>
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
