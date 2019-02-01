import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Provider } from './createContext'

export default class AppProvider extends PureComponent {
    state = {
        country: null
    }

    static propTypes = {
        children: PropTypes.any.isRequired
    }

    componentDidMount() {
        this.getCountry()
    }

    //
    // Get user location from Cloudflare's geo location HTTP header
    // Based on https://github.com/kremalicious/portfolio/blob/master/src/store/provider.jsx#L21
    //
    getCountry = async () => {
        let trace = []

        try {
            const data = await fetch('/cdn-cgi/trace?no-cache=1')
            const text = await data.text()
            const lines = text.split('\n')
            let keyValue

            lines.forEach(line => {
                keyValue = line.split('=')
                trace[keyValue[0]] = decodeURIComponent(keyValue[1] || '')

                if (keyValue[0] === 'loc' && trace['loc'] !== 'XX') {
                    this.setState({ country: trace['loc'] })
                }
            })
        } catch (error) {
            return null // fail silently
        }
    }

    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>
    }
}
