import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as ButtonTelegram } from '../../assets/buttons/telegram.svg'
import { ReactComponent as ButtonGitter } from '../../assets/buttons/gitter.svg'
import { ReactComponent as ButtonTwitter } from '../../assets/buttons/twitter.svg'
import { ReactComponent as ButtonMedium } from '../../assets/buttons/medium.svg'
import { ReactComponent as ButtonGithub } from '../../assets/buttons/github.svg'
import { social } from '../../constants'
import { SocialBand, SocialLink } from './SocialHero.css'
import Bounties from './Bounties'

const actions = [
    {
        name: 'GitHub',
        link: social.github,
        icon: ButtonGithub
    },
    {
        name: 'Telegram Chat',
        link: social.telegram,
        icon: ButtonTelegram
    },
    {
        name: 'Gitter',
        link: social.gitter,
        icon: ButtonGitter
    },
    {
        name: 'Twitter',
        link: social.twitter,
        icon: ButtonTwitter
    },
    {
        name: 'Blog',
        link: social.blog,
        icon: ButtonMedium
    }
]

const SocialIcon = ({ icon }) => {
    const IconName = icon
    return <IconName />
}

SocialIcon.propTypes = {
    icon: PropTypes.any
}

export default class SocialHero extends PureComponent {
    render() {
        return (
            <SocialBand>
                {actions.map(action => (
                    <SocialLink
                        key={action.name}
                        href={action.link}
                        important={action.important ? true : null}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <SocialIcon icon={action.icon} />
                        {action.name}
                    </SocialLink>
                ))}

                <Bounties />
            </SocialBand>
        )
    }
}
