import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { colors } from '../styles'

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

export const StyledReactPlayer = styled(ReactPlayer)`
    max-width: 100%;
    height: auto !important; /* stylelint-disable-line declaration-no-important */
    width: 100% !important; /* stylelint-disable-line declaration-no-important */

    > div {
        position: relative;
        height: 0 !important; /* stylelint-disable-line declaration-no-important */
        padding-bottom: 56.25%;
    }

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    background-color: rgba(${colors.black}, 0.9);
`

export const YoutubeModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    border: 0;
    background: rgb(${colors.black});
    overflow: auto;
    border-radius: 0;
    outline: none;
    padding: 0;
    width: 100%;
    height: auto;
    z-index: 2;
    max-width: 1080px;
    max-height: 100vh;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`
