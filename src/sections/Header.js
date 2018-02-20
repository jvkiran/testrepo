import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import oceanLogo from '../assets/logos/ocean-logo.svg'
import { colors, fonts, transitions } from '../styles'

const StyledHeader = styled.header`
    background: rgb(${colors.black});
    transition: transform .3s ease-in-out;
    transform: none;
    padding: .75rem 1rem;
`

const StyledContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLogo = styled.div`
    height: 60px;
    z-index: 10;
    margin-left: 20px;

    & img {
        height: 100%;
    }
`

const StyledMenuItem = styled.a`
    transition: ${transitions.base};
    color: rgba(${colors.white}, .7);
    font-family: ${fonts.family.button};
`

const animation = keyframes`
    ${fadeIn}
`

const StyledNav = styled.nav`
    text-transform: uppercase;
    text-align: right;
    color: rgb(${colors.white});
    animation: 1s ${animation} 1.2s backwards;

    & a {
        display: inline-block;
        margin-right: 2rem;

        &:hover,
        &:focus,
        &.active {
            color: rgba(${colors.white}, 1); /* stylelint-disable-line selector-no-qualifying-type */
        }
    }
`

const Header = () => (
    <StyledHeader>
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

export default Header