import React from 'react'
import PropTypes from 'prop-types'
import buttonLinkedIn from '../../assets/buttons/linkedin.svg'
import buttonTwitter from '../../assets/buttons/twitter.svg'
import buttonGithub from '../../assets/buttons/github.svg'
import {
    Icon,
    Links
} from './MemberLinks.css'

const MemberLinks = ({ member }) => (
    <Links>
        {!!member.linkedin && (
            <Icon
                href={`https://www.linkedin.com/in/${member.linkedin}`}
                rel="noopener noreferrer"
                target="_blank">
                <img alt="linkedin" src={buttonLinkedIn} />
            </Icon>
        )}
        {!!member.github && (
            <Icon
                href={`https://github.com/${member.github}`}
                rel="noopener noreferrer"
                target="_blank">
                <img alt="github" src={buttonGithub} />
            </Icon>
        )}
        {!!member.twitter && (
            <Icon
                href={`https://twitter.com/${member.twitter}`}
                rel="noopener noreferrer"
                target="_blank">
                <img alt="twitter" src={buttonTwitter} />
            </Icon>
        )}
    </Links>
)

MemberLinks.propTypes = {
    member: PropTypes.object.isRequired
}

export default MemberLinks
