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
                        <SocialIcon icon={action.key} />
                        {action.name}
                    </SocialLink>
                ))}

                {!this.props.nobounties && <Bounties />}
            </SocialBand>
        )
    }
}
