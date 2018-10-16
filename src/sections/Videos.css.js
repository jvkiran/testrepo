import styled from 'styled-components'
import ReactPlayer from 'react-player'
import Paragraph from '../components/Paragraph'
import ContentRow from '../components/ContentRow'
import Button from '../components/Button'
import jellyfish from '../assets/misc/jellyfish-background.jpg'
import { colors, fonts, responsive, transitions } from '../styles'

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
    opacity: .4;
    z-index: 0;
`

export const CenterParagraph = styled(Paragraph)`
    text-align: center;
    z-index: 1;
`

export const StyledContentRow = styled(ContentRow)`
    margin-bottom: 2.5rem;
    z-index: 1;

    @media screen and (${responsive.sm.min}) {
        margin-bottom: 0;
    }

    @media screen and (${responsive.md.min}) and (min-height: 900px) {
        max-width: 65rem;
    }

    .slick-dots {
        bottom: -3rem;

        button:before {
            font-size: ${fonts.size.small};
            opacity: .25;
            color: rgb(${colors.white});
        }

        .slick-active button:before { /* stylelint-disable-line selector-max-compound-selectors */
            color: rgb(${colors.white});
        }

        .slick-active:only-child {
            display: none;
        }
    }

    .slick-prev,
    .slick-next {
        z-index: 2;
        width: 1.5rem;
        height: 1.5rem;

        &.slick-disabled {
            visibility: hidden;
        }

        &:before {
            color: #fff;
            font-size: 1.5rem;
        }
    }

    .slick-prev {
        left: -1.5rem;
    }

    .slick-next {
        right: -1.5rem;
    }

    @media screen and (${responsive.sm.min}) {
        .slick-prev {
            left: -1.5rem;
        }

        .slick-next {
            right: -1.5rem;
        }
    }
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
    background: rgba(${colors.white}, .8);
    padding: 1rem;
    margin-bottom: 1rem;

    @media screen and (${responsive.sm.max}) {
        &.hidden {
            display: none;
        }
    }

    @media screen and (${responsive.sm.min}) {
        border: .4rem solid rgb(${colors.white});
        padding: 0;
        padding-top: 1rem;
        margin: .5rem;

        &:hover,
        &:focus {
            background: rgba(${colors.white}, .7);
            cursor: pointer;
            transform: translate3d(0, -.05rem, 0);
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
    top: -.5rem;
    z-index: -1;
    margin: .5rem;
    border: .4rem solid rgb(${colors.white});
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

export const StyledClose = styled.img`
    position: absolute;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 21;

    &:hover,
    &:focus {
        opacity: .7;
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

export const VideoListItem = styled.a`
    cursor: pointer;
`

export const ListContainer = styled.div`
    color: rgb(${colors.lightGrey});
    background: rgb(${colors.black});
    border-radius: 2px;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
    transition: ${transitions.base};
    border: .08rem solid rgb(${colors.grey});
    max-width: 21.3rem;
    margin: 0 auto;

    &:hover,
    &:focus {
        box-shadow: 0 12px 30px 0 rgba(${colors.black}, .3);
        transform: translate3d(0, -.05rem, 0);
    }

    &:active {
        box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
        transition: none;
        transform: none;
    }

    &.active {
        background: rgb(${colors.white});
        color: rgb(${colors.black});
    }

    @media screen and (${responsive.sm.min}) {
        margin: 0 .5rem;
    }
`

export const VideoThumb = styled.img`
    padding: .4rem;
    background: rgb(${colors.black});

    .active & {
        background: rgb(${colors.white});
    }
`

export const ThumbTitle = styled(Paragraph)`
    padding: .5rem 1.25rem 1rem 1.25rem;
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
    padding: .8rem 1rem;
    background: rgba(${colors.darkGrey}, .8);
    border: .08rem solid rgb(${colors.grey});
    border-radius: .1rem;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
    font-size: ${fonts.size.small};
    color: rgb(${colors.lightGrey});

    &:hover,
    &:focus {
        box-shadow: 0 12px 30px 0 rgba(${colors.black}, .3);
        background: rgba(${colors.darkGrey}, .95);
    }

    &:active {
        box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
    }

    @media screen and (${responsive.sm.min}) {
        margin-bottom: -3rem;
    }
`
