import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SocialIcon from '../components/SocialIcon'
import { ReactComponent as ButtonTelegram } from '../assets/buttons/telegram.svg'
import { ReactComponent as ButtonGitter } from '../assets/buttons/gitter.svg'
import { ReactComponent as ButtonTwitter } from '../assets/buttons/twitter.svg'
import { ReactComponent as ButtonMedium } from '../assets/buttons/medium.svg'
import { ReactComponent as ButtonGithub } from '../assets/buttons/github.svg'
import { social } from '../constants'
import { SocialBand, SocialLink } from './SocialHero.css'
import Bounties from '../sections/Welcome/Bounties'

const actions = [
    {
        name: 'Check us out on GitHub',
        link: social.github,
        icon: ButtonGithub
    },
    {
        name: 'Telegram Chat',
        link: social.telegram,
        icon: ButtonTelegram
    },
    {
        name: 'Telegram News',
        link: social.telegram_news,
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

export default class SocialHero extends PureComponent {
    static propTypes = {
        light: PropTypes.bool,
        nobounties: PropTypes.bool
    }

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
                        light={this.props.light}
                    >
                        <SocialIcon icon={action.icon} />
                        {action.name}
                    </SocialLink>
                ))}

                {!this.props.nobounties && <Bounties />}
            </SocialBand>
        )
    }
}
