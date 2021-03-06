import styled, { css, keyframes } from 'styled-components'
import { colors, responsive, transitions, layout } from '../../styles'

export const moveIn = keyframes`
    0% {
        opacity: .01;
        transform: translate3d(0, 4rem, 0);
    }

    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`

export const fadeIn = keyframes`
    0% {
        opacity: .01;
    }

    100% {
        opacity: 1;
    }
`

export const StyledData = styled.div`
    position: relative;
    width: 100%;
    margin-top: 4rem;
    padding-bottom: 4rem;
    border-bottom: 1px solid rgba(${colors.lightGrey}, 0.3);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (${responsive.sm.min}) {
        margin-top: 6rem;
        padding-bottom: 8rem;
        flex-wrap: nowrap;
    }
`

export const StyledCard = styled.div`
    background: rgb(${colors.darkGrey});
    border-radius: 2px;
    padding: ${layout.spacer};
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.2);
    border: 0.1rem solid rgba(${colors.pink}, 0.1);
    transition: ${transitions.base};
    color: rgb(${colors.lightGrey});
    max-width: 20rem;
    animation: ${moveIn} 1.25s 0.2s backwards;

    &:nth-child(1) {
        order: 1;
    }

    &:nth-child(2) {
        order: 3;
        animation-delay: 0.4s;
    }

    h4 {
        margin-top: 0;
        margin-bottom: 1.5rem;
        color: rgb(${colors.white});
    }

    p {
        margin-bottom: 0;
    }
`

export const StyledDataTransfer = styled.div`
    position: relative;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(90deg);
    order: 2;
    height: 160px;
    margin: auto;
    animation: ${fadeIn} 1.25s 0.6s backwards;

    .pulse {
        transform: rotate(-90deg);
    }

    @media screen and (${responsive.sm.min}) {
        height: 140px;
        max-width: 20rem;
        margin-left: -2.5rem;
        margin-right: -2.5rem;

        &,
        .pulse {
            transform: none;
        }
    }
`

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

export const StyledDataDots = styled.div`
    width: 120px;
    background: ${({ img }) => `url(${img}) repeat-x left`};
    animation: ${({ shouldAnimate }) =>
        shouldAnimate
            ? css`
                  ${slideRight} 3s ease-in-out 0s infinite;
              `
            : null};

    @media screen and (${responsive.sm.min}) {
        width: 400px;
        animation-name: ${slideRightLarge};
    }
`
