import React, { PureComponent } from 'react'
import axios from 'axios'
import {
    StyledHeaderAddition,
    Engage,
    VividCommunity,
    CommunityNumber
} from './CommunityHeader.css'
import { social } from '../../constants'

const arrSum = arr => arr.reduce((a, b) => a + b, 0)

const numberUnits = [
    {
        key: 'twitter',
        title: 'Twitter followers',
        link: social.twitter
    },
    {
        key: 'telegram',
        title: 'Telegram members',
        link: social.telegram
    },
    {
        key: 'medium',
        title: 'Blog followers',
        link: social.blog,
        tooltip: 'Numbers of followers on Medium'
    },
    {
        key: 'github',
        title: 'GitHub stargazers',
        link: social.github,
        tooltip: 'Number of stars across all repositories.'
    },
    {
        key: 'bounties',
        title: 'Bounties',
        link: social.bountiesNetwork,
        tooltip: 'Number of open and completed bounties.'
    }
]

class CommunityCounts extends PureComponent {
    state = {
        twitter: '11.8k',
        telegram: '7.5k',
        medium: '2.5k',
        github: 0,
        bounties: '15'
    }

    githubUrl = 'https://oceanprotocol-github.now.sh'

    fetchGitHubNumber = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: this.githubUrl,
                timeout: 10000, // 10 sec.
                headers: {
                    'Content-Type': 'application/json'
                }
            })

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

    componentDidMount() {
        this.fetchGitHubNumber()
    }

    render() {
        return (
            <VividCommunity>
                {numberUnits.map(numberUnit => (
                    <li key={numberUnit.key}>
                        <a href={numberUnit.link}>
                            <CommunityNumber>
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
                    <li>Become an ambassador</li>
                    <li>Participate in a bounty</li>
                    <li>Meet us at one of our events</li>
                    <li>
                        Follow us: Blog, Videos, Twitter, Telegram, GitHub,
                        Gitter
                    </li>
                </Engage>
                <CommunityCounts />
            </StyledHeaderAddition>
        )
    }
}
