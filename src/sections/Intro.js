import React from 'react';
import Section from '../components/Section';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Paragraph from '../components/Paragraph';
import DraftOne from '../assets/drafts/draft-1.png';

const Intro = () => (
  <Section id="Intro">
    <Title>Ocean protocol <br />unlocks data</Title>

    <Row center left>
      <Cell width={2 / 3}>
        <img style={{ width: '100%' }} src={DraftOne} alt="draft" />
      </Cell>
      <Cell width={1 / 3}>
        <SubTitle>A protocol to create data exchange marketplaces</SubTitle>
        <Paragraph>
          Ocean is a global, decentralized data exchange protocol that makes data available for everyone - with trust,
          privacy, security, compliance and transparency - allowing data providers to find data consumers.
        </Paragraph>
      </Cell>
    </Row>
  </Section>
);

export default Intro;
