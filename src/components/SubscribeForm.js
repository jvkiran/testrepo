import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import jsonp from 'jsonp';
import emailIcon from '../assets/email-icon.svg';
import Button from './Button';
import { colors, responsive, transitions } from '../styles';

const StyledSubscribe = styled.div`
  position: relative;
  max-width: 34rem;
  width: 100%;

  & img {
    position: absolute;
    left: 1rem;
    top: calc(50% - 0.5rem);
    height: 0.9rem;
    opacity: 0.7;
  }

  & div {
    display: flex;
    border-radius: 2px;
    background: linear-gradient(to right, rgb(${colors.red}), rgb(${colors.pink}) 71%, rgb(${colors.orange}));
    @media screen and (${responsive.sm.max}) {
      flex-wrap: wrap;
    }
  }
  & input {
    outline: none;
    margin: 0;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    margin: 1px;
    padding-left: 3rem;
    background: rgb(${colors.fadedPurple});
    color: rgb(${colors.white});
    border: none;
    min-width: 18rem;
    border-radius: 2px;
    box-shadow: none;
    transition: ${transitions.short};

    @media screen and (${responsive.sm.max}) {
      text-align: center;
      width: 100%;
      min-width: 0;
    }

    &:focus {
      &::placeholder {
        color: rgba(${colors.white}, 0.3);
      }
    }
  }
  & input::placeholder {
    color: rgba(${colors.white}, 0.5);
  }
  & button {
    color: rgb(${colors.white});
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.75rem 1rem;
    background: transparent;
    width: 100%;
    transition: ${transitions.short};
    cursor: pointer;

    @media screen and (hover: hover) {
      &:hover,
      &:focus {
        opacity: 0.85;
      }
    }
  }
  & > form > p {
    width: 100%;
    position: absolute;
    text-align: center;
    margin-top: 0.25rem;
  }
`;

class SubscribeForm extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      status: null,
      msg: null
    };
  }
  onSubmit = e => {
    e.preventDefault();
    if (!this.input.value || this.input.value.length < 5 || this.input.value.indexOf('@') === -1) {
      this.setState({
        status: 'error'
      });
      return;
    }
    const url = `//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13&amp;id=3c6eed8b71&EMAIL=${encodeURIComponent(
      this.input.value
    )}`;
    this.setState(
      {
        status: 'sending',
        msg: null
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
                status: 'error',
                msg: err
              });
            } else if (data.result !== 'success') {
              this.setState({
                status: 'error',
                msg: data.msg
              });
            } else {
              this.setState({
                status: 'success',
                msg: data.msg
              });
            }
          }
        )
    );
  };
  render() {
    const { children, action, messages, styles, ...props } = this.props;
    const { status } = this.state;
    return (
      <StyledSubscribe {...props}>
        <img src={emailIcon} alt="email" />
        <form action={action} method="post" noValidate>
          <div>
            <input
              ref={node => (this.input = node)}
              type="email"
              defaultValue=""
              name="EMAIL"
              required={true}
              placeholder={messages.inputPlaceholder}
            />
            <Button
              disabled={this.state.status === 'sending' || this.state.status === 'success'}
              onClick={this.onSubmit}
              type="submit"
            >
              {messages.btnLabel}
            </Button>
          </div>
          {status === 'sending' && <p style={styles.sending} dangerouslySetInnerHTML={{ __html: messages.sending }} />}
          {status === 'success' && <p style={styles.success} dangerouslySetInnerHTML={{ __html: messages.success }} />}
          {status === 'error' && <p style={styles.error} dangerouslySetInnerHTML={{ __html: messages.error }} />}
        </form>
      </StyledSubscribe>
    );
  }
}

SubscribeForm.propTypes = {
  messages: PropTypes.object,
  styles: PropTypes.object
};

SubscribeForm.defaultProps = {
  chidren: null,
  messages: {
    inputPlaceholder: 'your@email.com',
    btnLabel: 'Join our community',
    sending: 'Sending...',
    success: 'Thank you! Please click the link in the confirmation email to complete your subscription.',
    error: 'Oops, something went wrong. Would you mind trying again?'
  },
  styles: {
    sending: {
      fontSize: '.7rem',
      color: 'auto'
    },
    success: {
      fontSize: '.7rem',
      color: 'auto'
    },
    error: {
      fontSize: '.7rem',
      color: 'auto'
    }
  }
};

export default SubscribeForm;
