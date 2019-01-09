import React, { PureComponent } from 'react'
import Section from '../components/Section'
import Grid from '../components/Grid'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import SubTitle from '../components/SubTitle'
import Paragraph from '../components/Paragraph'
import Modal from '../components/Modal'
import Button from '../components/Button'
import ModalForm from '../components/Form/FormModal'
import forms from '../data/forms'

import buttonMedium from '../assets/buttons/medium.svg'
import buttonTwitter from '../assets/buttons/twitter.svg'
import buttonTelegram from '../assets/buttons/telegram.svg'
import buttonSlack from '../assets/buttons/slack.svg'
import buttonGithub from '../assets/buttons/github.svg'
import buttonLinkedin from '../assets/buttons/linkedin.svg'
import buttonYoutube from '../assets/buttons/youtube.svg'
import buttonReddit from '../assets/buttons/reddit.svg'
import buttonGitter from '../assets/buttons/gitter.svg'
import { colors } from '../styles'
import { meta, company, social } from '../constants'
import {
    StyledSubTitle,
    StyledActions,
    StyledCopyright,
    StyledSocialLinks,
    StyledContact,
    StyledFormNewsletter
} from './Footer.css'

export default class Footer extends PureComponent {
    state = {
        showModal: false,
        modal: ''
    }

    toggleModal = modal => {
        this.setState({
            modal,
            showModal: !this.state.showModal
        })
    }

    handleButtonClick = () => {
        this.toggleModal('contact')
    }

    render() {
        return (
            <Section
                background={colors.grey}
                fontColor={colors.white}
                id="footer"
            >
                <ContentRow>
                    <Grid>
                        <Cell width={1 / 2}>
                            <SubTitle left white>
                                Get Involved
                            </SubTitle>

                            <StyledSubTitle left>Newsletter</StyledSubTitle>
                            <StyledFormNewsletter maxWidth={28} />

                            <StyledSubTitle left>Follow</StyledSubTitle>
                            <StyledActions>
                                <StyledSocialLinks>
                                    <a href={social.medium} title="Blog">
                                        <img alt="Medium" src={buttonMedium} />
                                    </a>
                                    <a href={social.twitter} title="Twitter">
                                        <img
                                            alt="Twitter"
                                            src={buttonTwitter}
                                        />
                                    </a>
                                    <a
                                        href={social.telegram_news}
                                        title="Telegram News Channel"
                                    >
                                        <img
                                            alt="Telegram"
                                            src={buttonTelegram}
                                        />
                                    </a>
                                    <a
                                        href={social.telegram}
                                        title="Telegram Group Chat"
                                    >
                                        <img
                                            alt="Telegram"
                                            src={buttonTelegram}
                                        />
                                    </a>
                                    <a href={social.slack} title="Slack">
                                        <img alt="Slack" src={buttonSlack} />
                                    </a>
                                    <a href={social.github} title="GitHub">
                                        <img alt="GitHub" src={buttonGithub} />
                                    </a>
                                    <a href={social.gitter} title="Gitter">
                                        <img alt="Gitter" src={buttonGitter} />
                                    </a>
                                    <a href={social.reddit} title="Reddit">
                                        <img alt="Reddit" src={buttonReddit} />
                                    </a>
                                    <a href={social.youtube} title="YouTube">
                                        <img
                                            alt="YouTube"
                                            src={buttonYoutube}
                                        />
                                    </a>
                                    <a href={social.linkedin} title="LinkedIn">
                                        <img
                                            alt="LinkedIn"
                                            src={buttonLinkedin}
                                        />
                                    </a>
                                </StyledSocialLinks>
                            </StyledActions>
                        </Cell>
                        <Cell width={1 / 2}>
                            <SubTitle left white>
                                {company.name}
                            </SubTitle>
                            <Paragraph>
                                Ocean Protocol is supported by a Singapore based
                                non-profit foundation, whose mandate is to
                                ensure open access to the protocol and platform,
                                provide data governance, encourage the network
                                ecosystem growth and take measures to ensure
                                that the platform becomes ever more
                                decentralized with time.
                            </Paragraph>

                            <StyledContact>
                                <a href="https://oceanprotocol.com">
                                    oceanprotocol.com
                                </a>
                                <Button
                                    small
                                    black
                                    onClick={this.handleButtonClick}
                                >
                                    Get In Touch
                                </Button>

                                <Grid>
                                    {Object.values(company.address).map(
                                        office => (
                                            <Cell
                                                key={office.location}
                                                smallGutter
                                                width={1 / 2}
                                            >
                                                <StyledSubTitle right>
                                                    {office.city} office
                                                </StyledSubTitle>
                                                <div className="address">
                                                    {office.location}
                                                    <br />
                                                    {office.street}
                                                    <br />
                                                    {office.street_additional}
                                                    <br />
                                                    {office.city}, {office.zip}
                                                    <br />
                                                    {office.country}
                                                </div>
                                            </Cell>
                                        )
                                    )}
                                </Grid>
                            </StyledContact>
                        </Cell>
                    </Grid>
                </ContentRow>

                <ContentRow>
                    <StyledCopyright>
                        <small>
                            &copy; {new Date().getFullYear()}{' '}
                            <a href={meta.url}>{company.name}</a> &mdash; All
                            Rights Reserved
                        </small>
                    </StyledCopyright>
                </ContentRow>

                {this.state.showModal && (
                    <Modal
                        title={forms[this.state.modal].title}
                        description={forms[this.state.modal].description}
                        toggle={this.toggleModal}
                    >
                        <ModalForm modal={this.state.modal} />
                    </Modal>
                )}
            </Section>
        )
    }
}
