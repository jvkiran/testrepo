import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import fadeIn from 'react-animations/lib/fade-in'
import { colors, fonts, responsive, transitions, layout } from '../styles'

export const StyledMenu = styled.nav`
    background: ${({ fixed }) => (fixed ? `rgb(${colors.black})` : null)};
    transition: transform 0.3s ease-in-out;
    transform: ${({ fixed }) =>
        fixed ? 'translate3d(0,100px,0)' : 'translate3d(0,0,0)'};
    padding: 0.75rem 1rem;
    z-index: 5;

    @media screen and (${responsive.md.min}) {
        position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};
        width: calc(100% - (${layout.pageFrame} * 2));
        top: ${({ fixed }) => (fixed ? '0' : 'auto')};
        left: ${layout.pageFrame};
        right: ${layout.pageFrame};
        margin: ${({ fixed }) => (fixed ? '-100px 0' : '1rem 0 0 0')};
        border-top: ${({ fixed }) =>
            fixed ? `${layout.pageFrame} solid #fff` : '0'};
    }

    @media screen and (${responsive.md.max}) {
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        margin: 0;
    }
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

export const StyledLogo = styled(Link)`
    height: 60px;
    z-index: 10;
    margin-left: 20px;

    & svg {
        width: auto;
        height: 100%;
    }
`

export const StyledMenuItem = styled.li`
    display: inline;
    transition: ${transitions.base};
    color: ${({ current }) =>
        current ? `rgba(${colors.white}, 1)` : `rgba(${colors.white}, .7)`};
    font-family: ${fonts.family.button};
    position: relative;
    padding-bottom: 1rem;
    padding-top: 1rem;

    &:hover,
    &:focus {
        ${StyledSubMenu} {
            display: block;
        }

        svg {
            transform: rotate(180deg);
        }
    }

    a {
        &:hover,
        &:focus {
            transform: none;
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

export const StyledSubMenuItem = styled.a`
    display: block;
    color: ${({ current }) =>
        current ? `rgba(${colors.white}, 1)` : `rgba(${colors.white}, .8)`};
    font-family: ${fonts.family.base};
    font-size: ${fonts.size.small};
    white-space: nowrap;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
`

export const animation = keyframes`
    ${fadeIn}
`

export const StyledMobileNav = styled.div`
    background: rgb(${colors.black});
    position: fixed;
    display: none;
    height: ${({ active }) => (active ? '100vh' : '0')};
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 1;
    flex-direction: column;
    justify-content: center;
    color: rgb(${colors.white});
    padding: 2rem;
    transition: ${transitions.long};

    & a {
        margin: 0.5rem 0;
        color: inherit;
    }

    @media screen and (${responsive.md.max}) {
        display: flex;
        opacity: ${({ active }) => (active ? '1' : '0')};
        pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
        visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    }
`

export const StyledNav = styled.ul`
    text-transform: uppercase;
    text-align: right;
    color: rgb(${colors.white});
    animation: 1s ${animation} 1.2s backwards;
    padding: 0;
    list-style: none;

    li > a {
        display: inline-block;
        margin-right: 2rem;
        color: inherit;

        &:hover,
        &:focus,
        &.active {
            color: rgba(${colors.white}, 1);
        }
    }

    @media screen and (${responsive.md.max}) {
        display: none;
    }
`
