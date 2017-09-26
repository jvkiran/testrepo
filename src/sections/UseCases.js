import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Description from '../components/Description';
import Button from '../components/Button';
import Row from '../components/Row';
import Cell from '../components/Cell';
import DraftFive from '../assets/drafts/draft-5.png';
import useCases from '../data/useCases.json';
import { colors, responsive } from '../styles';

const StyledTabButtons = styled(Button)`
  border-radius: 5px;
  margin-right: 20px;
  color: ${({ active }) => (active ? `rgb(${colors.grey})` : `rgb(${colors.white})`)};
  background: ${({ active }) => (active ? `rgb(${colors.white})` : `rgba(${colors.white}, 0.1)`)};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledTabs = styled.div`
  display: flex;
  margin-top: 1rem;
  @media screen and (${responsive.sm.max}) {
    margin: 0;
    flex-direction: column;
  }
`;

class UseCases extends Component {
  state = {
    activeTab: 'autonomous vehicles'
  };
  render = () => (
    <Section id="UseCases" background={colors.lightGrey} minHeight={700} shadow>
      <Title>Use Cases</Title>

      <StyledTabs>
        {Object.keys(useCases).map(tab => (
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
          <img style={{ width: '100%' }} src={DraftFive} alt="draft" />
        </Cell>
        <Cell width={1 / 2}>
          <Description>{useCases[this.state.activeTab].description}</Description>
        </Cell>
      </Row>
    </Section>
  );
}

export default UseCases;
