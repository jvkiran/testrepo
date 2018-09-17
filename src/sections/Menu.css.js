import styled, { keyframes } from 'styled-components'
import fadeIn from 'react-animations/lib/fade-in'
import { colors, fonts, responsive, transitions, layout } from '../styles'

export const StyledMenu = styled.nav`
    background: rgb(${colors.black});
    transition: transform .3s ease-in-out;
    transform: ${({ fixed }) => (fixed ? 'translate3d(0,100px,0)' : 'translate3d(0,0,0)')};
    padding: .75rem 1rem;
    z-index: 5;

    @media screen and (${responsive.md.min}) {
        position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};
        width: calc(100% - (${layout.pageFrame} * 2));
        top: ${({ fixed }) => (fixed ? '0' : 'auto')};
        left: ${layout.pageFrame};
        right: ${layout.pageFrame};
        margin: ${({ fixed }) => (fixed ? '-100px 0' : '1.5rem 0 0 0')};
        border-top: ${({ fixed }) => (fixed ? `${layout.pageFrame} solid #fff` : '0')};
    }

    @media screen and (${responsive.md.max}) {
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        margin: 0;
    }
`

export const StyledContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledLogo = styled.div`
    height: 60px;
    z-index: 10;
    margin-left: 20px;

    & img {
        height: 100%;
    }
`

export const StyledMenuItem = styled.a`
    transition: ${transitions.base};
    color: ${({ current }) => (current ? `rgba(${colors.white}, 1)` : `rgba(${colors.white}, .7)`)};
    font-family: ${fonts.family.button};
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
    font-size: 2rem;
    transition: ${transitions.long};

    & a {
        margin: .5rem 0;
    }

    @media screen and (${responsive.md.max}) {
        display: flex;
        opacity: ${({ active }) => (active ? '1' : '0')};
        pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
        visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    }
`

export const StyledNav = styled.div`
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

    @media screen and (${responsive.md.max}) {
        display: none;
    }
`
