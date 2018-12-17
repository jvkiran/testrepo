import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from '../templates/Page'
import ProjectIntro from '../sections/ProjectIntro'
import Docs from '../sections/Docs'
import Roadmap from '../sections/Roadmap'
import Usecases from '../sections/Usecases'
import Papers from '../sections/Papers'
import Modal from '../sections/Modal/Modal'
import content from '../data/pages/protocol.json'

export default class Project extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    }

    state = {
        showModal: false,
        modal: ''
    }

    toggleModal = modal => {
        this.setState({
            modal,
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <Page
                title={content.title}
                description={content.description}
                location={this.props.location}
            >
                <ProjectIntro toggleModal={this.toggleModal} />
                <h1>Features</h1>
                <Docs />
                <Roadmap />
                <Papers />
                <Usecases />

                {this.state.showModal && (
                    <Modal modal={this.state.modal} toggle={this.toggleModal} />
                )}
            </Page>
        )
    }
}
