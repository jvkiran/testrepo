import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Description from '../components/Description';
import Row from '../components/Row';
import Cell from '../components/Cell';
import DraftFive from '../assets/drafts/draft-5.png';
import { colors } from '../styles';



const StyledTabButtons = styled.div`
  padding: 15px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.38;
  text-transform: uppercase;
  text-align: left;
  margin-right: 20px;
  border-radius: 5px;
  color: ${({ active }) => (active ? `rgb(${colors.fadedPurple})` : `rgb(${colors.white})`)};
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
    <Section id="UseCases" background={`rgba(${colors.white}, 0.1)`} minHeight={700}>
      <Title>Use Cases</Title>

      <StyledTabs>
        {Object.keys(tabs).map(tab => (
          <StyledTabButtons
            key={tab}
            active={this.state.activeTab === tab}
            onClick={() => this.setState({ activeTab: tab })}
          >
            {tab}
          </StyledTabButtons>
        ))}
      </StyledTabs>

      <Row left>
        <Cell width={1 / 2}>
          <img style={{ width:'100%' }} src={DraftFive} alt="draft" />
        </Cell>
        <Cell width={1 / 2}>
          <Description>{tabs[this.state.activeTab].description}</Description>
        </Cell>
      </Row>
    </Section>
  );
}

export default UseCases;
