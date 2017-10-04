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
import { colors, responsive } from '../styles';

const StyledActions = styled.div`
  width: 100%;
  margin-top: 2rem;
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
                href="https://twitter.com/oceanprotocol"
                target="_blank" //eslint-disable-line
                rel="noopener"
              >
                <img src={buttonTwitter} alt="Twitter" />
              </a>
            </StyledSocialLinks>
          </StyledActions>
        </Cell>
        <Cell width={1 / 2}>
          <SubTitle white>About</SubTitle>
          <Paragraph>
            Ocean is supported by a Singapore based non-profit foundation, whose mandate is to ensure open access to the protocol and platform, provide data governance, encourage the network ecosystem growth and take measures to ensure that the platform becomes ever more decentralized with time.
          </Paragraph>
        </Cell>
      </Grid>
    </ContentRow>
    <ContentRow>
      <StyledCopyright>
        <small>&copy; {(new Date().getFullYear())} Ocean Protocol Foundation - All Rights Reserved</small>
      </StyledCopyright>
    </ContentRow >
  </Section>
);

export default Footer;
