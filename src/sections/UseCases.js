import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Grid from '../components/Grid';
import ContentRow from '../components/ContentRow';
import Cell from '../components/Cell';
import useCases from '../data/useCases.json';
import { colors, fonts, responsive } from '../styles';

const STab = styled.a`
  display: block;
  padding: 1rem 2rem 0.75rem 2rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-family: ${fonts.family.button};
  color: ${({ active }) => (active ? `rgb(${colors.darkGrey})` : `rgb(${colors.white})`)};
  background: ${({ active }) => (active ? `rgb(${colors.white})` : `rgba(${colors.white}, 0.1)`)};
  &:active,
  &:hover,
  &:focus {
    background: ${({ active }) => (active ? `rgb(${colors.white})` : `rgba(${colors.white}, 0.1)`)};
  }
  @media screen and (${responsive.sm.max}) {
    width: 100%;

    &:last-child {
      margin-bottom: 1rem;
    }
  }

  &:hover,
  &:focus {
    transform: none;
  }
`;

class UseCases extends Component {
  state = {
    activeTab: 'autonomous vehicles'
  };
  render = () => (
    <Section id="usecases" background={colors.grey} fontColor={colors.white} minHeight={550}>
      <ContentRow>
        <Title white>Use Cases</Title>
        <Grid>
          <Cell width={1 / 3}>
            {Object.keys(useCases).map(tab => (
              <STab key={tab} active={this.state.activeTab === tab} onClick={() => this.setState({ activeTab: tab })}>
                {tab}
              </STab>
            ))}
          </Cell>
          <Cell width={2 / 3}>
            <Paragraph>{useCases[this.state.activeTab].description}</Paragraph>
          </Cell>
        </Grid>
      </ContentRow>
    </Section>
  );
}

export default UseCases;
