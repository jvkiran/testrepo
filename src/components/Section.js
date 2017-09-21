import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { responsive } from '../styles';

const StyledSection = styled.div`
  width: 100%;
  background: ${({ background }) => background};
  min-height: ${({ viewport }) => (viewport ? '100vh' : 'auto')};
  margin: 0;
  padding: 0;
`;

const StyledColumn = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : 'auto')};
  margin: 0 auto;
  padding: 6rem 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  @media screen and (${responsive.sm.max}) {
    padding: 2rem 1rem;
  }
`;

const Section = ({ children, viewport, minHeight, background, ...props }) => (
  <StyledSection viewport={viewport} background={background} {...props}>
    <StyledColumn minHeight={minHeight}>{children}</StyledColumn>
  </StyledSection>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  viewport: PropTypes.bool
};

Section.defaultProps = {
  background: 'none',
  minHeight: 0,
  viewport: false
};

export default Section;
