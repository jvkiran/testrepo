import React, { PureComponent } from 'react'
import axios from 'axios'
import SocialIcon from '../../components/SocialIcon'
import {
    StyledHeaderAddition,
    Engage,
    EngageButton,
    VividCommunity,
    CommunityNumber
} from './CommunityHeader.css'
import { social, webtasks } from '../../constants'
import { actions } from '../../data/pages/community.json'

import { ReactComponent as ButtonTelegram } from '../../assets/buttons/telegram.svg'
import { ReactComponent as ButtonTwitter } from '../../assets/buttons/twitter.svg'
import { ReactComponent as ButtonMedium } from '../../assets/buttons/medium.svg'
import { ReactComponent as ButtonGithub } from '../../assets/buttons/github.svg'
import { ReactComponent as ButtonGitcoin } from '../../assets/buttons/gitcoin.svg'

const arrSum = arr => arr.reduce((a, b) => a + b, 0)

const numberUnits = [
    {
        key: 'twitter',
        title: 'Twitter followers',
        link: social.twitter,
        tooltip: 'Number of Twitter followers.',
        icon: ButtonTwitter
    },
    {
        key: 'telegram',
        title: 'Telegram members',
        link: social.telegram,
        tooltip: 'Number of Telegram group members.',
        icon: ButtonTelegram
    },
    {
        key: 'medium',
        title: 'Blog followers',
        link: social.blog,
        tooltip: 'Number of followers on Medium.',
        icon: ButtonMedium
    },
    {
        key: 'github',
        title: 'GitHub stargazers',
        link: social.github,
        tooltip: 'Number of stars across all repositories.',
        icon: ButtonGithub
    },
    {
        key: 'bounties',
        title: 'Bounties',
        link: social.bountiesNetwork,
        tooltip: 'Number of open and completed bounties.',
        icon: ButtonGitcoin
    }
]

class CommunityCounts extends PureComponent {
    state = {
        twitter: '11.8k',
        telegram: '7.5k',
        medium: '2.5k',
        github: '---',
        bounties: '--'
    }

    axiosInstance = axios.create({
        method: 'get',
        timeout: 10000, // 10 sec.
        headers: {
            'Content-Type': 'application/json'
        }
    })

    fetchGitHubNumber = async () => {
        try {
            const response = await this.axiosInstance(webtasks.github)

            let numbers = []

            response.data.map(item => {
                if (item.stars) {
                    return numbers.push(item.stars)
                }
                return null
            })

            this.setState({ github: arrSum(numbers) })
        } catch (error) {
            console.log(error) // eslint-disable-line no-console
        }
    }

    fetchBountiesNumber = async () => {
        try {
            const response = await this.axiosInstance(
                `${webtasks.host}/bounties`
            )

            const bounties = response.data.total
            this.setState({ bounties })
        } catch (error) {
            console.log(error) // eslint-disable-line no-console
        }
    }

    componentDidMount() {
        this.fetchGitHubNumber()
        this.fetchBountiesNumber()
    }

    render() {
        return (
            <VividCommunity>
                {numberUnits.map(numberUnit => (
                    <li key={numberUnit.key}>
                        <a href={numberUnit.link} title={numberUnit.tooltip}>
                            <CommunityNumber>
                                <SocialIcon icon={numberUnit.icon} />
                                {this.state[numberUnit.key]}
                            </CommunityNumber>
                            <span>{numberUnit.title}</span>
                        </a>
                    </li>
                ))}
            </VividCommunity>
        )
    }
}

export default class CommunityHeader extends PureComponent {
    render() {
        return (
            <StyledHeaderAddition>
                <Engage>
                    {actions.map(action => (
                        <li key={action.title}>
                            <EngageButton href={action.link}>
                                {action.title}
                            </EngageButton>
                        </li>
                    ))}
                </Engage>
                <CommunityCounts />
            </StyledHeaderAddition>
        )
    }
}
