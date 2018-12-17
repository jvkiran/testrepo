import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors, fonts, transitions } from '../styles'

export const StyledMenu = styled.nav`
    background-color: ${({ background }) =>
        background ? `rgb(${background})` : `rgb(${colors.black})`};
    padding: 1.5rem 1rem;
    z-index: 5;
    position: absolute;
    width: 100%;
`

export const StyledSubMenu = styled.div`
    background: rgb(${colors.black});
    position: absolute;
    text-align: left;
    padding: 1rem;
    top: 2.5rem;
    left: -1rem;
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

export const StyledLogo = styled(NavLink)`
    height: 60px;
    z-index: 10;
    margin-left: 1rem;

    & svg {
        width: auto;
        height: 100%;
    }
`

export const StyledMenuItem = styled(NavLink)`
    &:hover,
    &:focus {
        transform: none;

        svg {
            transform: rotate(180deg);
        }
    }

    svg {
        fill: rgba(${colors.white}, 0.7);
        width: 0.7rem;
        height: 0.7rem;
        margin-left: 0.3rem;
        transition: 0.2s ease-out;
    }
`

export const StyledSubMenuItem = styled(NavLink)`
    display: block;
    color: rgba(${colors.white}, 0.8);
    font-family: ${fonts.family.base};
    font-size: ${fonts.size.small};
    white-space: nowrap;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
`

export const StyledNav = styled.ul`
    text-transform: uppercase;
    text-align: right;
    color: rgb(${colors.white});
    padding: 0;
    list-style: none;

    li {
        display: inline;
        transition: ${transitions.base};
        color: rgba(${colors.white}, 0.7);
        font-family: ${fonts.family.button};
        position: relative;
        padding-bottom: 1rem;
        padding-top: 1rem;

        &:hover,
        &:focus {
            ${StyledSubMenu} {
                display: block;
            }
        }

        > a {
            display: inline-block;
            margin-right: 2rem;
            color: inherit;

            &:hover,
            &:focus,
            &.active {
                color: rgba(${colors.white}, 1);
            }
        }
    }
`
