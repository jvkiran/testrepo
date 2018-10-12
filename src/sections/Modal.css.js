import styled from 'styled-components'
import { colors, fonts, transitions, responsive } from '../styles'

export const StyledLightbox = styled.div`
    background: rgba(${colors.black}, .7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 20;
    transition: ${transitions.short};
    opacity: ${({ show }) => (show ? '1' : '0')};
    pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
    visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
    overflow-x: hidden;
    overflow-y: auto;
`

export const StyledCard = styled.div`
    margin: 2rem auto;
    padding: 6rem;
    padding-top: 5rem;
    width: 100%;
    z-index: 2;
    max-width: 640px;
    border-radius: 2px;
    position: relative;
    background: rgb(${colors.white});

    @media screen and (${responsive.sm.max}) {
        padding: 4rem 1rem;
    }
`

export const StyledClose = styled.img`
    position: absolute;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    top: 1.5rem;
    right: 1.5rem;

    &:hover {
        opacity: .7;
    }
`

export const StyledMessage = styled.p`
    position: absolute;
    text-align: center;
    margin-top: 1rem;
    font-size: ${fonts.size.small};
    width: calc(100% - 12rem);
    color: rgb(${colors.red});

    @media screen and (${responsive.sm.max}) {
        width: calc(100% - 2rem);
    }
`

export const Gdpr = styled.div`
    margin-top: 2rem;
    font-size: ${fonts.size.small};
    color: rgb(${colors.lightGrey});
`
