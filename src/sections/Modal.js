import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import jsonp from 'jsonp'
import Input from '../components/Input'
import Button from '../components/Button'
import SubTitle from '../components/SubTitle'
import cross from '../assets/misc/cross.svg'
import { colors, fonts, transitions, responsive } from '../styles'

const StyledLightbox = styled.div`
  background: rgba(${colors.black}, .7);
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
`

const StyledHitbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`

const StyledCard = styled.div`
  margin: 1rem;
  padding: 6rem;
  padding-top: 5rem;
  width: 100%;
  z-index: 2;
  max-width: 640px;
  border-radius: 2px;
  position: relative;
  background: rgb(${colors.white});

  @media screen and (${responsive.sm.max}) {
    padding: 4rem 1rem;
  }
`

const StyledClose = styled.img`
  position: absolute;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  top: 1.5rem;
  right: 1.5rem;

  &:hover {
    opacity: .7;
  }
`

const StyledMessage = styled.p`
  position: absolute;
  text-align: center;
  margin-top: 1rem;
  font-size: ${fonts.size.small};
  width: calc(100% - 12rem);
  color: rgb(${colors.red});

  @media screen and (${responsive.sm.max}) {
    width: calc(100% - 2rem);
  }
`

const forms = {
    provider: {
        title: 'Join the Data Providers',
        name: 'Your Name',
        email: 'Your Email',
        business: 'Your Company Name',
        message: 'Tell us why you would like to publish data',
        button: 'Submit',
        baseUrl: '//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13&amp;id=b402d6b267'
    },
    consumer: {
        title: 'Join the Data Consumers',
        name: 'Your Name',
        email: 'Your Email',
        business: 'Your Company Name',
        message: 'Tell us why you would like to get data',
        button: 'Submit',
        baseUrl: '//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13&amp;id=482c337540'
    },
    contributor: {
        title: 'Join as a Contributor',
        name: 'Your Name',
        email: 'Your Email',
        business: 'Your Role',
        message: 'Tell us how you would like to contribute',
        button: 'Submit',
        baseUrl: '//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13&amp;id=6500840fdf'
    }
}

class Modal extends Component {
  state = {
      fetching: false,
      sent: false,
      message: ''
  }

  componentWillReceiveProps(newProps) {
      if (!newProps.modal) {
          this.setState({
              fetching: false,
              sent: false,
              message: ''
          })
      }
  }

  componentDidUpdate() {
      if (!this.props.modal) {
          document.getElementsByTagName('html')[0].style.overflow = 'auto'
      } else {
          document.getElementsByTagName('html')[0].style.overflow = 'hidden'
      }
  }

  onSubmit = e => {
      e.preventDefault()
      let name
      let email
      let company
      let message
      let url

      if (!this.name.state.input || this.name.state.input.length < 3) {
          this.setState({
              message: 'Please check the name'
          })
          return
      } else {
          name = encodeURIComponent(this.name.state.input)
      }

      if (!this.email.state.input || this.email.state.input.length < 5 || this.email.state.input.indexOf('@') === -1) {
          this.setState({
              message: 'Please check the email'
          })
          return
      } else {
          email = encodeURIComponent(this.email.state.input)
      }

      if (!this.business.state.input || this.business.state.input.length < 3) {
          this.setState({
              message: 'Please check the company'
          })
          return
      } else {
          company = encodeURIComponent(this.business.state.input)
      }

      if (!this.message.state.input || this.message.state.input.length < 3) {
          this.setState({
              message: 'Please check the message'
          })
          return
      } else {
          message = encodeURIComponent(this.message.state.input)
      }

      if (this.props.modal === 'contributor') {
          url = `${forms[this.props.modal].baseUrl}&NAME=${name}&EMAIL=${email}&ROLE=${company}&MESSAGE=${message}`
      } else {
          url = `${forms[this.props.modal].baseUrl}&NAME=${name}&EMAIL=${email}&COMPANY=${company}&MESSAGE=${message}`
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
                          })
                      } else if (data.result !== 'success') {
                          this.setState({
                              fetching: false,
                              message: data.msg
                          })
                      } else {
                          this.setState({
                              fetching: false,
                              sent: true,
                              message: data.msg
                          })
                      }
                  }
              )
      )
  };
  render() {
      const { modal, toggle, ...props } = this.props
      return (
          <StyledLightbox show={!!modal} {...props}>
              <StyledHitbox onClick={() => toggle()} />
              <StyledCard>
                  <StyledClose alt="close" onClick={() => toggle()} src={cross} />
                  {!!modal && (
                      <div>
                          <SubTitle>{forms[modal].title}</SubTitle>
                          {this.state.sent ? (
                              <div>{this.state.message}</div>
                          ) : (
                              <form onSubmit={this.onSubmit}>
                                  <Input
                                      placeholder={forms[modal].name}
                                      ref={node => (this.name = node)} // eslint-disable-line
                                      type="text" />
                                  <Input
                                      placeholder={forms[modal].email}
                                      ref={node => (this.email = node)} // eslint-disable-line
                                      type="email" />
                                  <Input
                                      placeholder={forms[modal].business}
                                      ref={node => (this.business = node)} // eslint-disable-line
                                      type="text" />
                                  <Input
                                      maxLength={255}
                                      placeholder={forms[modal].message}
                                      ref={node => (this.message = node)} // eslint-disable-line
                                      rows="6"
                                      type="textarea" />
                                  <Button fetching={this.state.fetching} type="submit">
                                      {forms[modal].button}
                                  </Button>
                                  {!!this.state.message && <StyledMessage>{this.state.message}</StyledMessage>}
                              </form>
                          )}
                      </div>
                  )}
              </StyledCard>
          </StyledLightbox>
      )
  }
}

Modal.propTypes = {
    modal: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired
}

export default Modal
