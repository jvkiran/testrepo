import React, { PureComponent } from 'react'
import Section from '../../components/Section'
import ContentRow from '../../components/ContentRow'
import eventsData from '../../data/events'
import { colors } from '../../styles'
import { StyledTitle, StyledParagraph, JellyfishBack } from './index.css'

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
                fontColor={colors.white}
                id="events"
            >
                <ContentRow narrow>
                    <StyledTitle white>Events</StyledTitle>
                    <StyledParagraph>
                        Meet members of our team at any of the following events.
                    </StyledParagraph>
                </ContentRow>

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
                <JellyfishBack />
            </Section>
        )
    }
}
