import React, { PureComponent } from 'react'
import axios from 'axios'
import Helmet from 'react-helmet'
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
        networks: ''
    }

    url =
        'https://wt-bfc3ae9804422f8a4ea114dc7c403296-0.sandbox.auth0-extend.com/bounties'

    getNetworks = async () => {
        const response = await axios.get(this.url)
        const networks = response.data
        this.setState({ networks })
    }

    componentDidMount() {
        this.getNetworks()
    }

    componentWillUnmount() {
        this.setState({ networks: '' })
    }

    render() {
        const { gitcoin, bountiesNetwork } = this.state.networks

        return (
            <>
                <Helmet>
                    <link rel="preconnect" href={this.url} />
                </Helmet>
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
                            {bountiesNetwork.length > 0 &&
                                bountiesNetwork.length}
                            <BountiesText data={bountiesNetwork} />
                            {' on bounties.network'}
                        </Bounty>
                    )}
                </StyledBounties>
            </>
        )
    }
}
