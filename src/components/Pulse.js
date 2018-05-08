import React from 'react'
import styled, { keyframes } from 'styled-components'
import pulseLock from '../assets/graphics/pulse-lock.svg'
import { colors } from '../styles'

const pulseFade = keyframes`
    0% { transform: scale(1); }
    50% { opacity: .7; }
    75% { opacity: .1; }

    100% {
        opacity: 0;
        transform: scale(3);
    }
`

const StyledPulseContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledPulseWrapper = styled.div`
    width: 55px;
    height: 55px;
    position: relative;
`

const Circle = styled.div`
    width: 55px;
    height: 55px;
    position: absolute;
    border-radius: 50%;
`

const StyledPulseCircleZero = styled(Circle)`
    opacity: 0;
    border: 1px solid rgb(${colors.purple});
    animation: ${({ shouldAnimate }) => (shouldAnimate ? `${pulseFade} 3s ease-in-out 0 1` : null)};
`

const StyledPulseCircleOne = styled(Circle)`
    opacity: 0;
    border: 1px solid rgb(${colors.pink});
    animation: ${({ shouldAnimate }) => (shouldAnimate ? `${pulseFade} 3s ease-in-out .75s infinite` : null)};
`

const StyledPulseCircleTwo = styled(Circle)`
    opacity: 0;
    border: 1px solid rgb(${colors.purple});
    animation: ${({ shouldAnimate }) => (shouldAnimate ? `${pulseFade} 3s ease-in-out 1.5s infinite` : null)};
`

const StyledPulseCircleThree = styled(Circle)`
    opacity: 0;
    border: 1px solid rgb(${colors.pink});
    animation: ${({ shouldAnimate }) => (shouldAnimate ? `${pulseFade} 3s ease-in-out 2.25s infinite` : null)};
`

const StyledPulseCircleFour = styled(Circle)`
    opacity: 0;
    border: 1px solid rgb(${colors.purple});
    animation: ${({ shouldAnimate }) => (shouldAnimate ? `${pulseFade} 3s ease-in-out 3s infinite` : null)};
`

const StyledPulseShadow = styled(Circle)`
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, .1);
`

const StyledPulseLock = styled.img`
    position: absolute;
    left: -24px;
    top: -20px;
    max-width: none;
`

const Pulse = props => (
    <StyledPulseContainer {...props}>
        <StyledPulseWrapper>
            <StyledPulseCircleZero {...props} />
            <StyledPulseCircleOne {...props} />
            <StyledPulseCircleTwo {...props} />
            <StyledPulseCircleThree {...props} />
            <StyledPulseCircleFour {...props} />
            <StyledPulseShadow />
            <StyledPulseLock alt="pulse" src={pulseLock} />
        </StyledPulseWrapper>
    </StyledPulseContainer>
)

export default Pulse
