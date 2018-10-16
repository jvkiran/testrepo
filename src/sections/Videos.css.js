import styled from 'styled-components'
import ReactPlayer from 'react-player'
import Paragraph from '../components/Paragraph'
import ContentRow from '../components/ContentRow'
import Button from '../components/Button'
import jellyfish from '../assets/misc/jellyfish-background.jpg'
import { colors, fonts, responsive, transitions } from '../styles'

export const StyledVideos = styled(ContentRow)`
    margin-bottom: 2.5rem;
    z-index: 2;

    @media screen and (${responsive.sm.min}) {
        margin-bottom: 0;
    }
`

export const VideoBackground = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translateX(-50%) translateY(-50%);
    background: url(${jellyfish}) no-repeat center center;
    background-size: cover;
    opacity: 0.4;
    z-index: 0;
`

export const CenterParagraph = styled(Paragraph)`
    text-align: center;
    z-index: 1;
`

export const HeightRow = styled.div`
    min-height: 280px;
    position: relative;

    @media screen and (${responsive.sm.min}) {
        min-height: 0;
    }
`

export const PlayButton = styled.img`
    display: block;
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
    transition: ${transitions.base};
`

export const RatioContainer = styled.div`
    z-index: 2;
    transition: ${transitions.base};
    overflow: hidden;
    background: rgba(${colors.white}, 0.8);
    padding: 1rem;
    margin-bottom: 1rem;

    @media screen and (${responsive.sm.max}) {
        &.hidden {
            display: none;
        }
    }

    @media screen and (${responsive.sm.min}) {
        border: 0.4rem solid rgb(${colors.white});
        padding: 0;
        padding-top: 1rem;
        margin: 0.5rem 0;

        &:hover,
        &:focus {
            background: rgba(${colors.white}, 0.7);
            cursor: pointer;
            transform: translate3d(0, -0.05rem, 0);
        }
    }

    @media screen and (${responsive.md.min}) {
        padding-top: 2rem;
    }

    @media screen and (${responsive.lg.min}) {
        padding-top: 4rem;
    }
`

export const AspectRatio = styled.div`
    position: relative;

    @media screen and (${responsive.sm.min}) {
        padding-bottom: calc(56.25% - 1rem);
        height: 0 !important; /* stylelint-disable-line declaration-no-important */
    }

    @media screen and (${responsive.md.min}) {
        padding-bottom: calc(56.25% - 2rem);
    }

    @media screen and (${responsive.lg.min}) {
        padding-bottom: calc(56.25% - 4rem);
    }
`

export const VideoTitle = styled.h1`
    font-size: ${fonts.size.h4};
    color: rgb(${colors.black});
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 0;

    @media screen and (${responsive.sm.min}) {
        padding: 0 2rem;
        font-size: ${fonts.size.h3};
    }

    @media screen and (${responsive.md.min}) {
        padding: 0 6rem;
    }
`

export const VideoDescription = styled(Paragraph)`
    color: rgb(${colors.darkGrey});
    text-align: center;
    position: relative;

    @media screen and (${responsive.sm.min}) {
        padding: 0 2rem;
    }

    @media screen and (${responsive.md.min}) {
        margin-bottom: 2rem;
        padding: 0 3rem;
    }

    @media screen and (${responsive.lg.min}) {
        padding: 0 5rem;
    }
`

export const VideoContainer = styled.div`
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    z-index: -1;
    margin: 0.5rem;
    background: rgb(${colors.black});
    display: none;

    @media screen and (${responsive.sm.min}) {
        display: block;
        position: absolute;
    }

    &.active {
        z-index: 999;
        display: block;
    }
`

export const StyledClose = styled.button`
    position: absolute;
    cursor: pointer;
    background: none;
    outline: 0;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 21;

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

export const VideoList = styled.div`
    padding-bottom: 1.5rem;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    display: flex;
    align-items: stretch;
`

export const VideoListItem = styled.a`
    display: block;
    color: rgb(${colors.lightGrey});
    background: rgb(${colors.black});
    border-radius: 2px;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, 0.3);
    transition: ${transitions.base};
    border: 0.08rem solid rgb(${colors.grey});
    min-width: 14rem;
    max-width: 14rem;
    margin: 0 0.5rem;
    transform: translate3d(0, 0, 0);

    @media screen and (${responsive.sm.min}) {
        min-width: 16rem;
        max-width: 16rem;
    }

    &:first-child {
        margin-left: 0;
    }

    &:hover,
    &:focus {
        transform: translate3d(0, -0.05rem, 0);
    }

    &:active {
        transition: none;
        transform: none;
    }

    &.active {
        background: rgb(${colors.white});
        color: rgb(${colors.black});
    }
`

export const VideoThumb = styled.img`
    padding: 0.4rem;
    background: rgb(${colors.black});

    .active & {
        background: rgb(${colors.white});
    }
`

export const ThumbTitle = styled(Paragraph)`
    padding: 0.5rem 1.25rem 1rem 1.25rem;
    margin: 0;
    text-align: center;
    font-size: ${fonts.size.mini};

    span {
        display: block;

        @media screen and (${responsive.sm.min}) {
            overflow: hidden;
            height: 3.5rem;
        }
    }
`

export const YouTubeButton = styled(Button)`
    text-align: center;
    cursor: pointer;
    margin: 5rem auto 0 auto;
    padding: 0.8rem 1rem;
    background: rgba(${colors.darkGrey}, 0.8);
    border: 0.08rem solid rgb(${colors.grey});
    border-radius: 0.1rem;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, 0.3);
    font-size: ${fonts.size.small};
    color: rgb(${colors.lightGrey});
    z-index: 2;

    &:hover,
    &:focus {
        box-shadow: 0 12px 30px 0 rgba(${colors.black}, 0.3);
        background: rgba(${colors.darkGrey}, 0.95);
    }

    &:active {
        box-shadow: 0 9px 18px 0 rgba(${colors.black}, 0.3);
    }

    @media screen and (${responsive.sm.min}) {
        margin-bottom: -3rem;
    }
`
