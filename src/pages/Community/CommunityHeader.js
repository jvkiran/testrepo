import React, { PureComponent } from 'react'
import {
    StyledHeaderAddition,
    Engage,
    VividCommunity,
    CommunityNumber
} from './CommunityHeader.css'

class CommunityCounts extends PureComponent {
    state = {
        twitter: 0,
        telegram: 0,
        github: 0,
        bounties: 0
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
                <li>
                    <CommunityNumber>{this.state.github}</CommunityNumber>
                    <span>GitHub stargazers</span>
                </li>
                <li>
                    <CommunityNumber>{this.state.bounties}</CommunityNumber>
                    <span>open bounties</span>
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
