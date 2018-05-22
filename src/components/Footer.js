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
import buttonTelegram from '../assets/buttons/telegram.svg'
import buttonSlack from '../assets/buttons/slack.svg'
import buttonGithub from '../assets/buttons/github.svg'
import buttonLinkedin from '../assets/buttons/linkedin.svg'
import buttonYoutube from '../assets/buttons/youtube.svg'
import buttonReddit from '../assets/buttons/reddit.svg'
import { colors, responsive, fonts } from '../styles'
import { meta, company, social, youtube } from '../constants'

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
    justify-content: space-between;

    & a {
        margin-right: .75rem;
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
    .address {
        color: rgb(${colors.lightGrey});
        text-align: right;
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
                <Cell smallGutter width={1 / 2}>
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
                                href={social.telegram_news}
                                rel="noopener"
                                target="_blank"
                                title="Telegram News Channel">
                                <img alt="Telegram" src={buttonTelegram} />
                            </a>
                            <a
                                href={social.telegram}
                                rel="noopener"
                                target="_blank"
                                title="Telegram Group Chat">
                                <img alt="Telegram" src={buttonTelegram} />
                            </a>
                            <a
                                href={social.slack}
                                rel="noopener"
                                target="_blank"
                                title="Slack">
                                <img alt="Telegram" src={buttonSlack} />
                            </a>
                            <a
                                href={social.github}
                                rel="noopener"
                                target="_blank"
                                title="GitHub">
                                <img alt="GitHub" src={buttonGithub} />
                            </a>
                            <a
                                href={social.reddit}
                                rel="noopener"
                                target="_blank"
                                title="Reddit">
                                <img alt="Reddit" src={buttonReddit} />
                            </a>
                            <a
                                href={youtube.channel}
                                rel="noopener"
                                target="_blank"
                                title="YouTube">
                                <img alt="YouTube" src={buttonYoutube} />
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
                <Cell smallGutter width={1 / 2}>
                    <SubTitle white>{company.name}</SubTitle>
                    <Paragraph>
                        Ocean Protocol is supported by a Singapore based non-profit foundation, whose mandate is to ensure open access to the protocol and platform, provide data governance, encourage the network ecosystem growth and take measures to ensure that the platform becomes ever more decentralized with time.
                    </Paragraph>

                    <StyledContact>
                        <Grid>
                            <Cell smallGutter width={1 / 2}>
                                <a href="https://oceanprotocol.com">oceanprotocol.com</a>
                            </Cell>

                            <Cell smallGutter width={1 / 2}>
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
                <small>&copy; {(new Date().getFullYear())} <a href={meta.url}>{company.name}</a> &mdash; All Rights Reserved</small>
            </StyledCopyright>
        </ContentRow>
    </Section>
)

export default Footer
