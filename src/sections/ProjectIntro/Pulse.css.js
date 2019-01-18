import styled, { css, keyframes } from 'styled-components'
import { colors } from '../../styles'

const pulseFade = keyframes`
    0% { transform: scale(1); }
    50% { opacity: .9; }
    75% { opacity: .1; }

    100% {
        opacity: 0;
        transform: scale(3);
    }
`

export const StyledPulseContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledPulseWrapper = styled.div`
    width: 55px;
    height: 55px;
    position: relative;
`

export const Circle = styled.div`
    width: 55px;
    height: 55px;
    position: absolute;
    border-radius: 50%;
`

export const StyledPulseCircleZero = styled(Circle)`
    opacity: 0;
    border: 1px solid rgb(${colors.purple});
    animation: ${({ shouldAnimate }) =>
        shouldAnimate
            ? css`
                  ${pulseFade} 3s ease-in-out 0 1;
              `
            : null};
`

export const StyledPulseCircleOne = styled(Circle)`
    opacity: 0;
    border: 1px solid rgb(${colors.pink});
    animation: ${({ shouldAnimate }) =>
        shouldAnimate
            ? css`
                  ${pulseFade} 3s ease-in-out .75s infinite;
              `
            : null};
`

export const StyledPulseCircleTwo = styled(Circle)`
    opacity: 0;
    border: 1px solid rgb(${colors.purple});
    animation: ${({ shouldAnimate }) =>
        shouldAnimate
            ? css`
                  ${pulseFade} 3s ease-in-out 1.5s infinite;
              `
            : null};
`

export const StyledPulseCircleThree = styled(Circle)`
    opacity: 0;
    border: 1px solid rgb(${colors.pink});
    animation: ${({ shouldAnimate }) =>
        shouldAnimate
            ? css`
                  ${pulseFade} 3s ease-in-out 2.25s infinite;
              `
            : null};
`

export const StyledPulseCircleFour = styled(Circle)`
    opacity: 0;
    border: 1px solid rgb(${colors.purple});
    animation: ${({ shouldAnimate }) =>
        shouldAnimate
            ? css`
                  ${pulseFade} 3s ease-in-out 3s infinite;
              `
            : null};
`

export const StyledPulseLock = styled.div`
    position: absolute;
    left: -0.7rem;
    top: -0.7rem;
    max-width: none;
    width: 5rem;
    height: 5rem;
    background: rgb(${colors.darkGrey});
    border-radius: 50%;
    padding: 1rem;
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.2);
    border: 0.1rem solid rgba(${colors.pink}, 0.2);
`
