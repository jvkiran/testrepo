import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Row from '../components/Row';
import Cell from '../components/Cell';
import DraftFive from '../assets/drafts/draft-5.png';
import useCases from '../data/useCases.json';
import { colors, responsive, layout } from '../styles';

const STab = styled(Button)`
  margin: 0 20px 1rem 0;
  color: ${({ active }) => (active ? `rgb(${colors.grey})` : `rgb(${colors.white})`)};
  background: ${({ active }) => (active ? `rgb(${colors.white})` : `rgba(${colors.white}, 0.1)`)};
`;

const StyledTabs = styled.div`
  display: flex;
  max-width: ${layout.maxWidth.base};
  margin: 1rem auto 0 auto;
  @media screen and (${responsive.sm.max}) {
    margin-top: 0;
    flex-direction: column;
  }
`;

class UseCases extends Component {
  state = {
    activeTab: 'autonomous vehicles'
  };
  render = () => (
    <Section id="UseCases" background={colors.lightGrey} fontColor={colors.white} minHeight={700} shadow>
      <Title>Use Cases</Title>

      <StyledTabs>
        {Object.keys(useCases).map(tab => (
          <STab key={tab} active={this.state.activeTab === tab} onClick={() => this.setState({ activeTab: tab })}>
            {tab}
          </STab>
        ))}
      </StyledTabs>

      <Row left>
        <Cell width={1 / 2}>
          <img style={{ width: '100%' }} src={DraftFive} alt="draft" />
        </Cell>
        <Cell width={1 / 2}>
          <Paragraph>{useCases[this.state.activeTab].description}</Paragraph>
        </Cell>
      </Row>
    </Section>
  );
}

export default UseCases;
