import React from 'react'
import Collapsible from 'react-collapsible'
import teamImg from '../../assets/team'
import team from '../../data/team'
import Member from './Member'
import { StyledTeam } from './Team.css'

const Team = () => (
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
)

export default Team
