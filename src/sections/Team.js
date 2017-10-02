import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import ContentRow from '../components/ContentRow';
import Button from '../components/Button';
import bigchainDBLogo from '../assets/logos/bigchain-db.svg';
import dexLogo from '../assets/logos/dex.svg';
import IPDBLogo from '../assets/logos/ipdb.svg';
import buttonLinkedIn from '../assets/buttons/linkedin.svg';
import buttonTwitter from '../assets/buttons/twitter.svg';
import buttonGithub from '../assets/buttons/github.svg';
import triangle from '../assets/misc/triangle.svg';
import teamImg from '../assets/team';
import team from '../data/team.json';
import { colors, fonts, responsive, layout, transitions } from '../styles';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled(Title)`margin-bottom: 2rem;`;

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
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const StyledTeam = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: -${layout.pageFrame};
`;

const StyledMember = styled.div`
  position: relative;
  margin-left: ${layout.pageFrame};
  margin-bottom: ${layout.pageFrame};
  width: calc(100% / 4);

  @media screen and (${responsive.sm.min}) {
    width: calc(100% / 8);
  }

  @media screen and (${responsive.md.min}) {
    width: calc(100% / 10);
  }

  &:hover > div {
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }

  & > img {
    margin: 0;
    border-radius: 50%;
    max-width: 100%;
    height: auto;
    filter: grayscale(100%);
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
  z-index: 5;
  background: rgb(${colors.white});
  color: rgb(${colors.dark});
  box-shadow: 2px 2px 27px 2px rgba(0, 0, 0, 0.11), 2px 2px 5px 2px rgba(0, 0, 0, 0.39);
  @media screen and (${responsive.sm.max}) {
    left: ${({ idx }) => {
      if (idx === 0 || idx % 3 === 0) {
        return 'calc(-150px + 50% + 25vw + 1rem)';
      } else if ((idx + 1) % 3 === 0) {
        return 'calc(-150px + 50% - 25vw - 1rem)';
      } else {
        return 'calc(-150px + 50%)';
      }
    }};
  }
`;

const StyledProfileWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
  & > img {
    position: absolute;
    width: 20px;
    bottom: -14px;
    z-index: -1;
    left: calc(50% - (20px / 2));
    @media screen and (${responsive.sm.max}) {
      left: ${({ idx }) => {
        if (idx === 0 || idx % 3 === 0) {
          return 'calc(50% - (20px / 2) - 25vw - 1rem)';
        } else if ((idx + 1) % 3 === 0) {
          return 'calc(50% - (20px / 2) + 25vw + 1rem)';
        } else {
          return 'calc(50% - (20px / 2))';
        }
      }};
    }
  }
`;

const StyledName = styled.h3`
  font-size: ${fonts.size.base};
  margin-top: 0;
  margin-bottom: 0.05rem;
  color: rgb(${colors.dark});
`;

const StyledRole = styled.h4`
  font-size: ${fonts.size.small};
  margin: 0;
  color: rgb(${colors.dark});
  opacity: 0.5;
`;

const StyledBio = styled.p`
  font-size: ${fonts.size.small};
  line-height: ${fonts.lineHeight.title};
  color: rgb(${colors.dark});
`;

const StyledLinks = styled.div`
  display: flex;
  margin-top: 1rem;

  &:empty {
    display: none;
  }
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
  margin: 4rem 0 0 0;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const StyledCompanyLogo = styled.a`
  display: inline-block;
  margin: 0 1rem;
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
  @media screen and (${responsive.sm.max}) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  background: rgb(${colors.white});
  color: rgb(${colors.dark});
  border-radius: 2px;
  text-transform: uppercase;
  padding: 1rem 2rem;
  margin: 1rem;
  font-family: ${fonts.family.base};
  font-weight: ${fonts.fontWeight.base};
  box-shadow: 2px 2px 30px 4px rgba(0, 0, 0, 0.5);
  @media screen and (${responsive.sm.max}) {
    width: 100%;
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const Team = ({ toggleModal, ...props }) => (
  <Section id="team" background={colors.black} fontColor={colors.white} minHeight={900} shadow>
    <StyledWrapper>
      <ContentRow>
        <StyledTitle white>The People Building Ocean Protocol</StyledTitle>
      </ContentRow>

      <ContentRow narrow>
        <StyledParagraph>
          The Ocean Protocol team combines a deep background in big data, blockchain, artificial intelligence and data exchanges, with real-world business experience as entrepreneurs, designers and technologists who have started over 20
          companies.
        </StyledParagraph>
      </ContentRow>

      <ContentRow>
        <StyledLine />
        <StyledTeam>
          {team.map((member, idx) => (
            <StyledMember key={member.name}>
              <img src={teamImg[member.image]} alt={member.name} />
              <StyledProfile idx={idx}>
                <StyledProfileWrapper idx={idx}>
                  <StyledName>{member.name}</StyledName>
                  <StyledRole>{member.role}</StyledRole>
                  {!!member.bio && <StyledBio>{member.bio}</StyledBio>}
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
                  <img src={triangle} alt="triangle" />
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
          <StyledButton onClick={() => toggleModal('contribute')}>Join the community</StyledButton>
        </StyledActions>
      </ContentRow>
    </StyledWrapper>
  </Section>
);

Team.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default Team;
