import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import { colors, responsive } from '../styles';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledLine = styled.div`
  width: 100%;
  margin: 5rem 0;
  border-bottom: 1px solid rgba(${colors.white}, 0.25);
  @media screen and (${responsive.sm.max}) {
    margin: 2rem 0;
  }
`;

const StyledIntro = styled.p`
  line-height: 2.13;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 3rem;
  @media screen and (${responsive.sm.max}) {
    font-size: 0.85rem;
    margin-bottom: 1.2rem;
  }
`;

const Team = () => (
  <Section minHeight={900} background={`linear-gradient(153deg, rgb(${colors.purple}), rgb(${colors.softPink}))`}>
    <StyledWrapper>
      <Title>The People Building The Ocean Protocol</Title>
      <StyledLine />
      <StyledIntro>
        The Ocean team combines a deep background in big data, blockchain, artificial intelligence and data exchanges,
        with real-world business experience as entrepreneurs, designers and technologists who have started over 20
        companies.
      </StyledIntro>
      <StyledLine />
    </StyledWrapper>
  </Section>
);

export default Team;
