import React from 'react'
import PropTypes from 'prop-types'
import Paragraph from '../components/Paragraph'
import ContentRow from '../components/ContentRow'
import { StyledHeader, StyledTitle, StyledSubTitle } from './Header.css'

const Header = ({ background, title, description, text }) => (
    <StyledHeader background={background}>
        <ContentRow narrow>
            <StyledTitle white>{title}</StyledTitle>
            <StyledSubTitle center>{description}</StyledSubTitle>
            {text && (
                <Paragraph center dangerouslySetInnerHTML={{ __html: text }} />
            )}
        </ContentRow>
    </StyledHeader>
)

Header.propTypes = {
    background: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default Header
