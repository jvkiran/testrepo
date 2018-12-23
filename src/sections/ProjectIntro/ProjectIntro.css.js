import styled, { css, keyframes } from 'styled-components'
import Grid from '../../components/Grid'
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
    margin-top: 6rem;
    margin-bottom: 4rem;
    animation: ${moveIn} 1.25s 0.2s backwards;

    @media screen and (${responsive.sm.min}) {
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const StyledCard = styled.div`
    background: rgb(${colors.darkGrey});
    margin: 5%;
    border-radius: 2px;
    padding: ${layout.spacer};
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.2);
    border: 0.1rem solid rgba(${colors.pink}, 0.1);
    transition: ${transitions.base};
    color: rgb(${colors.lightGrey});
    display: block;

    @media screen and (${responsive.sm.min}) {
        width: 30%;
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
    margin-top: 5rem;
    margin-bottom: 5rem;

    .pulse {
        transform: rotate(-90deg);
    }

    @media screen and (${responsive.sm.min}) {
        margin-top: 0;
        margin-bottom: 0;
        position: absolute;
        width: 40%;
        left: 30%;

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
        width: 300px;
        height: 13px;
        animation-name: ${slideRightLarge};
    }
`

export const StyledCopy = styled(Grid)`
    p {
        color: rgb(${colors.lightGrey});
    }
`
