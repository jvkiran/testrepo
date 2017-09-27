import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fonts } from '../styles';

const StyledButton = styled.button`
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: block;
  width: fit-content;
  padding: 15px 35px;
  font-size: ${fonts.size.base};
  font-weight: 600;
  line-height: 1.38;
  text-transform: uppercase;
  margin: 20px 0;
  border-radius: 2px;
  color: rgb(${colors.white});
  background: linear-gradient(to right, rgb(${colors.purple}), rgb(${colors.pink}));
`;

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
