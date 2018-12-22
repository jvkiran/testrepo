import React from 'react'
import { ReactComponent as Logo } from '../../assets/misc/logo-logomark.svg'
import {
    StyledPulseContainer,
    StyledPulseWrapper,
    StyledPulseCircleZero,
    StyledPulseCircleOne,
    StyledPulseCircleTwo,
    StyledPulseCircleThree,
    StyledPulseCircleFour,
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
            <StyledPulseLock>
                <Logo />
            </StyledPulseLock>
        </StyledPulseWrapper>
    </StyledPulseContainer>
)

export default Pulse
