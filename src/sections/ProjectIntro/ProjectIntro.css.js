import styled, { css, keyframes } from 'styled-components'
import Grid from '../../components/Grid'
import SubTitle from '../../components/SubTitle'
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

export const StyledData = styled.div`
    position: relative;
    width: 100%;
    margin-top: 4rem;
    padding-bottom: 4rem;
    animation: ${moveIn} 1.25s 0.2s backwards;
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

    &:nth-child(1) {
        order: 1;
    }

    &:nth-child(2) {
        order: 3;
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
    height: 13px;
    background: ${({ img }) => `url(${img}) repeat-x left`};
    animation: ${({ shouldAnimate }) =>
        shouldAnimate
            ? css`
                  ${slideRight} 3s ease-in-out 0s infinite;
              `
            : null};

    @media screen and (${responsive.sm.min}) {
        width: 400px;
        height: 13px;
        animation-name: ${slideRightLarge};
    }
`

export const StyledGrid = styled(Grid)`
    padding-top: calc(${layout.spacer} * 2);
    padding-bottom: calc(${layout.spacer} * 2);
    align-items: center;
    min-height: 70vh;
    border-bottom: 1px solid rgba(${colors.lightGrey}, 0.3);

    @media screen and (${responsive.sm.min}) {
        max-height: 500px;
    }

    &:nth-child(even) {
        flex-direction: row-reverse;
    }

    p {
        color: rgb(${colors.dimmedGrey});
    }
`

export const Icon = styled.div`
    background: rgb(${colors.grey});
    width: 15rem;
    min-height: 15rem;
    height: auto;
    max-width: 100%;
`

export const Actions = styled.aside`
    a {
        display: inline-block;
        padding: 0 1.5rem;

        &:first-child {
            padding-left: 0;
        }
    }
`

export const Contact = styled(SubTitle)`
    color: rgb(${colors.lightGrey});
    margin-top: calc(${layout.spacer} * 2);
    margin-bottom: 0;

    button {
        margin-top: ${layout.spacer};
    }
`
