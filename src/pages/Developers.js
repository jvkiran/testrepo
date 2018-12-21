import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from '../templates/Page'
import Docs from '../sections/Docs'
import DataScience from '../sections/DataScience'
import MorePages from '../sections/MorePages'
import content from '../data/pages/developers.json'

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
            >
                <Docs />
                <DataScience />
                <h1>Product Blog Posts</h1>
                <h1>Demos</h1>
                <MorePages />
            </Page>
        )
    }
}
