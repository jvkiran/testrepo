import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from '../templates/Page'
import People from '../sections/People'
import Collaborators from '../sections/Collaborators'
import content from '../data/pages/about.json'

export default class Project extends Component {
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
                <People />
                <Collaborators />
            </Page>
        )
    }
}
