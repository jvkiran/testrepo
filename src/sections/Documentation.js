import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Description from '../components/Description';
import Button from '../components/Button';
import Row from '../components/Row';
import Cell from '../components/Cell';
import downloads from '../data/downloads.json';
import { colors, responsive } from '../styles';

const StyledTabs = styled.div`display: block;`;

const StyledTabButtons = styled(Button)`
  border-radius: 5px;
  color: ${({ active }) => (active ? `rgb(${colors.grey})` : `rgb(${colors.white})`)};
  background: ${({ active }) => (active ? `rgb(${colors.white})` : `rgba(${colors.white}, 0.05)`)};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const SDownload = styled(Button)`box-shadow: 2px 2px 20px 4px rgb(0, 0, 0);`;

const StyledSubTitle = styled.h4`
  line-height: 1;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
  @media screen and (${responsive.sm.max}) {
    font-size: 0.75rem;
  }
`;

const StyledAbstract = styled.div`
  margin-top: 1rem;
  @media screen and (${responsive.sm.max}) {
    order: -1;
  }
`;

class Documentation extends Component {
  state = {
    activeTab: 'technical whitepaper'
  };
  render = () => (
    <Section id="Documentation">
      <Title>Download</Title>

      <Row>
        <Cell width={1 / 3}>
          <StyledTabs>
            {Object.keys(downloads).map(tab => (
              <StyledTabButtons
                key={tab}
                active={this.state.activeTab === tab}
                onClick={() => this.setState({ activeTab: tab })}
              >
                {tab}
              </StyledTabButtons>
            ))}
          </StyledTabs>
        </Cell>
        <Cell width={2 / 3}>
          <a href={downloads[this.state.activeTab].download}>
            <SDownload>Download</SDownload>
          </a>
          <StyledAbstract>
            <StyledSubTitle>Abstract</StyledSubTitle>
            <Description>{downloads[this.state.activeTab].abstract}</Description>
          </StyledAbstract>
        </Cell>
      </Row>
    </Section>
  );
}

export default Documentation;
