import React, { PureComponent } from 'react'
import axios from 'axios'
import { ReactComponent as ButtonGitcoin } from '../../assets/buttons/gitcoin.svg'
import { ReactComponent as ButtonBountiesNetwork } from '../../assets/buttons/bountiesnetwork.svg'
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

        const gitcoin = response.data // returns only open bounties by default

        this.setState({
            gitcoin: gitcoin.filter(
                // filter the response manually, no way atm to do that as API query
                item => item.funding_organisation.includes('Ocean Protocol')
            )
        })
    }

    getBountiesNetworkBounties = async () => {
        // get all bounties with 'ocean protocol' in title, description, or categories
        // TODO: consider pagination, returns 25 items per page
        const response = await axios.get('https://new.api.bounties.network/bounty/?search=ocean%20protocol&bountyStage=1')
        const bountiesNetwork = response.data.results

        this.setState({ bountiesNetwork })
    }

    componentDidMount() {
        this.getGitcoinBounties()
        this.getBountiesNetworkBounties()
    }

    componentWillUnmount() {
        this.setState({
            gitcoin: null,
            bountiesNetwork: null
        })
    }

    render() {
        const { gitcoin, bountiesNetwork } = this.state

        return (
            <StyledBounties>
                {gitcoin && (
                    <Bounty
                        href={social.gitcoin}
                        important={gitcoin.length > 0}
                    >
                        <ButtonGitcoin />
                        {gitcoin.length > 0 && gitcoin.length}
                        <BountiesText data={gitcoin} />
                        {' on Gitcoin'}
                    </Bounty>
                )}

                {bountiesNetwork && (
                    <Bounty
                        href={social.bountiesNetwork}
                        important={bountiesNetwork.length > 0}
                    >
                        <ButtonBountiesNetwork />
                        {bountiesNetwork.length > 0 && bountiesNetwork.length}
                        <BountiesText data={bountiesNetwork} />
                        {' on bounties.network'}
                    </Bounty>
                )}
            </StyledBounties>
        )
    }
}
