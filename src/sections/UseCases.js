import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Grid from '../components/Grid';
import ContentRow from '../components/ContentRow';
import Cell from '../components/Cell';
import toyota from '../assets/logos/toyota.png';
import useCases from '../data/useCases.json';
import { colors, fonts, responsive } from '../styles';

const STab = styled(Button)`
  margin: 0 20px 1rem 0;
  color: ${({ active }) => (active ? `rgb(${colors.grey})` : `rgb(${colors.white})`)};
  background: ${({ active }) => (active ? `rgb(${colors.white})` : `rgba(${colors.white}, 0.1)`)};
  @media screen and (${responsive.sm.max}) {
    margin: 0;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

const StyledTabs = styled.div`
  display: flex;
  margin: 1rem 0;
  @media screen and (${responsive.sm.max}) {
    margin: 0;
    flex-direction: column;
  }
`;

const StyledQuote = styled(Paragraph)`
  padding: 2rem;
  font-size: 1.25rem;
  font-family: ${fonts.family.quote};
  @media screen and (${responsive.sm.min}) {
    padding-top: 0;
  }
  & img {
    width: 60px;
    margin-right: 1rem;
    display: block;
    margin-left: auto;
  }
`;
class UseCases extends Component {
  state = {
    activeTab: 'autonomous vehicles'
  };
  render = () => (
    <Section id="usecases" background={colors.lightGrey} fontColor={colors.white} minHeight={650}>
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
          <Cell width={1 / 2} style={{ order: 2 }}>
            <StyledQuote>
              “But one mile in the blizzard is fungible with other miles in blizzards. So the system must account for
              both fungible and non-fungible data.”
              <img src={toyota} alt="draft" />
            </StyledQuote>
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
