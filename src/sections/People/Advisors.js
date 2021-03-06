import React from 'react'
import Cell from '../../components/Cell'
import Member from './Member'
import content from '../../data/advisors'
import { StyledSubTitle, StyledParagraph, SubHeader } from './index.css'
import { StyledAdvisors } from './Advisors.css'

const Advisors = () => (
    <>
        <SubHeader>
            <Cell width={1 / 4}>
                <StyledSubTitle left white id="advisors">
                    {content.title}
                </StyledSubTitle>
            </Cell>
            <Cell width={3 / 4}>
                <StyledParagraph>{content.description}</StyledParagraph>
            </Cell>
        </SubHeader>

        <StyledAdvisors>
            {content.members.map(advisor => (
                <Member key={advisor.name} advisor={advisor} />
            ))}
            <Member empty />
            <Member empty />
            <Member empty />
            <Member empty />
        </StyledAdvisors>
    </>
)

export default Advisors
