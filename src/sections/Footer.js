import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Grid from '../components/Grid';
import ContentRow from '../components/ContentRow';
import Cell from '../components/Cell';
import SubTitle from '../components/SubTitle';
import Paragraph from '../components/Paragraph';
import SubscribeForm from '../components/SubscribeForm';
import buttonMedium from '../assets/buttons/medium.svg';
import buttonTwitter from '../assets/buttons/twitter.svg';
import buttonSlack from '../assets/buttons/slack.svg';
import buttonTelegram from '../assets/buttons/telegram.svg';
import buttonReddit from '../assets/buttons/reddit.svg';
import { colors, responsive } from '../styles';

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
    @media screen and (${responsive.sm.max}) {
      margin: 0;
    }
  }
  & img {
    border-radius: 2px;
    width: calc(2.5rem + 4px);
    height: calc(2.5rem + 4px);
  }
  @media screen and (${responsive.sm.max}) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Footer = () => (
  <Section id="footer" background={colors.grey} fontColor={colors.white}>
    <ContentRow>
      <Grid>
        <Cell width={1 / 2}>
          <SubTitle white>Get Involved</SubTitle>
          <SubscribeForm maxWidth={28} />
          <StyledActions>
            <StyledSocialLinks>
              <a
                href="https://blog.oceanprotocol.com/"
                target="_blank" //eslint-disable-line
                rel="noopener"
              >
                <img src={buttonMedium} alt="Medium" />
              </a>
              <a
                href="https://blog.oceanprotocol.com/"
                target="_blank" //eslint-disable-line
                rel="noopener"
              >
                <img src={buttonTwitter} alt="Twitter" />
              </a>
              <a
                href="https://blog.oceanprotocol.com/"
                target="_blank" //eslint-disable-line
                rel="noopener"
              >
                <img src={buttonSlack} alt="Slack" />
              </a>
              <a
                href="https://blog.oceanprotocol.com/"
                target="_blank" //eslint-disable-line
                rel="noopener"
              >
                <img src={buttonTelegram} alt="Slack" />
              </a>
              <a
                href="https://blog.oceanprotocol.com/"
                target="_blank" //eslint-disable-line
                rel="noopener"
              >
                <img src={buttonReddit} alt="Slack" />
              </a>
            </StyledSocialLinks>
          </StyledActions>
        </Cell>
        <Cell width={1 / 2}>
          <SubTitle white>About</SubTitle>
          <Paragraph>
            Ocean Protocol Foundation. Ocean is supported by a Singapore based non-profit foundation, whose mandate is
            to ensure open access to the protocol and platform, provide data governance, encourage the network ecosystem
            growth and take measures to ensure that the platform becomes ever more decentralized with time.
          </Paragraph>
          <Paragraph>
            Ocean Protocol name and the Ocean Protocol logos are registered trademarks of the Ocean Protocol Foundation.
          </Paragraph>
          <Paragraph>
            <StyledStrong>DISCLAIMER:</StyledStrong> This site may contain forward-looking statements, subject to risks
            and uncertainties that could cause the actual results to differ materially.
          </Paragraph>
        </Cell>
      </Grid>
    </ContentRow>
  </Section>
);

export default Footer;
