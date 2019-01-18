import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as ButtonTelegram } from '../assets/buttons/telegram.svg'
import { ReactComponent as ButtonTwitter } from '../assets/buttons/twitter.svg'
import { ReactComponent as ButtonMedium } from '../assets/buttons/medium.svg'
import { ReactComponent as ButtonGithub } from '../assets/buttons/github.svg'
import { ReactComponent as ButtonGitter } from '../assets/buttons/gitter.svg'
import { ReactComponent as ButtonGitcoin } from '../assets/buttons/gitcoin.svg'
import { ReactComponent as ButtonBountiesNetwork } from '../assets/buttons/bountiesnetwork.svg'
import { ReactComponent as ButtonLinkedin } from '../assets/buttons/linkedin.svg'
import { ReactComponent as ButtonYouTube } from '../assets/buttons/youtube.svg'
import { ReactComponent as ButtonReddit } from '../assets/buttons/reddit.svg'
import { ReactComponent as ButtonSlack } from '../assets/buttons/slack.svg'

export default class SocialIcon extends PureComponent {
    static propTypes = {
        icon: PropTypes.string
    }

    render() {
        switch (this.props.icon) {
            case 'medium':
                return <ButtonMedium />
            case 'twitter':
                return <ButtonTwitter />
            case 'telegram':
                return <ButtonTelegram />
            case 'github':
                return <ButtonGithub />
            case 'gitcoin':
                return <ButtonGitcoin />
            case 'gitter':
                return <ButtonGitter />
            case 'bountiesNetwork':
                return <ButtonBountiesNetwork />
            case 'linkedin':
                return <ButtonLinkedin />
            case 'youtube':
                return <ButtonYouTube />
            case 'reddit':
                return <ButtonReddit />
            case 'slack':
                return <ButtonSlack />
            default:
                return null
        }
    }
}
