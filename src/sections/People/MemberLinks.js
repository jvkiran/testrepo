import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as ButtonWebsite } from '../../assets/buttons/website.svg'
import { ReactComponent as ButtonLinkedIn } from '../../assets/buttons/linkedin.svg'
import { ReactComponent as ButtonTwitter } from '../../assets/buttons/twitter.svg'
import { ReactComponent as ButtonGithub } from '../../assets/buttons/github.svg'
import { Icon, Links } from './MemberLinks.css'

const MemberLinks = ({ member }) => (
    <Links>
        {member.website && (
            <Icon
                href={member.website}
                rel="noopener noreferrer"
                target="_blank"
                title="Website"
            >
                <ButtonWebsite />
            </Icon>
        )}
        {member.linkedin && (
            <Icon
                href={`https://www.linkedin.com/in/${member.linkedin}`}
                rel="noopener noreferrer"
                target="_blank"
                title="LinkedIn"
            >
                <ButtonLinkedIn />
            </Icon>
        )}
        {member.github && (
            <Icon
                href={`https://github.com/${member.github}`}
                rel="noopener noreferrer"
                target="_blank"
                title="GitHub"
            >
                <ButtonGithub />
            </Icon>
        )}
        {member.twitter && (
            <Icon
                href={`https://twitter.com/${member.twitter}`}
                rel="noopener noreferrer"
                target="_blank"
                title="Twitter"
            >
                <ButtonTwitter />
            </Icon>
        )}
    </Links>
)

MemberLinks.propTypes = {
    member: PropTypes.object.isRequired
}

export default MemberLinks
