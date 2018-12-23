import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from '../../templates/Page'
import Ambassadors from '../../sections/Ambassadors'
import Events from '../../sections/Events'
import Blog from '../../sections/Blog'
import Videos from '../../sections/Videos'
import MorePages from '../../sections/MorePages'
import content from '../../data/pages/community.json'
import { colors } from '../../styles'
import OceanMantarayBack from '@oceanprotocol/art/mantaray/mantaray-back.svg'
import Header from './Header'

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
                headerBackgroundColor={colors.white}
                headerBackgroundImage={OceanMantarayBack}
                headerViewport
                headerFullWidth
                headerLeft
                headerAddition={<Header />}
            >
                <Events />
                <Ambassadors />
                <h1 id="bounties">Bounties</h1>
                <Blog />
                <Videos />
                <h1>Team</h1>
                <MorePages />
            </Page>
        )
    }
}
