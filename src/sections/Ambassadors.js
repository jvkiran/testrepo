/* global ga */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Section from '../components/Section'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import Grid from '../components/Grid'
import Paragraph from '../components/Paragraph'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import Modal from '../sections/Modal/Modal'
import { ReactComponent as Check } from '../assets/misc/check.svg'
import { StyledList, StyledActions } from './Ambassadors.css'
import { colors } from '../styles'
import OceanMantarayBack from '@oceanprotocol/art/mantaray/mantaray-back.svg'

const content = {
    title: 'Become an Ambassador',
    description:
        'Be a part of the inner circle of Ocean and have a direct impact on shaping our global community.',
    text:
        'The <strong>Ocean Protocol Ambassador Program</strong> is a grassroots project to involve our incredible community of thinkers, learners, and problem-solvers into the very core of our ecosystem. It is a chance for passionate individuals to be on the frontlines of the data revolution.\n\nWe are excited to bring onboard motivated, curious, and interesting people based all around the world, who are passionate about decentralization, challenging the status quo, and equalizing access to data for all. \n\nThere are a wide range of ways to get involved once you become an Ambassador, and plenty of great reasons to apply.',
    list: [
        'Be a part of the inner circle of Ocean',
        'Direct impact on shaping our global community',
        'Gain valuable new skills and experiences',
        'Exclusive webinars and video calls with the Ocean team',
        'Exclusive Telegram Group & chance to be featured on our blog',
        'First to know about opportunities to earn Ocean tokens',
        'Plenty of Ocean swag!'
    ],
    button: 'Apply to become an ambassador',
    links: [
        {
            name: 'Announcing the Ocean Protocol Ambassador Program.',
            link:
                'https://blog.oceanprotocol.com/envoys-of-the-new-data-economy-ocean-protocol-ambassadors-3816a0e63611'
        }
    ]
}

const Actions = ({ handleButtonClick }) => (
    <StyledActions>
        <Button onClick={handleButtonClick}>{content.button}</Button>
        {content.links.map(link => (
            <a href={link.link} key={link.name}>
                {link.name}
            </a>
        ))}
    </StyledActions>
)

Actions.propTypes = {
    handleButtonClick: PropTypes.func.isRequired
}

const List = () => (
    <StyledList>
        {content.list.map((item, index) => (
            <li key={index}>
                <Check />
                {item}
            </li>
        ))}
    </StyledList>
)

export default class Ambassadors extends PureComponent {
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
        this.toggleModal('ambassadors')

        if (window.ga) {
            ga('send', 'event', 'click', 'ambassador', 'ambassador_section')
        }
    }

    render() {
        return (
            <>
                <Section
                    background={colors.black}
                    backgroundImage={OceanMantarayBack}
                    fontColor={colors.white}
                    id="ambassadors"
                    style={{
                        backgroundSize: 'contain',
                        backgroundPosition: 'center 70vh'
                    }}
                >
                    <SectionHeader
                        title={content.title}
                        description={content.description}
                        white
                        line
                    />

                    <ContentRow>
                        <Grid>
                            <Cell width={1 / 2}>
                                <Paragraph
                                    dangerouslySetInnerHTML={{
                                        __html: content.text
                                    }}
                                />
                            </Cell>
                            <Cell width={1 / 2}>
                                <List />
                            </Cell>
                        </Grid>

                        <Actions handleButtonClick={this.handleButtonClick} />
                    </ContentRow>
                </Section>

                {this.state.showModal && (
                    <Modal modal={this.state.modal} toggle={this.toggleModal} />
                )}
            </>
        )
    }
}
