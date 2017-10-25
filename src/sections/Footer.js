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
import buttonLinkedin from '../assets/buttons/linkedin.svg';
import { colors, responsive } from '../styles';

const StyledSubTitle = styled.h5`
  color: #fff;
  opacity: .5;
  margin-bottom: 1rem;
  
  &:first-of-type {
    margin-top: 0;
  }
`;

const StyledActions = styled.div`
  width: 100%;
  display: flex;
`;

const StyledCopyright = styled(Paragraph)`
  opacity: .5;
  margin-top: 3rem;
  @media screen and (${responsive.sm.min}) {
    margin-bottom: -2rem;
  }
`;

const StyledSocialLinks = styled.div`
  display: flex;
  & a {
    margin-right: 1rem;
  }
  & img {
    border-radius: 2px;
    width: calc(2.5rem + 4px);
    height: calc(2.5rem + 4px);
  }
  @media screen and (${responsive.sm.max}) {
    width: 100%;
  }
`;

const StyledContact = styled(Paragraph)`
  text-align: right;

  .address {
    opacity: .5;
  }
`;

const Footer = () => (
  <Section id="footer" background={colors.grey} fontColor={colors.white}>
    <ContentRow>
      <Grid>
        <Cell width={1 / 2}>
          <SubTitle white>Get Involved</SubTitle>
          <StyledSubTitle>Newsletter</StyledSubTitle>
          <SubscribeForm maxWidth={28} />

          <StyledSubTitle>Follow</StyledSubTitle>
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
                href="https://twitter.com/oceanprotocol"
                target="_blank" //eslint-disable-line
                rel="noopener"
              >
                <img src={buttonTwitter} alt="Twitter" />
              </a>
              <a
                href="https://slack.oceanprotocol.com"
                target="_blank" //eslint-disable-line
                rel="noopener"
              >
                <img src={buttonSlack} alt="Slack" />
              </a>
              <a
                href="https://t.me/@oceanprotocol"
                target="_blank" //eslint-disable-line
                rel="noopener"
              >
                <img src={buttonTelegram} alt="Telegram" />
              </a>
              <a
                href="https://www.linkedin.com/company/13429589/"
                target="_blank" //eslint-disable-line
                rel="noopener"
              >
                <img src={buttonLinkedin} alt="LinkedIn" />
              </a>
            </StyledSocialLinks>
          </StyledActions>
        </Cell>
        <Cell width={1 / 2}>
          <SubTitle white>Ocean Protocol Foundation Ltd</SubTitle>
          <Paragraph>
            Ocean Protocol is supported by a Singapore based non-profit foundation, whose mandate is to ensure open access to the protocol and platform, provide data governance, encourage the network ecosystem growth and take measures to ensure that the platform becomes ever more decentralized with time.
          </Paragraph>
          <StyledContact>
            <Grid>
              <Cell width={1 / 2}>
                <a href="https://oceanprotocol.com">oceanprotocol.com</a>
              </Cell>

              <Cell width={1 / 2}>
                <div class="address">
                  Mapletree Business City<br />
                  20 Pasir Panjang Rd<br />
                  East Wing #03-22/24<br />
                  Singapore, 117439<br />
                  Singapore
                </div>
              </Cell>
            </Grid>
          </StyledContact>
        </Cell>
      </Grid>
    </ContentRow>
    <ContentRow>
      <StyledCopyright>
        <small>&copy; {(new Date().getFullYear())} Ocean Protocol Foundation Ltd - All Rights Reserved</small>
      </StyledCopyright>
    </ContentRow >
  </Section>
);

export default Footer;
