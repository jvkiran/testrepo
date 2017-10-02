import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import jsonp from 'jsonp';
import emailWhite from '../assets/misc/email-white.svg';
import Button from './Button';
import { colors, responsive, transitions, fonts } from '../styles';

const StyledSubscribe = styled.div`
  position: relative;
  max-width: ${({ maxWidth }) => `${maxWidth}rem`};
  width: 100%;

  @media screen and (${responsive.sm.max}) {
    margin: 0 auto;
  }

  & img {
    position: absolute;
    left: 1rem;
    top: calc(50% - 0.5rem);
    height: 1rem;
    opacity: 0.7;
    @media screen and (${responsive.sm.max}) {
      top: 1rem;
    }
  }

  & div {
    display: flex;
    border-radius: 2px;
    background: linear-gradient(to right, rgb(${colors.purple}), rgb(${colors.pink}));
    @media screen and (${responsive.sm.max}) {
      flex-wrap: wrap;
    }
  }
  & input {
    outline: none;
    margin: 0;
    font-size: ${fonts.size.base};
    padding: 0.75rem 1rem;
    margin: 1px;
    padding-left: 3rem;
    background: rgb(${colors.darkGrey});
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

    &::placeholder {
      color: rgba(${colors.white}, 0.65);
    }

    &:focus {
      &::placeholder {
        color: rgba(${colors.white}, 0.5);
      }
    }
  }
  & button {
    color: rgb(${colors.white});
    font-size: ${fonts.size.base};
    text-transform: uppercase;
    margin: 0;
    padding: 0.75rem 1rem;
    background: transparent;
    width: 100%;
    transition: ${transitions.short};
    cursor: pointer;

    &:active,
    &:hover,
    &:focus {
      background: transparent;
    }

    @media screen and (hover: hover) {
      &:hover,
      &:focus {
        opacity: 0.85;
      }
    }
  }
`;

const StyledMessage = styled.p`
  width: 100%;
  position: absolute;
  text-align: center;
  margin-top: 0.25rem;
  font-size: 0.7rem;
`;

class SubscribeForm extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      status: null,
      message: null
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
        message: null
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
                message: err
              });
            } else if (data.result !== 'success') {
              this.setState({
                status: 'error',
                message: data.msg
              });
            } else {
              this.setState({
                status: 'success',
                message: data.msg
              });
            }
          }
        )
    );
  };
  render() {
    const { maxWidth, action, inputPlaceholder, btnLabel, sending, success, error, styles, ...props } = this.props;
    const { status } = this.state;
    return (
      <StyledSubscribe maxWidth={maxWidth} {...props}>
        <img src={emailWhite} alt="email" />
        <form action={action} method="post" noValidate>
          <div>
            <input
              ref={node => (this.input = node)}
              type="email"
              defaultValue=""
              name="EMAIL"
              required={true}
              placeholder={inputPlaceholder}
            />
            <Button
              disabled={this.state.status === 'sending' || this.state.status === 'success'}
              onClick={this.onSubmit}
              type="submit"
            >
              {btnLabel}
            </Button>
          </div>
          {status === 'sending' && <StyledMessage dangerouslySetInnerHTML={{ __html: sending }} />}
          {status === 'success' && <StyledMessage dangerouslySetInnerHTML={{ __html: success }} />}
          {status === 'error' && <StyledMessage dangerouslySetInnerHTML={{ __html: error }} />}
        </form>
      </StyledSubscribe>
    );
  }
}

SubscribeForm.propTypes = {
  maxWidth: PropTypes.number,
  inputPlaceholder: PropTypes.string,
  btnLabel: PropTypes.string,
  sending: PropTypes.string,
  success: PropTypes.string,
  error: PropTypes.string
};

SubscribeForm.defaultProps = {
  maxWidth: 34,
  inputPlaceholder: 'your@email.com',
  btnLabel: 'Join us',
  sending: 'Sending...',
  success: 'Thank you! Please click the link in the confirmation email to complete your subscription.',
  error: 'Oops, something went wrong. Would you mind trying again?'
};

export default SubscribeForm;
