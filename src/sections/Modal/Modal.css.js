import styled, { keyframes } from 'styled-components'
import { colors, responsive } from '../../styles'

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`

export const StyledLightbox = styled.div`
    background: rgba(${colors.black}, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 20;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    animation: ${fadeIn} 0.2s ease-out backwards;
`

export const StyledModal = styled.div`
    margin: 2rem auto;
    padding: 2rem 1.5rem;
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
        opacity: 0.7;
    }
`
