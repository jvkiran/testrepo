import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from 'react-collapsible'
import LazyLoad from 'react-lazyload'
import buttonLinkedIn from '../assets/buttons/linkedin.svg'
import buttonTwitter from '../assets/buttons/twitter.svg'
import buttonGithub from '../assets/buttons/github.svg'
import teamImg from '../assets/team'
import team from '../data/team'
import { colors } from '../styles'
import {
    StyledMember,
    StyledName,
    StyledLinks,
    StyledIcon,
    StyledTitle,
    StyledParagraph,
    StyledLine,
    StyledTeam,
    StyledCompanies,
    StyledCompanyLogo,
    StyledActions,
    StyledButton
} from './Team.css'

const TeamMember = ({ member }) => (
    <StyledMember>
        <LazyLoad once height={110} offset={100}>
            <img alt={member.name} src={teamImg[member.image]} />
        </LazyLoad>
        <StyledName>{member.name}</StyledName>
        <StyledLinks>
            {!!member.linkedin && (
                <StyledIcon
                    href={`https://www.linkedin.com/in/${member.linkedin}`}
                    rel="noopener noreferrer"
                    target="_blank">
                    <img alt="linkedin" src={buttonLinkedIn} />
                </StyledIcon>
            )}
            {!!member.github && (
                <StyledIcon
                    href={`https://www.github.com/${member.github}`}
                    rel="noopener noreferrer"
                    target="_blank">
                    <img alt="github" src={buttonGithub} />
                </StyledIcon>
            )}
            {!!member.twitter && (
                <StyledIcon
                    href={`https://www.twitter.com/${member.twitter}`}
                    rel="noopener noreferrer"
                    target="_blank">
                    <img alt="twitter" src={buttonTwitter} />
                </StyledIcon>
            )}
        </StyledLinks>
    </StyledMember>
)

TeamMember.propTypes = {
    member: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
}

const Team = () => (
    <StyledTeam>
        {team.filter((item) => teamImg[item.image]).filter((item, index) => index < 15).map((member) => (
            <TeamMember key={member.name} member={member} />
        ))}
        {team.filter((item) => teamImg[item.image]).length >= 15 &&
            <StyledParagraph>
                The Ocean Protocol team combines a deep background in big data, blockchain, artificial intelligence and data exchanges, with real-world business experience as entrepreneurs, designers and technologists who have started over 20 companies.
            </StyledParagraph>
        </ContentRow>
                {team.filter((item) => teamImg[item.image]).filter((item, index) => index >= 15).map((member) => (
                    <TeamMember key={member.name} member={member} />
                ))}
                {team.filter((item) => teamImg[item.image]).length >= 15 &&
                    <Collapsible easing="ease-out" transitionTime={200} trigger="See the entire team">
                        {team.filter((item) => teamImg[item.image]).filter((item, index) => index >= 15).map((member) => (
                            <TeamMember key={member.name} member={member} />
                        ))}
            </Collapsible>
        }

        <ContentRow narrow>
            <StyledCompanies>
                <StyledCompanyLogo
                    href="https://www.bigchaindb.com/?utm_source=oceanprotocol&utm_medium=logo"
                    rel="noopener" // eslint-disable-line
                    target="_blank">
                    <img alt="BigchainDB" src={bigchainDBLogo} />
                </StyledCompanyLogo>
                <StyledCompanyLogo
                    href="https://www.dex.sg/?utm_source=oceanprotocol&utm_medium=logo"
                    rel="noopener" // eslint-disable-line
                    target="_blank">
                    <img alt="Dex" src={dexLogo} />
                </StyledCompanyLogo>
            </StyledCompanies>
        </ContentRow>

        <ContentRow>
            <StyledLine />

            <StyledActions>
                <StyledButton onClick={() => toggleModal('contributor')}>Join as a contributor</StyledButton>
            </StyledActions>
        </ContentRow>
    </StyledTeam>
)

export default Team
