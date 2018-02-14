import React, { Component } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Menu from './sections/Menu'
import Welcome from './sections/Welcome'
import Project from './sections/Project'
import Data from './sections/Data'
import DataVideo from './sections/DataVideo'
import Papers from './sections/Papers'
import Events from './sections/Events'
import Team from './sections/Team'
import Blog from './sections/Blog'
import Faq from './sections/Faq'
import Footer from './sections/Footer'
import Modal from './sections/Modal'

const StyledRoot = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
`

const Meta = () => {
    if (window.location.hostname === 'beta.oceanprotocol.com') {
        return (
            <Helmet>
                <meta content="noindex,nofollow" name="robots" />
            </Helmet>
        )
    } else return []
}

class Root extends Component {
  state = {
      modal: ''
  };
  toggleModal = (modal = '') => this.setState({ modal });
  render = () => (
      <StyledRoot>
          <Meta />
          <Menu />
          <Welcome />
          <Events />
          <Project toggleModal={this.toggleModal} />
          <DataVideo />
          <Papers />
          <Data />
          <Team toggleModal={this.toggleModal} />
          <Blog />
          <Faq />
          <Footer />
          <Modal modal={this.state.modal} toggle={this.toggleModal} />
      </StyledRoot>
  );
}

export default Root
