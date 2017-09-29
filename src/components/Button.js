import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fonts, transitions } from '../styles';

const StyledButton = styled.button`
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: block;
  width: fit-content;
  padding: 15px 35px;
  font-family: ${fonts.family.button};
  font-size: ${fonts.size.base};
  font-weight: ${fonts.fontWeight.title};
  line-height: 1.38;
  text-transform: uppercase;
  margin: 0;
  border-radius: 5px;
  transition: ${transitions.short};
  color: rgb(${colors.white});
  background: linear-gradient(to right, rgb(${colors.purple}), rgb(${colors.pink}));
  box-shadow: 0 9px 18px 0 rgba(0, 0, 0, 0.1);
  &:hover,
  &:focus {
    text-decoration: none;
    transform: translate3d(0, -0.05rem, 0);
    box-shadow: 0 12px 30px 0 rgba(0, 0, 0, 0.1);
  }
  &:active {
    background: linear-gradient(to right, rgb(${colors.purple}), rgb(${colors.pink}));
    transition: none;
    transform: none;
    box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.1);
  }
`;

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
