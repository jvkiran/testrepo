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
import { colors, responsive } from '../styles';

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
  margin-top: 1rem;
  @media screen and (${responsive.sm.max}) {
    margin-top: 0;
    flex-direction: column;
  }
`;

const StyledPartner = styled.div`
  width: 50px;
  & img {
    width: 100%;
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
            <Paragraph>
              “But one mile in the blizzard is fungible with other miles in blizzards. So the system must account for
              both fungible and non-fungible data.”
            </Paragraph>
            <StyledPartner>
              <img src={toyota} alt="draft" />
            </StyledPartner>
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
