import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import emailIcon from '../assets/misc/email-icon.svg';
import { colors, fonts, responsive, transitions } from '../styles';

const StyledInputWrapper = styled.div`
  border-radius: 2px;
  position: relative;
  width: 100%;
  padding: 1px;
  background: linear-gradient(to right, rgb(${colors.purple}), rgb(${colors.pink}));
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

  @media screen and (${responsive.sm.max}) {
    text-align: center;
    width: 100%;
    min-width: 0;
  }

  &::placeholder {
    color: rgba(${colors.black}, 0.5);
  }

  &:focus {
    &::placeholder {
      color: rgba(${colors.black}, 0.3);
    }
  }
`;

const Input = ({ icon, ...props }) => (
  <StyledInputWrapper>
    {icon && <img src={emailIcon} alt="email" />}
    <StyledInput icon={icon} {...props} />
  </StyledInputWrapper>
);

Input.propTypes = {
  icon: PropTypes.bool
};

Input.defaultProps = {
  icon: false
};

export default Input;
