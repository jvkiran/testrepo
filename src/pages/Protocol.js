import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from '../templates/Page'
import ProjectIntro from '../sections/ProjectIntro/ProjectIntro'
import Docs from '../sections/Docs'
import Roadmap from '../sections/Roadmap'
import People from '../sections/People'
import Collaborators from '../sections/Collaborators'
import Usecases from '../sections/Usecases'
import MorePages from '../sections/MorePages'
import Papers from '../sections/Papers'
import content from '../data/pages/protocol.json'

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
                headerViewport
                headerFullWidth
                headerAddition={<ProjectIntro />}
                headerStyle={{ backgroundSize: 'contain' }}
            >
                <Docs />
                <Roadmap />
                <Papers />
                <People />
                <Collaborators />
                <Usecases />
                <MorePages />
            </Page>
        )
    }
}
