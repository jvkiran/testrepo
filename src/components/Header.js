import React from 'react'
import PropTypes from 'prop-types'
import oceanLogo from '@oceanprotocol/art/logo/logo-white.svg'
import { colors } from '../styles'
import {
    StyledHeader,
    StyledContainer,
    StyledLogo,
    StyledMenuItem,
    StyledNav
} from './Header.css'

const Header = ({ background }) => (
    <StyledHeader background={background}>
        <StyledContainer>
            <StyledLogo>
                <a href="/">
                    <img alt="Ocean" src={oceanLogo} />
                </a>
            </StyledLogo>
            <StyledNav>
                <StyledMenuItem href="/">← Back to homepage</StyledMenuItem>
            </StyledNav>
        </StyledContainer>
    </StyledHeader>
)

Header.propTypes = {
    background: PropTypes.string
}

Header.defaultProps = {
    background: colors.black
}

export default Header
