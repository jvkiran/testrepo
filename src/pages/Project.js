import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/SEO'
import Menu from '../sections/Menu'
import ProjectIntro from '../sections/ProjectIntro'
import Docs from '../sections/Docs'
import Roadmap from '../sections/Roadmap'
import Usecases from '../sections/Usecases'
import Papers from '../sections/Papers'
import Modal from '../sections/Modal/Modal'
import OceanBanner01 from '@oceanprotocol/art/banner/banner-ocean-01@2x.png'
import content from '../data/pages/project.json'

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
            <>
                <SEO
                    description={content.description}
                    image={OceanBanner01}
                    path={this.props.location.pathname}
                    title={content.title}
                />
                <Menu />
                <h1>Header</h1>
                <ProjectIntro toggleModal={this.toggleModal} />
                <h1>Features</h1>
                <Docs />
                <Roadmap />
                <Papers />
                <Usecases />

                {this.state.showModal && (
                    <Modal modal={this.state.modal} toggle={this.toggleModal} />
                )}
            </>
        )
    }
}
