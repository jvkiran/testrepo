import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../styles';

const StyledButton = styled.button`
  background: linear-gradient(to right, rgb(${colors.red}), rgb(${colors.pink}) 71%, rgb(${colors.orange}));
`;

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
