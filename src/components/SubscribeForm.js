import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import jsonp from 'jsonp'
import emailWhite from '../assets/misc/email-white.svg'
import Button from './Button'
import { colors, responsive, transitions, fonts } from '../styles'

const StyledSubscribe = styled.div`
    position: relative;
    max-width: ${({ maxWidth }) => `${maxWidth}rem`};
    width: 100%;

    @media screen and (${responsive.md.max}) {
        margin: 0 auto;
    }

    & img {
        position: absolute;
        left: 1rem;
        top: calc(50% - .5rem);
        height: 1rem;
        opacity: .7;

        @media screen and (${responsive.md.max}) {
            top: 1rem;
        }
    }

    & input {
        outline: none;
        font-size: ${fonts.size.base};
        padding: .75rem 1rem;
        margin: 1px;
        padding-left: 3rem;
        background: rgb(${colors.darkGrey});
        color: rgb(${colors.white});
        border: none;
        min-width: 15rem;
        width: 75%;
        border-radius: 2px;
        box-shadow: none;
        transition: ${transitions.short};

        @media screen and (${responsive.md.max}) {
            text-align: center;
            width: 100%;
            min-width: 0;
        }

        &::placeholder {
            color: rgba(${colors.white}, .65);
        }

        &:focus {
            &::placeholder {
                color: rgba(${colors.white}, .5);
            }
        }
    }

    & button {
        color: rgb(${colors.white});
        font-size: ${fonts.size.base};
        text-transform: uppercase;
        margin: 0;
        padding: .75rem 1rem;
        background: transparent;
        width: 35%;
        transition: ${transitions.short};
        cursor: pointer;

        @media screen and (${responsive.md.max}) {
            width: 100%;
        }

        &:active,
        &:hover,
        &:focus {
            background: transparent;
        }

        @media screen and (hover: hover) {
            &:hover,
            &:focus {
                opacity: .85;
            }
        }
    }
`

const StyledSubscribeWrapper = styled.div`
    display: flex;
    border-radius: 2px;
    background: linear-gradient(to right, rgb(${colors.purple}), rgb(${colors.pink}));

    @media screen and (${responsive.md.max}) {
        flex-wrap: wrap;
    }
`

const StyledMessage = styled.p`
    width: 100%;
    position: absolute;
    text-align: center;
    margin-top: .25rem;
    font-size: .7rem;
`

class SubscribeForm extends React.Component {
    constructor(props, ...args) {
        super(props, ...args)
        this.state = {
            status: null
        }
    }
  onSubmit = e => {
      e.preventDefault()
      if (!this.input.value || this.input.value.length < 5 || this.input.value.indexOf('@') === -1) {
          this.setState({
              status: 'error'
          })
          return
      }
      const url = `//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13&amp;id=3c6eed8b71&EMAIL=${encodeURIComponent(this.input.value)}`
      this.setState(
          {
              status: 'sending'
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
                              status: 'error'
                          })
                      } else if (data.result === 'error' && data.msg.includes('is already subscribed')) {
                          this.setState({
                              status: 'alreadySubscribed'
                          })
                      } else if (data.result === 'error') {
                          this.setState({
                              status: 'error'
                          })
                      } else {
                          this.setState({
                              status: 'success'
                          })
                      }
                  }
              )
      )
  };
  render() {
      const {
          maxWidth, action, inputPlaceholder, btnLabel, sending, success, error, alreadySubscribed, ...props
      } = this.props
      const { status } = this.state
      return (
          <StyledSubscribe maxWidth={maxWidth} {...props}>
              <img alt="email" src={emailWhite} />
              <form noValidate action={action} method="post">
                  <StyledSubscribeWrapper>
                      <input
                          required
                          defaultValue=""
                          name="EMAIL"
                          placeholder={inputPlaceholder}
                          ref={node => (this.input = node)} //eslint-disable-line
                          type="email" />
                      <Button
                          disabled={this.state.status === 'sending' || this.state.status === 'success'}
                          onClick={this.onSubmit}
                          type="submit">
                          {btnLabel}
                      </Button>
                  </StyledSubscribeWrapper>
                  {status === 'sending' && <StyledMessage dangerouslySetInnerHTML={{ __html: sending }} />}
                  {status === 'alreadySubscribed' && <StyledMessage dangerouslySetInnerHTML={{ __html: alreadySubscribed }} />}
                  {status === 'success' && <StyledMessage dangerouslySetInnerHTML={{ __html: success }} />}
                  {status === 'error' && <StyledMessage dangerouslySetInnerHTML={{ __html: error }} />}
              </form>
          </StyledSubscribe>
      )
  }
}

SubscribeForm.propTypes = {
    action: PropTypes.string,
    alreadySubscribed: PropTypes.string,
    btnLabel: PropTypes.string,
    error: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    maxWidth: PropTypes.number,
    sending: PropTypes.string,
    success: PropTypes.string
}

SubscribeForm.defaultProps = {
    action: '#',
    maxWidth: 34,
    inputPlaceholder: 'your@email.com',
    btnLabel: 'Subscribe',
    sending: 'Sending...',
    alreadySubscribed: 'You are already subscribed with this email. Welcome to the community!',
    success: 'Thank you! Please click the link in the confirmation email to complete your subscription.',
    error: 'Oops, something went wrong. Would you mind trying again?'
}

export default SubscribeForm
