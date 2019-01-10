import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from '../templates/Page'
import Welcome from '../sections/Welcome/Welcome'
import MorePages from '../sections/MorePages'
import MediaMentions from '../sections/MediaMentions'

export default class Home extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    }

    render() {
        return (
            <Page location={this.props.location} noheader>
                <Welcome />
                <MorePages />
                <MediaMentions />
            </Page>
        )
    }
}
