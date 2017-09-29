import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import ContentRow from '../components/ContentRow';
import bigchainDBLogo from '../assets/logos/bigchain-db.svg';
import dexLogo from '../assets/logos/dex.svg';
import IPDBLogo from '../assets/logos/ipdb.svg';
import buttonLinkedIn from '../assets/buttons/linkedin.svg';
import buttonTwitter from '../assets/buttons/twitter.svg';
import buttonGithub from '../assets/buttons/github.svg';
import arrow from '../assets/misc/arrow.svg';
import teamImg from '../assets/team';
import team from '../data/team.json';
import { colors, fonts, responsive, transitions } from '../styles';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 2rem;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 0;
  text-align: center;
`;

const StyledLine = styled.div`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid rgba(${colors.white}, 0.25);
  @media screen and (${responsive.sm.max}) {
    margin: 2rem 0;
  }
`;

const StyledTeam = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -.5rem;
  margin-right: -.5rem;
`;

const StyledMember = styled.div`
  position: relative;
  margin: .25rem .5rem;
  flex: 1 1 calc(100% / 4);

  @media screen and (${responsive.sm.min}) {
    flex: 1 1 calc(100% / 8);
  }

  &:hover > div {
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }

  & > figure {
    display: block;
    margin: 0;

    > img {
      border-radius: 2px;
      max-width: 100%;
      height: auto;
      filter: grayscale(100%);
    }
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

const StyledName = styled.h3`
  font-size: ${fonts.size.base};
  margin: 0;
  color: rgb(${colors.dark});
`;

const StyledRole = styled.h4`
  font-size: ${fonts.size.base};
  margin: 0;
  color: rgb(${colors.dark});
  opacity: .5;
`;

const StyledBio = styled.p`
  font-size: ${fonts.size.small};
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
  margin: 2rem 0;
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

const StyledActions = styled.div`
  display: flex;
  justify-content: center;
`;

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
  <Section id="team" background={colors.darkGrey} fontColor={colors.white} minHeight={900} shadow>
    <StyledWrapper>
      <ContentRow>
        <StyledTitle>The People Building The Ocean Protocol</StyledTitle>
      </ContentRow>

      <ContentRow narrow>
        <StyledParagraph>
          The Ocean team combines a deep background in big data, blockchain, artificial intelligence and data exchanges,
          with real-world business experience as entrepreneurs, designers and technologists who have started over 20
          companies.
        </StyledParagraph>
      </ContentRow>

      <ContentRow>
        <StyledLine />
        <StyledTeam>
          {team.map(member => (
            <StyledMember key={member.name}>
              <figure>
                <img src={teamImg[member.image]} alt={member.name} />
              </figure>
              <StyledProfile>
                <StyledProfileWrapper>
                  <StyledName>{member.name}</StyledName>
                  <StyledRole>{member.role}</StyledRole>
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
                    {!!member.github && (
                      <StyledIcon
                        href={`https://www.github.com/${member.github}`}
                        target="_blank" //eslint-disable-line
                        rel="noopener"
                      >
                        <img src={buttonGithub} alt="github" />
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
      </ContentRow>

      <ContentRow narrow>
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
      </ContentRow>

      <ContentRow>
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
      </ContentRow>
    </StyledWrapper>
  </Section>
);

export default Team;
