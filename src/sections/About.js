import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import DraftOne from '../assets/drafts/draft-1.png';
import DraftTwo from '../assets/drafts/draft-2.png';
import DraftThree from '../assets/drafts/draft-3.png';
import DraftFour from '../assets/drafts/draft-4.png';
import { responsive } from '../styles';

const StyledColumn = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 6rem 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  @media screen and (${responsive.sm.max}) {
    padding: 2rem 1rem;
  }
`;

const StyledTitle = styled.h1`
  font-size: 2.27rem;
  margin-top: 5rem;
  margin-bottom: 1rem;
  font-weight: 600;

  @media screen and (${responsive.sm.max}) {
    font-size: 1.95rem;
    margin-top: 2rem;
    margin-bottom: 0.33rem;
  }
`;

const StyledSubTitle = styled.h3`
  line-height: 1.38;
  font-size: 1rem;
  font-weight: 600;
  @media screen and (${responsive.sm.max}) {
    font-size: 0.85rem;
  }
`;

const StyledDescription = styled.p`
  line-height: 2;
  font-size: 0.875rem;
  font-weight: 400;
  @media screen and (${responsive.sm.max}) {
    font-size: 0.75rem;
  }
`;

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 2rem 0;
  & div:first-child {
    order: ${({ left }) => (left ? 1 : 0)};
    padding-left: ${({ left }) => (left ? '20px' : 0)};
  }
  & div:nth-child(2) {
    padding-left: ${({ left }) => (left ? 0 : '20px')};
  }
`;

const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${({ width }) => `${width * 100}%`};
`;

const StyledDraft = styled.img`width: 100%;`;

const About = () => (
  <Section id="About">
    <StyledColumn>
      <StyledTitle>Ocean is the protocol to unlock data</StyledTitle>

      <StyledRow left>
        <StyledCell width={2 / 3}>
          <StyledDraft src={DraftOne} />
        </StyledCell>
        <StyledCell width={1 / 3}>
          <StyledSubTitle>A protocol to create data exchange marketplaces</StyledSubTitle>
          <StyledDescription>
            Ocean is a global, decentralized data exchange protocol that makes data available for everyone - with trust,
            privacy, security, compliance and transparency - allowing data providers to find data consumers.
          </StyledDescription>
        </StyledCell>
      </StyledRow>

      <StyledTitle>The Data Problem</StyledTitle>

      <StyledRow>
        <StyledCell width={1 / 3}>
          <StyledDraft src={DraftTwo} />
        </StyledCell>
        <StyledCell width={2 / 3}>
          <StyledSubTitle>The world’s data is growing exponentially yet is massively under-utilized</StyledSubTitle>
          <StyledDescription>
            From power grids and water systems to healthcare, mobile devices, manufacturing, and logistics, the growth
            of data creation is remarkable for its volume and criticality. Where once data was primarily a side-effect
            of successful business operations, today it is a vital element in the smooth operation of all aspects of
            daily life for consumers, governments, and businesses alike.
          </StyledDescription>
        </StyledCell>
      </StyledRow>

      <StyledRow left>
        <StyledCell width={1 / 3}>
          <StyledDraft src={DraftThree} />
        </StyledCell>
        <StyledCell width={2 / 3}>
          <StyledSubTitle>Data is immensely valuable, yet remains locked up</StyledSubTitle>
          <StyledDescription>
            Leading organizations see that data can be a strategic asset. PwC estimated that revenue from
            commercializing financial data could be worth $300 Billion annually by 2018. A Capgemini survey supports the
            PwC finding, where a majority of respondents, 61% acknowledge that big data is now a driver of revenues in
            its own right.
          </StyledDescription>
        </StyledCell>
      </StyledRow>

      <StyledRow>
        <StyledCell width={1 / 3}>
          <StyledDraft src={DraftFour} />
        </StyledCell>
        <StyledCell width={2 / 3}>
          <StyledSubTitle>A free market for data allows AI to become democratic</StyledSubTitle>
          <StyledDescription>
            Without data, the AI models are not accurate. With no accuracy, the AI model is unusable. The winners so far
            have been companies with vast data resources and internal AI expertise, like Google and Facebook.
          </StyledDescription>
          <StyledDescription>
            The stark reality is that most startups are drowning in algorithms but starving for data.
          </StyledDescription>
        </StyledCell>
      </StyledRow>
    </StyledColumn>
  </Section>
);

export default About;
