import React, { Component, Fragment } from 'react'
import LazyLoad from 'react-lazyload'
import FadeIn from '../components/FadeIn'
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

class Home extends Component {
    state = {
        modal: ''
    }

    toggleModal = (modal = '') => this.setState({ modal })

    render = () => (
        <Fragment>
            <Menu />
            <Welcome />
            <LazyLoad once height={700}>
                <FadeIn>
                    <Events />
                </FadeIn>
            </LazyLoad>
            <LazyLoad once height={700}>
                <FadeIn>
                    <Project toggleModal={this.toggleModal} />
                </FadeIn>
            </LazyLoad>
            <LazyLoad once height={700}>
                <FadeIn>
                    <Papers />
                </FadeIn>
            </LazyLoad>
            <LazyLoad once height={700}>
                <FadeIn>
                    <Data />
                </FadeIn>
            </LazyLoad>
            <LazyLoad once height={700}>
                <FadeIn>
                    <Team toggleModal={this.toggleModal} />
                </FadeIn>
            </LazyLoad>
            <LazyLoad once height={700}>
                <FadeIn>
                    <Blog />
                </FadeIn>
            </LazyLoad>
            <LazyLoad once height={700}>
                <FadeIn>
                    <Videos />
                </FadeIn>
            </LazyLoad>
            <LazyLoad once height={700}>
                <FadeIn>
                    <Faq />
                </FadeIn>
            </LazyLoad>
            <Modal modal={this.state.modal} toggle={this.toggleModal} />
        </Fragment>
    )
}

export default Home
