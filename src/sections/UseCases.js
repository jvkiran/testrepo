import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import DraftFive from '../assets/drafts/draft-5.png';
import { colors, responsive } from '../styles';

const StyledColumn = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 700px;
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
  margin-top: 4rem;
  margin-bottom: 1rem;
  font-weight: 600;

  @media screen and (${responsive.sm.max}) {
    font-size: 1.95rem;
    margin-top: 2rem;
    margin-bottom: 0.33rem;
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
  flex-direction: column;
  width: ${({ width }) => `${width * 100}%`};
`;

const StyledDraft = styled.img`width: 100%;`;

const StyledButton = styled.div`
  padding: 15px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.38;
  text-transform: uppercase;
  text-align: left;
  margin-right: 20px;
  border-radius: 5px;
  color: ${({ active }) => (active ? `rgb(${colors.black})` : `rgb(${colors.white})`)};
  background: ${({ active }) => (active ? `rgb(${colors.white})` : `rgba(${colors.white}, 0.1)`)};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledTabs = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const tabs = {
  'autonomous vehicles': {
    description:
      'We (at BigchainDB) started working with Toyota Research Institute (TRI) in early 2017 for self-driving cars. The accident rate of self-driving cars reduces with higher model accuracy. Models get more accurate with more data. TRI had calculated that it needed 500 billion to 1 trillion miles driven in order to get models that were sufficiently accurate for production deployment of self-driving cars (and this is on top of orders of magnitude more miles driven in world simulators). TRI saw that each automaker faced similar challenges; and that it would be prohibitively expensive for each automaker on its own to generate that much data. So why not pool the data, via a data marketplace?'
  },
  'medical research': {
    description:
      'There will be text here I promise, there is always some text here. Sure we could put some Lorem Ipsum but thats so 2000s lets make the difference and break the pattern, ok enough back to work'
  },
  government: {
    description: 'Thought I was done? Never!'
  }
};

class UseCases extends Component {
  state = {
    activeTab: 'autonomous vehicles'
  };
  render = () => (
    <Section id="UseCases" background={`rgba(${colors.white}, 0.1)`}>
      <StyledColumn>
        <StyledTitle>Use Cases</StyledTitle>

        <StyledTabs>
          {Object.keys(tabs).map(tab => (
            <StyledButton
              key={tab}
              active={this.state.activeTab === tab}
              onClick={() => this.setState({ activeTab: tab })}
            >
              {tab}
            </StyledButton>
          ))}
        </StyledTabs>

        <StyledRow left>
          <StyledCell width={1 / 2}>
            <StyledDraft src={DraftFive} alt="draft" />
          </StyledCell>
          <StyledCell width={1 / 2}>
            <StyledDescription>{tabs[this.state.activeTab].description}</StyledDescription>
          </StyledCell>
        </StyledRow>
      </StyledColumn>
    </Section>
  );
}

export default UseCases;
