import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Description from '../components/Description';
import Button from '../components/Button';
import Row from '../components/Row';
import Cell from '../components/Cell';
import downloads from '../data/downloads.json';
import { colors } from '../styles';

const STab = styled(Button)`
  color: ${({ active }) => (active ? `rgb(${colors.white})` : `rgb(${colors.dark})`)};
  background: ${({ active }) => (active ? `rgb(${colors.dark})` : `rgba(${colors.dark}, 0.05)`)};
`;

const SDownload = styled(Button)`
  float: right;
  box-shadow: 0px 4px 30px 0px rgb(0, 0, 0);
`;

const StyledSubTitle = styled(Description)`font-weight: 600;`;

const StyledAbstract = styled.div`margin-top: 1rem;`;

class Documentation extends Component {
  state = {
    activeTab: 'technical whitepaper'
  };
  render = () => (
    <Section id="Documentation">
      <Title>Download</Title>

      <Row>
        <Cell width={1 / 3}>
          <div>
            {Object.keys(downloads).map(tab => (
              <STab key={tab} active={this.state.activeTab === tab} onClick={() => this.setState({ activeTab: tab })}>
                {tab}
              </STab>
            ))}
          </div>
        </Cell>
        <Cell width={2 / 3}>
          <StyledAbstract>
            <StyledSubTitle>Abstract</StyledSubTitle>
            <Description>{downloads[this.state.activeTab].abstract}</Description>
          </StyledAbstract>
          <a href={downloads[this.state.activeTab].download}>
            <SDownload>Download</SDownload>
          </a>
        </Cell>
      </Row>
    </Section>
  );
}

export default Documentation;
