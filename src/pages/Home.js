import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from '../templates/Page'
import Welcome from '../sections/Welcome/Welcome'

export default class Home extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    }

    render() {
        return (
            <Page location={this.props.location} noabsolute noheader>
                <Welcome />
                <h1>Overview</h1>
                <h1>KYC</h1>
                <h1>Media Mentions</h1>
            </Page>
        )
    }
}
