import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Description from '../components/Description';
import Button from '../components/Button';
import Tab from '../components/Tab';
import Row from '../components/Row';
import Cell from '../components/Cell';
import downloads from '../data/downloads.json';
import { colors, responsive } from '../styles';

const STab = styled(Tab)`
  background: ${({ active }) => (active ? `rgb(${colors.white})` : `rgba(${colors.white}, 0.05)`)};
`;

const SDownload = styled(Button)`box-shadow: 0px 4px 30px 0px rgb(0, 0, 0);`;

const StyledSubTitle = styled(Description)`font-weight: 600;`;

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
          <div>
            {Object.keys(downloads).map(tab => (
              <STab key={tab} active={this.state.activeTab === tab} onClick={() => this.setState({ activeTab: tab })}>
                {tab}
              </STab>
            ))}
          </div>
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
