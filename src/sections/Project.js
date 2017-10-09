/* global ga */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Section from '../components/Section';
import Grid from '../components/Grid';
import ContentRow from '../components/ContentRow';
import Pulse from '../components/Pulse';
import Cell from '../components/Cell';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import dataDotsLeft from '../assets/graphics/data-dots-left.svg';
import dataDotsRight from '../assets/graphics/data-dots-right.svg';
import arrow from '../assets/misc/arrow.svg';
import { colors, responsive, transitions } from '../styles';

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
  margin: 2rem;
  border-radius: 2px;
  width: 30%;
  box-shadow: 0 9px 18px 0 rgba(0, 0, 0, 0.07);
  border: 1px solid rgba(${colors.black}, 0.07);
  transition: ${transitions.base};
  color: rgb(${colors.grey});
  display: block;
  padding: 2.5rem;
  cursor: pointer;
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
  &:hover,
  &:focus {
    transform: translate3d(0, -0.05rem, 0);
    box-shadow: 0 12px 30px 0 rgba(0, 0, 0, 0.07);
  }
  &:active {
    box-shadow: 0 9px 18px 0 rgba(0, 0, 0, 0.07);
    transform: none;
    transition: none;
  }
  h4 {
    margin-top: 0;
    margin-bottom: 1.5rem;
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
    text-transform: uppercase;
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
    top: 4px;
    left: calc(100% + 10px);
    background: url(${arrow}) no-repeat;
  }
  &:first-child {
    button {
      color: rgb(${colors.purple});
    }
  }
  &:last-child {
    button {
      color: rgb(${colors.softPink});
    }
  }
`;

const StyledDataTransfer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
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

const Project = ({ toggleModal, ...props }) => {
  const _toggleModal = modal => {
    if (modal === 'consumer') {
      ga('send', 'event', 'consumer', 'click', 'intro_card', true);
    } else if (modal === 'provider') {
      ga('send', 'event', 'provider', 'click', 'intro_card', true);
    }
    toggleModal(modal);
  };
  return (
    <Section id="project" {...props}>
      <ContentRow>
        <Title>
          Ocean Protocol <br />unlocks data
        </Title>

        <StyledData width={1}>
          <StyledCard onClick={() => _toggleModal('provider')}>
            <h4>Data Providers</h4>
            <p>Unlock your data and earn revenue.</p>
            <button>Publish data</button>
          </StyledCard>
          <StyledDataTransfer>
            <StyledDataDots img={dataDotsLeft} />
            <StyledDataDots img={dataDotsRight} />
            <Pulse />
          </StyledDataTransfer>
          <StyledCard onClick={() => _toggleModal('consumer')}>
            <h4>Data Consumers</h4>
            <p>Discover and buy data.</p>
            <button>Get data</button>
          </StyledCard>
        </StyledData>
        <Grid wrap>
          <Cell width={2 / 5}>
            <h4>What is Ocean Protocol?</h4>
            <Paragraph>
              Ocean Protocol is a decentralized data exchange protocol that makes data available for everyone with privacy, security, control, transparency and compliance.
            </Paragraph>
          </Cell>
          <Cell width={1 / 5}>
            <div />
          </Cell>
          <Cell width={2 / 5}>
            <h4>How Ocean Protocol Works</h4>
            <Paragraph>
              Ocean Protocol helps marketplaces to connect data providers and data consumers and allows developers to
              build services on top.
            </Paragraph>
          </Cell>
        </Grid>
      </ContentRow>
    </Section>
  );
};

Project.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default Project;
