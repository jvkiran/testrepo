import styled, { keyframes } from 'styled-components'
import fadeIn from 'react-animations/lib/fade-in'
import { colors, fonts, responsive } from '../../styles'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'

const fadeInAnimation = keyframes`
    ${fadeIn}
`

export const ArchiveButton = styled(Button)`
    cursor: pointer;
    margin: 3rem auto 0 auto;
    color: rgb(${colors.lightGrey});
    z-index: 1;
    position: relative;

    @media screen and (${responsive.sm.min}) {
        margin-bottom: -3rem;
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

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    background-color: rgba(${colors.black}, 0.7);
`

const ModalHeight = '90vh'

export const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    background: rgb(${colors.black});
    color: rgb(${colors.white});
    border-radius: 0.1rem;
    border: 0.08rem solid rgb(${colors.pink});
    outline: none;
    padding: 2rem;
    height: auto;
    z-index: 2;
    width: 90vw;
    max-width: 50rem;
    max-height: ${ModalHeight};
    transform: translate(-50%, -50%);
    animation: ${fadeInAnimation} 0.2s ease-out backwards;

    @media screen and (${responsive.md.min}) {
        padding: 3rem;
    }
`

export const OverflowDiv = styled.div`
    overflow: auto;
    height: calc(${ModalHeight} - (10.5rem + 1px));
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    @media screen and (${responsive.md.min}) {
        height: calc(${ModalHeight} - (12.5rem + 1px));
    }
`

export const ArchiveTitle = styled(Paragraph)`
    font-size: ${fonts.size.h4};
    font-family: ${fonts.family.title};
    line-height: ${fonts.lineHeight.title};
    border-bottom: 0.08rem solid rgb(${colors.lightGrey});
    padding-bottom: 1rem;
    margin-bottom: 0;
`

export const PastListing = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 0.08rem solid rgba(${colors.lightGrey}, 0.2);
    font-family: ${fonts.family.button};
    color: rgb(${colors.lightGrey});

    @media screen and (${responsive.sm.min}) {
        flex-direction: row;
    }

    &:hover,
    &:focus {
        transform: none;
        border-bottom-color: rgb(${colors.pink});

        .event {
            color: rgb(${colors.pink});
        }
    }

    p {
        width: 100%;
        margin: 0;
        transition: 0.2s ease-out;
    }

    .city {
        color: rgb(${colors.dimmedGrey});
    }
`
