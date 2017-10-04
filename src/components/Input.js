import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fonts, transitions } from '../styles';

const StyledInputWrapper = styled.div`
  border-radius: 2px;
  position: relative;
  width: 100%;
  padding: 1px;
  margin: 1rem 0;
  background: linear-gradient(to right, rgb(${colors.purple}), rgb(${colors.pink}));

  & img {
    position: absolute;
    left: 1rem;
    top: 1rem;
    height: 1rem;
    opacity: 0.7;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  margin: 0;
  font-size: ${fonts.size.base};
  padding: 0.75rem 1rem;
  padding-left: ${({ icon }) => (icon ? '3rem' : '1rem')};
  background: rgb(${colors.white});
  color: rgb(${colors.black});
  border: none;
  border-radius: 2px;
  box-shadow: none;
  transition: ${transitions.short};

  &::placeholder {
    color: rgba(${colors.black}, 0.5);
  }

  &:focus {
    &::placeholder {
      color: rgba(${colors.black}, 0.3);
    }
  }
`;

const StyledTextarea = StyledInput.withComponent('textarea');

const StyledCharacterCount = styled.p`
  position: absolute;
  opacity: 0.7;
  font-size: ${fonts.size.small};
  margin: 0;
  right: 0;
`;

class Input extends Component {
  state = {
    input: ''
  };
  onChange = ({ target }) => {
    if (this.props.maxLength && target.value.length > this.props.maxLength) return;
    this.setState({ input: target.value });
  };
  render() {
    const { maxLength, type, ...props } = this.props;
    return (
      <StyledInputWrapper>
        {type === 'textarea' ? (
          <StyledTextarea value={this.state.input} onChange={this.onChange} {...props} />
        ) : (
          <StyledInput value={this.state.input} onChange={this.onChange} {...props} />
        )}
        {!!maxLength && <StyledCharacterCount>{maxLength - this.state.input.length}</StyledCharacterCount>}
      </StyledInputWrapper>
    );
  }
}

Input.propTypes = {
  maxLength: PropTypes.number,
  type: PropTypes.string
};

Input.defaultProps = {
  maxLength: 0,
  type: 'text'
};

export default Input;
