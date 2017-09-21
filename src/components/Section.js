import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const Section = ({ children, ...props }) => <StyledSection {...props}>{children}</StyledSection>;

Section.propTypes = {
  children: PropTypes.node.isRequired
};

export default Section;
