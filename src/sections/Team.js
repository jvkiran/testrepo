import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import bigchainDBLogo from '../assets/logos/bigchain-db.svg';
import dexLogo from '../assets/logos/dex.svg';
import IPDBLogo from '../assets/logos/ipdb.svg';
import buttonLinkedIn from '../assets/buttons/linkedin.svg';
import buttonTwitter from '../assets/buttons/twitter.svg';
import arrow from '../assets/misc/arrow.svg';
import teamImg from '../assets/team';
import team from '../data/team.json';
import { colors, responsive, transitions } from '../styles';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledLine = styled.div`
  width: 100%;
  margin: 4rem 0;
  border-bottom: 1px solid rgba(${colors.white}, 0.25);
  @media screen and (${responsive.sm.max}) {
    margin: 2rem 0;
  }
`;

const StyledTeam = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const StyledMember = styled.div`
  position: relative;
  margin: 0.5rem 0;
  width: calc(100% / 10);
  &:hover > div {
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }
  & > img {
    box-shadow: 2px 2px 27px 2px rgba(0, 0, 0, 0.11), 2px 2px 5px 2px rgba(0, 0, 0, 0.39);
    border-radius: 2px;
    width: 5.5rem;
    height: 5.5rem;
  }
  @media screen and (${responsive.lg.max}) {
    width: calc(100% / 6);
  }
  @media screen and (${responsive.sm.max}) {
    width: calc(100% / 5);
  }
  @media screen and (${responsive.xs.max}) {
    width: calc(100% / 3);
  }
`;

const StyledProfile = styled.div`
  transition: ${transitions.base};
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  width: 300px;
  left: calc(-150px + 50%);
  bottom: 115%;
  position: absolute;
  z-index: 0;
  background: rgb(${colors.white});
  color: rgb(${colors.dark});
  box-shadow: 2px 2px 27px 2px rgba(0, 0, 0, 0.11), 2px 2px 5px 2px rgba(0, 0, 0, 0.39);
`;

const StyledProfileWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 15px;
  & > img {
    position: absolute;
    width: 20px;
    bottom: -14px;
    z-index: -1;
    left: calc(50% - (20px / 2));
  }
`;

const StyledName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.6;
  text-align: left;
  margin: 0;
  color: rgb(${colors.dark});
`;

const StyledBio = styled.p`
  font-size: 0.75rem;
  line-height: 2;
  text-align: left;
  color: rgb(${colors.dark});
`;

const StyledLinks = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const StyledIcon = styled.a`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  margin-right: 15px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const StyledCompanies = styled.div`
  margin-top: 4rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  @media screen and (${responsive.sm.max}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const StyledCompanyLogo = styled.a`
  display: inline-block;
  margin-right: 2rem;
  img {
    height: 2rem;

    @media screen and (${responsive.sm.max}) {
      height: 1rem;
    }
  }
`;

const StyledActions = styled.div`display: flex;`;

const StyledButton = styled.button`
  background: rgb(${colors.white});
  color: rgb(${colors.dark});
  border-radius: 2px;
  text-transform: uppercase;
  padding: 15px 30px;
  margin: 15px;
  box-shadow: 2px 2px 30px 4px rgba(0, 0, 0, 0.5);
`;

const Team = () => (
  <Section id="Team" background={colors.darkGrey} fontColor={colors.white} minHeight={900} shadow>
    <StyledWrapper>
      <Title>The People Building The Ocean Protocol</Title>
      <StyledLine />
      <Paragraph>
        The Ocean team combines a deep background in big data, blockchain, artificial intelligence and data exchanges,
        with real-world business experience as entrepreneurs, designers and technologists who have started over 20
        companies.
      </Paragraph>
      <StyledTeam>
        {team.map(member => (
          <StyledMember key={member.name}>
            <img src={teamImg[member.image]} alt={member.name} />
            <StyledProfile>
              <StyledProfileWrapper>
                <StyledName>{member.name}</StyledName>
                <StyledBio>{member.bio}</StyledBio>
                <StyledLinks>
                  {!!member.linkedin && (
                    <StyledIcon
                      href={`https://www.linkedin.com/in/${member.linkedin}`}
                      target="_blank" //eslint-disable-line
                      rel="noopener"
                    >
                      <img src={buttonLinkedIn} alt="linkedin" />
                    </StyledIcon>
                  )}
                  {!!member.twitter && (
                    <StyledIcon
                      href={`https://www.twitter.com/${member.twitter}`}
                      target="_blank" //eslint-disable-line
                      rel="noopener"
                    >
                      <img src={buttonTwitter} alt="twitter" />
                    </StyledIcon>
                  )}
                </StyledLinks>
                <img src={arrow} alt="arrow" />
              </StyledProfileWrapper>
            </StyledProfile>
          </StyledMember>
        ))}
      </StyledTeam>
      <StyledCompanies>
        <StyledCompanyLogo
          href="https://www.bigchaindb.com/"
          target="_blank" // eslint-disable-line
          rel="noopener"
        >
          <img src={bigchainDBLogo} alt="BigchainDB" />
        </StyledCompanyLogo>
        <StyledCompanyLogo
          href="https://www.dex.sg/"
          target="_blank" // eslint-disable-line
          rel="noopener"
        >
          <img src={dexLogo} alt="Dex" />
        </StyledCompanyLogo>
        <StyledCompanyLogo
          href="https://ipdb.foundation/"
          target="_blank" // eslint-disable-line
          rel="noopener"
        >
          <img src={IPDBLogo} alt="IPDB" />
        </StyledCompanyLogo>
      </StyledCompanies>
      <StyledLine />
      <StyledActions>
        <a
          href=""
          target="_blank" // eslint-disable-line
          rel="noopener"
        >
          <StyledButton>I have data</StyledButton>
        </a>
        <a
          href=""
          target="_blank" // eslint-disable-line
          rel="noopener"
        >
          <StyledButton>Join the community</StyledButton>
        </a>
        <a
          href=""
          target="_blank" // eslint-disable-line
          rel="noopener"
        >
          <StyledButton>I want data</StyledButton>
        </a>
      </StyledActions>
    </StyledWrapper>
  </Section>
);

export default Team;
