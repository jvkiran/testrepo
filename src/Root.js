import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './sections/Menu';
import Welcome from './sections/Welcome';
import Project from './sections/Project';
import Data from './sections/Data';
import Documentation from './sections/Documentation';
import Team from './sections/Team';
import Blog from './sections/Blog';
import Footer from './sections/Footer';
import Modal from './sections/Modal';

const StyledRoot = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
`;
class Root extends Component {
  state = {
    modal: ''
  };
  toggleModal = (modal = '') => this.setState({ modal });
  render = () => (
    <StyledRoot>
      <Menu />
      <Welcome />
      <Project toggleModal={this.toggleModal} />
      <Documentation />
      <Data />
      <Team toggleModal={this.toggleModal} />
      <Blog />
      <Footer />
      <Modal modal={this.state.modal} toggle={this.toggleModal} />
    </StyledRoot>
  );
}

export default Root;
