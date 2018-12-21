import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from '../templates/Page'
import Welcome from '../sections/Welcome/Welcome'
import Token from '../sections/Token'
import Overview from '../sections/Overview'
import MediaMentions from '../sections/MediaMentions'

export default class Home extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    }

    render() {
        return (
            <Page location={this.props.location} noheader>
                <Welcome />
                <Token />
                <MediaMentions />
                <Overview />
            </Page>
        )
    }
}
