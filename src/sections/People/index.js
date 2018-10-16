import React from 'react'
import PropTypes from 'prop-types'
import Section from '../../components/Section'
import ContentRow from '../../components/ContentRow'
import Team from './Team'
import Advisors from './Advisors'
import Ambassadors from './Ambassadors'

import { colors } from '../../styles'
import {
    StyledTitle,
    StyledParagraph,
    Line
} from './index.css'

const People = ({ toggleModal }) => (
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
            <Team />
        </ContentRow>

        <ContentRow>
            <Line />
            <Advisors />
        </ContentRow>

        <ContentRow>
            <Line />
            <Ambassadors toggleModal={toggleModal} />
        </ContentRow>
    </Section>
)

People.propTypes = {
    toggleModal: PropTypes.func.isRequired
}

export default People
