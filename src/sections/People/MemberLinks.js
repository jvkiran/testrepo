import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as ButtonWebsite } from '../../assets/buttons/website.svg'
import { ReactComponent as ButtonLinkedIn } from '../../assets/buttons/linkedin.svg'
import { ReactComponent as ButtonTwitter } from '../../assets/buttons/twitter.svg'
import { ReactComponent as ButtonGithub } from '../../assets/buttons/github.svg'
import { IconLink, Links } from './MemberLinks.css'

const utm = '?utm_source=oceanprotocol.com'

const MemberLinks = ({ member }) => (
    <Links>
        {member.website && (
            <IconLink
                href={`${member.website}${utm}`}
                rel="noopener"
                target="_blank"
                title="Website"
            >
                <ButtonWebsite />
            </IconLink>
        )}
        {member.linkedin && (
            <IconLink
                href={`https://www.linkedin.com/in/${member.linkedin}`}
                rel="noopener noreferrer"
                target="_blank"
                title="LinkedIn"
            >
                <ButtonLinkedIn />
            </IconLink>
        )}
        {member.github && (
            <IconLink
                href={`https://github.com/${member.github}`}
                rel="noopener noreferrer"
                target="_blank"
                title="GitHub"
            >
                <ButtonGithub />
            </IconLink>
        )}
        {member.twitter && (
            <IconLink
                href={`https://twitter.com/${member.twitter}`}
                rel="noopener noreferrer"
                target="_blank"
                title="Twitter"
            >
                <ButtonTwitter />
            </IconLink>
        )}
    </Links>
)

MemberLinks.propTypes = {
    member: PropTypes.object.isRequired
}

export default MemberLinks
