import React, { PureComponent } from 'react'
import axios from 'axios'
import {
    StyledHeaderAddition,
    Engage,
    VividCommunity,
    CommunityNumber
} from './CommunityHeader.css'

const arrSum = arr => arr.reduce((a, b) => a + b, 0)

class CommunityCounts extends PureComponent {
    state = {
        twitter: '11.8k',
        telegram: '7.5k',
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
                if (item.stars) return numbers.push(item.stars)
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
                <li>
                    <CommunityNumber>{this.state.twitter}</CommunityNumber>
                    <span>Twitter followers</span>
                </li>
                <li>
                    <CommunityNumber>{this.state.telegram}</CommunityNumber>
                    <span>Telegram members</span>
                </li>
                <li title="Total number of stars across all repositories.">
                    <CommunityNumber>{this.state.github}</CommunityNumber>
                    <span>GitHub stargazers</span>
                </li>
                <li title="Total number of open and completed bounties.">
                    <CommunityNumber>{this.state.bounties}</CommunityNumber>
                    <span>Bounties</span>
                </li>
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
