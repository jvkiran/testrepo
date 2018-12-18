import React from 'react'
import PropTypes from 'prop-types'
import ContentRow from '../components/ContentRow'
import {
    StyledHeader,
    StyledTitle,
    StyledParagraph,
    Line
} from './SectionHeader.css'

const SectionHeader = ({ title, description, white, line }) => (
    <StyledHeader>
        <ContentRow>
            <StyledTitle white={white}>{title}</StyledTitle>
        </ContentRow>

        {description && (
            <ContentRow narrow>
                <StyledParagraph center white={white}>
                    {description}
                </StyledParagraph>
            </ContentRow>
        )}

        {line && (
            <ContentRow>
                <Line />
            </ContentRow>
        )}
    </StyledHeader>
)

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    white: PropTypes.bool,
    line: PropTypes.bool
}

export default SectionHeader
