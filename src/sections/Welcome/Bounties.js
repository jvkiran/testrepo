import React, { PureComponent } from 'react'
import axios from 'axios'
import { ReactComponent as ButtonGitcoin } from '../../assets/buttons/gitcoin.svg'
import { social } from '../../constants'
import { StyledBounties, Bounty } from './Bounties.css'

const BountiesText = ({ data }) => {
    if (data.length === 0) {
        return 'No open bounties'
    } else if (data.length === 1) {
        return ' open bounty'
    }
    return ' open bounties'
}

export default class Bounties extends PureComponent {
    state = {
        gitcoin: null,
        bountiesNetwork: null
    }

    getGitcoinBounties = async () => {
        const response = await axios.get('https://gitcoin.co/api/v0.1/bounties/')

        const gitcoin = response.data

        this.setState({
            gitcoin: gitcoin.filter(
                item => item.funding_organisation.includes('Ocean Protocol')
            )
        })
    }

    getBountiesNetworkBounties = async () => {
        // 742 is categopry ID for 'ocean protocol'
        const response = await axios.get('https://new.api.bounties.network/bounty/1407')
        const bountiesNetwork = response.data

        this.setState({ bountiesNetwork })
        console.log(bountiesNetwork)
    }

    componentDidMount() {
        this.getGitcoinBounties()
        this.getBountiesNetworkBounties()
    }

    render() {
        const { gitcoin } = this.state

        return (
            <StyledBounties>
                {gitcoin && (
                    <Bounty
                        href={social.gitcoin}
                        title="Gitcoin bounties"
                        important={gitcoin.length > 0}
                    >
                        <ButtonGitcoin />
                        {gitcoin.length > 0 && gitcoin.length}
                        <BountiesText data={gitcoin} />
                        {' on Gitcoin'}
                    </Bounty>
                )}
            </StyledBounties>
        )
    }
}
