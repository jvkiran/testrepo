import React from 'react';
import Section from '../components/Section';
import Grid from '../components/Grid';
import ContentRow from '../components/ContentRow';
import Cell from '../components/Cell';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Paragraph from '../components/Paragraph';
import DraftTwo from '../assets/drafts/draft-2.png';
import DraftThree from '../assets/drafts/draft-3.png';
import DraftFour from '../assets/drafts/draft-4.png';

const Data = () => (
  <Section id="data">
    <ContentRow>
      <Title>Only 1% of collected data is analyzed</Title>

      <Grid center>
        <Cell width={1 / 3}>
          <img style={{ width: '100%' }} src={DraftTwo} alt="draft" />
        </Cell>
        <Cell width={2 / 3}>
          <SubTitle>Data is growing exponentially but is under-utilized</SubTitle>
          <Paragraph>
            From power grids and water systems to healthcare, mobile devices, manufacturing, and logistics, the growth of
            data creation is remarkable for its volume and criticality. Where once data was primarily a side-effect of
            successful business operations, today it is a vital element in the smooth operation of all aspects of daily
            life for consumers, governments, and businesses alike.
          </Paragraph>
        </Cell>
      </Grid>

      <Grid center left>
        <Cell width={1 / 3}>
          <img style={{ width: '100%' }} src={DraftThree} alt="draft" />
        </Cell>
        <Cell width={2 / 3}>
          <SubTitle>Data is immensely valuable, yet remains locked up</SubTitle>
          <Paragraph>
            Leading organizations see that data can be a strategic asset. PwC estimated that revenue from commercializing
            financial data could be worth $300 Billion annually by 2018. A Capgemini survey supports the PwC finding,
            where a majority of respondents, 61% acknowledge that big data is now a driver of revenues in its own right.
          </Paragraph>
        </Cell>
      </Grid>

      <Grid center>
        <Cell width={1 / 3}>
          <img style={{ width: '100%' }} src={DraftFour} alt="draft" />
        </Cell>
        <Cell width={2 / 3}>
          <SubTitle>A free market for data allows AI to become democratic</SubTitle>
          <Paragraph>
            Without data, the AI models are not accurate. With no accuracy, the AI model is unusable. The winners so far
            have been companies with vast data resources and internal AI expertise, like Google and Facebook.
          </Paragraph>
          <Paragraph>
            The stark reality is that most startups are drowning in algorithms but starving for data.
          </Paragraph>
        </Cell>
      </Grid>
    </ContentRow>
  </Section>
);

export default Data;
