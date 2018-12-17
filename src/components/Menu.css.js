import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { colors, fonts, transitions, layout } from '../styles'

export const StyledMenu = styled.nav`
    background-color: ${({ noabsolute }) =>
        noabsolute ? `rgb(${colors.black})` : 'transparent'};
    padding: 1rem;
    z-index: 5;
    position: ${({ noabsolute }) => (noabsolute ? 'static' : 'absolute')};
    width: 100%;
    margin-bottom: ${layout.pageFrame};
`

export const StyledSubMenu = styled.div`
    position: absolute;
    text-align: left;
    padding: 1rem;
    top: 3rem;
    right: 1.8rem;
    display: none;
    z-index: 10;
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
    margin-left: 1rem;

    & svg {
        width: auto;
        height: 100%;
    }
`

export const StyledMenuItem = styled(NavLink)`
    display: inline-block;
    margin-right: 2rem;

    &:hover,
    &:focus,
    &.active {
        transform: none;
    }

    svg {
        width: 0.7rem;
        height: 0.7rem;
        margin-left: 0.3rem;
        transition: 0.2s ease-out;
    }
`

export const StyledSubMenuItem = styled(StyledMenuItem)`
    display: block;
    white-space: nowrap;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    margin-right: 0;
    text-align: right;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
    }
`

export const StyledNav = styled.ul`
    text-transform: uppercase;
    text-align: right;
    padding: 0;
    list-style: none;

    li {
        display: inline;
        transition: ${transitions.base};
        font-family: ${fonts.family.button};
        position: relative;
        padding-top: 1rem;
        padding-bottom: 1rem;

        &:hover,
        &:focus,
        &.active {
            ${StyledSubMenu} {
                display: block;
            }

            svg {
                transform: rotate(180deg);
            }
        }
    }

    ${StyledMenuItem} {
        color: ${({ light }) =>
            light
                ? `rgba(${colors.black}, 0.7)`
                : `rgba(${colors.white}, 0.7)`};

        &:hover,
        &:focus,
        &.active {
            color: ${({ light }) =>
                light
                    ? `rgba(${colors.black}, 1)`
                    : `rgba(${colors.white}, 1)`};
        }

        svg {
            fill: ${({ light }) =>
                light
                    ? `rgba(${colors.black}, 0.7)`
                    : `rgba(${colors.white}, 0.7)`};
        }
    }

    ${StyledSubMenu} {
        background: ${({ light }) =>
            light ? `rgb(${colors.white})` : `rgb(${colors.black})`};
    }
`
