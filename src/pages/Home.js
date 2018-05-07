import React, { Component, Fragment } from 'react'
import Menu from '../sections/Menu'
import Welcome from '../sections/Welcome'
import Project from '../sections/Project'
import Data from '../sections/Data'
import Papers from '../sections/Papers'
import Events from '../sections/Events'
import Team from '../sections/Team'
import Blog from '../sections/Blog'
import Videos from '../sections/Videos'
import Faq from '../sections/Faq'
import Modal from '../sections/Modal'
import Art from '../sections/Art'

class Home extends Component {
    state = {
        modal: ''
    }

    toggleModal = (modal = '') => this.setState({ modal })

    render = () => (
        <Fragment>
            <Menu />
            <Welcome />
            <Events />
            <Project toggleModal={this.toggleModal} />
            <Papers />
            <Data />
            <Team toggleModal={this.toggleModal} />
            <Blog />
            <Videos />
            <Faq />
            <Art />
            <Modal modal={this.state.modal} toggle={this.toggleModal} />
        </Fragment>
    )
}

export default Home
