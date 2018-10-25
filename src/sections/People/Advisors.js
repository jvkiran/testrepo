import React from 'react'
import Cell from '../../components/Cell'
import Member from './Member'
import advisors from '../../data/advisors'
import { StyledSubTitle, StyledParagraph, SubHeader } from './index.css'
import { StyledAdvisors } from './Advisors.css'

const Advisors = () => (
    <>
        <SubHeader>
            <Cell width={1 / 4}>
                <StyledSubTitle white id="advisors">
                    Advisors
                </StyledSubTitle>
            </Cell>
            <Cell width={3 / 4}>
                <StyledParagraph>
                    Our advisors are a group of truly world-class and talented
                    thinkers and doers who are bringing their capabilities and
                    expertise to help launch a Data Economy around Ocean. All
                    the advisors are leaders in their space and their experience
                    spans the range of industries that need to grapple with the
                    disruptive power of data, AI and blockchain.
                </StyledParagraph>
            </Cell>
        </SubHeader>

        <StyledAdvisors>
            {advisors.map(advisor => (
                <Member key={advisor.name} advisor={advisor} />
            ))}
            <Member empty />
            <Member empty />
        </StyledAdvisors>
    </>
)

export default Advisors
