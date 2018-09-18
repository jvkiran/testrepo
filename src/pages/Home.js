import React, { Component, Fragment } from 'react'
import SEO from '../components/SEO'
import Menu from '../sections/Menu'
import Welcome from '../sections/Welcome/Welcome'
import Project from '../sections/Project'
import Data from '../sections/Data'
import Papers from '../sections/Papers'
import Events from '../sections/Events'
import People from '../sections/People/People'
import Contributors from '../sections/Contributors/Contributors'
import Blog from '../sections/Blog'
import Videos from '../sections/Videos'
import Faq from '../sections/Faq'
import Modal from '../sections/Modal/Modal'
import Art from '../sections/Art'

export default class Home extends Component {
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
            <Fragment>
                <SEO />
                <Menu />
                <Welcome />
                <Events />
                <Project toggleModal={this.toggleModal} />
                <Papers />
                <Data />
                <People toggleModal={this.toggleModal} />
                <Contributors />
                <Blog />
                <Videos />
                <Faq />
                <Art />

                {this.state.showModal && <Modal modal={this.state.modal} toggle={this.toggleModal} />}
            </Fragment>
        )
    }
}
