import React from 'react'
import styled from 'styled-components'
import Section from '../components/Section'
import Grid from '../components/Grid'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import SubTitle from '../components/SubTitle'
import Paragraph from '../components/Paragraph'
import SubscribeForm from '../components/SubscribeForm'
import buttonMedium from '../assets/buttons/medium.svg'
import buttonTwitter from '../assets/buttons/twitter.svg'
import buttonSlack from '../assets/buttons/slack.svg'
import buttonTelegram from '../assets/buttons/telegram.svg'
import buttonLinkedin from '../assets/buttons/linkedin.svg'
import { colors, responsive, fonts } from '../styles'
import { company, social } from '../constants'

const StyledSubTitle = styled.h5`
    color: rgb(${colors.lightGrey});
    margin-bottom: 1rem;

    &:first-of-type {
        margin-top: 0;
    }
`

const StyledActions = styled.div`
    width: 100%;
    display: flex;
`

const StyledCopyright = styled(Paragraph)`
    opacity: .5;
    margin-top: 3rem;

    @media screen and (${responsive.sm.min}) {
        margin-bottom: -2rem;
    }

    a {
        color: inherit;
    }
`

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
`

const StyledContact = styled.div`
    text-align: right;

    .address {
        color: rgb(${colors.lightGrey});
    }

    .address__title {
        font-size: ${fonts.size.h5};
        margin-top: 0;
        color: rgb(${colors.lightGrey});
    }
`

const Footer = () => (
    <Section background={colors.grey} fontColor={colors.white} id="footer">
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
                                href={social.blog}
                                rel="noopener"
                                target="_blank"
                                title="Blog">
                                <img alt="Medium" src={buttonMedium} />
                            </a>
                            <a
                                href={social.twitter}
                                rel="noopener"
                                target="_blank"
                                title="Twitter">
                                <img alt="Twitter" src={buttonTwitter} />
                            </a>
                            <a
                                href={social.slack}
                                rel="noopener"
                                target="_blank"
                                title="Slack">
                                <img alt="Slack" src={buttonSlack} />
                            </a>
                            <a
                                href={social.telegram}
                                rel="noopener"
                                target="_blank"
                                title="Telegram">
                                <img alt="Telegram" src={buttonTelegram} />
                            </a>
                            <a
                                href={social.linkedin}
                                rel="noopener"
                                target="_blank"
                                title="LinkedIn">
                                <img alt="LinkedIn" src={buttonLinkedin} />
                            </a>
                        </StyledSocialLinks>
                    </StyledActions>
                </Cell>
                <Cell width={1 / 2}>
                    <SubTitle white>{company.name}</SubTitle>
                    <Paragraph>
            Ocean Protocol is supported by a Singapore based non-profit foundation, whose mandate is to ensure open access to the protocol and platform, provide data governance, encourage the network ecosystem growth and take measures to ensure that the platform becomes ever more decentralized with time.
                    </Paragraph>

                    <StyledContact>
                        <Grid>
                            <Cell width={1 / 2}>
                                <a href="https://oceanprotocol.com">oceanprotocol.com</a>
                            </Cell>

                            <Cell width={1 / 2}>
                                <div className="address">
                                    {company.address.singapore.location}<br />
                                    {company.address.singapore.street}<br />
                                    {company.address.singapore.street_additional}<br />
                                    {company.address.singapore.city}, {company.address.singapore.zip}<br />
                                    {company.address.singapore.country}
                                </div>
                            </Cell>
                        </Grid>
                    </StyledContact>
                </Cell>
            </Grid>
        </ContentRow>
        <ContentRow>
            <StyledCopyright>
                <small>&copy; {(new Date().getFullYear())} <a href={company.url}>{company.name}</a> &mdash; All Rights Reserved</small>
            </StyledCopyright>
        </ContentRow>
    </Section>
)

export default Footer
