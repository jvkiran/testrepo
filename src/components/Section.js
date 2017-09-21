import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.div`
  width: 100%;
  background: ${({ background }) => background};
  min-height: ${({ viewport }) => (viewport ? '100vh' : 'auto')};
  margin: 0;
  padding: 0;
`;

const Section = ({ children, viewport, background, ...props }) => (
  <StyledSection viewport={viewport} background={background} {...props}>
    {children}
  </StyledSection>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  viewport: PropTypes.bool
};

Section.defaultProps = {
  background: 'none',
  viewport: false
};

export default Section;
