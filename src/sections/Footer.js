import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import SubscribeForm from '../components/SubscribeForm';
import buttonMedium from '../assets/buttons/medium.svg';
import buttonTwitter from '../assets/buttons/twitter.svg';
import buttonSlack from '../assets/buttons/slack.svg';
import buttonTelegram from '../assets/buttons/telegram.svg';
import buttonReddit from '../assets/buttons/reddit.svg';

const StyledStrong = styled.span`
  font-weight: 600;
  text-transform: uppercase;
`;

const StyledActions = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
`;

const StyledSocialLinks = styled.div`
  display: flex;
  & a {
    margin-right: 20px;
  }
  & img {
    border-radius: 2px;
    width: calc(2.5rem + 4px);
    height: calc(2.5rem + 4px);
  }
`;

const Footer = () => (
  <Section id="Footer">
    <Row>
      <Cell width={1 / 2}>
        <Title>Get Involved</Title>
        <SubscribeForm maxWidth={28} />
        <StyledActions>
          <StyledSocialLinks>
            <a href="medium.com">
              <img src={buttonMedium} alt="Medium" />
            </a>
            <a href="twitter.com">
              <img src={buttonTwitter} alt="Twitter" />
            </a>
            <a href="slack.com">
              <img src={buttonSlack} alt="Slack" />
            </a>
            <a href="telegram.org">
              <img src={buttonTelegram} alt="Slack" />
            </a>
            <a href="reddit.com">
              <img src={buttonReddit} alt="Slack" />
            </a>
          </StyledSocialLinks>
        </StyledActions>
      </Cell>
      <Cell width={1 / 2}>
        <Title>About</Title>
        <Paragraph>
          Ocean Protocol Foundation. Ocean is supported by a Singapore based non-profit foundation, whose mandate is to
          ensure open access to the protocol and platform, provide data governance, encourage the network ecosystem
          growth and take measures to ensure that the platform becomes ever more decentralized with time.
        </Paragraph>
        <Paragraph>
          <StyledStrong>DISCLAIMER:</StyledStrong> This site may contain forward-looking statements, subject to risks
          and uncertainties that could cause the actual results to differ materially.
        </Paragraph>
      </Cell>
    </Row>
  </Section>
);

export default Footer;
