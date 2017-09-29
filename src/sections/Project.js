import React from 'react';
import Section from '../components/Section';
import Grid from '../components/Grid';
import ContentRow from '../components/ContentRow';
import Cell from '../components/Cell';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Paragraph from '../components/Paragraph';
import pulseStatic from '../assets/graphics/pulse-static.svg';

const Project = () => (
  <Section id="project">
    <ContentRow>
      <Title>Ocean protocol <br />unlocks data</Title>

      <Grid center wrap>
        <Cell width={1}>
          <img src={pulseStatic} alt="draft" />
        </Cell>
        <Cell width={1 / 3}>
        <SubTitle>WHY OCEAN PROTOCOL</SubTitle>
        <Paragraph>
          Ocean Protocol is a decentralized data sharing protocol that makes data available for everyone with privacy, security, control, transparency and compliance.   

        </Paragraph>
        </Cell>
        <Cell width={1 / 3}>
          <div />
        </Cell>
        <Cell width={1/ 3}>
          <SubTitle>HOW OCEAN WORKS</SubTitle>
          <Paragraph>
            Ocean Protocol helps marketplaces to connect data providers and data consumers and allows developers to build services on top. 
          </Paragraph>
        </Cell>
      </Grid>
    </ContentRow>
  </Section>
);

export default Project;
