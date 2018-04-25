import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import Paragraph from '../components/Paragraph'
import ContentRow from '../components/ContentRow'
import Button from '../components/Button'
import Team from '../components/Team'
import Advisors from '../components/Advisors'
import bigchainDBLogo from '../assets/logos/bigchain-db.svg'
import dexLogo from '../assets/logos/dex.svg'

import { colors, fonts, responsive } from '../styles'

const StyledTitle = styled(Title)`
    margin-bottom: 2rem;
`

const StyledSubTitle = styled(SubTitle)`
    padding-bottom: 2rem;
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

const People = ({ toggleModal }) => (
    <Section background={colors.black} fontColor={colors.white} id="people">
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
            <StyledSubTitle center white>Core team</StyledSubTitle>
            <Team />
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
            <StyledSubTitle center white>Advisors</StyledSubTitle>
            <Advisors />
        </ContentRow>

        <ContentRow>
            <StyledLine />

            <StyledActions>
                <StyledButton onClick={() => toggleModal('contributor')}>Join as a contributor</StyledButton>
            </StyledActions>
        </ContentRow>
    </Section>
)

People.propTypes = {
    toggleModal: PropTypes.func.isRequired
}

export default People
