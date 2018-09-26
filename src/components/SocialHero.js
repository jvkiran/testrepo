import React from 'react'
import buttonTelegram from '../assets/buttons/telegram.svg'
import buttonGitter from '../assets/buttons/gitter.svg'
import buttonTwitter from '../assets/buttons/twitter.svg'
import buttonMedium from '../assets/buttons/medium.svg'
import { social } from '../constants'
import { SocialBand, SocialLink } from './SocialHero.css'

const actions = [
    {
        name: 'Gitcoin Bounties',
        link: social.gitcoin,
        icon: buttonTelegram,
        important: true
    },
    {
        name: 'Telegram News Channel',
        link: social.telegram_news,
        icon: buttonTelegram
    },
    {
        name: 'Telegram Group Chat',
        link: social.telegram,
        icon: buttonTelegram
    },
    {
        name: 'Gitter',
        link: social.gitter,
        icon: buttonGitter
    },
    {
        name: 'Twitter',
        link: social.twitter,
        icon: buttonTwitter
    },
    {
        name: 'Blog',
        link: social.blog,
        icon: buttonMedium
    }
]

const SocialHero = () => (
    <SocialBand>
        {actions.map(action => (
            <SocialLink
                key={action.name}
                href={action.link}
                important={action.important ? true : null}
                rel="noopener noreferrer"
                target="_blank"
            >
                <img
                    alt={action.name}
                    src={action.icon}
                />
                {action.name}
            </SocialLink>
        ))}
    </SocialBand>
)

export default SocialHero
