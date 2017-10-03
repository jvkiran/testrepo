import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import jsonp from 'jsonp';
import Input from '../components/Input';
import Button from '../components/Button';
import cross from '../assets/misc/cross.svg';
import { colors, transitions, responsive } from '../styles';

const StyledLightbox = styled.div`
  background: rgba(${colors.black}, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  transition: ${transitions.short};
  opacity: ${({ show }) => (show ? '1' : '0')};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`;

const StyledHitbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const StyledCard = styled.div`
  margin: 1rem;
  padding: 6rem;
  width: 100%;
  z-index: 2;
  max-width: 640px;
  border-radius: 2px;
  position: relative;
  background: rgb(${colors.white});
  @media screen and (${responsive.sm.max}) {
    padding: 4rem 1rem;
  }
`;

const StyledClose = styled.img`
  position: absolute;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  top: 1.5rem;
  right: 1.5rem;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledMessage = styled.p`
  position: absolute;
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
  width: calc(100% - 12rem);
  @media screen and (${responsive.sm.max}) {
    width: calc(100% - 2rem);
  }
`;

const forms = {
  buy: [
    'Your Name',
    'type@youremail.com',
    'Company Name',
    'Tell us why you would like to get data',
    'Join the Data Consumers',
    '//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13&amp;id=482c337540'
  ],
  sell: [
    'Your Name',
    'type@youremail.com',
    'Company Name',
    'Tell us why you would like to publish data',
    'Join the Data Providers',
    '//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13&amp;id=b402d6b267'
  ],
  contribute: [
    'Your Name',
    'type@youremail.com',
    'Your Role',
    'Tell us how you would like to contribute',
    'Join the Ocean Community',
    '//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13&amp;id=3c6eed8b71'
  ]
};

class Modal extends Component {
  state = {
    fetching: false,
    message: ''
  };
  componentDidUpdate() {
    if (!this.props.modal) {
      document.getElementsByTagName('html')[0].style.overflow = 'auto';
    } else {
      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    }
  }
  onSubmit = e => {
    e.preventDefault();
    let name, email, company, message, url;
    if (!this.name.state.input || this.name.state.input.length < 3) {
      this.setState({
        message: 'Please check the name'
      });
      return;
    } else {
      name = encodeURIComponent(this.name.state.input);
    }

    if (!this.email.state.input || this.email.state.input.length < 5 || this.email.state.input.indexOf('@') === -1) {
      this.setState({
        message: 'Please check the email'
      });
      return;
    } else {
      email = encodeURIComponent(this.email.state.input);
    }

    if (!this.company.state.input || this.company.state.input.length < 3) {
      this.setState({
        message: 'Please check the company'
      });
      return;
    } else {
      company = encodeURIComponent(this.company.state.input);
    }

    if (!this.message.state.input || this.message.state.input.length < 3) {
      this.setState({
        message: 'Please check the message'
      });
      return;
    } else {
      message = encodeURIComponent(this.message.state.input);
    }

    if (this.props.modal === 'contribute') {
      url = `${forms[this.props.modal][5]}&NAME=${name}&EMAIL=${email}&ROLE=${company}&MESSAGE=${message}`;
    } else {
      url = `${forms[this.props.modal][5]}&NAME=${name}&EMAIL=${email}&COMPANY=${company}&MESSAGE=${message}`;
    }

    this.setState(
      {
        fetching: true,
        message: ''
      },
      () =>
        jsonp(
          url,
          {
            param: 'c'
          },
          (err, data) => {
            if (err) {
              this.setState({
                fetching: false,
                message: err
              });
            } else if (data.result !== 'success') {
              this.setState({
                fetching: false,
                message: data.msg
              });
            } else {
              this.setState({
                fetching: false,
                message: data.msg
              });
            }
          }
        )
    );
  };
  render() {
    const { modal, toggle, ...props } = this.props;
    return (
      <StyledLightbox show={!!modal} {...props}>
        <StyledHitbox onClick={() => toggle()} />
        <StyledCard>
          <StyledClose src={cross} alt="close" onClick={() => toggle()} />
          {!!modal && (
            <form onSubmit={this.onSubmit}>
              <Input ref={node => (this.name = node)} type="text" placeholder={forms[modal][0]} />
              <Input type="email" ref={node => (this.email = node)} placeholder={forms[modal][1]} />
              <Input ref={node => (this.company = node)} type="text" placeholder={forms[modal][2]} />
              <Input
                ref={node => (this.message = node)}
                type="textarea"
                maxLength={255}
                rows="6"
                placeholder={forms[modal][3]}
              />
              <Button fetching={this.state.fetching} type="submit">
                {forms[modal][4]}
              </Button>
              {!!this.state.message && <StyledMessage>{this.state.message}</StyledMessage>}
            </form>
          )}
        </StyledCard>
      </StyledLightbox>
    );
  }
}

Modal.propTypes = {
  modal: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired
};

export default Modal;
