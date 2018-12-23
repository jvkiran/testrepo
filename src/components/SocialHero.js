import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SocialIcon from '../components/SocialIcon'
import { social } from '../constants'
import { SocialBand, SocialLink } from './SocialHero.css'
import Bounties from './BountiesActions'

const actions = [
    {
        name: 'Check us out on GitHub',
        link: social.github,
        key: 'github'
    },
    {
        name: 'Telegram Chat',
        link: social.telegram,
        key: 'telegram'
    },
    {
        name: 'Telegram News',
        link: social.telegram_news,
        key: 'telegram'
    },
    {
        name: 'Gitter',
        link: social.gitter,
        key: 'gitter'
    },
    {
        name: 'Twitter',
        link: social.twitter,
        key: 'twitter'
    },
    {
        name: 'Blog',
        link: social.medium,
        key: 'medium'
    }
]

export default class SocialHero extends PureComponent {
    static propTypes = {
        light: PropTypes.bool,
        nobounties: PropTypes.bool,
        items: PropTypes.array
    }

    render() {
        const { light, nobounties, items } = this.props

        return (
            <SocialBand {...this.props}>
                {actions.map(action => {
                    if (items && !items.includes(action.key)) return null

                    return (
                        <SocialLink
                            key={action.name}
                            href={action.link}
                            important={action.important ? true : null}
                            rel="noopener noreferrer"
                            target="_blank"
                            light={light}
                        >
                            <SocialIcon icon={action.key} />
                            {action.name}
                        </SocialLink>
                    )
                })}

                {!nobounties && <Bounties />}
            </SocialBand>
        )
    }
}
