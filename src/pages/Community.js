import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/SEO'
import Menu from '../sections/Menu'
import Ambassadors from '../sections/Ambassadors'
import Events from '../sections/Events'
import Blog from '../sections/Blog'
import Videos from '../sections/Videos'
import OceanBanner01 from '@oceanprotocol/art/banner/banner-ocean-01@2x.png'
import content from '../data/pages/community.json'

export default class Community extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    }

    render() {
        return (
            <>
                <SEO
                    description={content.description}
                    image={OceanBanner01}
                    path={this.props.location.pathname}
                    title={content.title}
                />
                <Menu />
                <h1>Header</h1>
                <Ambassadors />
                <h1>Bounties</h1>
                <Events />
                <Blog />
                <Videos />
                <h1>Team</h1>
            </>
        )
    }
}
