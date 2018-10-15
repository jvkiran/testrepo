import styled from 'styled-components'
import { colors, transitions, responsive } from '../../styles'

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

export const StyledModal = styled.div`
    margin: 2rem auto;
    padding: 2rem;
    width: 100%;
    z-index: 2;
    max-width: 640px;
    border-radius: 2px;
    position: relative;
    background: rgb(${colors.white});

    @media screen and (${responsive.sm.min}) {
        padding: 5rem 6rem;
    }
`

export const StyledClose = styled.button`
    position: absolute;
    cursor: pointer;
    background: none;
    outline: 0;
    top: 1.5rem;
    right: 1.5rem;

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    &:hover {
        opacity: .7;
    }
`
