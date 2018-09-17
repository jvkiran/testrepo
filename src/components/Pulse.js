import React from 'react'
import pulseLock from '../assets/graphics/pulse-lock.svg'
import {
    StyledPulseContainer,
    StyledPulseWrapper,
    StyledPulseCircleZero,
    StyledPulseCircleOne,
    StyledPulseCircleTwo,
    StyledPulseCircleThree,
    StyledPulseCircleFour,
    StyledPulseShadow,
    StyledPulseLock
} from './Pulse.css'

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
