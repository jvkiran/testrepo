import React from 'react'
import Section from '../../components/Section'
import ContentRow from '../../components/ContentRow'
import Cell from '../../components/Cell'
import Team from './Team'
import Advisors from './Advisors'
import { colors } from '../../styles'
import {
    StyledTitle,
    StyledSubTitle,
    StyledParagraph,
    Line,
    SubHeader
} from './People.css'

const People = () => (
    <Section background={colors.black} fontColor={colors.white} id="people">
        <ContentRow>
            <StyledTitle white>The People Building Ocean Protocol</StyledTitle>
        </ContentRow>

        <ContentRow narrow>
            <StyledParagraph center className="intro">
                Ocean Protocol is being built by a diverse ecosystem of contributors who share a common vision of unlocking data for AI. Our core team and advisors have converged from many different countries, industries, and backgrounds to collaborate on kickstarting a New Data Economy.
            </StyledParagraph>
        </ContentRow>

        <ContentRow>
            <Line />

            <SubHeader>
                <Cell width={1 / 4}>
                    <StyledSubTitle white id="team">Core team</StyledSubTitle>
                </Cell>
                <Cell width={3 / 4}>
                    <StyledParagraph>
                        The Ocean Protocol core team combines a deep background in big data, blockchain, artificial intelligence and data exchanges, with real-world business experience as entrepreneurs, designers and technologists who have started over 20 companies.
                    </StyledParagraph>
                </Cell>
            </SubHeader>

            <Team />
        </ContentRow>

        <ContentRow>
            <Line />

            <SubHeader>
                <Cell width={1 / 4}>
                    <StyledSubTitle white id="advisors">Advisors</StyledSubTitle>
                </Cell>
                <Cell width={3 / 4}>
                    <StyledParagraph>
                        Our advisors are a group of truly world-class and talented thinkers and doers who are bringing their capabilities and expertise to help launch a Data Economy around Ocean. All the advisors are leaders in their space and their experience spans the range of industries that need to grapple with the disruptive power of data, AI and blockchain.
                    </StyledParagraph>
                </Cell>
            </SubHeader>
            <Advisors />
        </ContentRow>
    </Section>
)

export default People
