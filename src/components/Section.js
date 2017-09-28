import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { responsive } from '../styles';

const StyledSection = styled.div`
  width: 100%;
  background: ${({ background }) => (background ? `rgb(${background})` : 'none')};
  min-height: ${({ viewport }) => (viewport ? '100vh' : 'auto')};
  margin: 0;
  padding: 0;
  box-shadow: ${({ shadow }) => (shadow ? '4px 4px 34px 8px rgba(0, 0, 0, 0.5)' : 'none')};
`;

const StyledColumn = styled.div`
  width: 100%;
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : 'auto')};
  padding: 6rem 2rem;
  position: relative;
  display: flex;
  color ${({ fontColor }) => `rgb(${fontColor})`};
  flex-direction: column;
  @media screen and (${responsive.sm.max}) {
    padding: 2rem 1rem;
  }
`;

const Section = ({ children, viewport, fontColor, minHeight, background, ...props }) => (
  <StyledSection viewport={viewport} background={background} {...props}>
    <StyledColumn minHeight={minHeight} fontColor={fontColor}>
      {children}
    </StyledColumn>
  </StyledSection>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  fiontColor: PropTypes.string,
  viewport: PropTypes.bool
};

Section.defaultProps = {
  background: '',
  minHeight: 0,
  fontColor: 'inherit',
  viewport: false
};

export default Section;
