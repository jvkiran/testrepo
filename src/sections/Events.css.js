import styled from 'styled-components'
import { colors, fonts, responsive } from '../styles'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'

export const StyledEvents = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    margin-top: 4rem;

    @media screen and (${responsive.sm.min}) {
        margin-left: -1rem;
        width: calc(100% + 2rem);
    }

    @media screen and (min-width: 1600px) {
        width: 100%;
        max-width: 120rem;
        margin-left: auto;
        margin-right: auto;
    }

    ${SubTitle} { /* stylelint-disable-line */
        width: 100%;
        text-align: center;
        margin: 0;
        margin-top: 2rem;
    }

    .slick-slider {
        width: calc(100% + 3rem);
        margin-left: -1.5rem;
        margin-right: -1.5rem;
    }

    .slick-slide,
    .slick-initialized .slick-slide {
        padding-left: 1.5rem;
        padding-right: 1.5rem;

        @media screen and (${responsive.sm.min}) {
            padding-left: 3rem;
            padding-right: 3rem;
        }

        > div > div { /* stylelint-disable-line */
            display: flex !important; /* stylelint-disable-line */
            flex-wrap: wrap;
            align-items: stretch;
        }
    }

    .slick-dots {
        bottom: -2.5rem;

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
        left: 1rem;
    }

    .slick-next {
        right: 1rem;
    }
`

export const StyledEvent = styled.a`
    padding: 2rem 1rem;
    text-align: center;
    display: block;
    width: 100%;
    background: rgba(${colors.darkGrey}, .8);
    border: .08rem solid rgb(${colors.pink});
    border-radius: .1rem;
    margin-bottom: 1rem;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);

    &:hover,
    &:focus {
        box-shadow: 0 12px 30px 0 rgba(${colors.black}, .3);
    }

    &:active {
        box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
    }

    @media screen and (${responsive.sm.min}) {
        width: auto;
        flex: 0 1 calc(50% - 2rem);
        margin: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media screen and (${responsive.lg.min}) {
        flex: 0 1 calc(${props => props.flexWidth}% - 2rem);
        margin: ${props => (props.flexWidth === 52 ? '1rem auto' : '1rem')};
    }
`

export const StyledEventCity = styled.h4`
    margin-top: 0;
    margin-bottom: .5rem;
    color: rgb(${colors.white});
    width: 100%;
    align-self: flex-start;
`

export const StyledEventName = styled.p`
    display: block;
    color: rgb(${colors.lightGrey});
    width: 100%;
`

export const StyledEventDate = styled.h5`
    color: rgb(${colors.white});
    font-size: ${fonts.size.base};
    margin: 0;
    opacity: .8;
    width: 100%;
    align-self: flex-end;
`

export const StyledTitle = styled(Title)`
    margin-bottom: 2rem;

    span { opacity: .5; }
`

export const StyledParagraph = styled(Paragraph)`
    margin-bottom: 0;
    text-align: center;
`

export const ArchiveButton = styled(Button)`
    text-align: center;
    cursor: pointer;
    margin: 5rem auto 0 auto;
    padding: .8rem 1rem;
    background: rgba(${colors.darkGrey}, .8);
    border: .08rem solid rgb(${colors.pink});
    border-radius: .1rem;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
    font-size: ${fonts.size.small};
    color: rgb(${colors.lightGrey});

    &:hover,
    &:focus {
        box-shadow: 0 12px 30px 0 rgba(${colors.black}, .3);
        background: inherit;
    }

    &:active {
        box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
    }

    @media screen and (${responsive.sm.min}) {
        margin-bottom: -3rem;
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

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    background-color: rgba(${colors.black}, .7);
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
    border-radius: .1rem;
    border: .08rem solid rgb(${colors.pink});
    outline: none;
    padding: 2rem;
    height: auto;
    z-index: 2;
    width: 90vw;
    max-width: 50rem;
    max-height: ${ModalHeight};
    transform: translate(-50%, -50%);

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
    border-bottom: .08rem solid rgb(${colors.lightGrey});
    padding-bottom: 1rem;
    margin-bottom: 0;
`

export const PastListing = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: .08rem solid rgba(${colors.lightGrey}, .2);
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
        transition: .2s ease-out;
    }

    .city {
        color: rgb(${colors.white});
    }
`
