import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Cross } from '../../assets/misc/cross.svg'
import {
    ArchiveButton,
    ModalOverlay,
    Modal,
    StyledClose,
    ArchiveTitle,
    OverflowDiv,
    PastListing
} from './Archive.css'

import EventDate from './EventDate'

function pastEvents(events) {
    if (events.length > 0) {
        const collator = new Intl.Collator('en', {
            numeric: true,
            sensitivity: 'base'
        })

        const eventsFilteredSorted = events
            .filter(event => {
                const now = new Date()
                const past = now.setDate(now.getDate() - 3)
                const eventDate = new Date(event.date)
                return eventDate <= past
            })
            .sort((a, b) => collator.compare(b.date, a.date))

        return eventsFilteredSorted.map((event, index) => (
            <PastEvent event={event} key={index} />
        ))
    } else {
        return []
    }
}

const PastEvent = ({ event }) => (
    <PastListing href={event.link} target="_blank" rel="noopener">
        <p className="date">
            <EventDate date={event.date} dateEnd={event.date_end} />
        </p>
        <p className="city">{event.city}</p>
        <p className="event">{event.eventName}</p>
    </PastListing>
)

PastEvent.propTypes = {
    event: PropTypes.object.isRequired
}

class ArchiveModal extends PureComponent {
    static propTypes = {
        events: PropTypes.array.isRequired,
        closeModal: PropTypes.func.isRequired
    }

    state = { past: null }

    componentDidMount() {
        const past = pastEvents(this.props.events)
        this.setState({ past })
    }

    render() {
        return (
            <ModalOverlay>
                <Modal>
                    <StyledClose
                        title="close"
                        onClick={() => this.props.closeModal()}
                    >
                        <Cross />
                    </StyledClose>
                    <ArchiveTitle>Events Archive</ArchiveTitle>
                    <OverflowDiv>{this.state.past}</OverflowDiv>
                </Modal>
            </ModalOverlay>
        )
    }
}

export default class Archive extends PureComponent {
    static propTypes = {
        events: PropTypes.array.isRequired,
        openModal: PropTypes.func.isRequired,
        closeModal: PropTypes.func.isRequired,
        modalIsOpen: PropTypes.bool.isRequired
    }

    render() {
        const { openModal, closeModal, events } = this.props

        return (
            <>
                <ArchiveButton onClick={() => openModal()}>
                    View Events Archive
                </ArchiveButton>
                {this.props.modalIsOpen && (
                    <ArchiveModal closeModal={closeModal} events={events} />
                )}
            </>
        )
    }
}
