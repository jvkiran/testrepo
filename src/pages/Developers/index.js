import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from '../../templates/Page'
import Docs from '../../sections/Docs'
import DataScience from '../../sections/DataScience'
import MorePages from '../../sections/MorePages'
import content from '../../data/pages/developers.json'
import OceanSquidBack from '@oceanprotocol/art/squid/squid-back.svg'
import { colors } from '../../styles'
import Header from './Header'

export default class Developers extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    }

    render() {
        return (
            <Page
                title={content.title}
                description={content.description}
                location={this.props.location}
                headerBackgroundColor={colors.darkPurple}
                headerBackgroundImage={OceanSquidBack}
                headerAddition={<Header />}
                headerViewport
            >
                <Docs />
                <DataScience />
                <MorePages />
            </Page>
        )
    }
}
