import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Grid from '../components/Grid';
import ContentRow from '../components/ContentRow';
import Cell from '../components/Cell';
import useCases from '../data/useCases.json';
import { colors, responsive } from '../styles';

const STab = styled(Button)`
  margin: 0 20px 1rem 0;
  color: ${({ active }) => (active ? `rgb(${colors.grey})` : `rgb(${colors.white})`)};
  background: ${({ active }) => (active ? `rgb(${colors.white})` : `rgba(${colors.white}, 0.1)`)};
  &:active,
  &:hover,
  &:focus {
    background: ${({ active }) => (active ? `rgb(${colors.white})` : `rgba(${colors.white}, 0.1)`)};
  }
  @media screen and (${responsive.sm.max}) {
    margin: 0;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

class UseCases extends Component {
  state = {
    activeTab: 'autonomous vehicles'
  };
  render = () => (
    <Section id="usecases" background={colors.grey} fontColor={colors.white} minHeight={650}>
      <ContentRow>
        <Title white>Use Cases</Title>
        <Grid>
          <Cell width={1 / 2}>
            {Object.keys(useCases).map(tab => (
              <STab key={tab} active={this.state.activeTab === tab} onClick={() => this.setState({ activeTab: tab })}>
                {tab}
              </STab>
            ))}
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
