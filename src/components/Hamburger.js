import React from 'react'
import PropTypes from 'prop-types'
import {
    StyledHamburger,
    StyledHamburgerBox,
    StyledHamburgerInner
} from './Hamburger.css'

const Hamburger = ({ active, ...props }) => (
    <StyledHamburger aria-label="Open menu" {...props}>
        <StyledHamburgerBox>
            <StyledHamburgerInner active={active} />
        </StyledHamburgerBox>
    </StyledHamburger>
)

Hamburger.propTypes = {
    active: PropTypes.bool.isRequired
}

export default Hamburger
