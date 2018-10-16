import styled, { keyframes } from 'styled-components'
import SubTitle from '../components/SubTitle'
import arrow from '../assets/misc/arrow.svg'
import { colors, fonts, responsive, transitions } from '../styles'

export const slideRight = keyframes`
    0% {
        transform: translate3d(-30%, 0, 0);
    }

    33% {
        transform: translate3d(30%, 0, 0);
    }

    100% {
        transform: translate3d(30%, 0, 0);
    }
`

export const slideRightLarge = keyframes`
    0% {
        transform: translate3d(-21%, 0, 0);
    }

    33% {
        transform: translate3d(20%, 0, 0);
    }

    100% {
        transform: translate3d(20%, 0, 0);
    }
`

export const StyledData = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 0;
    margin-bottom: 4rem;

    @media screen and (${responsive.sm.max}) {
        flex-direction: column;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`

export const StyledCard = styled.div`
    background: rgb(${colors.white});
    margin: 5%;
    border-radius: 2px;
    width: 30%;
    box-shadow: 0 9px 18px 0 rgba(0, 0, 0, 0.07);
    border: 1px solid rgba(${colors.black}, 0.07);
    transition: ${transitions.base};
    color: rgb(${colors.grey});
    display: block;
    padding: 2rem;
    cursor: pointer;

    @media screen and (${responsive.md.max}) {
        padding: 1.5rem;
    }

    @media screen and (${responsive.sm.max}) {
        width: 100%;

        &:first-child {
            margin-bottom: 10rem;
        }

        &:nth-child(2) {
            margin-top: 10rem;
        }
    }

    &:hover,
    &:focus {
        transform: translate3d(0, -0.05rem, 0);
        box-shadow: 0 12px 30px 0 rgba(0, 0, 0, 0.07);
    }

    &:active {
        box-shadow: 0 9px 18px 0 rgba(0, 0, 0, 0.07);
        transform: none;
        transition: none;
    }

    h4 {
        margin-top: 0;
        margin-bottom: 1.5rem;
    }

    & button {
        border: none;
        padding: 0;
        font-family: ${fonts.family.button};
        font-size: 1rem;
        cursor: pointer;
        outline: inherit;
        display: block;
        color: inherit;
        margin-top: 2.5rem;
        background: transparent;
        width: fit-content;
        position: relative;
        text-transform: uppercase;

        @media screen and (${responsive.md.max}) {
            margin-top: 1.5rem;
        }

        &:after {
            content: '';
            display: block;
            width: 20px;
            height: 20px;
            position: absolute;
            top: 0;
            left: calc(100% + 10px);
            background: url(${arrow}) no-repeat;
        }
    }

    &:first-child {
        button {
            color: rgb(${colors.purple});
        }
    }

    &:last-child {
        button {
            color: rgb(${colors.softPink});
        }
    }
`

export const StyledDataTransfer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(90deg);

    .pulse {
        transform: rotate(-90deg);
    }

    @media screen and (${responsive.sm.min}) {
        &,
        .pulse {
            transform: none;
        }
    }
`

export const StyledDataDots = styled.div`
    width: 40%;
    height: 100vw;
    background: ${({ img }) => `url(${img}) repeat-x left`};
    animation: ${({ shouldAnimate }) =>
        shouldAnimate ? `${slideRight} 3s ease-in-out 0s infinite` : null};

    @media screen and (${responsive.sm.min}) {
        width: 20%;
        height: 100%;
        animation-name: ${slideRightLarge};
    }
`

export const StyledSubTitle = styled(SubTitle)`
    font-size: ${fonts.size.h4};
    text-align: center;
`
