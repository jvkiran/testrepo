import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Section from '../components/Section'
import Grid from '../components/Grid'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import SubTitle from '../components/SubTitle'
import Paragraph from '../components/Paragraph'
import SocialIcon from '../components/SocialIcon'

import { colors } from '../styles'
import { meta, company, socialButtons } from '../constants'
import {
    StyledSubTitle,
    StyledCopyright,
    StyledSocialLinks,
    StyledContact,
    StyledFormNewsletter
} from './Footer.css'

const SocialLink = ({ url, icon, title }) => (
    <a href={url} title={title}>
        <SocialIcon icon={icon} />
    </a>
)

SocialLink.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

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
                            <StyledSocialLinks>
                                {socialButtons.map(button => (
                                    <SocialLink
                                        key={button.url}
                                        url={button.url}
                                        icon={button.icon}
                                        title={button.title}
                                    />
                                ))}
                            </StyledSocialLinks>
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
                                <Grid>
                                    <Cell smallGutter width={1 / 2}>
                                        <a href={meta.url}>oceanprotocol.com</a>
                                    </Cell>
                                    <Cell smallGutter width={1 / 2}>
                                        <div className="address">
                                            {company.address.location}
                                            <br />
                                            {company.address.street}
                                            <br />
                                            {company.address.street_additional}
                                            <br />
                                            {company.address.city},{' '}
                                            {company.address.zip}
                                            <br />
                                            {company.address.country}
                                        </div>
                                    </Cell>
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
            </Section>
        )
    }
}
