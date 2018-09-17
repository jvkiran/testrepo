import React from 'react'
import Member from './Member'
import advisors from '../../data/advisors'
import { StyledAdvisors } from './Advisors.css'

const Advisors = () => (
    <StyledAdvisors>
        {advisors.map((advisor) => (
            <Member key={advisor.name} advisor={advisor} />
        ))}
    </StyledAdvisors>
)

export default Advisors
