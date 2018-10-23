import React, { PureComponent } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { ReactComponent as ButtonGitcoin } from '../../assets/buttons/gitcoin.svg'
import { ReactComponent as ButtonBountiesNetwork } from '../../assets/buttons/bountiesnetwork.svg'
import { social, webtasks } from '../../constants'
import { StyledBounties, Bounty } from './Bounties.css'

const BountiesText = ({ data }) => {
    if (data) {
        const count = data.length

        if (data.length === 0) {
            return 'No open bounties'
        } else if (data.length === 1) {
            return `${count} open bounty`
        }
        return `${count} open bounties`
    } else {
        return 'Bounties'
    }
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
            gitcoin: {},
            bountiesNetwork: {}
        }
    }

    url = webtasks.host + '/bounties'

    getNetworks = async () => {
        try {
            const response = await axios.get(this.url)
            const networks = response.data
            this.setState({ networks })
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
                        important={
                            networks[network] && networks[network].length > 0
                        }
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
