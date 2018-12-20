import React, { PureComponent } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { ReactComponent as ButtonGitcoin } from '../assets/buttons/gitcoin.svg'
import { ReactComponent as ButtonBountiesNetwork } from '../assets/buttons/bountiesnetwork.svg'
import { social, webtasks } from '../constants'
import { StyledBounties, Bounty } from './BountiesActions.css'

const BountiesText = ({ data }) => {
    if (data !== undefined) {
        if (data === 0) return 'No open bounties'
        if (data === 1) return `${data} open bounty`
        return `${data} open bounties`
    }
    return 'Bounties'
}

const BountiesTextAppend = ({ network }) =>
    network === 'bountiesNetwork' ? ' on bounties.network' : ' on Gitcoin'

const BountiesIcon = ({ network }) =>
    network === 'bountiesNetwork' ? (
        <ButtonBountiesNetwork />
    ) : (
        <ButtonGitcoin />
    )

BountiesIcon.propTypes = {
    network: PropTypes.string.isRequired
}

export default class Bounties extends PureComponent {
    state = {
        networks: {
            gitcoin: undefined,
            bountiesNetwork: undefined
        }
    }

    url = webtasks.host + '/bounties'

    getNetworks = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: this.url,
                timeout: 10000, // 10 sec.
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const networks = response.data
            this.setState({
                networks: {
                    gitcoin: networks.gitcoin,
                    bountiesNetwork: networks.bountiesNetwork
                }
            })
        } catch (error) {
            console.log(error) // eslint-disable-line no-console
        }
    }

    componentDidMount() {
        this.getNetworks()
    }

    render() {
        const { networks } = this.state

        return (
            <StyledBounties>
                {Object.keys(networks).map(network => (
                    <Bounty
                        key={network}
                        href={social[network]}
                        important={networks[network] && networks[network] > 0}
                    >
                        <BountiesIcon network={network} />
                        <BountiesText data={networks[network]} />
                        <BountiesTextAppend network={network} />
                    </Bounty>
                ))}
            </StyledBounties>
        )
    }
}
