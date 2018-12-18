import React, { PureComponent } from 'react'
import Section from '../../components/Section'
import SectionHeader from '../../components/SectionHeader'
import eventsData from '../../data/events'
import { colors } from '../../styles'
import jellyfish from '@oceanprotocol/art/jellyfish/jellyfish-back.svg'

import EventsList from './EventsList'
import Archive from './Archive'

export default class Events extends PureComponent {
    state = {
        modalIsOpen: false
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false })
        document.getElementsByTagName('html')[0].style.overflow = 'auto'
    }

    openModal = () => {
        this.setState({ modalIsOpen: true })
        document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    }

    render() {
        return (
            <Section
                background={colors.black}
                backgroundImage={jellyfish}
                fontColor={colors.white}
                id="events"
                style={{ backgroundSize: '100%' }}
            >
                <SectionHeader
                    title={'Events'}
                    description={
                        'Meet members of our team at any of the following events.'
                    }
                    white
                />

                <EventsList
                    events={eventsData}
                    modalIsOpen={this.state.modalIsOpen}
                    openModal={this.openModal}
                    closeModal={this.closeModal}
                />

                <Archive
                    events={eventsData}
                    modalIsOpen={this.state.modalIsOpen}
                    openModal={this.openModal}
                    closeModal={this.closeModal}
                />
            </Section>
        )
    }
}
