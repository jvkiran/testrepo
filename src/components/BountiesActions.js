import React, { PureComponent } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import SocialIcon from '../components/SocialIcon'
import Button from '../components/Button'
import { social, webtasks } from '../constants'
import { StyledBounties } from './BountiesActions.css'

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
        <SocialIcon icon={'bountiesNetwork'} />
    ) : (
        <SocialIcon icon={'gitcoin'} />
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

    url = webtasks.bounties
    signal = axios.CancelToken.source()

    componentDidMount() {
        this.getNetworks()
    }

    componentWillUnmount() {
        this.signal.cancel()
    }

    getNetworks = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: this.url,
                timeout: 10000, // 10 sec.
                headers: {
                    'Content-Type': 'application/json'
                },
                cancelToken: this.signal.token
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

    render() {
        const { networks } = this.state

        return (
            <StyledBounties {...this.props}>
                {Object.keys(networks).map(network => (
                    <Button
                        key={network}
                        href={social[network]}
                        important={networks[network] && networks[network] > 0}
                        border
                        small
                    >
                        <BountiesIcon network={network} />
                        <BountiesText data={networks[network]} />
                        <BountiesTextAppend network={network} />
                    </Button>
                ))}
            </StyledBounties>
        )
    }
}
