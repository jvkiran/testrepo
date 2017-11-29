import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { responsive, layout } from '../styles';

const StyledSection = styled.section`
  width: 100%;
  background-color: ${({ background }) => (background ? `rgb(${background})` : 'none')};
  background-image: ${({ backgroundImage }) => (backgroundImage ? `url(${backgroundImage})` : 'none')};
  background-size: contain;
  min-height: ${({ viewport }) => (viewport ? '100vh' : 'auto')};
  margin: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  @media screen and (${responsive.sm.min}) {
    margin-bottom: ${layout.pageFrame};
  }
`;

const StyledColumn = styled.div`
  width: 100%;
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : 'auto')};
  padding: 6rem calc(${layout.pageFrame} * 2);
  position: relative;
  display: flex;
  color ${({ fontColor }) => `rgb(${fontColor})`};
  flex-direction: column;
  @media screen and (${responsive.sm.max}) {
    padding: 2rem ${layout.pageFrame};
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
