import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Grid from '../components/Grid';
import ContentRow from '../components/ContentRow';
import Cell from '../components/Cell';
import DraftFive from '../assets/drafts/draft-5.png';
import useCases from '../data/useCases.json';
import { colors, responsive } from '../styles';

const STab = styled(Button)`
  margin: 0 20px 1rem 0;
  color: ${({ active }) => (active ? `rgb(${colors.grey})` : `rgb(${colors.white})`)};
  background: ${({ active }) => (active ? `rgb(${colors.white})` : `rgba(${colors.white}, 0.1)`)};
`;

const StyledTabs = styled.div`
  display: flex;
  margin-top: 1rem;
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
    <Section id="usecases" background={colors.lightGrey} fontColor={colors.white} minHeight={700}>
      <ContentRow>
        <Title>Use Cases</Title>

        <StyledTabs>
          {Object.keys(useCases).map(tab => (
            <STab key={tab} active={this.state.activeTab === tab} onClick={() => this.setState({ activeTab: tab })}>
              {tab}
            </STab>
          ))}
        </StyledTabs>

        <Grid left>
          <Cell width={1 / 2}>
            <img style={{ width: '100%' }} src={DraftFive} alt="draft" />
          </Cell>
          <Cell width={1 / 2}>
            <Paragraph>{useCases[this.state.activeTab].description}</Paragraph>
          </Cell>
        </Grid>
      </ContentRow>
    </Section>
  );
}

export default UseCases;
