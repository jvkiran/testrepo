import React from 'react'
import { StyledSpinner, StyledSpinnnerWrapper } from './Spinner.css'

const Spinner = props => (
    <StyledSpinnnerWrapper>
        <StyledSpinner {...props} />
    </StyledSpinnnerWrapper>
)

export default Spinner
