import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import fadeIn from 'react-animations/lib/fade-in'
import { colors, fonts, transitions } from '../styles'

export const StyledHeader = styled.header`
    background-color: ${({ background }) => `rgb(${background})`};
    transition: transform 0.3s ease-in-out;
    transform: none;
    padding: 0.75rem 1rem;
`

export const StyledContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledLogo = styled(Link)`
    height: 60px;
    z-index: 10;
    margin-left: 20px;

    & svg {
        width: auto;
        height: 100%;
    }
`

export const StyledMenuItem = styled(Link)`
    transition: ${transitions.base};
    color: rgba(${colors.white}, 0.7);
    font-family: ${fonts.family.button};
`

const animation = keyframes`
    ${fadeIn}
`

export const StyledNav = styled.nav`
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
            color: rgba(
                ${colors.white},
                1
            ); /* stylelint-disable-line selector-no-qualifying-type */
        }
    }
`
