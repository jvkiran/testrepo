import React from 'react';
import Section from '../components/Section';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Description from '../components/Description';
import DraftOne from '../assets/drafts/draft-1.png';
import DraftTwo from '../assets/drafts/draft-2.png';
import DraftThree from '../assets/drafts/draft-3.png';
import DraftFour from '../assets/drafts/draft-4.png';

const About = () => (
  <Section id="About">
    <Title>Ocean is the protocol to unlock data</Title>

    <Row center left>
      <Cell width={2 / 3}>
        <img style={{ width: '100%' }} src={DraftOne} alt="draft" />
      </Cell>
      <Cell width={1 / 3}>
        <SubTitle>A protocol to create data exchange marketplaces</SubTitle>
        <Description>
          Ocean is a global, decentralized data exchange protocol that makes data available for everyone - with trust,
          privacy, security, compliance and transparency - allowing data providers to find data consumers.
        </Description>
      </Cell>
    </Row>

    <Title>The Data Problem</Title>

    <Row center>
      <Cell width={1 / 3}>
        <img style={{ width: '100%' }} src={DraftTwo} alt="draft" />
      </Cell>
      <Cell width={2 / 3}>
        <SubTitle>The world’s data is growing exponentially yet is massively under-utilized</SubTitle>
        <Description>
          From power grids and water systems to healthcare, mobile devices, manufacturing, and logistics, the growth of
          data creation is remarkable for its volume and criticality. Where once data was primarily a side-effect of
          successful business operations, today it is a vital element in the smooth operation of all aspects of daily
          life for consumers, governments, and businesses alike.
        </Description>
      </Cell>
    </Row>

    <Row center left>
      <Cell width={1 / 3}>
        <img style={{ width: '100%' }} src={DraftThree} alt="draft" />
      </Cell>
      <Cell width={2 / 3}>
        <SubTitle>Data is immensely valuable, yet remains locked up</SubTitle>
        <Description>
          Leading organizations see that data can be a strategic asset. PwC estimated that revenue from commercializing
          financial data could be worth $300 Billion annually by 2018. A Capgemini survey supports the PwC finding,
          where a majority of respondents, 61% acknowledge that big data is now a driver of revenues in its own right.
        </Description>
      </Cell>
    </Row>

    <Row center>
      <Cell width={1 / 3}>
        <img style={{ width: '100%' }} src={DraftFour} alt="draft" />
      </Cell>
      <Cell width={2 / 3}>
        <SubTitle>A free market for data allows AI to become democratic</SubTitle>
        <Description>
          Without data, the AI models are not accurate. With no accuracy, the AI model is unusable. The winners so far
          have been companies with vast data resources and internal AI expertise, like Google and Facebook.
        </Description>
        <Description>
          The stark reality is that most startups are drowning in algorithms but starving for data.
        </Description>
      </Cell>
    </Row>
  </Section>
);

export default About;
