import React from 'react';
import styled, { keyframes } from 'styled-components';
import Section from '../components/Section';
import Grid from '../components/Grid';
import ContentRow from '../components/ContentRow';
import Pulse from '../components/Pulse';
import Cell from '../components/Cell';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Paragraph from '../components/Paragraph';
import dataDotsLeft from '../assets/graphics/data-dots-left.svg';
import dataDotsRight from '../assets/graphics/data-dots-right.svg';
import arrow from '../assets/misc/arrow.svg';
import { colors, responsive } from '../styles';

const slideRight = keyframes`
  0% {
    background-position-x: 0%;
  }
  33% {
    background-position-x: 223%;
  }
  100% {
    background-position-x: 223%;
  }
`;

const StyledData = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 0;
  margin-bottom: 4rem;
  @media screen and (${responsive.sm.max}) {
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const StyledCard = styled.div`
  background: rgb(${colors.white});
  padding: 2.5rem;
  padding-left: 3rem;
  margin: 2rem;
  border-radius: 2px;
  width: 25%;
  box-shadow: 0 9px 18px 0 rgba(0, 0, 0, 0.07);
  border: 1px solid rgba(${colors.black}, 0.07);
  @media screen and (${responsive.md.max}) {
    padding: 1.5rem;
  }
  @media screen and (${responsive.sm.max}) {
    width: 100%;
    &:first-child {
      margin-bottom: 10rem;
    }
    &:nth-child(2) {
      margin-top: 10rem;
    }
  }
  & p:first-child {
    font-weight: 600;
  }
  & p:nth-child(2) {
    opacity: 0.7;
  }
  & button {
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    display: block;
    color: inherit;
    margin-top: 2.5rem;
    font-weight: 600;
    background: transparent;
    width: fit-content;
    position: relative;
    @media screen and (${responsive.md.max}) {
      margin-top: 1.5rem;
    }
  }
  & button::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 6px;
    left: calc(100% + 12px);
    background: url(${arrow}) no-repeat;
  }
`;

const StyledDataTransfer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDataDots = styled.div`
  width: 25%;
  height: 100%;
  background: ${({ img }) => `url(${img}) repeat-x center`};
  background-position-x: 0%;
  animation: ${slideRight} 3s ease 0s infinite;
  @media screen and (${responsive.md.max}) {
    transform: rotate(180deg);
  }
  @media screen and (${responsive.sm.max}) {
    height: 100vw;
    &:first-child {
      transform: translate3d(50%, -60px, 0) rotate(-90deg);
    }
    &:nth-child(2) {
      transform: translate3d(-50%, 60px, 0) rotate(-90deg);
    }
  }
`;

const Project = () => (
  <Section id="project">
    <ContentRow>
      <Title>
        Ocean protocol <br />unlocks data
      </Title>

      <StyledData width={1}>
        <StyledCard>
          <p>Data Owners</p>
          <p>Unlock your data and earn through the Ocean protocol</p>
          <a href="">
            <button>SELL DATA</button>
          </a>
        </StyledCard>
        <StyledDataTransfer>
          <StyledDataDots img={dataDotsLeft} />
          <StyledDataDots img={dataDotsRight} />
          <Pulse />
        </StyledDataTransfer>
        <StyledCard>
          <p>Data Customers</p>
          <p>Buy data to power  your algorithms</p>
          <a href="">
            <button>BUY DATA</button>
          </a>
        </StyledCard>
      </StyledData>
      <Grid center wrap>
        <Cell width={1 / 3}>
          <SubTitle>WHY OCEAN PROTOCOL</SubTitle>
          <Paragraph>
            Ocean Protocol is a decentralized data sharing protocol that makes data available for everyone with privacy,
            security, control, transparency and compliance.
          </Paragraph>
        </Cell>
        <Cell width={1 / 3}>
          <div />
        </Cell>
        <Cell width={1 / 3}>
          <SubTitle>HOW OCEAN WORKS</SubTitle>
          <Paragraph>
            Ocean Protocol helps marketplaces to connect data providers and data consumers and allows developers to
            build services on top.
          </Paragraph>
        </Cell>
      </Grid>
    </ContentRow>
  </Section>
);

export default Project;
