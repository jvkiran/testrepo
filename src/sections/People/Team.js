import React from 'react'
import Collapsible from 'react-collapsible'
import Cell from '../../components/Cell'
import teamImg from '../../assets/team'
import team from '../../data/team'
import Member from './Member'
import {
    StyledSubTitle,
    StyledParagraph,
    SubHeader
} from './index.css'
import { StyledTeam } from './Team.css'

const Team = () => (
    <>
        <SubHeader>
            <Cell width={1 / 4}>
                <StyledSubTitle white id="team">Core team</StyledSubTitle>
            </Cell>
            <Cell width={3 / 4}>
                <StyledParagraph>
                The Ocean Protocol core team combines a deep background in big data, blockchain, artificial intelligence and data exchanges, with real-world business experience as entrepreneurs, designers and technologists who have started over 20 companies.
                </StyledParagraph>
            </Cell>
        </SubHeader>
        <StyledTeam>
            {team.filter((item) => teamImg[item.image]).filter((item, index) => index < 15).map((member) => (
                <Member key={member.name} member={member} />
            ))}
            {team.filter((item) => teamImg[item.image]).length >= 15 &&
            <Collapsible easing="ease-out" transitionTime={200} trigger="See the entire team">
                {team.filter((item) => teamImg[item.image]).filter((item, index) => index >= 15).map((member) => (
                    <Member key={member.name} member={member} />
                ))}
            </Collapsible>
            }
        </StyledTeam>
    </>
)

export default Team
