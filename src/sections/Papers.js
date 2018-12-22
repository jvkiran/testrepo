/* global ga */

import React from 'react'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import SubTitle from '../components/SubTitle'
import Grid from '../components/Grid'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import FormNewsletter from '../components/FormNewsletter'
import { colors } from '../styles'
import { social } from '../constants'
import {
    StyledWhitepaper,
    StyledTitle,
    StyledIntro,
    StyledAbstract,
    StyledFooter,
    StyledDownload,
    StyledComments,
    StyledRow,
    FileType
} from './Papers.css'

const Documentation = () => (
    <Section background={colors.black} fontColor={colors.white} id="papers">
        <SectionHeader title={'Learn how Ocean Protocol works'} white />

        <ContentRow wide>
            <Grid>
                <Cell smallGutter width={1 / 3}>
                    <StyledWhitepaper>
                        <StyledTitle>Technical Whitepaper</StyledTitle>
                        <StyledIntro>
                            This paper presents Ocean Protocol. Ocean is a
                            decentralized protocol and network of artificial
                            intelligence (AI) data/services. It incentivizes for
                            a vast supply of relevant AI data/services.
                        </StyledIntro>
                        <StyledAbstract>
                            The heart of Ocean’s network is a new construction
                            called Proofed Curation Markets (PCMs). PCMs bridge
                            predicted relevance with actual relevance of each AI
                            service, by combining curation markets with
                            cryptographic proofs.
                        </StyledAbstract>
                        <StyledFooter>
                            <a
                                download="Ocean Protocol Technical Whitepaper.pdf"
                                href={`${
                                    process.env.PUBLIC_URL
                                }/tech-whitepaper.pdf`}
                            >
                                <StyledDownload
                                    onClick={() =>
                                        window.ga &&
                                        ga(
                                            'send',
                                            'event',
                                            'download',
                                            'tech-whitepaper',
                                            'button'
                                        )
                                    }
                                >
                                    Download <FileType>pdf</FileType>
                                </StyledDownload>
                            </a>
                        </StyledFooter>
                    </StyledWhitepaper>
                </Cell>
                <Cell smallGutter width={1 / 3}>
                    <StyledWhitepaper>
                        <StyledTitle>Business Whitepaper</StyledTitle>
                        <StyledIntro>
                            This document presents a summary of the business
                            model and ecosystem of Ocean Protocol. In addition,
                            it describes the logic behind the Ocean utility
                            token and the economics incentives driving the
                            Protocol.
                        </StyledIntro>
                        <StyledAbstract>
                            It is complementary to the technical whitepaper for
                            Ocean Protocol.
                        </StyledAbstract>
                        <StyledFooter>
                            <a
                                download="Ocean Protocol Business Whitepaper.pdf"
                                href={`${
                                    process.env.PUBLIC_URL
                                }/business-whitepaper.pdf`}
                            >
                                <StyledDownload
                                    onClick={() =>
                                        window.ga &&
                                        ga(
                                            'send',
                                            'event',
                                            'download',
                                            'business-whitepaper',
                                            'button'
                                        )
                                    }
                                >
                                    Download <FileType>pdf</FileType>
                                </StyledDownload>
                            </a>
                        </StyledFooter>
                    </StyledWhitepaper>
                </Cell>
                <Cell smallGutter width={1 / 3}>
                    <StyledWhitepaper>
                        <StyledTitle>Marketplace Framework</StyledTitle>
                        <StyledIntro>
                            This document presents a summary of the core
                            marketplace attributes and components required to
                            facilitate the successful deployment of the
                            decentralized data exchange protocol and network
                            called Ocean Protocol.
                        </StyledIntro>
                        <StyledAbstract>
                            It is complementary to the technical whitepaper for
                            Ocean Protocol.
                        </StyledAbstract>
                        <StyledFooter>
                            <a
                                download="Ocean Protocol Reference Marketplace Framework.pdf"
                                href={`${
                                    process.env.PUBLIC_URL
                                }/marketplace-framework.pdf`}
                            >
                                <StyledDownload
                                    onClick={() =>
                                        window.ga &&
                                        ga(
                                            'send',
                                            'event',
                                            'download',
                                            'marketplace-framework',
                                            'button'
                                        )
                                    }
                                >
                                    Download <FileType>pdf</FileType>
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
                Let us know <a href={social.twitter}>@oceanprotocol</a>.
            </StyledComments>
        </ContentRow>

        <ContentRow>
            <Grid>
                <Cell width={1 / 2}>
                    <StyledRow>
                        <SubTitle left white>
                            Mission Statement
                        </SubTitle>
                        <StyledAbstract>
                            Society is becoming increasingly reliant on data,
                            especially with the advent of AI. However, a small
                            handful of organizations with both massive data
                            assets and AI capabilities have become powerful with
                            control that is a danger to a free and open society.
                            <br />
                            <br />
                            Ocean Protocol aims to unlock data, for more
                            equitable outcomes for users of data, using a
                            thoughtful application of both technology and
                            governance.
                        </StyledAbstract>
                    </StyledRow>
                </Cell>
                <Cell width={1 / 2}>
                    <StyledRow>
                        <SubTitle left white>
                            Subscribe to updates
                        </SubTitle>
                        <StyledAbstract>
                            Be the first to know when we release new papers.
                        </StyledAbstract>
                        <FormNewsletter />
                    </StyledRow>
                </Cell>
            </Grid>
        </ContentRow>
    </Section>
)

export default Documentation
