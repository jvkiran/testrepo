import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'
import LazyLoad from 'react-lazyload'
import Section from '../components/Section'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import ContentRow from '../components/ContentRow'
import Button from '../components/Button'
import bigchainDBLogo from '../assets/logos/bigchain-db.svg'
import dexLogo from '../assets/logos/dex.svg'
import buttonLinkedIn from '../assets/buttons/linkedin.svg'
import buttonTwitter from '../assets/buttons/twitter.svg'
import buttonGithub from '../assets/buttons/github.svg'
import teamImg from '../assets/team'
import team from '../data/team'
import { colors, fonts, responsive, transitions } from '../styles'

const StyledTitle = styled(Title)`
    margin-bottom: 2rem;
`

const StyledParagraph = styled(Paragraph)`
    margin-bottom: 0;
    text-align: center;
`

const StyledLine = styled.div`
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid rgba(${colors.white}, .25);

    @media screen and (${responsive.sm.max}) {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`

const StyledTeam = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: -2rem;

    .Collapsible {
        margin-left: 2rem;
        position: relative;
    }

    .Collapsible__trigger {
        cursor: pointer;
        transition: ${transitions.base};
        display: block;
        font-family: ${fonts.family.title};
        font-weight: ${fonts.fontWeight.title};
        line-height: ${fonts.lineHeight.title};
        font-size: ${fonts.size.large};
        padding-bottom: 1.5rem;
        margin-bottom: 1.5rem;
        text-align: center;
        color: rgb(${colors.lightGrey});

        &:hover,
        &:focus {
            color: rgb(${colors.pink});
        }

        &:before {
            content: '+';
            font-size: 2.25rem;
            line-height: 0;
            vertical-align: middle;
            margin-right: .5rem;
            color: rgb(${colors.pink});
            font-weight: ${fonts.fontWeight.base};
            font-family: ${fonts.family.base};
            position: relative;
        }

        &.is-open:before {
            content: '-';
            top: -.25rem;
        }
    }

    .Collapsible__contentInner {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-left: -2rem;
    }
`

const StyledMember = styled.div`
    position: relative;
    margin-left: 2rem;
    margin-bottom: 2rem;
    width: calc(100% / 2 - 3rem);

    @media screen and (${responsive.xs.min}) {
        width: calc(100% / 3 - 3rem);
    }

    @media screen and (${responsive.md.min}) {
        width: calc(100% / 4 - 3rem);
    }

    @media screen and (${responsive.lg.min}) {
        width: calc(100% / 5 - 3rem);
    }

    & > img {
        margin: 0;
        border-radius: 50%;
        max-width: 100%;
        height: auto;
        filter: grayscale(100%);
        min-height: 141px;
        background: rgb(${colors.lightGrey});
    }
`

const StyledName = styled.h3`
    font-size: ${fonts.size.base};
    color: rgb(${colors.white});
    text-align: center;
    margin-top: .75rem;
    margin-bottom: .35rem;
`

const StyledLinks = styled.div`
    text-align: center;

    &:empty {
        display: none;
    }
`

const StyledIcon = styled.a`
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 2px;
    display: inline-block;
    margin-left: .25rem;
    margin-right: .25rem;
    opacity: .5;

    &:hover,
    &:focus {
        opacity: 1;
    }

    & img {
        width: 100%;
        height: 100%;
    }
`

const StyledCompanies = styled.div`
    margin: 4rem 0 0 0;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const StyledCompanyLogo = styled.a`
    display: inline-block;
    margin: 0 2rem;

    img {
        height: 2rem;

        @media screen and (${responsive.sm.max}) {
            height: 1rem;
        }
    }
`

const StyledActions = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (${responsive.sm.max}) {
        flex-direction: column;
    }
`

const StyledButton = styled(Button)`
    background: rgb(${colors.white});
    color: rgb(${colors.dark});
    border-radius: 2px;
    text-transform: uppercase;
    padding: 1rem 2rem;
    margin: 1rem;
    font-family: ${fonts.family.button};
    box-shadow: 2px 2px 30px 4px rgba(0, 0, 0, .5);

    &:active,
    &:hover,
    &:focus {
        background: rgb(${colors.white});
    }

    @media screen and (${responsive.sm.max}) {
        width: 100%;
        margin: 0;
        margin-bottom: 1rem;
    }
`

const TeamMember = ({ member }) => (
    <StyledMember>
        <LazyLoad once height={110} offset={100}>
            <img alt={member.name} src={teamImg[member.image]} />
        </LazyLoad>
        <StyledName>{member.name}</StyledName>
        <StyledLinks>
            {!!member.linkedin && (
                <StyledIcon
                    href={`https://www.linkedin.com/in/${member.linkedin}`}
                    rel="noopener noreferrer"
                    target="_blank">
                    <img alt="linkedin" src={buttonLinkedIn} />
                </StyledIcon>
            )}
            {!!member.github && (
                <StyledIcon
                    href={`https://www.github.com/${member.github}`}
                    rel="noopener noreferrer"
                    target="_blank">
                    <img alt="github" src={buttonGithub} />
                </StyledIcon>
            )}
            {!!member.twitter && (
                <StyledIcon
                    href={`https://www.twitter.com/${member.twitter}`}
                    rel="noopener noreferrer"
                    target="_blank">
                    <img alt="twitter" src={buttonTwitter} />
                </StyledIcon>
            )}
        </StyledLinks>
    </StyledMember>
)

TeamMember.propTypes = {
    member: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
}

const Team = ({ toggleModal }) => (
    <Section background={colors.black} fontColor={colors.white} id="team">
        <ContentRow>
            <StyledTitle white>The People Building Ocean Protocol</StyledTitle>
        </ContentRow>

        <ContentRow narrow>
            <StyledParagraph>
          The Ocean Protocol team combines a deep background in big data, blockchain, artificial intelligence and data exchanges, with real-world business experience as entrepreneurs, designers and technologists who have started over 20 companies.
            </StyledParagraph>
        </ContentRow>

        <ContentRow>
            <StyledLine />
            <StyledTeam>
                {team.filter((item) => teamImg[item.image]).filter((item, index) => index < 15).map((member) => (
                    <TeamMember key={member.name} member={member} />
                ))}
                {team.filter((item) => teamImg[item.image]).length >= 15 &&
                <Collapsible easing="ease-out" transitionTime={200} trigger="See the entire team">
                    {team.filter((item) => teamImg[item.image]).filter((item, index) => index >= 15).map((member) => (
                        <TeamMember key={member.name} member={member} />
                    ))}
                </Collapsible>
                }
            </StyledTeam>
        </ContentRow>

        <ContentRow narrow>
            <StyledCompanies>
                <StyledCompanyLogo
                    href="https://www.bigchaindb.com/?utm_source=oceanprotocol&utm_medium=logo"
            rel="noopener" // eslint-disable-line
                    target="_blank">
                    <img alt="BigchainDB" src={bigchainDBLogo} />
                </StyledCompanyLogo>
                <StyledCompanyLogo
                    href="https://www.dex.sg/?utm_source=oceanprotocol&utm_medium=logo"
            rel="noopener" // eslint-disable-line
                    target="_blank">
                    <img alt="Dex" src={dexLogo} />
                </StyledCompanyLogo>
            </StyledCompanies>
        </ContentRow>

        <ContentRow>
            <StyledLine />

            <StyledActions>
                <StyledButton onClick={() => toggleModal('contributor')}>Join as a contributor</StyledButton>
            </StyledActions>
        </ContentRow>
    </Section>
)

Team.propTypes = {
    toggleModal: PropTypes.func.isRequired
}

export default Team
