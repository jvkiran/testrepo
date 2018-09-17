import React from 'react'
import PropTypes from 'prop-types'
import Section from '../../components/Section'
import SubTitle from '../../components/SubTitle'
import ContentRow from '../../components/ContentRow'

import Cell from '../../components/Cell'
import Team from './Team'
import Advisors from './Advisors'
import bigchainDBLogo from '../../assets/logos/bigchain-db.svg'
import dexLogo from '../../assets/logos/dex.svg'
import { colors } from '../../styles'
import {
    StyledTitle,
    StyledParagraph,
    Companies,
    CompanyLogo,
    Actions,
    StyledButton,
    Line,
    SubHeader
} from './People.css'

const People = ({ toggleModal }) => (
    <Section background={colors.black} fontColor={colors.white} id="people">
        <ContentRow>
            <StyledTitle white>The People Building Ocean Protocol</StyledTitle>
        </ContentRow>

        <ContentRow narrow>
            <StyledParagraph center className="intro">
                We need a fresh new intro text here talking about both person groups, core team and advisors, with real-world business experience as entrepreneurs, designers and technologists who have started over 20 companies.
            </StyledParagraph>
        </ContentRow>

        <ContentRow>
            <Line />

            <SubHeader>
                <Cell width={1 / 4}>
                    <SubTitle white id="team">Core team</SubTitle>
                </Cell>
                <Cell width={3 / 4}>
                    <StyledParagraph>
                        The Ocean Protocol core team combines a deep background in big data, blockchain, artificial intelligence and data exchanges, with real-world business experience as entrepreneurs, designers and technologists who have started over 20 companies.
                    </StyledParagraph>
                </Cell>
            </SubHeader>

            <Team />
        </ContentRow>

        <ContentRow narrow>
            <Companies>
                <CompanyLogo
                    href="https://www.bigchaindb.com/?utm_source=oceanprotocol&utm_medium=logo"
                    rel="noopener"
                    target="_blank">
                    <img alt="BigchainDB" src={bigchainDBLogo} />
                </CompanyLogo>
                <CompanyLogo
                    href="https://www.dex.sg/?utm_source=oceanprotocol&utm_medium=logo"
                    rel="noopener"
                    target="_blank">
                    <img alt="Dex" src={dexLogo} />
                </CompanyLogo>
            </Companies>
        </ContentRow>

        <ContentRow>
            <Line />

            <SubHeader>
                <Cell width={1 / 4}>
                    <SubTitle white id="advisors">Advisors</SubTitle>
                </Cell>
                <Cell width={3 / 4}>
                    <StyledParagraph>
                        The Ocean Protocol advisors...
                    </StyledParagraph>
                </Cell>
            </SubHeader>
            <Advisors />
        </ContentRow>

        <ContentRow>
            <Line />

            <Actions>
                <StyledButton onClick={() => toggleModal('contributor')}>Join as a contributor</StyledButton>
            </Actions>
        </ContentRow>
    </Section>
)

People.propTypes = {
    toggleModal: PropTypes.func.isRequired
}

export default People
