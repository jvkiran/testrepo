import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from '../templates/Page'
import Ambassadors from '../sections/Ambassadors'
import Events from '../sections/Events'
import Blog from '../sections/Blog'
import Videos from '../sections/Videos'
import content from '../data/pages/community.json'
import { colors } from '../styles'

export default class Community extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    }

    render() {
        return (
            <Page
                title={content.title}
                description={content.description}
                location={this.props.location}
                menuLight
                headerBackground={colors.white}
            >
                <Ambassadors />
                <h1>Bounties</h1>
                <Events />
                <Blog />
                <Videos />
                <h1>Team</h1>
            </Page>
        )
    }
}
