import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ReactComponent as OceanLogo } from '@oceanprotocol/art/logo/logo-white.svg'
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
            <StyledLogo to="/">
                <OceanLogo />
            </StyledLogo>
            <StyledNav>
                <StyledMenuItem to="/">← Back to homepage</StyledMenuItem>
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
